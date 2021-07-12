package br.com.devinhouse.backend.controllers;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

import br.com.devinhouse.backend.entities.Assunto;
import br.com.devinhouse.backend.entities.Interessado;
import br.com.devinhouse.backend.entities.Processo;
import br.com.devinhouse.backend.services.ProcessoService;

@WebMvcTest(value = ProcessoController.class)
public class ProcessoControllerTest {
	private static final Interessado interessado = new Interessado(1, "Fulano", "44431256040", new Date(), "S");
	private static final Assunto assunto = new Assunto(1, "Autorizacao para Corte de Arvores - Area Publica", new Date(), "S");
	private static final Processo processo = new Processo(1, 1, "SOFT", "2021", "SOFT 1/2021", "Corte de arvore frutifera", assunto, interessado);

	@Autowired
	private MockMvc mockMvc;
	
	@MockBean
	private ProcessoService processoService;
	
	@Test
	void criarProcessoControllerTest() throws Exception {
		// given
		Processo processoACadastrar = processo;
		
		ObjectWriter processoObjeto = new ObjectMapper().writer().withDefaultPrettyPrinter();
		String json = processoObjeto.writeValueAsString(processoACadastrar);
		
		MockHttpServletRequestBuilder requisicao = MockMvcRequestBuilders
				.post("/processos/v1/cadastrar")
				.content(json)
				.contentType(MediaType.APPLICATION_JSON)
				.accept(MediaType.APPLICATION_JSON)
				.header("api-version", "v1");
		
		// when
		when(processoService.cadastrarProcesso(processoACadastrar)).thenReturn(processoACadastrar);
		ResultActions retornoDeAcoes = mockMvc.perform(requisicao);
		
		// then
		retornoDeAcoes
			.andExpect(status().isCreated())
			.andExpect(jsonPath("id").value(processoACadastrar.getId()))
			.andExpect(jsonPath("nuprocesso").value(processoACadastrar.getNuprocesso()))
			.andExpect(jsonPath("sgorgaosetor").value(processoACadastrar.getSgorgaosetor()))
			.andExpect(jsonPath("nuano").value(processoACadastrar.getNuano()))
			.andExpect(jsonPath("chaveprocesso").value(processoACadastrar.getChaveprocesso()))
			.andExpect(jsonPath("descricao").value(processoACadastrar.getDescricao()));
	}

	@Test
	void buscarTodosOsProcessosControllerTest() throws Exception {
		// given
		List<Processo> listaProcessos = new ArrayList<Processo>();
		listaProcessos.add(processo);
		
		given(processoService.buscarTodosOsProcessos()).willReturn(listaProcessos);
		
		MockHttpServletRequestBuilder requisicao = MockMvcRequestBuilders
				.get("/processos/v1/buscar")
				.accept(MediaType.APPLICATION_JSON)
				.header("api-version", "v1");				
		
		// when
		ResultActions retornoDeAcoes = mockMvc.perform(requisicao);
		
		// then
		retornoDeAcoes
			.andExpect(status().isOk())
			.andExpect(jsonPath("[0].id").value(processo.getId()));
	}
	
	@Test
	void buscarProcessoPorIDControllerTest() throws Exception {
		// given
		Processo processoABuscar = processo;
		int expectedID = 1;
		given(processoService.buscarProcessoPorID(expectedID)).willReturn(processoABuscar);
		
		MockHttpServletRequestBuilder requisicao = MockMvcRequestBuilders
				.get("/processos/v1/buscar/id/".concat(String.valueOf(expectedID)))
				.accept(MediaType.APPLICATION_JSON)
				.header("api-version", "v1");	
		
		// when
		ResultActions retornoDeAcoes = mockMvc.perform(requisicao);
		
		// then
		retornoDeAcoes
				.andExpect(status().isOk())
				.andExpect(jsonPath("id").value(processoABuscar.getId()));
	}
	
