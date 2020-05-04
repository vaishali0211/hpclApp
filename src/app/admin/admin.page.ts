import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  auth: any;

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

logout(){
  this.authService.logout();
}

}