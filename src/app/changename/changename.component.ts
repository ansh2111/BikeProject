import { Component, OnInit } from '@angular/core';
import {MainService} from './../main.service';
import {FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-changename',
  templateUrl: './changename.component.html',
  styleUrls: ['./changename.component.css']
})
export class ChangenameComponent implements OnInit {
  main1:MainService;
  route:Router;
  constructor(main1:MainService,route:Router) { this.main1=main1; this.route=route;}
  fb=new FormBuilder();
  changeform=this.fb.group({
      type:['',Validators.required],
      name:['',Validators.required],
      nname:['',Validators.compose([Validators.minLength(5),Validators.required])],
       });
  ngOnInit() {
    var z="<option selected>Choose...</option>";
    for(var i=0;i<this.main1.prices.length;i++)
    {
      z+="<option>"+this.main1.prices[i].vname+"</option>";
    }
    document.getElementById("name").innerHTML=z;
    var z="<option selected>Choose...</option>";
    for(var i=0;i<this.main1.types.length;i++)
    {
      z+="<option>"+this.main1.types[i]+"</option>";
    }
    document.getElementById("type").innerHTML=z;
  }
  changename(){
    var x=this.changeform.value;
    for(var i=0;i<this.main1.bookings.length;i++)
    {
      if(this.main1.bookings[i].vehicle==x.name)
      {
        this.main1.bookings[i].vehicle=x.nname;
      }
    }
    for(var i=0;i<this.main1.prices.length;i++)
    {
      if(this.main1.prices[i].vname==x.name)
      {
        this.main1.prices[i].vname=x.nname;
      }
    }
    for(var i=0;i<this.main1.vehicles.length;i++)
    {
      if(this.main1.vehicles[i].name==x.name)
      {
        this.main1.vehicles[i].name=x.nname;
        this.main1.vehicles[i].type=x.type;
      }
    }
    console.log(this.main1.vehicles[0],this.main1.prices[0]);
    this.route.navigate(["adminop/allbook"]);
  }
}
