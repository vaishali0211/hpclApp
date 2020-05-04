import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.page.html',
  styleUrls: ['./operator.page.scss'],
})
export class OperatorPage implements OnInit {

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }
  logout(){
    this.authService.logout();
  }
  
  }

