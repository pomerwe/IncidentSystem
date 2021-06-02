package com.example.IncidentSystem.Models;
import java.io.Serializable;
import java.sql.Blob;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Id;

@Entity
@Table(name = "incident_attachments")
public class IncidentAttachments implements Serializable{
	@Id
	private long id;

	@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "incident_id")
	private Incident incident;

	@Lob
	@Column( name = "FILEIMAGE" )
	private Blob file; 
}
