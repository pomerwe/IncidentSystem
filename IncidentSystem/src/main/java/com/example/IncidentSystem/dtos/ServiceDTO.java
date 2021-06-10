package com.example.IncidentSystem.dto;

import com.example.IncidentSystem.Models.Enums.Priority;
import com.example.IncidentSystem.Models.Team;

import javax.persistence.*;

public class ServiceDTO {

    public Integer id;
    public String name;
    public String description;
    public Priority priority;
    public int ServiceLevelAgreement;
    public Team team;
}
