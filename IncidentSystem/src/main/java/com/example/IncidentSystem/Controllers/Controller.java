package com.example.IncidentSystem.Controllers;

import com.example.IncidentSystem.Models.Incident;
import com.example.IncidentSystem.Repository.IncidentLogRepository;
import com.example.IncidentSystem.Repository.IncidentRepository;
import com.example.IncidentSystem.Repository.ServiceRepository;
import com.example.IncidentSystem.Services.IncidentService;
import com.example.IncidentSystem.dto.ServiceDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.xml.bind.ValidationException;

@RestController
@RequestMapping("service/")
public class Controller {



    @PostMapping("openIncident")
    public ResponseEntity<?> openIncident(@RequestBody ServiceDTO requestService, BindingResult br) {
        IncidentService.openIncident(requestService);
        return ResponseEntity.status(HttpStatus.OK).body("OK");
    }

    @PostMapping("AllIncidents")
    public ResponseEntity<?> GetAllIncidents() {
        IncidentService.GetAllIncidents();
        return ResponseEntity.status(HttpStatus.OK).body("OK");
    }

    @PostMapping("Incident")
    public ResponseEntity<?> Incident(@RequestParam Long incident, BindingResult br) {
        Incident selectedIncident = IncidentService.GetIncident(incident);
        return ResponseEntity.status(HttpStatus.OK).body("OK");
    }




}
