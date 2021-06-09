package com.example.IncidentSystem.Repository;

import com.example.IncidentSystem.Models.Permission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PermissionRepository extends JpaRepository <Permission , Long>{

}
