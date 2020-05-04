import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.page.html',
  styleUrls: ['./orderlist.page.scss'],
})
export class OrderlistPage implements OnInit {
  orderlist: Array<any>;
  order:any;

  constructor(
    public auth: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit() {
    this.orderlist=[{
      filled:'49',empty:'0',defult:'0',type:'14.5Kg'},
      { filled:'48',empty:'1',defult:'0',type:'16.5Kg'},
      { filled:'47',empty:'2',defult:'0',type:'12.5Kg'},
      { filled:'46',empty:'3',defult:'1',type:'10.5Kg'},
      { filled:'46',empty:'0',defult:'0',type:'14.5Kg'},
    ]};
  logout(){
    this.auth.logout();
  } 

}

