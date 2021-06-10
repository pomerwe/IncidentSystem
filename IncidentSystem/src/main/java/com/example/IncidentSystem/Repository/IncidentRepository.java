package com.example.IncidentSystem.Repository;

import com.example.IncidentSystem.Models.Incident;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


@Repository
public interface IncidentRepository extends JpaRepository<Incident, Long> {

    @Transactional(readOnly = true)
    Incident findByIncidentId (Long id);

    @Transactional(readOnly = true)
    List<Incident> findAll ();
}