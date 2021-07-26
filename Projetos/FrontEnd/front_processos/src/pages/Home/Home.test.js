import { render, screen } from "@testing-library/react";

import { Home } from "./index";
import { useDataContext } from "../../utils/context/DataContext";
// jest.mock("../../utils/context/DataContext");

jest.mock("../../utils/context/DataContext", () => ({
	...jest.requireActual("../../utils/context/DataContext"),
	useDataContext: () => ({
		listaProcesso: [],
		listaAssunto: [],
		listaInteressado: [],
		recarregarProcessos: jest.fn().mockImplementation(() => "teste"),
		carregarData: jest.fn().mockImplementation(() => "teste"),
	}),
}));

const renderComponent = () => render(<Home />)


// beforeEach(() => {
// 	const useDataContext = () 
//   const { stateLoading, setStateLoading, listaProcesso, carregarData } = useDataContext();
// })
	
describe("Home component", () => {
	it("Deve renderizar texto com nenhum processo encontrado", () => {

		
		renderComponent();
		expect(screen.getByText("Nenhum processo encontrado")).toBeInTheDocument();
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