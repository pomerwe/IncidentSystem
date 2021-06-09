package com.example.IncidentSystem.Repository;

import com.example.IncidentSystem.Models.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
public interface ServiceRepository extends JpaRepository <Service , Integer > {

    @Transactional(readOnly = true)
    Service findFirstById (Integer id);

}
