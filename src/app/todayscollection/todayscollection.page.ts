import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-todayscollection',
  templateUrl: './todayscollection.page.html',
  styleUrls: ['./todayscollection.page.scss'],
})
export class TodayscollectionPage implements OnInit {
  // deliveryBoyId: any;
  // name: any;
  // delivery:any;
  // isCCRequest = true;
  // cashCollectionRequest: any;
  // todaycashDelivery: {}[];
  listcashcollection:Array <any>;
  cashcollection:any;
  consumer_no:any;


  constructor(
   public router: Router,
   public auth: AuthenticationService
  ) { }

  ngOnInit() {
    // this.db.get('USER_INFO').then(res => {
    //  this.deliveryBoyId=res[0].delivery_boy_id;
    this.listcashcollection=[{
     consumer_no:' 24563' ,kg_cylinder:'14.5',amount:'750',location:'virar'
    },
    {
      consumer_no:' 23420' ,kg_cylinder:'15.5',amount:'850',location:'virar'
    },
    {
      consumer_no:' 21555' ,kg_cylinder:'16.5',amount:'950',location:'virar'
    },
    {
      consumer_no:' 23556' ,kg_cylinder:'16.5',amount:'950',location:'virar'
    },
    {
      consumer_no:' 20256' ,kg_cylinder:'16.5',amount:'950',location:'virar'
    },
    {
      consumer_no:' 24568' ,kg_cylinder:'13.5',amount:'750',location:'virar'
    }];
  };


  
  //     let params ='delivery_boy_id=1';
  //   // this.deliveryBoyId = 1;//res[0].delivery_boy_id
  //   // let params ='delivery_boy_id='+this.deliveryBoyId;
  //     // let params = "delivery_boy_phone="+values.phone+"&delivery_boy_pass="+values.password+"&device_id=null";
  //     this.todayCashCollection(params).subscribe(resp => {
  //       console.log(resp)
  //       if(resp.status == 0){
  //         this.isCCRequest=false;
  //       }else{
  //         this.cashCollectionRequest = resp.data;
  //       }
  //     });
  //   }, err => {
  //     this.router.navigateByUrl('/login-form');
  //   });
  // }
  
   logout(){
    this.auth.logout();
  }
}
  
