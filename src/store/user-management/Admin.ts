import User from "./User";
import AddUser from '../../components/Home/Nav/Items/Admin/AddUser.vue';
import UserFactory from "./UserFactory";

export default class Admin extends User{
    constructor(userName: string){
        super(userName);
    }
    protected _buildOptions(): void {
        const options = Object.keys(UserFactory.functions);
        this._options = options.map((key)=>(key!=="admin")? UserFactory.functions[key](this._userName).options : []).flat();
        this._options.push(AddUser);
    }
}