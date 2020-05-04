import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  editprofileFormGroup: FormGroup;
      errorAlert: any;
      navigate: any;
      profile: any;

  validation_messages = {
    name: [
      { type: 'required', message: 'Name is required!' }
    ],
    phone: [
      { type: 'required', message: 'Phone No is required!' }
    ],
    address: [
      { type: 'required', message: 'Address is required!' }
    ],
  };

  editprofiles = [{
    report_manager:'Mahesh Pawar',delivery_area:'Nalasopara'
  }];

  db: any;
  dummyprofile: any;
  



  constructor(
    public formBuilder: FormBuilder ,
    public router: Router,
    public alert: AlertController,
    public storage: Storage,
    public auth: AuthenticationService
  ) { }

  ngOnInit() {
    // this.db.get('USER_INFO').then(res => {
    //   this.profile = res[0].user;
    // })
  }  
  
    // this.editprofileFormGroup = this.formBuilder.group({
    //   name: new FormControl('', Validators.compose([
    //     Validators.required,
    //   ])),
    //   phone: new FormControl('', Validators.compose([
    //     Validators.required,
    //   ])),
    //   address: new FormControl('', Validators.compose([
    //     Validators.required,
    //   ])),
    //   status: new FormControl('', Validators.compose([
    //     Validators.required,
    //   ])),
    // })
  

  submitForm(values) {
    // let params = "delivery_boy_id=1";
    // this.dummyprofile(params).subscribe(res => {
    //   if(res.status == '0'){
    //     this.errorAlert(res.message);
    //   } else {
    //     this.navigate();
    //   }
    // }) 
  }
  
     
  logout(){
    this.auth.logout();
  }
}