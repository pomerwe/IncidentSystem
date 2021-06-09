import { Priority } from "./enum/Priority";
import { Model } from "./Model";

export interface Service extends Model{
    name:string;
    description:string;
    priority:Priority;
    serviceLevelAgreement:number;
}