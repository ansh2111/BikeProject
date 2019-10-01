import { Injectable } from '@angular/core';
import {Users} from './Users';
import {Vehicle} from './Vehicle';
import {Price} from './Pricing';
import {Booking} from './Booking';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  users:Users[]=[];
  vehicles:Vehicle[]=[];
  prices:Price[]=[];
  bookings:Booking[]=[];
  discounts={"FLAT50":100, "FLAT15":25,"WOW20":75,"JULY30":50,"WEEKEND25":50};
  regions={"BANGALORE CENTRAL":["MALLESHWARAM", "INDIRA NAGAR", "LANGFORD TOWN"],
  "BANGALORE EASTERN":["BELLANDUR", "MARATHAHALLI", "CV RAMAN NAGAR", "WHITEFIELD", "KUNDALAHALLI"],
  "BANGALORE NORTHERN":["YELAHANKA", "YESHWANTHPUR"],
  "BANGALORE SOUTH-EASTERN":["KORMANGALA", "BOMANNAHALLI", "BTM STAGE 2", "ELECTRONIC CITY", "HSR LAYOUT"],
  "BANGALORE SOUTHERN":["JAYANAGAR", "JP NAGAR","KUMARASWAMY LAYOUT", "RICHMOND TOWN", "BANASHANKARI", "BANNERGHATTA"],
  "BANGALORE WESTERN":["NAGARBHAVI 2ND STAGE", "VIJAYANAGAR"]
};
types=["Scooter","Standard","Sports","Cruiser"];
  currentuser;
  vid=1;
  bid=1;
  constructor() {
    this.users.push(new Users("anant","customer","anantsharma2111@gmail.com","1234","ansh",9413991998));
    this.users.push(new Users("alfran","customer","alfran@gmail.com","12345","abcd",9413991998));
    this.users.push(new Users("pike smith","admin","admin@gmail.com","admin1001","admin1001",9413919999));
   

    this.vehicles.push(new Vehicle(51,"Honda Activa","Scooter","BANGALORE CENTRAL","C:/fakepath/honda_activa.jpg","MALLESHWARAM",5));
    this.vehicles.push(new Vehicle(51,"Honda Activa","Scooter","BANGALORE CENTRAL","C:/fakepath/honda_activa.jpg","INDIRA NAGAR",3));
      this.vehicles.push(new Vehicle(53,"Honda Activa","Scooter","BANGALORE CENTRAL","C:/fakepath/honda_activa.jpg","LANGFORD TOWN",1));
     this.vehicles.push(new Vehicle(54,"Honda Shine","Standard","BANGALORE CENTRAL","C:/fakepath/honda_shine.jpeg","LANGFORD TOWN",10));
     this.vehicles.push(new Vehicle(55,"Honda Shine","Standard","BANGALORE CENTRAL","C:/fakepath/honda_shine.jpeg","INDIRA NAGAR",3));
    //  this.vehicles.push(new Vehicle(56,"Yamaha R15","Sports","BANGALORE CENTRAL","C:/fakepath/yamaha_r15.jpeg","INDIRA NAGAR",13));
     this.vehicles.push(new Vehicle(57,"Harley Davidson Superlow","Cruiser","BANGALORE CENTRAL","C:/fakepath/harleydavidson_superlow.jpeg","INDIRA NAGAR",1));
      this.vehicles.push(new Vehicle(58,"Harley Davidson Superlow","Cruiser","BANGALORE CENTRAL","C:/fakepath/harleydavidson_superlow.jpeg","LANGFORD TOWN",2));
     this.vehicles.push(new Vehicle(59,"Harley Davidson Superlow","Cruiser","BANGALORE CENTRAL","C:/fakepath/harleydavidson_superlow.jpeg","MALLESHWARAM",1));
     this.vehicles.push(new Vehicle(61,"Honda Dio","Scooter","BANGALORE CENTRAL","C:/fakepath/honda_dio.jpg","MALLESHWARAM",2));


    this.prices.push(new Price("Honda Activa",40,20,1,0));
    this.prices.push(new Price("Honda Dio",37,20,1.5,0.5));
    this.prices.push(new Price("Honda Shine",60,25,1.5,1));
    this.prices.push(new Price("Yamaha R15",100,35,3.5,2.5));
    this.prices.push(new Price("Harley Davidson Superlow",120,50,5,4));
   
    this.bookings.push(new Booking(11,"ansh","abc sharma","Honda Activa","RJ142422","MALLESHWARAM", "08/07/2019, 00:00", "08/07/2019, 00:30", "BOOKED", 40));
    this.bookings.push(new Booking(12,"ansh","john gibbs","Honda Activa","RJ142111","MALLESHWARAM", "09/07/2019, 00:00", "09/07/2019, 00:30", "BOOKED", 40));
    // this.bookings.push(new Booking(11,"ansh","mike smith","Honda Activa","RJ149000","MALLESHWARAM", "09/08/2019, 00:00", "09/08/2019, 00:30", "BOOKED", 40));
     this.bookings.push(new Booking(13,"abcd","john gibbs","Honda Activa","RJ142111","MALLESHWARAM", "09/07/2019, 00:00", "09/07/2019, 00:30", "BOOKED", 40));  
    
  }

  dispusers(){
    //alert(this.users[1].name+this.users[1].username+this.users[1].email+this.users[1].mobile);
  }
  search(username:string){
    for(var i=0;i<this.users.length;i++)
    {
      if(this.users[i].username==username)
        return this.users[i];
    }
    return null;
  }
  delete(username:string){
    for(var i=0;i<this.users.length;i++)
    {
      if(this.users[i].username==username)
        delete this.users[i];
    }
  }
  searchvehicle(x:string,y:string,z:string)
  {
    for(var i=0;i<this.vehicles.length;i++)
    {
      if(this.vehicles[i].name==x && this.vehicles[i].reg==y && this.vehicles[i].area==z)
      {
          return this.vehicles[i];
      }
      return null;
    }
  }
  dispvehicle(){
    for(var i=0;i<this.vehicles.length;i++)
    {
      {
        console.log(this.vehicles[i].count+" "+this.vehicles[i].area);
      }
    }
  }
  searchvehicleprice(vn)
  {
    for(var i=0;i<this.prices.length;i++)
    {
     if(this.prices[i].vname==vn)
     {
       return this.prices[i];
     }
     return null;
    }
  }
}
