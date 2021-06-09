package com.example.IncidentSystem.Services;

import com.example.IncidentSystem.Models.Incident;
import com.example.IncidentSystem.Models.Service;
import com.example.IncidentSystem.Repository.ServiceRepository;

import java.util.List;

public class IncidentService {

	//Repositories necessarios
	// IncidentRepository
	// ServiceRepository
	// IncidentLogRepository
	
	
	public void openIncident(){
		Incident newIncident = new Incident();
		
		Service selectedService = ServiceRepository.findFirstById(dto.Service.id);
				
		boolean needApproval = selectedService.needApproval();
	
		newIncident.setApproved(needApproval ? false : true);
	}
	
	public void cancelIncident(){
		
	}
	
	public void escalateIncident(EscalateIncidentDTO){
		idIncident 
		employeeId

	}
	
	public void finishIncident() {
		
	}
	
	public void updateIncident() {
		
	}
	
	public List<Incident> GetAllIncidents()
	{
		
	}
	
	public Incident GetIncident(long incidentId)
	{
		
	}
}
