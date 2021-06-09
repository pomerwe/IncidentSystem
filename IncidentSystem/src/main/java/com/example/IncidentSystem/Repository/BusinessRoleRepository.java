package com.example.IncidentSystem.Repository;

import com.example.IncidentSystem.Models.BusinessRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BusinessRoleRepository extends JpaRepository<BusinessRole, Integer> {

}