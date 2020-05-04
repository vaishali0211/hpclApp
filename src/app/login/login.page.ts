import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})

export class LoginPage implements OnInit { 
  loginGroup: FormGroup;

  isLogin: boolean;
  adminparams: any;
  operatorparams: any;
  customerparams: any;
  deliveryboyparams: any;
  accountparams: any;
  passwordType: string = 'password';
  passwordShown: boolean =  false;
  passIcon: string = 'eye';

  // @ViewChild('userPass') userPassword: ElementRef
 

  constructor(
    public formBuilder: FormBuilder ,
    public router: Router,
    public alert: AlertController,
    public auth: AuthenticationService
  ) {}

  ngOnInit() {

    this.loginGroup = this.formBuilder.group({
      phone: new FormControl('', Validators.compose([
        Validators.required, 
        Validators.pattern('^[7-9][0-9]{9}$'),
      ])),
      password: new FormControl('',Validators.compose([
        Validators.required, 
      ])),
    });
  }
  
  validation_messages = {
    phone: [
      { type: 'required', message: 'Phone No is required!' },
      { type: 'pattern', message: 'Phone No must be 10 Digit without country Code!' },
    ],
  
    password: [
      { type: 'required', message: 'Password is required.' }
    ],
  };

  Onsubmit(values) {
    let route: String;
    let val: Array<any>;
    val = values;
    if(values.phone == '9999999999' && values.password == 'test@12'){
      val['role'] = 'admin';
      route = '/admin';
    } else if(values.phone == '9999999998' && values. password == 'test@12'){
      val['role'] = 'account';
      route = '/account';
    }
    else if(values.phone == '9999999995' && values. password == 'test@12'){
      val['role'] = 'customer';
      route = '/customer';
    }
    else if(values.phone == '9999999990' && values. password == 'test@12'){
      val['role'] = 'operator';
      route = '/operator';
    }
    else if(values.phone == '9999999991' && values. password == 'test@12'){
      val['role'] = 'deliveryboy';
      route = '/menu';
    }

    this.auth.login(val,route);
  }

  public togglePassword(){
    if(this.passwordShown){
      this.passwordShown= false;
      this.passwordType='password';
      this.passIcon = "eye";
    } else{
      this.passwordShown= true;
      this.passIcon = "eye-off";
      this.passwordType='text';
    }
  }
  
//   hideShowPassword(){
//     this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
//      this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
//  }
  
  async navigate(data){
    const alert = await this.alert.create({
      header: 'Logged-In Successfully!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
             //this.router.navigateByUrl('/admin');
         
          }
        }
      ]
    });

    await alert.present();
  }

  async errorAlert(message){
    const alert = await this.alert.create({
      header: 'Please check your details',
      message: message,
      buttons: [
        {
          text: 'OK',
          
        }
      ]
    });
    await alert.present();
  }
}