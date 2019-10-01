import { Component, OnInit } from '@angular/core';
import  {MainService} from './../main.service';
import { Vehicle } from '../Vehicle';
import {FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addv',
  templateUrl: './addv.component.html',
  styleUrls: ['./addv.component.css']
})
export class AddvComponent implements OnInit {
  fb=new FormBuilder();
  addbikeform=this.fb.group({
      type:['',Validators.required],
      name:['',Validators.compose([Validators.minLength(5),Validators.required])],
      region:['',Validators.required],
      area:['',Validators.required],
      imageurl:['',Validators.required],
      count:['',Validators.min(1)],
       });
  main1:MainService;
  route:Router;
  v:Vehicle;
  constructor(main1:MainService,route:Router) {this.main1=main1; this.route=route;}

  ngOnInit() {
    var z="<option selected>Choose...</option>";
    for(var key in this.main1.regions)
    {
      z+="<option>"+key+"</option>";
    }
    document.getElementById("region").innerHTML=z;

    var z="<option selected>Choose...</option>";
    for(var key in this.main1.types)
    {
      z+="<option>"+this.main1.types[key]+"</option>";
    }
    document.getElementById("type").innerHTML=z;
   }

  disparea(){
    var x=(document.getElementById("region") as HTMLInputElement).value;
    var z="<option selected>Choose...</option>";
    for(var key in this.main1.regions[x])
    {
      z+="<option>"+this.main1.regions[x][key]+"</option>";
    }
    document.getElementById("area").innerHTML=z;
  }
  addbike(){
    console.log(this.main1.vehicles.length);
    var x=this.addbikeform.value;
    var v1=this.main1.searchvehicle(x.name,x.region,x.area);
    if(v1==null){
      this.v=new Vehicle(this.main1.vid,x.name,x.type,x.region,x.imageurl,x.area,parseInt(x.count));
      this.main1.vehicles.push(this.v);
      console.log(this.main1.vehicles.length);
    }
    else
      v1.count+=parseInt(x.count);
    this.route.navigate(["adminop/set-price"]);
  }
    
}
