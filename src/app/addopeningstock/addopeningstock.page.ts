import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { restService } from '../rest.service.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-addopeningstock',
  templateUrl: './addopeningstock.page.html',
  styleUrls: ['./addopeningstock.page.scss'],
})
export class AddopeningstockPage implements OnInit {
  addOpening_form: FormGroup;
  addOpening: any;

  constructor(
    public formBuilder: FormBuilder,
    public db: Storage,
    public alert: AlertController,
    public router:Router,
    public api: restService,
    public auth: AuthenticationService,
    public activeRoute: ActivatedRoute,
   

  ) { }

  ngOnInit() {
    this.addOpening_form = this.formBuilder.group({
      quantity: new FormControl('',Validators.compose([
        Validators.required, 
      ])),
    });
  }
  validation_messages = {
    quanity: [
      { type: 'required', message: 'Quantity is required.' }
    ],
  };
  onSubmit(values):void{
    console.log(this.addOpening_form.touched);
    console.log(this.addOpening_form.value);
    this.addOpening=this.activeRoute.snapshot.paramMap.get("type");
    console.log(this.addOpening_form);
    this.db.get('USER_INFO').then(res => {
      let params = "userId="+"10"+"load_stock_id="+"1"+"&deliveryboy_stock_id="+"1"+"dnt="+"1584109000"+"product_id="+"10"
      +"product_attribute_id="+"1"+"delivery_id="+"1"+"mode="+"OUT"+"empty_new="+"1"+"load_id="+"1"+     
       "empty_old="+"0"+"filled_new="+"9"+"filled_old="+"10"+"defective_new="+"0"+"defective_old="+"0"+
      "created_at="+"2020-03-14 06:31:20"+"created_by="+"10"+"updated_at="+"2020-03-14 06:36:05"+"updated_by="+"10"
      +"deleted_at="+"2020-03-14 06:36:05"+"deleted_by="+"10"+"is_deleted="+"0";
      this.api.Get_Load_Stocks(params).subscribe(res=>{
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
  }
    
  async presentAlertButtons() {
    const alert = await this.alert.create({
      header: 'Alert',
      subHeader: '',
      message: 'Opening stock added.',
      buttons: [
       
        {
          text: 'Order Details',
          handler: () => {
            this.router.navigateByUrl('/menu');
          }
        }
      ]
    });

  await alert.present();
  }
  logout(){
    this.auth.logout();
  } 
}
