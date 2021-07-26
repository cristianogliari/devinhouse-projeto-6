import { render, screen } from "@testing-library/react";

import { Home } from "./index";

jest.mock("../../utils/context/DataContext");

const renderComponent = () => render(<Home />)
const dataContext = require("../../utils/context/DataContext");

describe("Home component sem processos", () => {
	beforeEach(() => {
		dataContext.useDataContext.mockReturnValue({
			listaProcesso: [],
			listaAssunto: [],
			listaInteressado: [],
			recarregarProcessos: jest.fn().mockImplementation(() => ""),
			carregarData: jest.fn().mockImplementation(() => ""),
		})
	})

	it("Deve renderizar texto com nenhum processo encontrado", () => {

		renderComponent();
		expect(screen.getByText("Nenhum processo encontrado")).toBeInTheDocument();
	})
})

describe("Home component com processos", () => {
	beforeEach(() => {
		dataContext.useDataContext.mockReturnValue({
			listaProcesso: [{  
			"id": 1,
			"nuprocesso": 1,
			"sgorgaosetor": "SOFT",
			"nuano": "2021",
			"chaveprocesso": "SOFT 1/2021",
			"descricao": "Fulano deseja autorizacao para corte de arvore frutifera",
			"cdassunto": {
				"id": 1,
				"descricao": "Autorização para Corte de Árvores - Área Pública",
				"dtcadastro": "2021-05-23",
				"flativo": "S"
			},
			"cdinteressado": {
				"id": 1,
				"nminteressado": "Fulano de Tal",
				"nuidentificacao": "46200016003",
				"dtnascimento": "2000-01-01",
				"flativo": "S"
			}
		}],
			listaAssunto: [],
			listaInteressado: [],
			recarregarProcessos: jest.fn().mockImplementation(() => ""),
			carregarData: jest.fn().mockImplementation(() => ""),
		})
	})

	it("Deve renderizar card de processo", () => {
		renderComponent();

		expect(screen.getByText("SOFT 1/2021")).toBeInTheDocument();
		expect(screen.getByText("2021")).toBeInTheDocument();
		expect(screen.getByText("Autorização para Corte de Árvores - Área Pública")).toBeInTheDocument();
	})
})