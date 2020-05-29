import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { restService } from '../rest.service.service';

@Component({
  selector: 'app-chanepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChanepasswordPage implements OnInit {

  changepassword_form: FormGroup;
  phone: any;
  // changePassword: any;
  hide = true;

  constructor(
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public api: restService,
    public alert: AlertController
  ) { }

  ngOnInit() {
    // this.phone = this.activatedRoute.snapshot.paramMap.get('phone');
    // console.log(this.phone);
    this.changepassword_form = this.formBuilder.group({
      old_password: new FormControl('', Validators.compose([
        Validators.required, 
        // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
      ])),
     new_password: new FormControl('', Validators.compose([
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
    'old_password':[
      {type: 'required', message: ' old Password is Required'},
      // {type: 'pattern', message: " Old Password must be atleast 8 character long containing\nAtleast 1 Uppercase Alphabet\nAtleast 1 Lowercase Alphabet\nAtleast 1 Number\nOnly '@ $ ! % * ? &' Characters are allowed"}
    ],
    'new_password':[
      {type: 'required', message: 'Password is Required'},
      // {type: 'pattern', message: "Password must be atleast 8 character long containing\nAtleast 1 Uppercase Alphabet\nAtleast 1 Lowercase Alphabet\nAtleast 1 Number\nOnly '@ $ ! % * ? &' Characters are allowed"}
    ],
   'confirm_password':[
      {type: 'required', message: 'Confirm Password is Required'},
    ]
  }

  onSubmit(values){
    let params = "user_id="+"10"+"&old_password="+values.oldPassword+"&new_password="+values.newPassword+"&confirm_password="+values.confirmPassword;
    this.api.Change_User_password(params).subscribe(res => {
      console.log(res);
      if(res.success == 1){
        alert(res.message);
      } else if(res.success == true) {
         this.router.navigate(['/login']);
      } else {
        alert(res.message);
      }
    }) 
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
    const { value: old_password } = formGroup.get('old_password');
    const { value: new_password } = formGroup.get('new_password');
    const { value: confirmPassword } = formGroup.get('confirm_password');
    return old_password === new_password === confirmPassword ? null : { passwordNotMatch: true };
  }
}