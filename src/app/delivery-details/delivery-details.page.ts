import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';
import { restService } from '../rest.service.service';
import {Storage} from '@ionic/storage'
@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.page.html',
  styleUrls: ['./delivery-details.page.scss'],
})
export class DeliveryDetailsPage implements OnInit {
  
  modalData:any;

  constructor(
    public navParams: NavParams,
    public modal: ModalController,
    public router: Router,
    public api: restService,
    public db : Storage
  ) { }

  ngOnInit() {
    this.modalData=this.navParams.data;
    
  }

  async navigate(page){
    await  this.closeModal();
    this.router.navigateByUrl(page)
  }
  
  async closeModal(){
    await this.modal.dismiss();
  }

}

