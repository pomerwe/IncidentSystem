import { BusinessRole } from "./BusinessRole";
import { Incident } from "./Incident";
import { Model } from "./Model";
import { SystemRole } from "./SystemRole";
import { Team } from "./Team";

export interface Employee extends Model{
    name:string;
    team:Team;
    system_role:SystemRole;
    business_role:BusinessRole;
    requests:Incident[];
    attributed_incidents:Incident[];
}