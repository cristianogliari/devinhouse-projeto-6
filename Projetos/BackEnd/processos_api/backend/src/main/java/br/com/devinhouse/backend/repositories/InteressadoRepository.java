package br.com.devinhouse.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.devinhouse.backend.entities.Interessado;

@Repository
public interface InteressadoRepository extends JpaRepository<Interessado, Integer> {
//	Uso de mapeamento de ojeto relacional usando a especificação JPA;
	public Interessado findByNuidentificacao(String nuidentificacao);
}
