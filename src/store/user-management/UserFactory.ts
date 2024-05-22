import Accounter from "./Accounter";
import Admin from "./Admin";
import HumanResources from "./HumanResources";
import ProjectManager from "./ProjectManager";
import User from "./User";


interface UserFactoryFunctions{
    [key: string]: (name: string) => User;
}

export default class UserFactory{
    private static _functions: UserFactoryFunctions;

    
    public static buildUser(url: string): User{
        if(!UserFactory._functions){
            UserFactory._createFunctions();
        }
        //let userJson = UserFactory._getUserJson(url);
        //return UserFactory._functions[userJson.role](userJson.name);
        //testing function
        let divide: string[] = url.split(' ');
        return UserFactory._functions[divide[0]](divide[1]);
    }
    
    
    // private static _getUserJson(url: string): JSON {
    //     throw new Error("Method not implemented.");
    // }

    private static _createFunctions(){
        UserFactory._functions = {
            'admin': (name: string)=>new Admin(name),
            'accounter': (name: string)=>new Accounter(name),
            'humanResources': (name: string)=>new HumanResources(name),
            'projectManager': (name: string)=>new ProjectManager(name),
        };
    }
}