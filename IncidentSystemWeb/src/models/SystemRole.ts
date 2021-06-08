import { Model } from "./Model";
import { Permission } from "./Permission";

export interface SystemRole extends Model{
    name:string;
    description:string;
    permissions:Permission[];
}