import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { restService } from '../rest.service.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-addpayment',
  templateUrl: './addpayment.page.html',
  styleUrls: ['./addpayment.page.scss'],
})

export class AddpaymentPage implements OnInit {
  addpayform: FormGroup;
   payment: any;
touched:boolean;
  constructor(
    public formBuilder: FormBuilder ,
    public auth: AuthenticationService,
    public alert: AlertController,
    public router: Router,
    public api:restService,
    public activeRoute: ActivatedRoute,
    public db: Storage


  ) { }
  
  ngOnInit() {
    this.addpayform = this.formBuilder.group({
      amount: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });
  }
    addpayform_messages = {
            'amount': [
              { type: 'required', message: 'Name is required!'}
            ],
   
  
  }
  onSubmit(value): void{
    console.log(this.addpayform.touched);
    console.log(this.addpayform.value);
    if(this.addpayform.valid){
      console.log(this.addpayform);
    this.payment=this.activeRoute.snapshot.paramMap.get("type");
    console.log(this.payment);
    this.db.get('USER_INFO').then(res => {
      let params ="narration="+"payment"+"type="+"Out"+"entity_id="+"1"
      +"mode="+"cash"+"credit="+""+"created_by="+"10"+"debit="+"100000"+"balance="+"150000";
      this.api.Add_Payment(params).subscribe(res=>{
        console.log(res)
        if(res.status==1) {
          alert(res.message);
      } else if(res.success == true) {
         this.router.navigate(['/menu']);
      } else {
        alert(res.message);
      }
    }) ;
  })
  }else{
    let key = Object.keys(this.addpayform.controls);
      key.filter(data=>{
        let control = this.addpayform.controls[data];
        if( control.errors !=null){
          control.markAsTouched();
        }
      })
    }
  }
  

  logout(){
    this.auth.logout();
  } 
}
