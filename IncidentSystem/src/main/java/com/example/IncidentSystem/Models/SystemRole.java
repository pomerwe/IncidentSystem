package com.example.IncidentSystem.Models;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "system_role")
public class SystemRole implements Serializable{
	
	@Id
	@Column
	private int id;

	@Column
	private String name;

	@Column
	private String description;
	
	@ManyToMany
	@JoinTable(
	  name = "role_permissions", 
	  joinColumns = @JoinColumn(name = "system_role_id"), 
	  inverseJoinColumns = @JoinColumn(name = "permission_id"))
	private Set<Permission> permissions;
}
