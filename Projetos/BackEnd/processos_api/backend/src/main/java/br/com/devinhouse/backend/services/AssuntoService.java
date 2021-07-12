package br.com.devinhouse.backend.services;

import org.springframework.stereotype.Service;

import br.com.devinhouse.backend.entities.Assunto;
import br.com.devinhouse.backend.repositories.AssuntoRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;


@Service
public class AssuntoService {
	
	@Autowired
	private AssuntoRepository repository;
	
	private boolean verificarExistenciaAssunto(Integer id) {
		List<Assunto> todosOsAssuntos = repository.findAll();
		boolean status = false;
		
		for(Assunto each : todosOsAssuntos) {
			if(id.equals(each.getId())) {
				status = true;
			}
		}
		
		return status;
	}
	
	public Assunto cadastrarAssunto(Assunto assunto) {
		assunto.setFlativo("S");
		return repository.save(assunto);
	}
	
	public List<Assunto> buscarTodosOsAssuntos() {
		return repository.findAll();
	}
	
	public Assunto buscarAssuntoPeloId(Integer id) {
		if(verificarExistenciaAssunto(id)) {
			Assunto encontrado = repository.findById(id).get();
			return encontrado;			
		} else {
			throw new RuntimeException("Assunto não localizado.");	
		}
	}
}