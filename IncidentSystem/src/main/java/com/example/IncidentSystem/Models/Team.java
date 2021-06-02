package com.example.IncidentSystem.Models;

import java.io.Serializable;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
@Table(name = "team")
public class Team implements Serializable {

	@Id
	@Column
	private int id;
	
	@Column
	private String name;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "team")
	private Set<Service> services;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "team")
	private Set<Employee> employees;
}
