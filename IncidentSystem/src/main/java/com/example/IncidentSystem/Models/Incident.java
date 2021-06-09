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
    

    public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Employee getRequest_employee() {
		return request_employee;
	}

	public void setRequest_employee(Employee request_employee) {
		this.request_employee = request_employee;
	}

	public Employee getResolve_employee() {
		return resolve_employee;
	}

	public void setResolve_employee(Employee resolve_employee) {
		this.resolve_employee = resolve_employee;
	}

	public Service getService() {
		return service;
	}

	public void setService(Service service) {
		this.service = service;
	}

	public IncidentStatus getStatus() {
		return status;
	}

	public void setStatus(IncidentStatus status) {
		this.status = status;
	}

	public LocalDateTime getCreate_date() {
		return create_date;
	}

	public void setCreate_date(LocalDateTime create_date) {
		this.create_date = create_date;
	}

	public LocalDateTime getFinish_date() {
		return finish_date;
	}

	public void setFinish_date(LocalDateTime finish_date) {
		this.finish_date = finish_date;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isApproved() {
		return approved;
	}

	public void setApproved(boolean approved) {
		this.approved = approved;
	}

	public Employee getApprove_employee() {
		return approve_employee;
	}

	public void setApprove_employee(Employee approve_employee) {
		this.approve_employee = approve_employee;
	}

	public Set<IncidentAttachments> getAttachments() {
		return attachments;
	}

	public void setAttachments(Set<IncidentAttachments> attachments) {
		this.attachments = attachments;
	}
}
