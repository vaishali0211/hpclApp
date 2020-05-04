import { Component, OnInit,ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
//  import { TodaysdeliveryPage } from '../modal/todaysdelivery/todaysdelivery.page';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
export interface PageInterface {
  title: string;
  pageName: string;
  pageComponent?: any;
  index?: number;
  icon: string;
}
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage  {
  pageinterface:any;
  rootPage: any = 'Deliveryboy Home';
  TodaysDelivery:any;
 
  nav: any;
  platform: string;
  // cunsumerDetails: any;
  // displaydelivery: Array<any>;
  // todaydeliveryList: any[];
  // customer: any;
  // noDeliveryToday: boolean;
  // todaysdelivery: any;
  // deliveryBoyId: any;

  pages: PageInterface[] = [
    { title: 'Home', pageName: 'Home', pageComponent: 'HomePage', index: 0, icon: 'home' },
    { title: 'Todays Delivery', pageName: 'Todaysdelivery', pageComponent: 'DeliveryBoyPage', index: 1, icon: 'cart' },
    { title: 'Todays Callocation', pageName: 'Todaycollection', pageComponent: 'TodayscllectionPage', icon: 'cash' },
    { title: 'Profile', pageName: 'Profile', pageComponent: 'ProfilePage', icon: 'person-outline' },
  ];
  
  constructor(
     public modalController: ModalController, 
     public formBuilder: FormBuilder,
     public alert:AlertController,
     // public todaydelivery: TodaysdeliveryPage,
    // public db: Storage, 
     public datepipe: DatePipe,
    public navCtrl: NavController,
   // public navParams: NavParams,
    private authService: AuthenticationService) 
    { }
     
  // //  ngOnInit() {
  //   this.db.get('USER_INFO').then(res => {
  //     this.deliveryBoyId = res[0].delivery_Boy_Id;
  //     let params = 'delivery_boy_id=1';
  //     this.todaysdelivery(params).subscribe(resp => {
  //       console.log(resp);
  //       if (resp[0].status == '0') {
  //         this.noDeliveryToday = true;
  //       }
  //       else {
  //         this.todaydelivery = resp;
  //       }
  //     });
  //   });
  // }

  openPage(page: PageInterface) {
    let params = {};
    if (page.index) {
      params = { tabIndex: page.index };
    }
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    }
    else {
      this.nav.setRoot(page.pageName, params);
    }
  }
  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.pageComponent) {
        return 'primary';
      }
      return;
    }
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

  logout() {
    this.authService.logout();
  }
//   async presentAlert() {
//     const alert = await this.alert.create({
//       header: 'Logout',
//       subHeader: 'Subtitle',
//       message:'Do you want to logout.',
//       buttons: ['Yes','NO'],
//     });

//     await alert.present();
//   }
}

