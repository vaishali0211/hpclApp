import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { restService } from '../rest.service.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  editProfile: FormGroup;
      errorAlert: any;
      navigate: any;
      // profile: any;

 

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
    public api: restService,
    public auth: AuthenticationService
  ) { }

  ngOnInit() {
    // this.db.get('USER_INFO').then(res => {
    //   this.profile = res[0].user;
    // })
    
  
    this.editProfile = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      phone: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      address_1: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      address_2: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      status: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    })
    ;
  }

  validation_messages = {
    name: [
      { type: 'required', message: 'Name is required!' }
    ],
    phone: [
      { type: 'required', message: 'Phone No is required!' }
    ],
    address_1: [
      { type: 'required', message: 'Address is required!' }
    ],
    address_2: [
      { type: 'required', message: 'Address is required!' }
    ],
    status:[
      { type:'required',message: 'Status is required'}
    ]
  };


  

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