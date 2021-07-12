package br.com.devinhouse.backend.controllers;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

import br.com.devinhouse.backend.entities.Assunto;
import br.com.devinhouse.backend.services.AssuntoService;

@RestController
@RequestMapping(value = "/assuntos/v1", headers = "api-version=v1")
public class AssuntoController {

	@Autowired
	private AssuntoService service;

	@RequestMapping(value = "/cadastrar", method = POST, consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.CREATED)
	public Assunto cadastrarAssunto(@RequestBody Assunto assunto) {
		return service.cadastrarAssunto(assunto);
	}
	
	@RequestMapping(value = "/buscar", method = GET, produces = APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public List<Assunto> buscarTodosOsAssuntosController() {
		return service.buscarTodosOsAssuntos();
	}
	
	@RequestMapping(value = "/buscar/id/{id}", method = GET, produces = APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public Assunto buscarAssuntoPeloId(@PathVariable Integer id) {
		return service.buscarAssuntoPeloId(id);
	}
}