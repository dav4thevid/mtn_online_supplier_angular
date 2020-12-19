import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentRoutingModule } from './component-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { IntroWithImageComponent } from './intro-with-image/intro-with-image.component';
import { BecomeASupplierComponent } from './become-a-supplier/become-a-supplier.component';
import { ComponentsComponent } from './components/components.component';
import { RouterModule } from '@angular/router';
import { ListGifComponent } from './list-gif/list-gif.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ModalPopUpComponent } from './modal-pop-up/modal-pop-up.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    IntroComponent,
    IntroWithImageComponent,
    BecomeASupplierComponent,
    ComponentsComponent,
    ListGifComponent,
    HomepageComponent,
    ModalPopUpComponent,
  ],

  imports: [
    CommonModule,
    ComponentRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],

  entryComponents:[ModalPopUpComponent]
  


})
export class ComponentModule { }
