import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cashcollectionentry',
  templateUrl: './cashcollectionentry.page.html',
  styleUrls: ['./cashcollectionentry.page.scss'],
})
export class CashcollectionentryPage implements OnInit {
  cc_form: FormGroup;
  cashcollectionEntry: any;


  constructor(
    public formBuilder: FormBuilder, 
    public alert: AlertController,
    public router: Router,
    public auth: AuthenticationService
  ) { }

  ngOnInit() {
    this.cc_form = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required, 
        Validators.minLength(2)
      ])),
    },
  
    this.cashcollectionEntry=[
      {
        consumer_no:'24536',
        kg_cylinder:'14.5 kg'
    }],
    )
}

  logout(){
    this.auth.logout();
  }
  submitForm(){

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


