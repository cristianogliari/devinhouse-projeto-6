import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { AvatarArea } from "./AvatarArea";
import avatarImg from "../../../assets/images/bezosFour.png";

const renderComponent = (onClickEvent) => render(<AvatarArea 
handleChangeInfoPerfil = {onClickEvent}
avatar = {avatarImg} 
nomeCompleto = "bezos"/>)

describe("Avatar Component", () => {
    it("Deve renderizar botao", () => {
        renderComponent();
        expect(screen.getByText("bezos")).toBeInTheDocument();
    })
    
    it("Deve renderizar avatar", () => {
        renderComponent();
        expect(screen.getByAltText("avatar-img")).toBeInTheDocument();
    })

    it("Deve chamar função de click no botao de chamar o ProfileCard", () => {
        const onClick = jest.fn();
        renderComponent(onClick);
        userEvent.click(screen.getByText("bezos"));
        expect(onClick).toBeCalled;
    })
})
    