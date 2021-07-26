import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SearchBar } from "./SearchBar";


const renderComponent = (props) =>
  render(
    <SearchBar/>
  );

  const mockProcessos = jest.fn().mockImplementation(() => {return "teste"});

  jest.mock("../../../utils/context/DataContext", () => ({
    ...jest.requireActual("../../../utils/context/DataContext"),
    useDataContext: () => ({
      recarregarProcessos: mockProcessos,
      buscarProcessosPorAssuntoID: mockProcessos,
      buscarProcessosPorNumeroProcesso: mockProcessos,
      listaAssunto: [{id: 1, descricao:"Madeira"}],
    }),
  }));

  describe("SearchBar Component", () => {

    it("Deve renderizar o SearchBar Corretamente", () => {
        renderComponent();
    
        expect(screen.getByPlaceholderText("Pesquise por um processo")).toBeInTheDocument();
    
      });
  
      it("Deve renderizar o SearchBar Condicionalmente", async () => {
        renderComponent();
    
        expect(screen.getByTitle("Mude o filtro")).toBeInTheDocument();
        userEvent.click(screen.getByTitle("Mude o filtro"))
        await waitFor(() => expect(screen.getByPlaceholderText("Pesquise por um assunto")).toBeInTheDocument());
    
      });
  
});
