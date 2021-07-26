package br.com.devinhouse.backend.service;

import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;

import br.com.devinhouse.backend.services.AssuntoService;
import br.com.devinhouse.backend.entities.Assunto;
import br.com.devinhouse.backend.repositories.AssuntoRepository;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class AssuntoServiceTest {

	private static final Assunto assunto = new Assunto(1, "Autorizacao para Corte de Arvores - Area Publica", new Date(), "S");

	@Mock
	private AssuntoRepository assuntoRepository;

	@InjectMocks
	private AssuntoService assuntoService;

	@Test
	void cadastrarAssuntoTest() {
		// given
		assuntoService.cadastrarAssunto(assunto);

		// when
		ArgumentCaptor<Assunto> assuntoArgumentCaptor = ArgumentCaptor.forClass(Assunto.class);
		
		verify(assuntoRepository).save(assuntoArgumentCaptor.capture());
		
		Assunto capturedAssunto = assuntoArgumentCaptor.getValue();
		
		// then
		assertThat(capturedAssunto).isEqualTo(assunto);
	}
	
	@Test
	void buscarTodosOsAssuntosTest() {
		// given
		
		//when
		assuntoService.buscarTodosOsAssuntos();
		
		// then
		verify(assuntoRepository).findAll();
	}

	@Test
	void buscarAssuntoPeloIdTest() {
		// given
		List<Assunto> assuntoLista = new ArrayList<Assunto>();
		assuntoLista.add(assunto);
		int expected = 1;
		when(assuntoRepository.findById(expected)).thenReturn(Optional.of(assunto));
		when(assuntoRepository.findAll()).thenReturn(assuntoLista);
		
		// when
		assuntoService.buscarAssuntoPeloId(expected);
				
		// then
		verify(assuntoRepository).findById(expected);
	}
	
	@Test 
	void buscarAssuntoPeloIdTestThrowRunTimeException() {
		// given
		int expected = 1;
		
		// when
		
		// then
		assertThatThrownBy(() -> assuntoService.buscarAssuntoPeloId(expected))
			.isInstanceOf(RuntimeException.class)
			.hasMessageContaining("Assunto não localizado.");
	}
}