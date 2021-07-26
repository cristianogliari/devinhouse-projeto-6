package br.com.devinhouse.backend.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Processo implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column
	private int id;
	
	@Column(columnDefinition = "int NOT NULL")
	private int nuprocesso;
	
	@Column(columnDefinition = "char(4) NOT NULL")
	private String sgorgaosetor;
	
	@Column(columnDefinition = "char(4) NOT NULL")
	private String nuano;
	
	@Column(columnDefinition = "varchar(50) NOT NULL")
	private String chaveprocesso;
	
	@Column(columnDefinition = "varchar(250) NOT NULL")
	private String descricao;

	@OneToOne
	@JoinColumn(name = "assunto_id", nullable = false)
	private Assunto cdassunto;
	
	@ManyToOne
	@JoinColumn(name = "interessado_id", nullable = false)
	private Interessado cdinteressado;
	
	public Processo() {
		
	}
	
	public Processo(int id, int nuprocesso, String sgorgaosetor, String nuano, String chaveprocesso, String descricao,
			Assunto cdassunto, Interessado cdinteressado) {
		this.id = id;
		this.nuprocesso = nuprocesso;
		this.sgorgaosetor = sgorgaosetor;
		this.nuano = nuano;
		this.chaveprocesso = chaveprocesso;
		this.descricao = descricao;
		this.cdassunto = cdassunto;
		this.cdinteressado = cdinteressado;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getNuprocesso() {
		return nuprocesso;
	}

	public void setNuprocesso(int nuprocesso) {
		this.nuprocesso = nuprocesso;
	}

	public String getSgorgaosetor() {
		return sgorgaosetor;
	}

	public void setSgorgaosetor(String sgorgaosetor) {
		this.sgorgaosetor = sgorgaosetor;
	}

	public String getNuano() {
		return nuano;
	}

	public void setNuano(String nuano) {
		this.nuano = nuano;
	}

	public String getChaveprocesso() {
		return chaveprocesso;
	}

	public void setChaveprocesso(String chaveprocesso) {
		this.chaveprocesso = chaveprocesso;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Assunto getCdassunto() {
		return cdassunto;
	}

	public void setCdassunto(Assunto cdassunto) {
		this.cdassunto = cdassunto;
	}

	public Interessado getCdinteressado() {
		return cdinteressado;
	}

	public void setCdinteressado(Interessado cdinteressado) {
		this.cdinteressado = cdinteressado;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Processo other = (Processo) obj;
		if (id != other.id)
			return false;
		return true;
	}	
}
