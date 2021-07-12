package br.com.devinhouse.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devinhouse.backend.entities.Interessado;
import br.com.devinhouse.backend.repositories.InteressadoRepository;

@Service
public class InteressadoService {

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
			throw new RuntimeException("CPF ja possui cadastro.");
		}
	};

	public Interessado buscarInteressadoPeloId(Integer id) {
		Interessado encontrado = repository.findById(id).get();

		return encontrado;
	}

	public Interessado buscarInteressadoPeloCpf(String termo) {
		Interessado interessadoEncontrado = repository.findByNuidentificacao(termo);
		
		if(verificarCadastroNuidentificacao(interessadoEncontrado.getNuidentificacao())) {
			return interessadoEncontrado;
		} else {
			throw new RuntimeException("CPF nao cadastrado.");
		}
	}
}