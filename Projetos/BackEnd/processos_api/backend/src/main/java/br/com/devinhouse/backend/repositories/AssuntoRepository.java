package br.com.devinhouse.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.devinhouse.backend.entities.Assunto;

@Repository
public interface AssuntoRepository extends JpaRepository<Assunto, Integer> {
	//	Uso de mapeamento de ojeto relacional usando a especificação JPA;
}