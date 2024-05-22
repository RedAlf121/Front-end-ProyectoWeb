export default class User{
    protected _userName: string;
    protected _options: any[] = [];
    constructor(userName: string){
        this._userName = userName;
        this._buildOptions();
    }

    public get options(){
        return this._options;
    }

    public get name(){
        return this._userName;
    }
    
    protected _buildOptions(){}
}
