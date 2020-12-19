import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { IntroWithImageComponent } from './intro-with-image/intro-with-image.component';
import { BecomeASupplierComponent } from './become-a-supplier/become-a-supplier.component';
// import { ListGIFComponent } from './shared/list-gif/list-gif.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ModalPopUpComponent } from './shared/modal-pop-up/modal-pop-up.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IntroComponent,
    IntroWithImageComponent,
    BecomeASupplierComponent,
    // ListGIFComponent,
    // ModalPopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],

  // entryComponents: [ModalPopUpComponent],

  providers: [
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
