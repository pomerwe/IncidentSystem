package com.example.IncidentSystem.Repository;

import com.example.IncidentSystem.Models.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamRepository extends JpaRepository <Team , Long> {

}
