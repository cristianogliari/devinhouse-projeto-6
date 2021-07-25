package br.com.devinhouse.backend.services;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devinhouse.backend.entities.Interessado;
import br.com.devinhouse.backend.repositories.InteressadoRepository;

@Service
public class InteressadoService {
	
	private static final Logger LOGGER = LogManager.getLogger(InteressadoService.class);

	@Autowired
	private InteressadoRepository repository;

	private boolean verificarCadastroNuidentificacao(String termo) {
		List<Interessado> todosInteressados = repository.findAll();
		boolean status = false;
		
		for(Interessado each : todosInteressados ) {
			if(termo.equals(each.getNuidentificacao())) {
				status = true;
			}
		}	

		return status;
	}
	
	public Interessado cadastrarInteressado(Interessado obj) {
		if(!verificarCadastroNuidentificacao(obj.getNuidentificacao())) {
			obj.setFlativo("S");
			return repository.save(obj);
		} else {
			LOGGER.error("Tentou cadastrar um CPF ja existente na base de dados, CPF {}", obj.getNuidentificacao());
			throw new RuntimeException("CPF ja possui cadastro.");
		}
	};
	
	public List<Interessado> buscarTodosOsInteressados() {
		return repository.findAll();
	}

	public Interessado buscarInteressadoPeloId(Integer id) {
		Interessado encontrado = repository.findById(id).get();

		return encontrado;
	}

	public Interessado buscarInteressadoPeloCpf(String termo) {
		Interessado interessadoEncontrado = repository.findByNuidentificacao(termo);
		
		if(verificarCadastroNuidentificacao(interessadoEncontrado.getNuidentificacao())) {
			return interessadoEncontrado;
		} else {
			LOGGER.error("Tentou pesquisar por um CPF que nao existe na base de dados, CPF: {}", termo);
			throw new RuntimeException("CPF nao cadastrado.");
		}
	}
}