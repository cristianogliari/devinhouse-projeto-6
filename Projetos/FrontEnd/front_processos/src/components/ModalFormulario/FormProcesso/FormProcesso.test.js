import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { FormProcesso } from "./FormProcesso";

const renderComponent = (props) =>
  render(
    <FormProcesso
      handleModal={props.propsModal}
      formType={props.propsType}
      processoDados={props.propsCadastro}
    />
  );

describe("FormProcesso Component", () => {
  const onSubmit = jest.fn();
  let propsCadastro = {
    propsModal: onSubmit,
    propsType: "cadastro",
    propsCadastro: {
      nuano: "",
      descricao: "",
      nuprocesso: "",
      chaveprocesso: "",
      sgorgaosetor: "",
      cdinteressado: { id: 0 },
      cdassunto: { id: 0 },
    },
  };
  let propsEditar = {
    propsModal: onSubmit,
    propsType: "editar",
    propsCadastro: {
      nuano: "2000",
      descricao: "Teste",
      nuprocesso: "12345678",
      chaveprocesso: "SOFT/2000",
      sgorgaosetor: "SOFT",
      cdinteressado: { id: 0 },
      cdassunto: { id: 0 },
    },
  };
  it("Deve renderizar o Formulario de Processo na forma Cadastro Corretamente", () => {
    renderComponent(propsCadastro);

    expect(screen.getByText("Novo Processo")).toBeInTheDocument();

    expect(
      screen.queryByRole("TextField", { name: "numeroProcesso" })
    ).not.toBeInTheDocument();
    expect(screen.getByLabelText("Interessado")).toBeInTheDocument();
    expect(screen.getByLabelText("Assunto")).toBeInTheDocument();
    expect(screen.getByLabelText("Ano do Processo")).toBeInTheDocument();
    expect(screen.getByLabelText("Orgao")).toBeInTheDocument();
    expect(
      screen.queryByRole("TextField", { name: "chaveDeProcesso" })
    ).not.toBeInTheDocument();
    expect(screen.getByLabelText("Descricao")).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Salvar" })).toBeInTheDocument();
  });

  it("Deve renderizar o Formulario de Processo na forma Editar Corretamente", () => {
    renderComponent(propsEditar);

    expect(screen.getByText("Editar Processo")).toBeInTheDocument();

    expect(screen.getByLabelText("Numero Processo")).toBeDisabled();
    expect(screen.getByLabelText("Numero Processo")).toHaveValue("12345678");
    expect(screen.getByLabelText("Interessado")).toBeInTheDocument();
    expect(screen.getByLabelText("Assunto")).toBeInTheDocument();
    expect(screen.getByLabelText("Ano do Processo")).toHaveDisplayValue("2000");
    expect(screen.getByLabelText("Orgao")).toBeDisabled();
    expect(screen.getByLabelText("Orgao")).toHaveValue("SOFT");
    expect(screen.getByLabelText("Chave Processo")).toBeDisabled();
    expect(screen.getByLabelText("Chave Processo")).toHaveValue("SOFT/2000");
    expect(screen.getByLabelText("Descricao")).toHaveDisplayValue("Teste");

    expect(screen.getByRole("button", { name: "Salvar" })).toBeInTheDocument();
  });

  it("Deve testar a digitacao do Ano", async () => {
    renderComponent(propsCadastro);

    userEvent.type(screen.getByLabelText("Ano do Processo"), "1990");
    await waitFor(() =>
      expect(screen.getByLabelText("Ano do Processo")).toHaveValue("1990")
    );
  });

  it("Deve testar a validacao do Ano", async () => {
    renderComponent(propsCadastro);

    userEvent.click(screen.getByRole("button", { name: "Salvar" }));
    await waitFor(() =>
      expect(screen.getByText("Ano é obrigatorio!")).toBeInTheDocument()
    );

    userEvent.type(screen.getByLabelText("Ano do Processo"), "111");
    userEvent.click(screen.getByRole("button", { name: "Salvar" }));
    await waitFor(() =>
      expect(screen.getByText("Digite um ano valido!")).toBeInTheDocument()
    );
  });

  it("Deve testar a digitacao do Orgao", async () => {
    renderComponent(propsCadastro);

    userEvent.type(screen.getByLabelText("Orgao"), "SOFT");
    await waitFor(() =>
      expect(screen.getByLabelText("Orgao")).toHaveValue("SOFT")
    );
  });

  it("Deve testar a validacao do Orgao", async () => {
    renderComponent(propsCadastro);

    userEvent.click(screen.getByRole("button", { name: "Salvar" }));
    await waitFor(() =>
      expect(screen.getByText("Orgão é obrigatorio!")).toBeInTheDocument()
    );

    userEvent.type(screen.getByLabelText("Orgao"), "SOFTs");
    userEvent.click(screen.getByRole("button", { name: "Salvar" }));
    await waitFor(() =>
      expect(
        screen.getByText("Digite 4 caracteres para o Orgão!")
      ).toBeInTheDocument()
    );
  });

  it("Deve testar a validacao da descricao", async () => {
    renderComponent(propsCadastro);

    userEvent.click(screen.getByRole("button", { name: "Salvar" }));
    await waitFor(() =>
      expect(screen.getByText("Descrição é obrigatorio!")).toBeInTheDocument()
    );

    userEvent.type(screen.getByLabelText("Descricao"), "SOFTs ");
    userEvent.click(screen.getByRole("button", { name: "Salvar" }));
    await waitFor(() =>
      expect(
        screen.getByText("Remova os espaços no inicio e fim!")
      ).toBeInTheDocument()
    );
  });

  it("Deve testar a validacao do Interessado", async () => {
    renderComponent(propsCadastro);

    userEvent.click(screen.getByRole("button", { name: "Salvar" }));
    await waitFor(() =>
      expect(screen.getByText("Escolha um Interessado!")).toBeInTheDocument()
    );
  });

  it("Deve testar a validacao do Assunto", async () => {
    renderComponent(propsCadastro);

    userEvent.click(screen.getByRole("button", { name: "Salvar" }));
    await waitFor(() =>
      expect(screen.getByText("Escolha um Assunto!")).toBeInTheDocument()
    );
  });
});
