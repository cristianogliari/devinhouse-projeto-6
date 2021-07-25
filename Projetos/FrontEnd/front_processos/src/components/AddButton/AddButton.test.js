import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { AddProcessButton } from "./AddButton";

const renderComponent = (props) =>
  render(<AddProcessButton openModalCadastro={props.propsModal} />);

describe("AddButton Component", () => {
  const onClick = jest.fn();
  let props = { propsModal: onClick };

  it("Deve renderizar de forma correta o botão", () => {
    renderComponent(props);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("Deve testar a funcionalidade do botão", () => {
    renderComponent(props);

    userEvent.click(screen.getByRole("button"));
    expect(onClick).toBeCalled();
  });
});
