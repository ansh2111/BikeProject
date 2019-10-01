import { Component, OnInit } from '@angular/core';
import {MainService} from './../main.service';
@Component({
  selector: 'app-allbook',
  templateUrl: './allbook.component.html',
  styleUrls: ['./allbook.component.css']
})
export class AllbookComponent implements OnInit {
  main1:MainService;
  constructor(main1:MainService) { this.main1=main1;}

  ngOnInit() {
  }

}
