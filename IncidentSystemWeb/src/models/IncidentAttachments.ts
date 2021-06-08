import { Model } from "./Model";

export interface IncidentAttachments extends Model{
    file:Blob;
}