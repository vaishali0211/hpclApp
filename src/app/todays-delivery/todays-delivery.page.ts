import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from '../services/authentication.service';
import { LaunchNavigatorOptions, LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AlertController, ActionSheetController, NavController, ModalController } from '@ionic/angular';

import { DeliveryDetailsPage } from '../delivery-details/delivery-details.page';


@Component({
  selector: 'app-todays-delivery',
  templateUrl: './todays-delivery.page.html',
  styleUrls: ['./todays-delivery.page.scss'],
})
export class TodaysDeliveryPage implements OnInit {
  
  todayDelivery: any;

  constructor(
    public db: Storage,
    public auth: AuthenticationService,
    public actionSheetController: ActionSheetController,
    public navCtrl: NavController,
    public alert: AlertController,
    public callnumber: CallNumber,
    public launchNavigator: LaunchNavigator,
    public modal: ModalController,
  ) { 
    this.todayDelivery = 
  [{ con_no:'21356', cust_name: 'Neel Jain', phone: '9999999990'},
  { con_no:'12356',  cust_name: 'Bhart Singh',  phone: '9865231452'},
  { con_no:'12357',  cust_name: 'sita pawar',   phone: '9865231234'},
  { con_no:'12563',  cust_name:'Indu varma',    phone: '9863698524'}];
  }

  ngOnInit() {
    // this.db.get('USER_INFO').then(res => {
      // let params = 'delivery_boy_id=1';
    }
  

  logout(){
    this.auth.logout();
  }

  async showOptions(){
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions',
      buttons: [{
        text: 'Mark Complete',
        icon: 'done-all',
        handler: () => {
        }
      }, {
        text: 'Order Not Accepted',
        icon: 'sad',
        handler: () => {
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
    this.navCtrl.navigateForward('/todaysdelivery');
  }

  call(phoneNumber){
    this.callnumber.callNumber(phoneNumber,true).then(res => {
      console.log('Launched dialer!', res);
    }).catch(err => {
      this.errorAlert('Error launching dialer', err);
    });
  }

  openMaps(location){
    const options: LaunchNavigatorOptions = {
      start: location,
      app: this.launchNavigator.APP.GOOGLE_MAPS
    };
    
    this.launchNavigator.navigate(location, options)
    .then(
      success => console.log('Launched navigator'),
      error => {
        this.errorAlert('Error launching navigator', error)
      }
    );
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

  async openDetailsModal(order_no){
    const modal = await this.modal.create({
      component: DeliveryDetailsPage
    });
    return await modal.present();
  }
}