import User from "./User";
import InsertContract from "../../components/Home/Nav/Items/ProjectManager/InsertContract.vue" 
import Payterms from "../../components/Home/Nav/Items/ProjectManager/Payterms.vue"
export default class ProjectManager extends User{
    constructor(userName: string){
        super(userName);
    }
    protected _buildOptions(): void {
        this._options = [InsertContract,Payterms];
    }
}