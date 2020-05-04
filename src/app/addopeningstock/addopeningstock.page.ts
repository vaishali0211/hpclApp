import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-addopeningstock',
  templateUrl: './addopeningstock.page.html',
  styleUrls: ['./addopeningstock.page.scss'],
})
export class AddopeningstockPage implements OnInit {

  constructor(
    public alert: AlertController,
    public router:Router,
    public auth: AuthenticationService
  ) { }

  ngOnInit() {
  }
  logout(){
    this.auth.logout();
  } 
  async presentAlertButtons() {
    const alert = await this.alert.create({
      header: 'Alert',
      subHeader: '',
      message: 'Opening stock added.',
      buttons: [
       
        {
          text: 'Order Details',
          handler: () => {
            this.router.navigateByUrl('/menu');
          }
        }
      ]
    });

  await alert.present();
  }


}
