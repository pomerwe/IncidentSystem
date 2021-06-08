package com.example.IncidentSystem.Models;

import javax.persistence.*;

import com.example.IncidentSystem.Models.Enums.IncidentStatus;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "incident")
public class Incident implements Serializable {

    @Id
    @Column
    private long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "request_employee_id")
    private Employee request_employee;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "resolve_employee_id")
    private Employee resolve_employee;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "service_id")
    private Service service;

    @Column
	@Enumerated(EnumType.STRING)
    private IncidentStatus status;

    @Column
    private LocalDateTime create_date;

    @Column
    private LocalDateTime finish_date;

    @Column
    private String description;

    @Column
    private boolean approved;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "approve_employee_id")
    private Employee approve_employee;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "incident")
	private Set<IncidentAttachments> attachments;
}
