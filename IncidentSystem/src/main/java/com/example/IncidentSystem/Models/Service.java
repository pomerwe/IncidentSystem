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

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Priority getPriority() {
		return priority;
	}

	public void setPriority(Priority priority) {
		this.priority = priority;
	}

	public int getServiceLevelAgreement() {
		return ServiceLevelAgreement;
	}

	public void setServiceLevelAgreement(int serviceLevelAgreement) {
		ServiceLevelAgreement = serviceLevelAgreement;
	}

	public Team getTeam() {
		return team;
	}

	public void setTeam(Team team) {
		this.team = team;
	}

	public Set<BusinessRole> getApprover_roles() {
		return approver_roles;
	}

	public void setApprover_roles(Set<BusinessRole> approver_roles) {
		this.approver_roles = approver_roles;
	}

	public Set<Incident> getIncident() {
		return incident;
	}

	public void setIncident(Set<Incident> incident) {
		this.incident = incident;
	} 
	
	public boolean needApproval()
	{
		return this.approver_roles.size() > 0;
	}
}
