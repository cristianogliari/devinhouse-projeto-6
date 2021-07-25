import { render, screen } from "@testing-library/react";

import { Home } from "./index";

const renderComponent = () => render(
    <Home/>)
    
    describe("Avatar Component", () => {
        it("Deve renderizar Navbar", () => {
            renderComponent();
            expect(screen.getByText("DEVinHouse")).toBeInTheDocument();
        })

        /* it("Deve renderizar texto no Box", () => {
            renderComponent();
            expect(screen.getByText("Nenhum processo encontrado")).toBeInTheDocument();
        }) */

        /* it("Deve renderizar botao de adicionar processo", () => {

        })

        it("Deve chamar funcao no botao de adicionar processo", () => {

        })

        it("Deve renderizar modal de processos", () => {

        })

        it("Deve chamar funcao onClose no modal de processo", () => {

        }) */



    })