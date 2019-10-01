import { Component, OnInit, Input } from '@angular/core';
import {MainService} from './../main.service';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  main1:MainService;
  constructor(main1:MainService) {this.main1=main1; }

  ngOnInit() {
    
  }
  copy(v)
  {
    var x=document.createElement('input');
    x.value=v;
    x.id='iid';
    document.body.appendChild(x);
    x.select();
    document.execCommand('copy');
    document.body.removeChild(x);

  }

}
