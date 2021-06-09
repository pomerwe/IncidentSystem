package com.example.IncidentSystem.Repository;

import com.example.IncidentSystem.Models.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceRepository extends JpaRepository <Service , Long > {
}
