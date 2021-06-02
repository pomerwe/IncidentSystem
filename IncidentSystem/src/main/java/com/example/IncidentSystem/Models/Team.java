package com.example.IncidentSystem.Models;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
@Table(name = "Team")
public class Team {

	@Id
	@Column
	private int id;
	
	@Column
	private String name;
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "team")
	private Set<Service> services;
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "team")
	@JsonIgnore
	private Set<Employee> employees;
}
