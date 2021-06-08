import { Model } from "./Model";
import { Service } from "./Service";

export interface BusinessRole extends Model{
    name:string;
    description:string;
    services:Service[];
}