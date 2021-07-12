package br.com.devinhouse.backend.repositories;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.Date;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import br.com.devinhouse.backend.entities.Interessado;

@DataJpaTest
public class InteressadoRepositoryTest {
	
	@Autowired
	private InteressadoRepository interessadoRepository;
	
	@AfterEach
	void tearDown() {
		interessadoRepository.deleteAll();
	}
	
	@Test
	void findByNuidentificacaoTest() {
		Interessado interessado = new Interessado(1, "Fulano", "44431256040", new Date(), "S");
		interessadoRepository.save(interessado);
		
		String expected = "44431256040";
		
		Interessado interessadoPorNuIdentificacao = interessadoRepository.findByNuidentificacao(expected);
		
		assertThat(interessadoPorNuIdentificacao.getNuidentificacao()).isEqualTo(expected);
	}
}
