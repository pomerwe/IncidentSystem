import { Model } from "./Model";
import { Service } from "./Service";

export interface Team extends Model{
    name:string;
    services:Service[];
}