import { Component, OnInit } from '@angular/core';
import  {MainService} from './../main.service';
import { Price } from '../Pricing';
import {FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-set-price',
  templateUrl: './set-price.component.html',
  styleUrls: ['./set-price.component.css']
})
export class SetPriceComponent implements OnInit {
  main1:MainService;
  p:Price;
  constructor(main1:MainService) {this.main1=main1; }
  fb=new FormBuilder();
  setpriceform=this.fb.group({
      name:['',Validators.compose([Validators.minLength(1),Validators.required])],
      cost:['',Validators.min(1)],
      freekm:['',Validators.min(1)],
      extrakm:['',Validators.min(0)],
      extrahrs:['',Validators.min(0)]
       });
  ngOnInit() {

  }
  setprice(){
    var x=this.setpriceform.value;
    var pp=this.main1.searchvehicleprice(x.name);
    if(pp!=null)
    {
      if(x.cost!="")
        pp.cost=x.cost;
        if(x.extrakm!="")
        pp.extrakm=x.extrakm; 
        if(x.extrahrs!="")
        pp.extrahrs=x.extrahrs;  
        if(x.freekm!="")
        pp.freekm=x.freekm;   
    }
    else
    {
      this.p=new Price(x.vname,x.cost,x.freekm,x.extrakm,x.extrahrs);
      this.main1.prices.push(this.p);
    }
    
    console.log(this.main1.prices.length)
  }
}
