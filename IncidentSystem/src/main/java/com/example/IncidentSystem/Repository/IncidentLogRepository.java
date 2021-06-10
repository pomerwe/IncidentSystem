package com.example.IncidentSystem.Repository;

import com.example.IncidentSystem.Models.IncidentLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface IncidentLogRepository extends JpaRepository<IncidentLog , Long> {

    @Transactional(readOnly = true)
    List<IncidentLog> findAllById (Integer id);
}
