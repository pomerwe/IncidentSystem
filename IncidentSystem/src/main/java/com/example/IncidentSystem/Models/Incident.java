package com.example.IncidentSystem.Models;

import org.apache.catalina.Service;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "incident")
public class Incident {

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
    private String status;

    @Column
    private Date create_date;

    @Column
    private Date finish_date;

    @Column
    private String description;

    @Column
    private String approved;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "approve_employee_id")
    private Employee ApproveEmployee;

}
