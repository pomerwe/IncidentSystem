package com.example.IncidentSystem.Models;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.example.IncidentSystem.Models.Enums.Priority;

@Entity
@Table(name = "service")
public class Service implements Serializable {
	
	@Id
	@Column
	private int id;
	
	@Column
	private String name;
	
	@Column
	private String description;
	
	@Column
	@Enumerated(EnumType.STRING)
	private Priority priority;
	
	@Column
	private int ServiceLevelAgreement;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "team_id")
	private Team team;
	
	@ManyToMany
	@JoinTable(
	  name = "service_approver_roles", 
	  joinColumns = @JoinColumn(name = "service_id"), 
	  inverseJoinColumns = @JoinColumn(name = "business_role_id"))
	private Set<BusinessRole> approver_roles;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "service")
	private Set<Incident> incident; 
}
