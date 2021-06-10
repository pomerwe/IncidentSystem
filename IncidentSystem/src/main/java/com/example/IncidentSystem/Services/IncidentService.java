package com.example.IncidentSystem.Services;

import com.example.IncidentSystem.dto.IncidentDTO;
import com.example.IncidentSystem.Models.Incident;
import com.example.IncidentSystem.Models.Service;
import com.example.IncidentSystem.Repository.IncidentLogRepository;
import com.example.IncidentSystem.Repository.IncidentRepository;
import com.example.IncidentSystem.Repository.ServiceRepository;
import com.example.IncidentSystem.dto.ServiceDTO;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class IncidentService {

	@Autowired
	static
	ServiceRepository serviceRepository;

	@Autowired
	static
	IncidentRepository incidentRepository;

	@Autowired
	IncidentLogRepository incidentLogRepository;

	public static void openIncident(ServiceDTO serviceDTO) {
		Incident newIncident = new Incident();

		Service selectedService = serviceRepository.findByServiceId(serviceDTO.id);

		boolean needApproval = selectedService.needApproval();

		newIncident.setApproved(needApproval ? false : true);
	}

	public void cancelIncident() {

	}

	public void escalateIncident(IncidentDTO escalateIncidentDTO) {
		/*idIncident
		employeeId*/
	}

	public void finishIncident() {

	}

	public void updateIncident() {

	}

	public static List<Incident> GetAllIncidents() {
		List<Incident> incidentList = incidentRepository.findAll();
		return incidentList;
	}

	public static Incident GetIncident(long incidentId) {
		Incident selectedIncident = incidentRepository.findByIncidentId(incidentId);
		return selectedIncident;
	}
}





