import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-addpayment',
  templateUrl: './addpayment.page.html',
  styleUrls: ['./addpayment.page.scss'],
})
export class AddpaymentPage implements OnInit {

  constructor(
    public auth: AuthenticationService,
    public alert: AlertController,
    public router: Router
  ) { }

  ngOnInit() {
  }
  logout(){
    this.auth.logout();
  } 
}
