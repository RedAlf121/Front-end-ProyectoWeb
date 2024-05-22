import User from "./User";
import DashBoardItem from '../../components/Home/Nav/Items/DashBoardItem.vue';
export default class Accounter extends User{
    constructor(userName: string){
        super(userName);
    }
    protected _buildOptions(): void {
        this._options = [DashBoardItem,DashBoardItem,DashBoardItem];
    }
}