	@Test
	void buscarProcessoPorChaveProcessoControllerTest() throws Exception {
		// given
		Processo processoABuscar = processo;
		String expectedChaveProcesso = "SOFT 1/2021";
		
		String queryChave = String.format("/chaveprocesso?value=%s", expectedChaveProcesso);
		
		given(processoService.buscarProcessoPorChaveProcesso(expectedChaveProcesso)).willReturn(processoABuscar);
		
		MockHttpServletRequestBuilder requisicao = MockMvcRequestBuilders
				.get("/processos/v1/buscar".concat(queryChave))
				.accept(MediaType.APPLICATION_JSON)
				.header("api-version", "v1");	
		
		// when
		ResultActions retornoDeAcoes = mockMvc.perform(requisicao);
				
		// then
		retornoDeAcoes
				.andExpect(status().isOk())
				.andExpect(jsonPath("chaveprocesso").value(processoABuscar.getChaveprocesso()));
	}
	
	@Test
	void buscarProcessosPorInteressadosControllerTest() throws Exception {
		// given
		Processo processoABuscar = processo;
				
		List<Processo> listaProcesso = new ArrayList<Processo>();
		listaProcesso.add(processoABuscar);
		
		int expectedInteressadoID = 1;
		
		given(processoService.buscarProcessosPorInteressados(expectedInteressadoID)).willReturn(listaProcesso);
		
		// when
		MockHttpServletRequestBuilder requisicao = MockMvcRequestBuilders
				.get("/processos/v1/buscar/interessado/id/".concat(String.valueOf(expectedInteressadoID)))
				.accept(MediaType.APPLICATION_JSON)
				.header("api-version", "v1");	
		
		// when
		ResultActions retornoDeAcoes = mockMvc.perform(requisicao);
		
		// then
		retornoDeAcoes
				.andExpect(status().isOk())
				.andExpect(jsonPath("[0].id").value(processoABuscar.getId()));
	}
	
	 @Test
	 void buscarProcessosPorAssuntoControllerTest() throws Exception {
		// given
		Processo processoABuscar = processo;
				
		List<Processo> listaProcesso = new ArrayList<Processo>();
		listaProcesso.add(processoABuscar);
		
		int expectedAssuntoID = 1;

		given(processoService.buscarProcessosPorAssunto(expectedAssuntoID)).willReturn(listaProcesso);
		
		// when
		MockHttpServletRequestBuilder requisicao = MockMvcRequestBuilders
				.get("/processos/v1/buscar/assunto/id/".concat(String.valueOf(expectedAssuntoID)))
				.accept(MediaType.APPLICATION_JSON)
				.header("api-version", "v1");	
		
		// when
		ResultActions retornoDeAcoes = mockMvc.perform(requisicao);
		
		// then
		retornoDeAcoes
				.andExpect(status().isOk())
				.andExpect(jsonPath("[0].id").value(processoABuscar.getId()));
	}
	
	 @Test
	 void atualizarProcessoPorIDControllerTest() throws Exception {
		// given
			Processo processoAAtualizar = processo;
			
			ObjectWriter processoObjeto = new ObjectMapper().writer().withDefaultPrettyPrinter();
			String json = processoObjeto.writeValueAsString(processoAAtualizar);
			
			MockHttpServletRequestBuilder requisicao = MockMvcRequestBuilders
					.put("/processos/v1/atualizar/id/1")
					.content(json)
					.contentType(MediaType.APPLICATION_JSON)
					.accept(MediaType.APPLICATION_JSON)
					.header("api-version", "v1");
			
			// when
			when(processoService.cadastrarProcesso(processoAAtualizar)).thenReturn(processoAAtualizar);
			
			ResultActions retornoDeAcoes = mockMvc.perform(requisicao);
		
			// then
			retornoDeAcoes
					.andExpect(status().isOk());
		}
	
	@Test
	void removerProcessoPorIDControllerTest() throws Exception {
		// given
		int expectedId = 1;
		
		MockHttpServletRequestBuilder requisicao = MockMvcRequestBuilders
				.delete("/processos/v1/remover/id/".concat(String.valueOf(expectedId)))
				.accept(MediaType.APPLICATION_JSON)
				.header("api-version", "v1");	
		
		// when
		ResultActions retornoDeAcoes = mockMvc.perform(requisicao);
		// then	
		
		retornoDeAcoes
				.andExpect(status().isOk());
	}
}
