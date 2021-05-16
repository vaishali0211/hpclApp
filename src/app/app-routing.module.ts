import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'login', 
    loadChildren: './login/login.module#LoginPageModule',
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminPageModule',
    canActivate: [AuthGuardService],
  },
  {
    path: 'operator',
    loadChildren:'./operator/operator.module#OperatorPageModule'
    
  },
  {
    path: 'customer',
    loadChildren: './customer/customer.module#CustomerPageModule'
  },
  {
    path: 'account',
    loadChildren:'./account/account.module#AccountPageModule'
  },
  {
    path: 'menu',
    loadChildren:'./menu/menu.module#MenuPageModule'
  },
  {
    path: 'todayscollection',
    loadChildren:'./todayscollection/todayscollection.module#TodayscollectionPageModule'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfilePageModule'
  },
  {
    path: 'delivery-details',
    loadChildren: './delivery-details/delivery-details.module#DeliveryDetailsPageModule'
  },
  {
    path: 'forgetpassword',
    loadChildren:'./forgetpassword/forgetpassword.module#ForgetpasswordPageModule'
  },
  {
    path: 'verifyotp',
    loadChildren: './verifyotp/verifyotp.module#VerifyotpPageModule'
  },
  {
    path: 'changepassword',
    loadChildren:'./chanepassword/changepassword.module#ChanepasswordPageModule'
  },
  {
    path: 'editprofile',
    loadChildren:'./editprofile/editprofile.module#EditprofilePageModule'
  },
  {
    path: 'addorder',
    loadChildren: './addorder/addorder.module#AddorderPageModule'
  },
  {
    path: 'todaysdelivery',
    loadChildren:'./todays-delivery/todays-delivery.module#TodaysDeliveryPageModule'
  },
  {
    path: 'cashcollectionentry',
    loadChildren: () => import('./cashcollectionentry/cashcollectionentry.module').then( m => m.CashcollectionentryPageModule)
  },
  {
    path: 'orderlist',
    loadChildren: () => import('./orderlist/orderlist.module').then( m => m.OrderlistPageModule)
  },
  {
    path: 'addpayment',
    loadChildren: () => import('./addpayment/addpayment.module').then( m => m.AddpaymentPageModule)
  },
  {
    path: 'addopeningstock',
    loadChildren: () => import('./addopeningstock/addopeningstock.module').then( m => m.AddopeningstockPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
