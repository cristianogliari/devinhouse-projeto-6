import { render, screen, waitFor } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { ProcessoCard } from "./Card";
import { DataProvider } from "../../utils/context/DataContext";

const renderComponent = (props) =>
  render(<ProcessoCard processo={props.propsProcesso} />);

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const providerRender = (props) => {
  return render(
    <DataProvider>
      <ProcessoCard processo={props.propsProcesso} />
    </DataProvider>
  );
};

describe("Card Component", () => {
  let props = {
    propsProcesso: {
      nuano: "2000",
      descricao: "Teste",
      nuprocesso: "12345678",
      chaveprocesso: "SOFT/2000",
      sgorgaosetor: "SOFT",
      cdinteressado: { nmInteressado: "Maria" },
      cdassunto: { descricao: "Assunto do Card" },
    },
  };

  it("Deve renderizar de forma correta o Card", () => {
    renderComponent(props);

    expect(screen.getByText("Processo")).toBeInTheDocument();
  });

  it("Deve testar a funcionalidade do botão", async () => {
    providerRender(props);

    userEvent.click(screen.getByLabelText("deletar"));
    await waitFor(() =>
      expect(
        screen.getByText("Deseja realmente excluir o processo?")
      ).toBeInTheDocument()
    );
    userEvent.click(screen.getByRole("button", { name: "Confirmar" }));
    await waitFor(() =>
      expect(
        screen.queryByText("Deseja realmente excluir o processo?")
      ).not.toBeInTheDocument()
    );
    await waitFor(() =>
      expect(mockHistoryPush).toHaveBeenCalledWith('/')
    );
  });
});
