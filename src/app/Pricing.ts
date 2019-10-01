export class Price{
    vname:string;
    cost:number;
    freekm:number;
    extrakm:number;
    extrahrs:number;
    constructor(vname:string,cost:number,freekm:number,extrakm:number,extrahrs:number)
    {
        this.vname=vname;
        this.cost=cost;
        this.freekm=freekm;
        this.extrakm=extrakm;
        this.extrahrs=extrahrs;
    }
}