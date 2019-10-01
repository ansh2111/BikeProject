import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';
import {MainService} from './../main.service';
import { Booking } from '../Booking';
import { CloseScrollStrategy } from '@angular/cdk/overlay';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  route:ActivatedRoute;
  main1:MainService;
  route1:Router;
  vec;
  region;
  d1;
  d2;
  amt;
  pickup;
  netamt:any;
  disc;
  fb=new FormBuilder();
  riderform=this.fb.group({
      rname:['',Validators.required],
      license:['',Validators.compose([Validators.minLength(5),Validators.required])],
      promo:['',Validators.required]
       });
  constructor(route:ActivatedRoute,main1:MainService,route1:Router) {this.route=route; this.main1=main1;this.route1=route1;}

  ngOnInit() {
    this.vec=(this.route.snapshot.paramMap.get('vehicle'));
    this.region=this.route.snapshot.paramMap.get('region');
    this.pickup=this.route.snapshot.paramMap.get('pickup');
    this.d1=this.route.snapshot.paramMap.get('pick');
    this.d2=this.route.snapshot.paramMap.get('drop');
    this.amt=this.route.snapshot.paramMap.get('amount');
    this.netamt=this.amt;
    this.disc=0;
  }
  riderdet(){
    var x=this.riderform.value;
    var b=new Booking(this.main1.bid,this.main1.currentuser,x.rname,this.vec,x.license,this.pickup,this.d1,this.d2,"BOOKED",this.netamt);
    this.main1.bookings.push(b);
    var vt=this.main1.searchvehicle(this.vec,this.region,this.pickup);
    if(vt==null)
      console.log(this.vec,this.region,this.pickup);
    // vt.count-=1;
    console.log(this.main1.bid,this.main1.currentuser,x.rname,this.vec,x.license,this.pickup,this.d1,this.d2,"BOOKED",this.netamt);
    this.route1.navigate(["book"]);
  }
  applycode(){
      var p=(document.getElementById("promo") as HTMLInputElement).value;
      var per=parseInt(p.replace( /^\D+/g, ''));
      if(!(p in this.main1.discounts))
      {
        document.getElementById("invalid").innerHTML="<b>Oops, Promo Code is Invalid!!!</b>";
      }
      else
      {
        var f=0;
        var f2=0;
        for(var j=0;j<this.main1.bookings.length;j++)
        {
            if(this.main1.bookings[j].user==this.main1.currentuser)
            {
              var pt=this.main1.bookings[j].pickuptime;
                if((pt.split(", ")[0]).split("/")[1]=='07')
                {
                  f2=-1;
                }
                else{
                  f2=0;
                }
            }
            else
              f2=1;
        }
        if(p=="FLAT15" && (this.d1.split(", ")[0]).split("/")[1]=='07')
        {
          var max=this.main1.discounts[p];
        this.disc=Math.min(per*this.amt/100,max);
        console.log(this.netamt);
        this.netamt=this.amt-this.disc;
          document.getElementById("invalid").innerHTML="<b>Voila, Promo Code Applied Successfully!!!</b>";
        }
        else if(p=="FLAT50" && f2==1)
        {
          var max=this.main1.discounts[p];
        this.disc=Math.min(per*this.amt/100,max);
        console.log(this.netamt);
        this.netamt=this.amt-this.disc;
          document.getElementById("invalid").innerHTML="<b>Voila, Promo Code Applied Successfully!!!</b>";
        }
        else if(p=="JULY30" && f2==0)
        {
          var max=this.main1.discounts[p];
        this.disc=Math.min(per*this.amt/100,max);
        console.log(this.netamt);
        this.netamt=this.amt-this.disc;
          document.getElementById("invalid").innerHTML="<b>Voila, Promo Code Applied Successfully!!!</b>";
        }
        else if(p=="WOW20" && ((this.d2.split(", ")[0]).split("/")[0])-((this.d1.split(", ")[0]).split("/")[0])>=7)
        {
          var max=this.main1.discounts[p];
        this.disc=Math.min(per*this.amt/100,max);
        console.log(this.netamt);
        this.netamt=this.amt-this.disc;
          document.getElementById("invalid").innerHTML="<b>Voila, Promo Code Applied Successfully!!!</b>";
        }
        
        
      }
     
  }
  remove(){
    this.disc=0;
    document.getElementById("invalid").innerHTML="";
  }
}
