import { Component } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bikeproject';
  main1:MainService;

  constructor(main1:MainService){
      this.main1=main1;  
  }
  out(){
    console.log(this.main1.currentuser);
    for(var i=0;i<this.main1.users.length;i++)
    {
      console.log(this.main1.users[i]);
    }
    this.main1.currentuser="";
    (document.getElementById("defhome") as HTMLElement).style.display="initial";
    (document.getElementById("profile") as HTMLElement).style.display="none";
    (document.getElementById("logout") as HTMLElement).style.display="none";
    (document.getElementById("logid") as HTMLElement).style.display="inline";
    (document.getElementById("userhome") as HTMLElement).style.display="none";
    
  }
}
