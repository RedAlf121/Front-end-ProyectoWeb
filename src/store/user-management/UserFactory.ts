import axios from "axios";
import Accounter from "./Accounter";
import Admin from "./Admin";
import HumanResources from "./HumanResources";
import ProjectManager from "./ProjectManager";
import User from "./User";
import { jwtDecode, JwtPayload } from "jwt-decode";

export interface UserFactoryFunctions{
    [key: string]: (name: string) => User;
}
interface UserData{
    [key: string]: string;
}

export default class UserFactory{
    public static functions: UserFactoryFunctions;

    public static buildUserByRole(name:string,role:string){
        return this.functions[role](name);
    }
    
    public static async buildUser(url: string,username:string,password:string): Promise<any>{
        if(!UserFactory.functions){
            UserFactory._createFunctions();
        }
        let tokens = await this._getUserJson(url,username,password);
        const decoded: any = jwtDecode(tokens.data.access);
        console.log(decoded);
        let userdata: UserData = {
            "username": decoded.name,
            "role": decoded.role
        }
        return {
            "user": UserFactory.functions[userdata["role"]](userdata["username"]),
            "token": tokens.data
        };
    }
    
    
    private static async _getUserJson(url: string, username: string, password: any): Promise<any> {
        let response = {}
        try{
            const token = await axios.post(url,{
                "username": username,
                "password": password
            });
            response = token;
        }catch(e){
            console.error(e);
            response = {
                "error": e
            };
        }
        return response;
    }

    private static _createFunctions(){
        UserFactory.functions = {
            'admin': (name: string)=>new Admin(name),
            'accounter': (name: string)=>new Accounter(name),
            'humanResources': (name: string)=>new HumanResources(name),
            'projectManager': (name: string)=>new ProjectManager(name),
        };
    }
}