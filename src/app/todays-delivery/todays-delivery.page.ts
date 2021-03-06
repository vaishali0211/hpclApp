import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from '../services/authentication.service';
import { LaunchNavigatorOptions, LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { CallNumber } from '@ionic-native/call-number';
import { AlertController, ActionSheetController, NavController, ModalController } from '@ionic/angular';
import { DeliveryDetailsPage } from '../delivery-details/delivery-details.page';
import { restService } from '../rest.service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-todays-delivery',
  templateUrl: './todays-delivery.page.html',
  styleUrls: ['./todays-delivery.page.scss'],
})
export class TodaysDeliveryPage implements OnInit {
  touched:boolean;
  userId: any;
  todayDelivery:any;
  deliveries: any;
  delivery_boy_stock_id: string;
  

  constructor(
    public db: Storage,
    public auth: AuthenticationService,
    public actionSheetController: ActionSheetController,
    public navCtrl: NavController,
    public alert: AlertController,
    // public callnumber: CallNumber,
    // public launchNavigator: LaunchNavigator,
    public modal: ModalController,
    public router: Router,
    public api: restService,
    public activeRoute: ActivatedRoute, 
    public httpClient: HttpClient
  ) { 
    
    this.todayDelivery = 
  [{ con_no:'21356', cust_name: 'Neel Jain',phone: '9999999990'},
  { con_no:'12356',  cust_name: 'Bhart Singh', phone: '9865231452'},
  { con_no:'12357',  cust_name: 'sita pawar', phone: '9865231234'},
  { con_no:'12563',  cust_name:'Indu varma', phone: '9863698524'}];
  

  }
      // $scope.delivery=[
      //   {
      //     con_no: "",
      //     cust_name: "",
      //     phone: ""
      //   },
      //   {
      //     con_no: "",
      //     cust_name: "",
      //     phone: ""
      //   },
      //   {
      //     con_no: "",
      //     cust_name: "",
      //     phone: ""
      //   }
      // ];

     
   ngOnInit():void {
  //   console.log(this.todayDelivery);
    this.todayDelivery=this.activeRoute.snapshot.paramMap.get("type");
    console.log(this.todayDelivery);
    this.db.get('USER_INFO').then(res => {
      let params = "userId="+"19"+"&deliveryboy_stock_id="+"1"+"dnt="+"1584109000"+"product_id="+"10"
      +"product_attribute_id="+"1"+"delivery_id="+"1"+"mode="+"OUT"+"empty_new="+"1"+     
       "empty_old="+"0"+"filled_new="+"9"+"filled_old="+"10"+"defective_new="+"0"+"defective_old="+"0"+
      "created_at="+"2020-03-14 05:38:18"+"created_by="+"19"+"updated_at="+"2020-03-14 06:04:01"+"updated_by="+"19"+"deleted_at="+"2020-03-14 06:04:01"+
      "deleted_by="+"10"+"is_deleted="+"0";
      this.api.Get_Delivery_boy_stocks(params).subscribe(res=>{
        console.log(res)
        if(res.status==1) {
          alert(res.message);
      } else if(res.success == true) {
         this.router.navigate(['/menu']);
      } else {
        alert(res.message);
      }
    });
  })
// } else{
//   let key = Object.keys(this.todayDelivery.controls);
//   key.filter(data=>{
//     let control = this.todayDelivery.controls[data];
//     if( control.errors !=null){
//       control.markAsTouched();
//     }
//   })
// }
 }
//  continueToReview(index) {
//   const selectedDelivery = this.todayDelivery[index];
// }
  logout(){
    this.auth.logout();
  }

  // async showOptions(){
  //   const actionSheet = await this.actionSheetController.create({
  //     header: 'Actions',
  //     buttons: [{
  //       text: 'Mark Complete',
  //       icon: 'done-all',
  //       handler: () => {
  //       }
  //     }, {
  //       text: 'Order Not Accepted',
  //       icon: 'sad',
  //       handler: () => {
  //       }
  //     }, {
  //       text: 'Cancel',
  //       icon: 'close',
  //       role: 'cancel',
  //       handler: () => {
  //         console.log('Cancel clicked');
  //       }
  //     }]
  //   });
  //   await actionSheet.present();
  //   this.navCtrl.navigateForward('/todaysdelivery');
  // }

  // call(phoneNumber){
  //   this.callnumber.callNumber(phoneNumber,true).then(res => {
  //     console.log('Launched dialer!', res);
  //   }).catch(err => {
  //     this.errorAlert('Error launching dialer', err);
  //   });
  // }

  // openMaps(location){
  //   const options: LaunchNavigatorOptions = {
  //     start: location,
  //     app: this.launchNavigator.APP.GOOGLE_MAPS
  //   };
    
  //   this.launchNavigator.navigate(location, options)
  //   .then(
  //     success => console.log('Launched navigator'),
  //     error => {
  //       this.errorAlert('Error launching navigator', error)
  //     }
  //   );
  // }

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

  async openDetailsModal(deliverylist){
    let entity_id = this.deliveries.entity_id;
    this.api.Get_Delivery_boy_stocks('entity_id='+entity_id+"&delivery_boy_stock_id="+this.delivery_boy_stock_id).subscribe(async resp => {
      deliverylist.consumerNumber = resp.consumer_name;
      deliverylist.consumerPhone = resp.consumer_phone;
      deliverylist.consumerAdd1 = resp.consumer_1;

    const modal = await this.modal.create({
      component: DeliveryDetailsPage,
      componentProps: deliverylist,

    });
    return await modal.present();
      });
  }
}
