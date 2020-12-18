import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { IntroWithImageComponent } from './intro-with-image/intro-with-image.component';
import { BecomeASupplierComponent } from './become-a-supplier/become-a-supplier.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IntroComponent,
    IntroWithImageComponent,
    BecomeASupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
