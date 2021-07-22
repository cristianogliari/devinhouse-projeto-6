package br.com.devinhouse.backend.controllers;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

import java.util.List;

import javax.annotation.security.RolesAllowed;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.devinhouse.backend.entities.Interessado;
import br.com.devinhouse.backend.services.InteressadoService;

@RestController	
@RequestMapping(value = "/interessados/v1", headers = "api-version=v1")
@CrossOrigin
public class InteressadoController {

	@Autowired
	private InteressadoService service;
	
//	9 - Deverá haver um endpoint para cadastro de um interessado;
	
	@RolesAllowed("user-role")
	@RequestMapping(value = "/cadastrar", method = POST, consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.CREATED)
	public Interessado cadastrarInteressadoController(@RequestBody Interessado interessado) {
		return service.cadastrarInteressado(interessado);
	}
	
//	Busca todos os interessados
	@RolesAllowed("user-role")
	@RequestMapping(value = "/buscar", method = GET, produces = APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public List<Interessado> buscarTodosOsInteressados() {
		return service.buscarTodosOsInteressados();
	}
	
//	10 - Deverá haver um endpoint para buscar um interessado baseado na sua identificação única (ID);
	@RolesAllowed("user-role")
	@RequestMapping(value = "/buscar/id/{id}", method = GET, produces = APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public Interessado buscarInteressadoPeloIdController(@PathVariable Integer id) {
		return service.buscarInteressadoPeloId(id);
	}
	
//	11 - Deverá haver um endpoint para buscar um interessado baseado no documento de indentificação (NUIDENTIFICACAO);
	@RolesAllowed("user-role")
	@RequestMapping(value = "/buscar/cpf/{cpf}", method = GET, produces = APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public Interessado buscarInteressadoPeloCpfController(@PathVariable String cpf) {
		return service.buscarInteressadoPeloCpf(cpf);
	}
}

