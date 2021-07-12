package br.com.devinhouse.backend.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import br.com.devinhouse.backend.entities.Interessado;
import br.com.devinhouse.backend.repositories.InteressadoRepository;
import br.com.devinhouse.backend.services.InteressadoService;

@ExtendWith(MockitoExtension.class)
public class InteressadoServiceTest {
	
	private static final Interessado interessado = new Interessado(1, "Fulano", "44431256040", new Date(), "S");
	
	@Mock 
	private InteressadoRepository interessadoRepository;
	
	@InjectMocks
	private InteressadoService interessadoService;
	
	@Test
	void cadastrarInteressadoTest() {
		// given
		interessadoService.cadastrarInteressado(interessado);
		
		// when
		ArgumentCaptor<Interessado> interessadoArgumentCaptor = ArgumentCaptor.forClass(Interessado.class);
		
		verify(interessadoRepository).save(interessadoArgumentCaptor.capture());
		
		Interessado capturedInteressado = interessadoArgumentCaptor.getValue();
		
		// then		
		assertThat(capturedInteressado).isEqualTo(interessado);
	}
	
	@Test
	void buscarInteressadoPeloIdTest() {
		// given
		int expected = 1;
		when(interessadoRepository.findById(expected)).thenReturn(Optional.of(interessado));
		
		// when 
		interessadoService.buscarInteressadoPeloId(expected);
		
		// then
		verify(interessadoRepository).findById(expected);
	}
		
	@Test
	void buscarInteressadoPeloCpfTest() {
		// given
		List<Interessado> interessadoLista = new ArrayList<Interessado>();
		interessadoLista.add(interessado);
		String expected = "44431256040";
		when(interessadoRepository.findByNuidentificacao(expected)).thenReturn(interessado);
		when(interessadoRepository.findAll()).thenReturn(interessadoLista);
		
		// when
		interessadoService.buscarInteressadoPeloCpf(expected);
		
		// then
		verify(interessadoRepository).findByNuidentificacao(expected);
	}
	
	@Test
	void cadastrarInteressadoTestThrowRunTimeException() {
		// given
		List<Interessado> interessadoLista = new ArrayList<Interessado>();
		interessadoLista.add(interessado);

		// when
		when(interessadoRepository.findAll()).thenReturn(interessadoLista);
				
		// then
		assertThatThrownBy(() -> interessadoService.cadastrarInteressado(interessado))
			.isInstanceOf(RuntimeException.class)
			.hasMessageContaining("CPF ja possui cadastro.");
	}
	
	@Test
	void buscarInteressadoPeloCpfTestThrowRunTimeException() {
		// given
		String expected = "44431256040";
		when(interessadoRepository.findByNuidentificacao(expected)).thenReturn(interessado);

		// then
		assertThatThrownBy(() -> interessadoService.buscarInteressadoPeloCpf(expected))
			.isInstanceOf(RuntimeException.class)
			.hasMessageContaining("CPF nao cadastrado.");
	}
}