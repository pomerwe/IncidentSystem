package com.example.IncidentSystem.dto;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

@Data
public class IncidentDTO {

    public long id;
    public String request_employee;
    public String resolve_employee;
    public String service;
    public String status;
    public Data create_date;
    public Data finish_date;
    public String description;
    public boolean approved;
    public String approve_employee;
}
