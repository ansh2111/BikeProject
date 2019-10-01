import { Component, OnInit } from '@angular/core';
import  {MainService} from './../main.service';
import {FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  minDate=new Date();
  minDate2=new Date();
  main1;
  mybks;
  othbikes;
  ind;
  route:Router;
  fb=new FormBuilder();
  searchbikeform=this.fb.group({
      region:['',Validators.required],
      dt1:['',Validators.required],
      dt2:['',Validators.required],
       });
  constructor(main1:MainService,route:Router) {this.main1=main1; this.route=route;
    this.mybks=[];
    this.othbikes=[];
    for(var i=0;i<this.main1.bookings.length;i++)
    {
      if(this.main1.bookings[i].user==this.main1.currentuser)
      {
          this.mybks.push(this.main1.bookings[i]);
      }
      else
          this.othbikes.push(this.main1.bookings[i]);
        
        }}

  ngOnInit() {
    var z="<option selected>Choose...</option>";
    for(var i in this.main1.regions)
    {
        z+="<option>"+i+"</option>";
    }
    document.getElementById("region").innerHTML=z;

    this.minDate2.setMinutes(this.minDate.getMinutes()+30);
    this.ind=Array.from(Array(this.mybks.length).keys());
  }
  searchbike(){
    // var x=this.searchbikeform.value;
    // var reg=x.region;
    // this.d1=(document.getElementById("dt1") as HTMLInputElement).value;
    // this.d2=(document.getElementById("dt2") as HTMLInputElement).value;
    // var dt1=this.d1.split(", ")[0].split("/");
    // var tm1=this.d1.split(", ")[1].split(":");
    // this.pick=new Date(Number(dt1[2]),Number(dt1[1]),Number(dt1[0]),Number(tm1[0]),Number(tm1[1]));
    // var dt2=this.d2.split(", ")[0].split("/");
    // var tm2=this.d2.split(", ")[1].split(":");
    // this.drop=new Date(Number(dt2[2]),Number(dt2[1]),Number(dt2[0]),Number(tm2[0]),Number(tm2[1]));
    // console.log(this.region,this.pick,this.drop);
    // this.route.navigate(["biketype",x.region,this.d1,this.d2]);
  }
  cancel(i){
      this.mybks.splice(i,1);
      this.ind=Array.from(Array(this.mybks.length).keys());
      this.main1.bookings=this.mybks;
      this.main1.bookings=this.main1.bookings.concat(this.othbikes);
      console.log(this.main1.bookings.length);
  }
}
