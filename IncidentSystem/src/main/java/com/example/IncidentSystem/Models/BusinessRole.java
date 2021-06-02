package com.example.IncidentSystem.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "business_role")
public class BusinessRole implements Serializable {
	
	@Id
	@Column
	private int id;

	@Column
	private String name;

	@Column
	private String description;
}
