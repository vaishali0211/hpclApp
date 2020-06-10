import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { restService } from '../rest.service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cashcollectionentry',
  templateUrl: './cashcollectionentry.page.html',
  styleUrls: ['./cashcollectionentry.page.scss'],
})
export class CashcollectionentryPage implements OnInit {
  cc_form: FormGroup;
  cashcollectionEntry: any;
  values: any;


  constructor(
    public formBuilder: FormBuilder, 
    public alert: AlertController,
    public router: Router,
    public auth: AuthenticationService,
    public api:restService,
    private http: HttpClient
  ) { 
    this.cc_form = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required, 
        Validators.minLength(2)
      ])),
    },
  
    this.cashcollectionEntry=[
      {
        // consumer_no:'24536',
        // kg_cylinder:'14.5 kg'
    }],
    )
}
  ngOnInit() {
    console.log(this.cashcollectionEntry);
    let values=this.values;
    let params = "payment_id="+"1"+"&detail_value="+values.detailValue+"&detail_title="+values.detailTitle+"&comment="+values.comment+
    "created_at="+"2020-05-19 12:02:14"+"created_by="+"10"+"updated_at="+"2020-05-19 12:02:14"+"updated_by="+ "null"+
      "deleted_at="+"null"+"deleted_by="+"null"+"is_deleted="+"0";
    this.api.  Get_Payment_detail_by_payment(params).subscribe(res => {
      console.log(res);
      if(res.success == 1){
        alert(res.message);
      } else if(res.success == true) {
        // this.router.navigate(res.data)
         this.router.navigate(['/menu']);
      } else {
        alert(res.message);
      }
    }) 
  }
    
  
  logout(){
    this.auth.logout();
  }
  
  async presentAlertMultipleButtons() {
    const alert = await this.alert.create({
      header: 'Alert',
      message: 'Cash Collected',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.router.navigateByUrl('/menu');
          }
        },  
        
      ]
    });

  await alert.present();
  }

}


