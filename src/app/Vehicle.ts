import {MainService} from './main.service';
export class Vehicle{
    id:number;
    name:string="";
    type:string="";
    reg:string="";
    area:string="";
    image:string;
    count:number;
    constructor(id:number,name:string,type:string,reg:string,image:string,area:string,count:number)
    {
        this.name=name;
        this.id=id;
        this.type=type;
        this.reg=reg;
        this.image=image;
        this.area=area;
        this.count=count;
        console.log(this.area);
    }
}