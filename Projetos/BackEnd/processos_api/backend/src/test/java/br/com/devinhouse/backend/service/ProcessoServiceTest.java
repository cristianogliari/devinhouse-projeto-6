package br.com.devinhouse.backend.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import br.com.devinhouse.backend.entities.Assunto;
import br.com.devinhouse.backend.entities.Interessado;
import br.com.devinhouse.backend.entities.Processo;
import br.com.devinhouse.backend.repositories.AssuntoRepository;
import br.com.devinhouse.backend.repositories.InteressadoRepository;
import br.com.devinhouse.backend.repositories.ProcessoRepository;
import br.com.devinhouse.backend.services.AssuntoService;
import br.com.devinhouse.backend.services.InteressadoService;
import br.com.devinhouse.backend.services.ProcessoService;

@ExtendWith(MockitoExtension.class)
public class ProcessoServiceTest {
	
	private static final Interessado interessado = new Interessado(1, "Fulano", "44431256040", new Date(), "S");
	private static final Assunto assunto = new Assunto(1, "Autorizacao para Corte de Arvores - Area Publica", new Date(), "S");
	private static final Processo processo = new Processo(1, 1, "SOFT", "2021", "SOFT 1/2021", "Corte de arvore frutifera", assunto, interessado);
	
	@Mock
	private ProcessoRepository processoRepository;
	
	@Mock
	private AssuntoRepository assuntoRepository;

	@Mock
	private AssuntoService assuntoService;
	
	@Mock
	private InteressadoRepository interessadoRepository;
	
	@Mock
	private InteressadoService interessadoService;
	
	@InjectMocks
	private ProcessoService processoService;

	@Test
	void cadastrarProcessoTest() {
		//  given
		Processo processoASalvar = processo;
		
		when(assuntoRepository.findById(assunto.getId())).thenReturn(Optional.of(assunto));
		when(interessadoRepository.findById(interessado.getId())).thenReturn(Optional.of(interessado));
		when(processoRepository.save(processoASalvar)).thenReturn(processoASalvar);
		
		// when
		Processo processoSalvo = processoService.cadastrarProcesso(processoASalvar);
	
		// then
		assertThat(processoSalvo).isEqualTo(processoASalvar);
		
	}
	
	@Test
	void buscarTodosOsProcessosTest() {
		//  given
		//  when
		processoService.buscarTodosOsProcessos();
		
		//  then
		verify(processoRepository).findAll();
	}
	
	@Test
	void buscarProcessoPorIDTest() {
		//  given
		List<Processo> processoLista = new ArrayList<Processo>();
		processoLista.add(processo);
		int expectedID = 1;
		when(processoRepository.findById(expectedID)).thenReturn(Optional.of(processo));
		when(processoRepository.findAll()).thenReturn(processoLista);
		
		//  when
		processoService.buscarProcessoPorID(expectedID);
		
		//  then
		verify(processoRepository).findById(expectedID);
	}
	
	@Test
	void  buscarProcessoPorChaveProcessoTest() {
		//  given
		String expected = "SOFT 1/2021";
		
		//  when
		processoService.buscarProcessoPorChaveProcesso(expected);
		
		//  then
		verify(processoRepository).findByChaveprocesso(expected);
		
	}
	
	@Test
	void buscarProcessosPorInteressadosTest() {
		//  given
		List<Processo> processoLista = new ArrayList<Processo>();
		
		int expected = processo.getCdinteressado().getId();
		
		given(interessadoRepository.findById(expected)).willReturn(Optional.of(interessado));

		when(processoRepository.findByCdinteressado(interessado)).thenReturn(processoLista);
		
		//  when
		processoService.buscarProcessosPorInteressados(expected);
		
		//  then
		verify(processoRepository).findByCdinteressado(interessado);
	}

	@Test
	void  buscarProcessosPorAssuntoTest() {
		//  given
		List<Processo> processoLista = new ArrayList<Processo>();
		
		int expected = processo.getCdassunto().getId();
		
		given(assuntoRepository.findById(expected)).willReturn(Optional.of(assunto));

		when(processoRepository.findByCdassunto(assunto)).thenReturn(processoLista);
		
		//  when
		processoService.buscarProcessosPorAssunto(expected);
		
		//  then
		verify(processoRepository).findByCdassunto(assunto);
	}

	@Test
	void  atualizarProcessoPorIDTest() {
		//  given
		Assunto assuntoAtualizado = assunto;
		assuntoAtualizado.setDescricao("Descricao nova");
		
		Interessado interessadoAtualizado = interessado;
		interessadoAtualizado.setNminteressado("Ciclano");
		
		List<Processo> processoLista = new ArrayList<Processo>();
		processoLista.add(processo);
		
		Processo processoNovo = processo;
		processoNovo.setCdassunto(assuntoAtualizado);
		processoNovo.setCdinteressado(interessadoAtualizado);
		processoNovo.setDescricao("Descricao atualizada");
		
		int expectedProcesso = processo.getId();
		int expectedAssunto = assunto.getId();
		int expectedInteressado = interessado.getId();
		
		when(assuntoRepository.findById(expectedAssunto)).thenReturn(Optional.of(assunto));
		when(interessadoRepository.findById(expectedInteressado)).thenReturn(Optional.of(interessado));
		when(processoRepository.findById(expectedProcesso)).thenReturn(Optional.of(processo));
		when(processoRepository.findAll()).thenReturn(processoLista);

		//  when
		processoService.atualizarProcessoPorID(expectedProcesso, processoNovo);
		
		//  then
		verify(processoRepository).save(processoNovo);
	}
	
	@Test
	void removerProcessoPorIDTest() {
		//  given
		List<Processo> processoLista = new ArrayList<Processo>();
		processoLista.add(processo);
		int expected = processo.getId();
		
		when(processoRepository.findAll()).thenReturn(processoLista);
		when(processoRepository.findById(expected)).thenReturn(Optional.of(processo));
		
		//  when
		processoService.removerProcessoPorID(expected);
		
		//  then
		verify(processoRepository).delete(processo);
	}
}