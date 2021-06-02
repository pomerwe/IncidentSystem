package com.example.IncidentSystem.Models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "incident")
public class IncidentLog implements Serializable {

    @Id
    @Column
    private long id;

    @Column
    private Date log_date;
    
    @Column
    private int request_employee_id;

    @Column
    private int resolve_employee_id;

    @Column
    private int service_id;

    @Column
    private String status;

    @Column
    private String description;

    @Column
    private String approved;

    @Column
    private int approve_employee_id;

}
