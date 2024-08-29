import User from "./User";


import ManageContracts from "../../components/Home/Nav/Items/ProjectManager/ManageContracts.vue";
import ManageClients from "../../components/Home/Nav/Items/ProjectManager/ManageClients.vue";
import Payterms from "../../components/Home/Nav/Items/ProjectManager/Payterms.vue"


export default class ProjectManager extends User {
    constructor(userName: string) {
        super(userName);
    }
    protected _buildOptions(): void {
        this._options = [ManageContracts,
            Payterms,
            ManageClients];
    }
} 
