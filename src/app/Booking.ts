export class Booking{
    bid:number;
    user:string;
    vehicle:string;
    pickup:string;
    pickuptime:string;
    dropofftime:string;
    status:string;
    rider:string;
    license:string;
    amount:number;
    constructor(bid:number,user:string,rider:string,vehicle:string,license:string,pickup:string,pickuptime:string,dropofftime:string,status:string,amount:number)
    {
        this.bid=bid;
        this.dropofftime=dropofftime;
        this.license=license;
        this.pickup=pickup;
        this.pickuptime=pickuptime;
        this.rider=rider;
        this.status=status;
        this.user=user;
        this.vehicle=vehicle;
        this.amount=amount;
    }
}