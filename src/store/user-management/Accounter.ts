import User from "./User";
import RecieveActual from '../../components/Home/Nav/Items/Accounting/RecieveActual.vue';
import RecieveMonth from '../../components/Home/Nav/Items/Accounting/RecieveMonth.vue';
import Remuneration from '../../components/Home/Nav/Items/Accounting/Remuneration.vue';

export default class Accounter extends User{
    constructor(userName: string){
        super(userName);
    }
    protected _buildOptions(): void {
        this._options = [RecieveActual,RecieveMonth,Remuneration];
    }
}