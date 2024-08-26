import User from "./User";


import ManageContracts from "../../components/Home/Nav/Items/ProjectManager/ManageContracts.vue";
import ManageClients from "../../components/Home/Nav/Items/ProjectManager/ManageClients.vue";
import Payterms from "../../components/Home/Nav/Items/ProjectManager/Payterms.vue"

import InsertContract from "../../components/Home/Nav/Items/ProjectManager/InsertContract.vue" ;
import InsertClient from "../../components/Home/Nav/Items/ProjectManager/InsertClient.vue";

export default class ProjectManager extends User{
    constructor(userName: string){
        super(userName);
    }
    protected _buildOptions(): void {
        this._options = [ManageContracts,
                         InsertContract,
                         Payterms,

                         ManageClients,
                         InsertClient];
    }
} 
