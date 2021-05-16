import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Storage } from '@ionic/storage';
import { restService } from '../rest.service.service';
import { HttpClient } from '@angular/common/http';

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
  cashcollection:boolean;
  consumer_no:any;
  cashCollectionRequest: any;
  
  isCCRequest: true;
  false:any;
  todaycashcollection:any;
  constructor(
   public router: Router,
   public auth: AuthenticationService,
   public api:restService,
   public db: Storage,
   public activeRoute: ActivatedRoute,
   private http: HttpClient
  ) {
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
  
   
    
  ngOnInit() {
    // this.db.get('USER_INFO').then(res => {
    //  this.deliveryBoyId=res[0].delivery_boy_id;
  this.todaycashcollection=this.activeRoute.snapshot.paramMap.get("type");
    console.log(this.todaycashcollection);
      this.db.get('USER_INFO').then(res => {
      let params= "payment_id"+"1"+"narration"+"Payment"+"type"+"Out"
      +"enity_id"+"1"+"mode"+"cash"+"debit"+"120000.000"+"credit"+" "
      +"balance"+"170000.000"+"credited_by"+"10"+"credited_at"+"2020-03-17 06:59:29"
      +"updated_by"+"10"+"deleted_by"+"19"
      +"deleted_at"+"2020-03-17 07:03:10"+"is_deleted"+"0";
      this.api.Get_Payment_Entry(params).subscribe(resp=>{
        console.log(resp)
        if(resp.status==1){
          this.isCCRequest=this.false;
        }else{
          this.cashCollectionRequest = resp.data;
        }
      });
      }, err => {
        this.router.navigateByUrl('/menu');
      });
    
    }
  
  
     
  logout(){
    this.auth.logout();
  }
}