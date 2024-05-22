import User from "./User";
import DashBoardItem from '../../components/Home/Nav/Items/DashBoardItem.vue';
import AnotherTestItem from '../../components/Home/Nav/Items/AnotherTestItem.vue';

export default class Admin extends User{
    constructor(userName: string){
        super(userName);
    }
    protected _buildOptions(): void {
        this._options = [AnotherTestItem,DashBoardItem,DashBoardItem];
    }
}