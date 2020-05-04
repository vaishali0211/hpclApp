import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-chanepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChanepasswordPage implements OnInit {

  changepassword_form: FormGroup;
  phone: any;
  changePassword: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router,
    public alert: AlertController
  ) { }

  ngOnInit() {
    this.phone = this.activatedRoute.snapshot.paramMap.get('phone');
    console.log(this.phone);
    this.changepassword_form = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.required, 
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
      ])),
      confirm_password: new FormControl('',Validators.compose([
        Validators.required
      ]))
    },{
      validators: this.password.bind(this)
    });
  }
  validation_messages = {
    'password':[
      {type: 'required', message: 'Password is Required'},
      {type: 'pattern', message: "Password must be atleast 8 character long containing\nAtleast 1 Uppercase Alphabet\nAtleast 1 Lowercase Alphabet\nAtleast 1 Number\nOnly '@ $ ! % * ? &' Characters are allowed"}
    ],
   'confirm_password':[
      {type: 'required', message: 'Confirm Password is Required'},
    ]
  }
  onSubmit(values){
    let params= "delivery_boy_phone="+this.phone+"&pass="+values.password;
    this.changePassword(params).subscribe(res => {
      if(res.status == '1'){
        this.navigate('/login-form');
      } else {
        this.errorAlert(res.message);
      } 
    })
  ;
  }
  async navigate(page){
    const alert = await this.alert.create({
      header: 'Password Changed Successfully',
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
      header: 'Enter valid Password',
      message: message,
      buttons: [
        {
          text: 'OK'
        }
      ]
    });

    await alert.present();
  }  
  
  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirm_password');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
}