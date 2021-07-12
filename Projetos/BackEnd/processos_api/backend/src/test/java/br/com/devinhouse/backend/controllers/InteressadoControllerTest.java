package br.com.devinhouse.backend.controllers;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Date;

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

import br.com.devinhouse.backend.entities.Interessado;
//import br.com.devinhouse.backend.repositories.InteressadoRepository;
import br.com.devinhouse.backend.services.InteressadoService;

@WebMvcTest(value = InteressadoController.class)
public class InteressadoControllerTest {
	private static final Interessado interessado = new Interessado(1, "Fulano", "44431256040", new Date(), "S");
	
	@Autowired
	private MockMvc mockMvc;
	
	@MockBean
	private InteressadoService interessadoService;
	
	@Test
	void cadastrarInteressadoControllerTest() throws Exception {
		// given
		Interessado interessadoACadastrar = interessado;
		
		ObjectWriter interessadoObjeto = new ObjectMapper().writer().withDefaultPrettyPrinter();
		String json = interessadoObjeto.writeValueAsString(interessadoACadastrar);
		
		MockHttpServletRequestBuilder requisicao = MockMvcRequestBuilders
				.post("/interessados/v1/cadastrar")
				.content(json)
				.contentType(MediaType.APPLICATION_JSON)
				.accept(MediaType.APPLICATION_JSON)
				.header("api-version", "v1");
		
		// when
		when(interessadoService.cadastrarInteressado(interessadoACadastrar)).thenReturn(interessadoACadastrar);
		ResultActions retornoDeAcoes = mockMvc.perform(requisicao);
		
		// then
		retornoDeAcoes
			.andExpect(status().isCreated())
			.andExpect(jsonPath("id").isNotEmpty())
			.andExpect(jsonPath("dtnascimento").isNotEmpty())
			.andExpect(jsonPath("nuidentificacao").value(interessadoACadastrar.getNuidentificacao()))
			.andExpect(jsonPath("nminteressado").value(interessadoACadastrar.getNminteressado()));
			
	}
	
	@Test
	void buscarInteressadoPeloIdControllerTest() throws Exception {
		// given
		Interessado interessadoABuscar = interessado;
		int expectedID = 1;
		given(interessadoService.buscarInteressadoPeloId(expectedID)).willReturn(interessadoABuscar);
		
		MockHttpServletRequestBuilder requisicao = MockMvcRequestBuilders
				.get("/interessados/v1/buscar/id/".concat(String.valueOf(expectedID)))
				.accept(MediaType.APPLICATION_JSON)
				.header("api-version", "v1");				
		
		// when
		ResultActions retornoDeAcoes = mockMvc.perform(requisicao);
		
		// then
		retornoDeAcoes
				.andExpect(status().isOk())
				.andExpect(jsonPath("id").value(interessadoABuscar.getId()))
				.andExpect(jsonPath("dtnascimento").isNotEmpty())
				.andExpect(jsonPath("nuidentificacao").value(interessadoABuscar.getNuidentificacao()))
				.andExpect(jsonPath("nminteressado").value(interessadoABuscar.getNminteressado()));
	}
	
	@Test
	void buscarInteressadoPeloCpfControllerTest() throws Exception {
		// given
		Interessado interessadoABuscar = interessado;
		String expectedCPF = "44431256040";
		given(interessadoService.buscarInteressadoPeloCpf(expectedCPF)).willReturn(interessadoABuscar);
		
		MockHttpServletRequestBuilder requisicao = MockMvcRequestBuilders
				.get("/interessados/v1/buscar/cpf/".concat(expectedCPF))
				.accept(MediaType.APPLICATION_JSON)
				.header("api-version", "v1");		
		// when
		ResultActions retornoDeAcoes = mockMvc.perform(requisicao);

		// then
		retornoDeAcoes
			.andExpect(status().isOk())
			.andExpect(jsonPath("id").value(interessadoABuscar.getId()))
			.andExpect(jsonPath("dtnascimento").isNotEmpty())
			.andExpect(jsonPath("nuidentificacao").value(interessadoABuscar.getNuidentificacao()))
			.andExpect(jsonPath("nminteressado").value(interessadoABuscar.getNminteressado()));
	}
	
}
