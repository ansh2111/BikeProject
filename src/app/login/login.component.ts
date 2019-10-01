import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';
import {Users} from './../Users';
import { MainService } from './../main.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fb=new FormBuilder();
  loginform=this.fb.group({
      uname:['',Validators.compose([Validators.minLength(5),Validators.required])],
      pass:['',Validators.compose([Validators.required,Validators.minLength(8)])]
  });
  main1:MainService;
  route:Router;
  constructor(main1:MainService,route:Router) {this.main1=main1;
    this.route=route; }
  u:Users;
  ngOnInit() {
  }
  login(){
    var x=this.loginform.value;
    var u1=this.main1.search(x.uname);
    if(u1!=null && u1.getPass()==x.pass)
    {
    this.main1.currentuser=x.uname;
    (document.getElementById("profile") as HTMLElement).style.display="inline";
    (document.getElementById("logout") as HTMLElement).style.display="inline";
    (document.getElementById("logid") as HTMLElement).style.display="none";
    (document.getElementById("userhome") as HTMLElement).style.display="inline";
    (document.getElementById("defhome") as HTMLElement).style.display="none";
    if(x.uname.indexOf("admin")!=-1)
    {
      this.route.navigate(["/adminop"]);  
    }
    else
    this.route.navigate(["/book"]);
    }
    else{
      alert("Username does not exists. Signup!!!");
      this.route.navigate(["/login-signup/signup"]);
    }
    
  }

}
