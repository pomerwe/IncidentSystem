package com.example.IncidentSystem.Services;

import com.example.IncidentSystem.Models.Incident;
import com.example.IncidentSystem.Models.Service;
import com.example.IncidentSystem.Repository.IncidentLogRepository;
import com.example.IncidentSystem.Repository.IncidentRepository;
import com.example.IncidentSystem.Repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class IncidentService {

	@Autowired
	ServiceRepository serviceRepository;

	@Autowired
	IncidentRepository incidentRepository;

	@Autowired
	IncidentLogRepository incidentLogRepository;
	
	public void openIncident(){
		Incident newIncident = new Incident();
		
		Service selectedService = serviceRepository.findById(dto.Service.id);

		boolean needApproval = selectedService.needApproval();
	
		newIncident.setApproved(needApproval ? false : true);
	}
	
	public void cancelIncident(){
		
	}
	
	public void escalateIncident(EscalateIncidentDTO){
		/*idIncident
		employeeId*/

	}
	
	public void finishIncident() {
		
	}
	
	public void updateIncident() {
		
	}
	
	public List<Incident> GetAllIncidents() {
		List<Incident> incidentList = incidentRepository.findAll();
		return null;
	}
	
	public Incident GetIncident(long incidentId){
		Incident selectedIncident = incidentRepository.findById(incidentId);
		return null;
	}
}
