import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path:'about',
    component:AboutComponent
  },
    {
      path:'contactus',
      component:ContactusComponent
    },
    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'product',
      component:ProductComponent
    },
    {
      path:'cart',
      component:CartComponent
    },
    {
      path:'menu',
      component:MenuComponent
    },
    {
      path:'payment',
      component:PaymentComponent
    }
    
      
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
