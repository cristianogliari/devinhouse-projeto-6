import { render, screen } from "@testing-library/react";

import rocketlaunch from "../../../assets/rocketlaunch.svg";
import rocketlaunchwhite from "../../../assets/rocketlaunchwhite.svg";

import { LogoArea } from "./LogoArea";

const renderComponent = () => render(<LogoArea />)

describe("LogoArea Component", () => {

    it("Deve renderizar o nome DEVinHouse", () => {
        renderComponent();
        expect(screen.getByText("DEVinHouse")).toBeInTheDocument();
    })
    
    it("Deve renderizar o foguete branco da logo", () => {
        renderComponent();
        const img = screen.getByAltText("rocketlaunchwhite");
        expect(img.getAttribute("src")).toContain(rocketlaunchwhite);
    })
})