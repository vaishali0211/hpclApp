import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  navigate:any;
  authService: any;
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    public authenticationService: AuthenticationService,
    public storage: Storage
  ) {
    this.sideMenu();
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  sideMenu()
    {
      this.navigate =
      [
          {
            title : "Home",
            url   : "/menu",
            icon  : "home"
          },
        {
            title : "Todays Delivery",
            url   : "/todaysdelivery",
            icon  : "cart"
          },
          {  
            title : "Todays Cash Collection",
            url   : "/todayscollection",
            icon  : "cash" 
          },
          {
            title : "Profile",
            url   : "/profile",
            icon  : "person"
          },
          {
          title: 'Logout',
          url: '/logout',
          icon: 'log-out'
        },
      ]
    
      this.authenticationService.authState.subscribe(state => {
        if (state) {
          this.storage.get("USER_INFO").then(user=>{
            if(user.role=="deliveryboy"){
              this.router.navigate(['menu']);
           }
          })
        } else {
          this.router.navigate(['login']);
        }
      });
      
    }
    
  logout() {
    this.authService.logout();
  }

  }
