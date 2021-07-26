package br.com.devinhouse.backend.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.data.annotation.CreatedDate;


@Entity
public class Assunto implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int id;
	
	@Column(columnDefinition = "varchar(250) NOT NULL")
	private String descricao;
	
	@Column(nullable = false)
	@CreatedDate
	private Date dtcadastro;
	
	@Column(columnDefinition = "char(1) NOT NULL default 'S'")	
	private String flativo;
	
	public Assunto() {
		
	}
	
	public Assunto(int id, String descricao, Date dtcadastro, String flativo) {
		this.id = id;
		this.descricao = descricao;
		this.dtcadastro = dtcadastro;
		this.flativo = flativo;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public Date getDtcadastro() {
		return dtcadastro;
	}
	public void setDtcadastro(Date dtcadastro) {
		this.dtcadastro = dtcadastro;
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
		Assunto other = (Assunto) obj;
		if (id != other.id)
			return false;
		return true;
	}
}
