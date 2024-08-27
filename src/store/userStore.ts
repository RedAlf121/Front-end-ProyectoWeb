import UserFactory from "./user-management/UserFactory";
import { jwtDecode } from "jwt-decode";
class UserStore {
    #token;
    #refreshToken;

    constructor() {
        this.#loadUserData();
    }

    get userName() {
        const username = this.decodeToken();
        return username.name;
    }

    private decodeToken() {
        if (this.#token === '')
            throw Error('Void token');
        const user: any = jwtDecode(this.#token);
        return user;
    }

    get userOptions() {
        const user = this.decodeToken();
        return UserFactory.buildUserByRole(user.name,user.role).options;
    }

    get token() {
        return this.#token;
    }

    set token(value) {
        this.#token = value;
        this.#saveUserData();
    }

    get refreshToken() {
        return this.#refreshToken;
    }

    set refreshToken(value) {
        this.#refreshToken = value;
        this.#saveUserData();
    }

    #loadUserData() {
        const userData = localStorage.getItem('userData');
        if(!userData){
            this.#token='';
            this.#refreshToken='';
            this.#saveUserData();
        }else{
            const jsonData = JSON.parse(userData);
            this.#token=jsonData.token;
            this.#refreshToken=jsonData.refreshToken;
            
        }
    }

    #saveUserData() {
        const userData = {
            token: this.#token,
            refreshToken: this.#refreshToken
        };
        localStorage.setItem('userData', JSON.stringify(userData));
    }

    clearUserData() {
        localStorage.removeItem('userData');
        this.#token = null;
        this.#refreshToken = null;
    }
}

const userStoreInstance = new UserStore();

export default userStoreInstance;