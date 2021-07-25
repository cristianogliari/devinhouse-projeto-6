import { render, screen } from "@testing-library/react";

import rocketlaunch from "../../../assets/rocketlaunch.svg";
import rocketlaunchwhite from "../../../assets/rocketlaunchwhite.svg";

import { LogoArea } from "./LogoArea";

const renderComponent = () => render(<LogoArea />)

describe("LogoArea Component", () => {
    beforeEach(() => {
        renderComponent();
    });

    it("Deve renderizar o nome DEVinHouse", () => {

        expect(screen.getByText("DEVinHouse")).toBeInTheDocument();
    })
    
    it("Deve renderizar o foguete branco da logo", () => {
        //const imgSource = require("../../../assets/rocketlaunch.svg");
        const img = screen.getByAltText("rocketlaunchwhite");
        expect(img.getAttribute("src")).toContain(rocketlaunchwhite);
    })

    /* APRENDER COMO FAZER TESTE EM CASO DE TERNÁRIO */
    //TODO: Fazer o teste do foguete preto do dark theme
    it("Deve renderizar o foguete preto da logo", () => {
        //const imgSource = require("../../../assets/rocketlaunch.svg");
        const img = screen.getByAltText("rocketlaunchwhite");
        expect(img.getAttribute("src")).toContain(rocketlaunchwhite);
    })
})