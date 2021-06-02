package com.example.IncidentSystem.Models;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "permission")
public class Permission implements Serializable {
	
	@Id
	@Column
	private int id;

	@Column
	private String tag;
	
	@ManyToMany(mappedBy = "permissions")
	private Set<SystemRole> system_roles;
}
