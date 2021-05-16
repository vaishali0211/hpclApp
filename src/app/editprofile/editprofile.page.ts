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
touched:boolean;
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


  

  onSubmit(values) {
    console.log(this.editProfile.touched);
    console.log(this.editProfile.value)
    let params = "first_name="+values.first_name+"&username="+values.username+"&email="+values.first_name+"&contact_no="+values.contact_no+"&profile_image"+values.profile_image+"&profilee_summary"+values.profile_summary+"&last_name="+values.last_name+"&user_id"+values.user_id+"&updated_by"+values.updated_by;
    let userprofile:any;
    this.api.User_profile_Update(params).subscribe(res => {
      console.log(res);
        if(res.success == 0){
          alert(res.message);
        } else if(res.success == true) {
          this.router.navigate(['/menu']);
        } else {
          alert(res.message);
        }
      }) 
    }
  

    // let params = "delivery_boy_id=1";
    // this.dummyprofile(params).subscribe(res => {
    //   if(res.status == '0'){
    //     this.errorAlert(res.message);
    //   } else {
    //     this.navigate();
    //   }
    // }) 
  
  
     
  logout(){
    this.auth.logout();
  }
}