import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authState = new BehaviorSubject(false);

  next:any;
  addOrder: any;

  // userDef = [{
  //   user_phone: '9999999999',
  //   user_password: 'testpass',
  //   user_role: 'admin',
  //   route: 'admin'
  // },{
  //   user_phone: '9999999998',
  //   user_password: 'testpass',
  //   user_role: 'operator',
  //   route: 'account'
  // },{
  //   user_phone: '9999999997',
  //   user_password: 'testpass',
  //   user_role: 'delivery_boy',
  //   route: 'deliveryboy'
  // },{
  //   user_phone: '9999999996',
  //   user_password: 'testpass',
  //   user_role: 'customer',
  //   route: 'customer'
  // }];

  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController
  ) { 
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }
  ifLoggedIn() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }

  login(value,route) {
    //loop through user array to check if phone and password
    this.storage.set('USER_INFO', value).then((response) => {
      this.router.navigate([route]);
      this.authState.next(true);
    });
  }

  logout() {
    this.storage.remove('USER_INFO').then(() => {
      this.router.navigate(['home']);
      this.authState.next(false);
    });
  }
 
  // login(user_info) {
  //   this.storage.set('USER_INFO', user_info).then((response) => {
  //     this.router.navigate(['dashboard']);
  //     this.authState.next(true);
  //   });
  // }

  isAuthenticated() {
    return this.authState.value;

  }
}
