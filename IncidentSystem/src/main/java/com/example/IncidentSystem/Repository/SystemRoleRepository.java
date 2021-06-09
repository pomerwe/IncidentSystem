package com.example.IncidentSystem.Repository;

import com.example.IncidentSystem.Models.SystemRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SystemRoleRepository extends JpaRepository <SystemRole , Long>{

}
