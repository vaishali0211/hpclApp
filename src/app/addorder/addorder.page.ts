import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'
import { DeliveryDetailsPage } from '../delivery-details/delivery-details.page';
import { restService } from '../rest.service.service';
import {Storage} from '@ionic/storage';


@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.page.html',
  styleUrls: ['./addorder.page.scss'],
})

export class AddorderPage implements OnInit {
  addOrder_form: FormGroup;
  currentImage: string;
  order: string;
 touched:boolean;
  constructor(
    public formBuilder: FormBuilder, 
    private camera: Camera,
    public auth: AuthenticationService,
    public alert: AlertController,
    public router: Router,
    public modal: ModalController,
    public api: restService,
    public activeRoute: ActivatedRoute,
    public db: Storage


    // public navCtrl: NavController, 
    // public navParams: NavParams
    // public toastCtrl: ToastController, 
    // public loadingCtrl: LoadingController

  ) {  }
  
  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.log("Camera issue:" + err);
    });
  }

    // this.Consumer_no = navParams.get('consumer No');
    // this.Name = navParams.get("Name");
    // this.Consumer_no = navParams.get("Consmer No");
    // this.address = navParams.get('address');
    // this.kg_cylinder_rs = navParams.get('KG  Cylinder NO');
    // this.subsidy = navParams.get('subsidy');
    // this.area = navParams.get('area');

  //   this.addOrder_form = formBuilder.group({
  //     Name: ['', Validators.compose
  //           ([Validators.maxLength(5), Validators.pattern
  //           ('[a-zA-Z ]*'), Validators.required])],
  //     address: ['', Validators.required],
  //     kg_cylinder_rs: ['', Validators.required],
  //     area: ['', Validators.required],
  //     phone: ['', Validators.required],
  //     subsidy: ['', Validators.required]
  //  });


  // submitConsumer(consumerNo, name, address, area, phone, kg_cylinder_rs,subsidy) {
  //    this.presentLoading();
  //    console.log(consumerNo);
  //   if (this.Consumer_no) {
  //     this.addConsumer(this.Consumer_no, this.Name, this.address, this.kg_cylinder_rs, this.area, this.phone, this.subsidy).subscribe(response => {
  //       // this.navCtrl.popTo(consumerNo, response);
  //       // this.navCtrl.push(consumerNo, response);
  //     });
  //   }
  // }

  ngOnInit() {
    this.addOrder_form = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required, 
        Validators.minLength(2)
      ])),
      consumer_no: new FormControl('', Validators.compose([
        Validators.required, 
        // Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
      ])),  
      phone: new FormControl('', Validators.compose([
        Validators.required, 
        Validators.pattern('^[7-9][0-9]{9}$'),
      ])),
      address_1: new FormControl('', Validators.compose([
        Validators.required, 
      ])),
      address_2: new FormControl('', Validators.compose([
        Validators.required, 
      ])),
      area: new FormControl('', Validators.compose([
        Validators.required, 
      ])),
      subsidy_consume: new FormControl('', Validators.required),
      delivery: new FormControl(''),
      emptycollected: new FormControl(''),
      defective: new FormControl(''),
    });
  }
  

  addOrder_messages = {
    'name': [
      { type: 'required', message: 'Name is required.' },
      { type: 'min', message: 'Name must be atleast 2 Character Long.' },
    ],
    'Consumer_no': [
      { type: 'required', message: 'Consumer No is required.' },
      { type: 'pattern', message: 'Please Enter a valid Consumer No.' },
    ],
    'phone': [
      { type: 'required', message: 'Phone No is required.' },
      { type: 'pattern', message: 'Phone No must be atleast 10 digit.' },
    ],
    'address_1': [
      { type: 'required', message: 'Address_1 is required.' },
    ],
    'address_2': [
      { type: 'required', message: 'Address_2 is required.' },
    ],
    'area': [
      { type: 'required', message: 'Area is required.' },
    ],
    'kg_cylinder_rs': [
      { type: 'required', message: 'KG Cylinder Rs is required.' },
    ],
    'subsidy_consume': [
      { type: 'required', message: 'Subsidy Consume is required.' },
    ],
  };

 
  onSubmit(values):void {
    console.log(this.addOrder_form.touched);
    console.log(this.addOrder_form.value)
    this.order=this.activeRoute.snapshot.paramMap.get("type");
    console.log(this.order);
    this.db.get('USER_INFO').then(res => {
    let params = "customer_id="+values.customer_id
      + "&product_id="+values.product_id
      + "&product_attribute_id="+values.product_attribute_id
      + "&created_by="+values.created_by
      + "&dnt="+values.dnt;
      this.api.Add_Order(params).subscribe(res=>{
        console.log(res)
        if(res.status==1) {
          alert(res.message);
      } else if(res.success == true) {
         this.router.navigate(['/menu']);
      } else {
        alert(res.message);
      }
    }) ;
  })

  
  
      // this. addOrder=(this.Consumer_no, this.name, this.address_1, this.address_2, this.kg_cylinder_rs, this.area, this.phone, this.subsidy_consumer).subscribe(res => {
      //   if(res.status == '1'){
      //     this.navigate(res.data.submit)
      //   } else {
      //     this.errorAlert(res.message);
      //   }
      // })
    this.presentAlertMultipleButtons();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alert.create({
      header: 'Alert',
      subHeader: '',
      message: 'Your order is added in list do you want to proside to payment.',
      buttons: [
        {
          text: 'Order Details',
          handler: () => {
            // this.router.navigateByUrl('/delivery-details');
            this.openDetailsModal();
          }
        },
        // {
        //   text: 'Order Details',
        //   handler: () => {
        //     this.router.navigateByUrl('/addOrder');
        //   }
        // }
      ]
    });

  await alert.present();
  }

  async openDetailsModal(){
    const modal = await this.modal.create({
      component: DeliveryDetailsPage
    });
    return await modal.present();
  }
  logout(){
    this.auth.logout();
  } 

}