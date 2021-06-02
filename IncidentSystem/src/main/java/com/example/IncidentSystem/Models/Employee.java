package com.example.IncidentSystem.Models;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name = "employee")
public class Employee implements Serializable {

	@Id
	@Column
	private int id;
	
	@Column
	private String name;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "team_id")
	private Team team;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "system_role_id")
	private SystemRole system_role;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "team_id")
	private BusinessRole business_role;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "request_employee")
	private Set<Incident> requests;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "resolve_employee")
	private Set<Incident> attributed_incidents;
}
