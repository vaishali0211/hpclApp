import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { restService } from '../rest.service.service';
import {Storage} from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.page.html',
  styleUrls: ['./orderlist.page.scss'],
})
export class OrderlistPage implements OnInit {
  orderlist: any;
//   filled:'',empty:'',defult:'',type:''}
       orderList:any;

  // orderlist: [];

  constructor(
    public auth: AuthenticationService,
    public router: Router,
    public api:restService,
    public db: Storage,
    public activeRoute: ActivatedRoute,
    public http: HttpClient
  ) {
    this.orderlist=[{
      //   filled:'',empty:'',defult:'',type:''}
       filled:'48',empty:'5',defult:'0',type:'16.5Kg'},
        { filled:'47',empty:'7',defult:'0',type:'12.5Kg'},
        { filled:'46',empty:'3',defult:'1',type:'10.5Kg'},
        { filled:'46',empty:'0',defult:'0',type:'14.5Kg'}
      ]};
  
    
  
  
  ngOnInit(){
    this.orderList=this.activeRoute.snapshot.paramMap.get("type");
    console.log(this.orderlist);
    this.db.get('USER_INFO').then(res => {
      let params = "stock_id="+"1"+"&enity_id="+"1"+"enity="+"delivery"+"mode="+"Out"+"dnt="+"1584109000"+"product_id="+"1"+"empty_new="+"0"+
       "empty_old="+"0"+"filled_new="+"10"+"filled_old="+"10"+"defective_new="+"0"+"defective_old="+"0"+
      "created_at="+"2020-03-13 02:17:38"+"created_by="+"10"+"updated_at="+"2020-03-13 14:27:50"+"updated_by="+"10"+"deleted_at="+"2020-03-13 02:27:50"+
      "deleted_by="+"10"+"is_deleted="+"0";
      this.api.Get_stocks(params).subscribe(res=>{
        console.log(res)
        if(res.status==0) {
          alert(res.message);
      } else if(res.success == true) {
         this.router.navigate(['/menu']);
      } else {
        alert(res.message);
      }
    }) ;
  })
  }
  
  logout(){
    this.auth.logout();
  } 

}

