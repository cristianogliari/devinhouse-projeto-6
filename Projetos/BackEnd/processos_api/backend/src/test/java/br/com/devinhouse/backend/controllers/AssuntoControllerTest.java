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
import br.com.devinhouse.backend.services.AssuntoService;

@WebMvcTest(value = AssuntoController.class)
public class AssuntoControllerTest {
	private static final Assunto assunto = new Assunto(1, "Autorizacao para Corte de Arvores - Area Publica", new Date(), "S");

	@Autowired
	private MockMvc mockMvc;
	
	@MockBean
	private AssuntoService assuntoService;
	
	@Test
	void cadastrarAssuntoTest() throws Exception {
		// given
		Assunto assuntoACadastrar = assunto;
		
		ObjectWriter assuntoObjeto = new ObjectMapper().writer().withDefaultPrettyPrinter();
		String json = assuntoObjeto.writeValueAsString(assuntoACadastrar);
		
		MockHttpServletRequestBuilder requisicao = MockMvcRequestBuilders
				.post("/assuntos/v1/cadastrar")
				.content(json)
				.contentType(MediaType.APPLICATION_JSON)
				.accept(MediaType.APPLICATION_JSON)
				.header("api-version", "v1");
		
		// when
		when(assuntoService.cadastrarAssunto(assuntoACadastrar)).thenReturn(assuntoACadastrar);
		ResultActions retornoDeAcoes = mockMvc.perform(requisicao);
		
		// then
		retornoDeAcoes
			.andExpect(status().isCreated())
			.andExpect(jsonPath("id").value(assuntoACadastrar.getId()));
	}
		
	@Test
	void buscarTodosOsAssuntosControllerTest() throws Exception {
		// given
		List<Assunto> listaAssuntos = new ArrayList<Assunto>();
		listaAssuntos.add(assunto);		
		
		given(assuntoService.buscarTodosOsAssuntos()).willReturn(listaAssuntos);
		
		MockHttpServletRequestBuilder requisicao = MockMvcRequestBuilders
				.get("/assuntos/v1/buscar")
				.accept(MediaType.APPLICATION_JSON)
				.header("api-version", "v1");				
		
		// when
		ResultActions retornoDeAcoes = mockMvc.perform(requisicao);
		
		// then
		retornoDeAcoes
			.andExpect(status().isOk())
			.andExpect(jsonPath("[0].id").value(assunto.getId()));
	}

	@Test
	void buscarAssuntoPeloIdControllerTest() throws Exception  {
		// given
		Assunto assuntoABuscar = assunto;
		int expectedID = 1;
		given(assuntoService.buscarAssuntoPeloId(expectedID)).willReturn(assuntoABuscar);
		
		MockHttpServletRequestBuilder requisicao = MockMvcRequestBuilders
				.get("/assuntos/v1/buscar/id/".concat(String.valueOf(expectedID)))
				.accept(MediaType.APPLICATION_JSON)
				.header("api-version", "v1");				
		
		// when
		ResultActions retornoDeAcoes = mockMvc.perform(requisicao);
		
		// then
		retornoDeAcoes
				.andExpect(status().isOk())
				.andExpect(jsonPath("id").value(assuntoABuscar.getId()));
	}
}