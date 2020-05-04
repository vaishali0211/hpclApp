import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.page.html',
  styleUrls: ['./verifyotp.page.scss'],
})
export class VerifyotpPage implements OnInit {
  otp_form: FormGroup;
  phone: any;
  verifyOtp: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router,
    public alert: AlertController
  ) { }

  ngOnInit() {
    this.phone = this.activatedRoute.snapshot.paramMap.get('phone');
    console.log(this.phone);
    this.otp_form = this.formBuilder.group({
     otp: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]{4}$')
      ])
      )
    });
  }

  validation_messages = {
   'otp':[
      {type: 'required', message: 'OTP is Required'},
      {type: 'pattern', message: 'OTP must be 4 digit numeric'}
    ]
  }

  onSubmit(values){
    let params= "delivery_boy_phone="+this.phone+"&otp="+values.otp;
    this.verifyOtp(params).subscribe(res => {
      if(res.status == '1'){
          this.navigate('/changepassword-form/'+this.phone);
      } else {
          this.errorAlert(res.message);
      } 
    });
  }

  async navigate(page){
    const alert = await this.alert.create({
      header: 'OTP Verified',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate([page]);
          }
        }
      ]
    });
    
    await alert.present();
    }
    
    async errorAlert(message){
    const alert = await this.alert.create({
      header: 'Otp does not match',
      message: message,
      buttons: [
        {
          text: 'OK'
        }
      ]
    });
    
    await alert.present();
    }
    
    }