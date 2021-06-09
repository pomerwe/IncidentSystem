import { Employee } from "./Employee";
import { IncidentStatus } from "./enum/IncidentStatus";
import { IncidentAttachments } from "./IncidentAttachments";
import { Model } from "./Model";
import { Service } from "./Service";

export interface Incident extends Model{
    service:Service;
    status:IncidentStatus;
    create_date:Date;
    finish_date:Date | null;
    description:string;
    approved:boolean;
    attachments:IncidentAttachments[];
    request_employee:Employee;
    resolve_employee:Employee;
}