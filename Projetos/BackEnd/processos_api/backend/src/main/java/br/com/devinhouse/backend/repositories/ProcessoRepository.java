package br.com.devinhouse.backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.devinhouse.backend.entities.Assunto;
import br.com.devinhouse.backend.entities.Interessado;
import br.com.devinhouse.backend.entities.Processo;

@Repository
public interface ProcessoRepository extends JpaRepository<Processo, Integer>{
	public Processo findByChaveprocesso(String chaveprocesso);
	public List<Processo> findByCdinteressado(Interessado cdinteressado);
	public List<Processo> findByCdassunto(Assunto cdassunto);
	
//	Uso de mapeamento de ojeto relacional usando a especificação JPA;
}
