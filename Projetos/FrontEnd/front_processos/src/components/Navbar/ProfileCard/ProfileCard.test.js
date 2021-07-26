import { render, screen, waitFor } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import avatarImg from "../../../assets/images/bezosFour.png";
import { ProfileCard } from "./ProfileCard";

const renderComponent = (props) =>
  render(
    <ProfileCard
      clickAwayEvent={props}
      avatar={avatarImg}
      nomeCompleto="bezos"
      email="bezos@amazon.com"
    />
  );

const mockKeyClock = jest.fn();

jest.mock("@react-keycloak/web", () => ({
  ...jest.requireActual("@react-keycloak/web"),
  useKeycloak: () => ({
    keycloak: {logout: mockKeyClock},
  }),
}));

describe("ProfileCard Component", () => {
  it("Deve Renderizar a imagem do avatar", () => {
    renderComponent(mockKeyClock);
    expect(screen.getByAltText("avatar-img")).toBeInTheDocument();
  });

  it("Deve renderizar o nome do usuario", () => {
    renderComponent(mockKeyClock);
    expect(screen.getByText("bezos")).toBeInTheDocument();
  });

  it("Deve renderizar o email do usuario", () => {
    renderComponent(mockKeyClock);
    expect(screen.getByText("bezos@amazon.com")).toBeInTheDocument();
  });

  it("Deve renderizar o Botao de sair", () => {
    renderComponent(mockKeyClock);
    expect(screen.getByText("Sair")).toBeInTheDocument();
  });
  it("Deve testar a funcionalidade do botão editar", async () => {
    renderComponent(mockKeyClock);
    userEvent.click(screen.getByRole("button", { name: "Sair" }));
    await waitFor(() => expect(mockKeyClock).toHaveBeenCalled());
  });

});
