import { Employee } from "src/models/Employee";
import { IncidentAttachments } from "src/models/IncidentAttachments";
import { Service } from "src/models/Service";

export interface IncidentInsertDTO{
    service:Service;
    description:string;
    attachments:IncidentAttachments[];
    request_employee:Employee;
}