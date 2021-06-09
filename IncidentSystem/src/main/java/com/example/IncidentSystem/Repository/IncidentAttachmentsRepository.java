package com.example.IncidentSystem.Repository;

import com.example.IncidentSystem.Models.IncidentAttachments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IncidentAttachmentsRepository extends JpaRepository <IncidentAttachments, Long> {
}

