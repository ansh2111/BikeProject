import { Component, OnInit } from '@angular/core';
import  {MainService} from './../main.service';
import { Vehicle } from '../Vehicle';
import {FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';
import {Route, Router} from '@angular/router';
@Component({
  selector: 'app-removev',
  templateUrl: './removev.component.html',
  styleUrls: ['./removev.component.css']
})
export class RemovevComponent implements OnInit {
  fb=new FormBuilder();
  removebikeform=this.fb.group({
      type:['',Validators.required],
      name:['',Validators.compose([Validators.minLength(5),Validators.required])],
      region:['',Validators.required],
      area:['',Validators.required],
      count:['',Validators.required],
       });
  route:Router;
  main1:MainService;
  constructor(main1:MainService,route:Router) { this.main1=main1; this.route=route;}

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
  removebike(){
    var x=this.removebikeform.value;
    var v1=this.main1.searchvehicle(x.name,x.region,x.area);
    if(v1==null){
     alert("Bike Does not exist");
     this.route.navigate(["/adminop/addv"]);
    }
    else if(v1.count<parseInt(x.count))
    {
      alert("You can't remove more than "+v1.count+" bikes.");
    }
    else
    {
      alert("Removed "+x.count+" bikes.");
      v1.count-=parseInt(x.count);
    }
    this.main1.dispvehicle();
  }

}
