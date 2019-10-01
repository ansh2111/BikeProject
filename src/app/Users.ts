export class Users{
    name:string="";
    type:string="";
    email:string;
    password:string;
    username:string;
    mobile:number;
    constructor(name:string,type:string,email:string,password:string,username:string,mobile:number)
    {
        this.name=name;
        this.email=email;
        this.mobile=mobile;
        this.type=type;
        this.username=username;
        this.password=password;
    }
    getPass(){
        return this.password;
    }
    setPass(p:string){
        this.password=p;
    }
}