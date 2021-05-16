import { Component, OnInit,ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
//  import { TodaysdeliveryPage } from '../modal/todaysdelivery/todaysdelivery.page';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { restService } from '../rest.service.service';
import {Storage} from '@ionic/storage';
import { Router } from '@angular/router';


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
  time: any;
  userid:any;
  backButton: any;

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
  subscription: any;
  sysplatform: any;
  // storage: any;
  userName: any;
  userId: any;
  storage: any;
  delivery_id: number;
  userRole: any;
  role: any;
  requestedDelivery: number;
  todaysDelivery:any;
  constructor(
     public modalController: ModalController, 
     public formBuilder: FormBuilder,
     public alert:AlertController,
     // public todaydelivery: TodaysdeliveryPage,
     public db: Storage, 
     public datepipe: DatePipe,
     public navCtrl: NavController,
     public api: restService,
     public loadingController: LoadingController,
   // public navParams: NavParams,
      public router: Router,
     private authService: AuthenticationService) 
    {
      setInterval(() => { this.time = new Date(); }, 1000);
     }
    //  ionViewDidEnter(){ 
    //   this.subscription = this.sysplatform.backButton.subscribe(()=>{ 
    //     navigator['app'].exitApp(); 
    //   }); 
    // } 
    // ionViewWillLeave(){ 
    //   this.subscription.unsubscribe(); 
    // }

     
  ngOnInit() {
    this.db.get('USER_INFO').then(user => {
      this.delivery_id = 1;
      this.userName = this.userName;   
      this.userRole = this.role;
      let params = "dnt"+"1584360252"+"delivery_boy_id"+"2"+"order_id"+"2"+"delivery_boy_stock_id"+"2"+"created_by"+"10"+"created_at"+"2020-03-16 12:01:46"+ "updated_by"+"19"+"updated_at"+
      "2020-03-16 12:08:54"+"deleted_by"+"10"+"deleted_at"+"2020-03-16 12:08:54"+"is_deleted"+"0";
      this.api.Get_Deliveries(params).subscribe(res => {
        console.log(res.data);
        if(res.success == false){
          alert(res.message);
        } else if(res.success == true) {
          this.router.navigate(['/menu']);
        } else {
          alert(res.message);
        }
      }) 
    })
    
  }

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
   
  makeStats(deliveryList: Array<any>){
    this.todaysDelivery = deliveryList.length;
    let todaysCollection = 0;
    let requestedCount = 0;
    deliveryList.forEach(delivery => {
      if(delivery.is_requested == 1){
        requestedCount++;
      } else {
        todaysCollection++;
      }
    });
    this.requestedDelivery = requestedCount;
    this.todaysDelivery = todaysCollection;
  }
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
  async errorAlert(title,message){
    const alert = await this.alert.create({
      header: title,
      message: message,
      buttons: [
        {
          text: 'OK'
        }
      ]
    });
    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();
  }

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


