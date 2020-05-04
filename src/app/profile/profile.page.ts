import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router} from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  status: any;
  deliveryBoyId: any;
  deliveryBoyStatus: any;
  statusUpdate: any;
  profile: any;
  profiles: any;

  constructor(
    public router:Router,
    public db: Storage,
    public toastController: ToastController,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {

    this.profiles=[
      {
        delivery_boy_name:'Ganesh',delivery_boy_phone:'8698871212'
      }
    ]
  //   this.db.get('USER_INFO').then(res => {
  //   this.status = res[0].delivery_boy_status;
  //     if(this.status == 'offline'){
  //       this.deliveryBoyStatus = false;
  //     } else {
  //       this.deliveryBoyStatus = false;
  //     }
  //     // this.deliveryBoyId = res[0].delivery_boy_id=1;
  //     this.profiles = res
  //   }, err => {
  //     this.router.navigateByUrl('/login-form')
  //  })
   }

  updateStatus(){
    let newStatus: any;
    if(this.status == 'online'){
      newStatus = 0;
    } else if(this.status =='offline'){
      newStatus = 1;
    }

    // let params = "delivery_boy_id="+this.deliveryBoyId+"&status="+newStatus;
    // this.statusUpdate(params).subscribe(res => {
    //   if(res.status == '1'){
    //     this.status = 'online';
    //     this.deliveryBoyStatus = true;
    //   } else if(res.status == '2') {
    //     this.status = 'offline';
    //     this.deliveryBoyStatus = false;
    //   } else {
    //     console.log('Error')
    //   }

    //   this.db.remove('USER_INFO').then();
    //   this.profile("delivery_boy_id="+this.deliveryBoyId).subscribe(resp => {
    //     this.profiles = resp.user;
    //     this.db.set('USER_INFO',resp.user).then();
    //   })
    // })
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your Information have been saved.',
      duration: 2000
    });
    
    toast.present();
  }

  logout(){
    this.authService.logout();
  }
  
  }

