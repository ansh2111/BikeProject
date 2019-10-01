import { Component, OnInit } from '@angular/core';
import {MainService} from './../main.service';
import {FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';
import {Users} from './../Users';
import {Router} from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  main1;
  route:Router;
  curuser;
  u;
  fb=new FormBuilder();
  editform=this.fb.group({
      name:['',Validators.required],
      uname:['',Validators.compose([Validators.minLength(5),Validators.required])],
      email:['',Validators.email],
      mobile:['',Validators.compose([Validators.minLength(10),Validators.maxLength(10)])],
      pass:['',Validators.compose([Validators.required,Validators.minLength(8)])]
  });
  
  
  constructor(route:Router,main1:MainService) {
    this.main1=main1;
    this.route=route;
   }

  ngOnInit() {
    console.log(this.main1.currentuser);
    this.curuser=this.main1.search(this.main1.currentuser);
  }
  change(){
    var x=this.editform.value;
    if(x.name!="")
        this.curuser.name=x.name;    
    if(x.uname!="")
    {
      this.curuser.username=x.uname; 
      this.main1.currentuser=x.uname;
    }
    if(x.email!="")
        this.curuser.email=x.email;   
    if(x.pass!="")
        this.curuser.password=x.pass;
    if(x.mobile!="")
        this.curuser.mobile=x.mobile;              
    console.log(this.curuser.name,this.curuser.username,this.curuser.email,this.curuser.password,this.curuser.mobile);
    this.route.navigate(["/book"]);
  }
}
