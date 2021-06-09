package com.example.IncidentSystem.Repository;

import com.example.IncidentSystem.Models.Incident;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IncidentRepository extends JpaRepository<Incident, Long> {

}