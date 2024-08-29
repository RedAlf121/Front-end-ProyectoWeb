import User from "./User";


import ManageWorkers from '../../components/Home/Nav/Items/HumanResources/ManageWorkers.vue';
import AddCategory from '../../components/Home/Nav/Items/HumanResources/AddCategory.vue';

export default class HumanResources extends User{
    constructor(userName: string){
        super(userName);
    }
    protected _buildOptions(): void {
        this._options = [ManageWorkers,AddCategory];
    }
}
