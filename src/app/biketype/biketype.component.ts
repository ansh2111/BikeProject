import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MainService } from '../main.service';
import { CurrencyPipe } from '@angular/common';
import { BookComponent } from '../book/book.component';
import {Router} from '@angular/router';


@Component({
  selector: 'app-biketype',
  templateUrl: './biketype.component.html',
  styleUrls: ['./biketype.component.css']
})
export class BiketypeComponent implements OnInit {
  route:ActivatedRoute;
  route1:Router;
  main1:MainService;
  d1;
  d2;
  pickup;
  region;
  pick;
  data=[];
  drop;
  cp:CurrencyPipe;
  vn=[];
  cost=[];
  ob1={};
  constructor(route:ActivatedRoute,main1:MainService,cp:CurrencyPipe,route1:Router) {this.route=route; this.main1=main1; this.cp=cp; this.route1=route1;}

  ngOnInit() {
    this.region=this.route.snapshot.paramMap.get('region');
    this.d1=this.route.snapshot.paramMap.get('pick');
    this.d2=this.route.snapshot.paramMap.get('drop');
    var dt1=this.d1.split(", ")[0].split("/");
    var tm1=this.d1.split(", ")[1].split(":");
    this.pick=new Date(Number(dt1[2]),Number(dt1[1]),Number(dt1[0]),Number(tm1[0]),Number(tm1[1]));
    var dt2=this.d2.split(", ")[0].split("/");
    var tm2=this.d2.split(", ")[1].split(":");
    this.drop=new Date(Number(dt2[2]),Number(dt2[1]),Number(dt2[0]),Number(tm2[0]),Number(tm2[1]));
    console.log(this.region,this.pick,this.drop);
  }
  choose(j)
  {
    this.pickup=((document.getElementById(j) as HTMLInputElement).value);
  }
  book(j)
  {
    
    this.route1.navigate(["book-details",this.vn[j],this.region,this.pickup,this.d1,this.d2,this.cost[j]]);
  }
  show(tp)
  {
    this.data=[];
    var ob={};
    // document.getElementById("bikeslist").innerHTML="";
    var z="";
    var list=[];
    var path="http://localhost:4200/assets/images/vec/";
    var indexes=[];
    for(var i=0;i<this.main1.vehicles.length;i++)
      indexes.push(i);
    for(var i0 in indexes)
    {
      i=indexes[i0];
      if(this.main1.vehicles[i].type==tp && this.main1.vehicles[i].reg==this.region)
      {
        {
         // console.log(this.main1.vehicles[i].area,"i");
          list.push(this.main1.vehicles[i].area);
        }
        
        var ind1= indexes;
          for(var j in ind1)
          {
            if(ind1[j]!=i && this.main1.vehicles[ind1[j]].type==tp && this.main1.vehicles[ind1[j]].reg==this.region)
            {
                if(this.main1.vehicles[i].name==this.main1.vehicles[ind1[j]].name)
                {
                    list.push(this.main1.vehicles[ind1[j]].area);
                    //console.log(this.main1.vehicles[ind1[j]].area,"j",i,j);
                    delete(indexes[ind1[j]]);
                }
            }
             
          }
           this.vn.push(this.main1.vehicles[i].name);
           ob['vname']=this.main1.vehicles[i].name;
          var z1="";
          ob['loc']=list;
          for(var l in list)
          {
            z1+="<option>"+l+"</option>";
          }
          var extk,exth,frk,cst;
          for(var k=0;k<this.main1.prices.length;k++)
          {
            if(this.main1.prices[k].vname==this.vn[this.vn.length-1])
            {
                extk=this.main1.prices[k].extrakm;
                exth=this.main1.prices[k].extrahrs;
                frk=this.main1.prices[k].freekm;
                cst=this.main1.prices[k].cost;
            }
          }
          ob['extrak']=extk;
          ob['extrah']=exth;
          ob['cost']=cst;
          this.cost.push(cst);
          ob['freek']=frk;
          ob['img']=path+this.main1.vehicles[i].image.substring(12);
          // ob['loc']=this.pickup;
          // var z="<div class='card col-md-8' style='margin:0 auto;' > <h5 class='card-header col-md-12' align='center'>"+
          // this.main1.vehicles[i].name
          // +"</h5> <div class=card-body'><br/><div class='row'><div class='col-md-5'><select class='form-control' id='"+"'><option selected>Choose Pickup Location...</option>"+
          // z1+
          // "</select><br><h6>Free: "+frk+" Kms</h6><h6>Excess Fee: "+
          // this.cp.transform(extk,"INR",true)+"/Kms and "+
          // this.cp.transform(exth,"INR",true)
          // +"/hrs.</h6><h6>Total Cost: "+this.cp.transform(cst,"INR",true)+
          // "</h6><button class='btn btn-success' >BOOK NOW</button> </div><div class='col-md-6'><img  src='"+
          // (path+this.main1.vehicles[i].image.substring(12))
          // +"' height=190px width=480px/></div></div></div></div><br>";
          // document.getElementById("bikeslist").innerHTML+=z;
          this.data.push(ob);
          list=[];
          ob={};
          //this.pickup="";
      }
    }
    console.log(this.data);
  }
}
