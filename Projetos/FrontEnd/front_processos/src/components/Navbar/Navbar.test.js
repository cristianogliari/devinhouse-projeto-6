import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Navbar } from "./Navbar";


const renderComponent = () =>
  render(
    <Navbar/>
  );

  const mockProcessos = jest.fn().mockImplementation(() => {return "teste"});

  jest.mock("../../utils/context/DataContext", () => ({
    ...jest.requireActual("../../utils/context/DataContext"),
    useDataContext: () => ({
      recarregarProcessos: mockProcessos,
    }),
  }));

  describe("NavBar Component", () => {

    it("Deve renderizar o NavBar Corretamente", () => {
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
