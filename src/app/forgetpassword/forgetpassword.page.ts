import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl }
from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.page.html',
  styleUrls: ['./forgetpassword.page.scss'],
})
export class ForgetpasswordPage implements OnInit {

  forgetpassword_form: FormGroup;
  forgotPassword: any;
  touched:boolean;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    public alert: AlertController
   
  ) { }

  ngOnInit() {

    this.forgetpassword_form = this.formBuilder.group({
      enter_phone: new FormControl('', Validators.compose([
        Validators.required, 
        Validators.pattern('^[7-9][0-9]{9}$'),
      ])),
    });
  }

validation_messages = {
  enter_phone:[
    {type: 'required', message: 'Phone is Required'},
    {type: 'pattern', message: 'Enter 10 digit phone number.'},
  ]
}
onSubmit(values): void{
  console.log(this.forgetpassword_form.touched);
  console.log(this.forgetpassword_form.value);
  console.log(this.forgetpassword_form);
  let params= "delivery_boy_phone="+values.enter_phone;
  this.forgotPassword(params).subscribe(res => {
    if(res.status == '1'){
      this.navigate('/verifyotp/'+values.enter_phone,res.message);
    } else {
      this.errorAlert(res.message)
    } 
  });
}


async navigate(page,message){
const alert = await this.alert.create({
  header: message,
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
  header: 'Enter valid phone number',
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