import { render, screen, userEvent } from "@testing-library/react";

import avatarImg from "../../../assets/images/bezosFour.png";
import { useKeycloak } from "@react-keycloak/web";
import {ProfileCard} from "./ProfileCard";

const renderComponent = (onClickEvent) => render(
    <ProfileCard 
        avatar = {avatarImg}
        nomeCompleto = "bezos"
        email="bezos@amazon.com"
    />)

describe("ProfileCard Component", () => {
    
    /* it("Deve renderizar o ProfileCard", () => {
        
    }) */

    it("Deve Renderizar a imagem do avatar", () => {
        renderComponent();
        const { keycloak } = useKeycloak();
        expect(screen.getByAltText("avatar-img")).toBeInTheDocument();
    })

    it("Deve renderizar o nome do usuario", () => {
        renderComponent();
        const { keycloak } = useKeycloak();
        expect(screen.getByText("bezos")).toBeInTheDocument();
    })

    it("Deve renderizar o email do usuario", () => {
        renderComponent();
        const { keycloak } = useKeycloak();
        expect(screen.getByText("bezos@amazon.com")).toBeInTheDocument();
    })

    it("Deve renderizar o Botao de sair", () => {
        renderComponent();
        const { keycloak } = useKeycloak();
        expect(screen.getByText("Sair")).toBeInTheDocument();
    })



})