import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';
import {Users} from './../Users';
import { MainService } from './../main.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  fb=new FormBuilder();
  signupform=this.fb.group({
      name:['',Validators.required],
      uname:['',Validators.compose([Validators.minLength(5),Validators.required])],
      email:['',Validators.email],
      mobile:['',Validators.compose([Validators.minLength(10),Validators.maxLength(10)])],
      pass:['',Validators.compose([Validators.required,Validators.minLength(8)])]
  });
  main1:MainService;
  route:Router;
  constructor(main1:MainService,route:Router) {this.main1=main1;
    this.route=route; }
  u:Users;
  ngOnInit() {
  }
  register(){
    var x=this.signupform.value;
    if(this.main1.search(x.uname)==null)
    {
      this.u=new Users(x.name,"customer",x.email,x.pass,x.uname,x.mobile);
    this.main1.users.push(this.u);
    this.main1.currentuser=this.u.username;
    (document.getElementById("profile") as HTMLElement).style.display="inline";
    (document.getElementById("logout") as HTMLElement).style.display="inline";
    (document.getElementById("logid") as HTMLElement).style.display="none";
    this.route.navigate(["/book"]);
    }
    else{
      alert("Username already exists. Try Again!!!");
    }
    
  }
}
