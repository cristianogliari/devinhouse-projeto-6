import { render, screen } from "@testing-library/react";

import { ModalFormulario } from "./ModalFormulario";

const renderComponent = (props) =>
  render(
    <ModalFormulario
      openModal={props.openModal}
      handleModalState={props.handleModalState}
      processo={props.processo}
    />
  );

describe("ModalFormulario Component", () => {
  const onSubmit = jest.fn();
  let propsCadastro = {
    openModal:true,
    handleModalState: onSubmit
  };
  let propsEditar = {
    openModal: true,
    handleModalState: onSubmit,
    processo:{
        nuano: "2000",
        descricao: "Teste",
        nuprocesso: "12345678",
        chaveprocesso: "SOFT/2000",
        sgorgaosetor: "SOFT",
        cdinteressado: { id: 0 },
        cdassunto: { id: 0 },
      }
  };

  it("Deve renderizar de forma correta o Modal", () => {
    renderComponent(propsCadastro);

    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });

  it("Deve renderizar o modal de forma condicional", () => {
    renderComponent(propsCadastro);
    expect(screen.getByText("Novo Processo")).toBeInTheDocument();
    
    renderComponent(propsEditar)
    expect(screen.getByText("Editar Processo")).toBeInTheDocument();
  });

});
