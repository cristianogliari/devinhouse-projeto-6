package br.com.devinhouse.backend.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.validator.constraints.br.CPF;

@Entity
public class Interessado implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column
	private int id;
	
	@Column(columnDefinition = "varchar(250) NOT NULL")
	private String nminteressado;
	
	@Column(columnDefinition = "varchar(50) NOT NULL")
	@CPF
	private String nuidentificacao;
	
	@Column(nullable = false)
	private Date dtnascimento;
	
	@Column(columnDefinition = "char(1) NOT NULL default 'S'")
	private String flativo;
	
	public Interessado() {
		
	}
	
	public Interessado(int id, String nminteressado, String nuidentificacao, Date dtnascimento, String flativo) {
		this.id = id;
		this.nminteressado = nminteressado;
		this.nuidentificacao = nuidentificacao;
		this.dtnascimento = dtnascimento;
		this.flativo = flativo;
	}
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getNminteressado() {
		return nminteressado;
	}
	
	public void setNminteressado(String nminteressado) {
		this.nminteressado = nminteressado;
	}
	
	public String getNuidentificacao() {
		return nuidentificacao;
	}
	
	public void setNuidentificacao(String nuidentificacao) {
		this.nuidentificacao = nuidentificacao;
	}
	
	public Date getDtnascimento() {
		return dtnascimento;
	}
	
	public void setDtnascimento(Date dtnascimento) {
		this.dtnascimento = dtnascimento;
	}
	
	public String getFlativo() {
		return flativo;
	}
	
	public void setFlativo(String flativo) {
		this.flativo = flativo;
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
		Interessado other = (Interessado) obj;
		if (id != other.id)
			return false;
		return true;
	}
}
