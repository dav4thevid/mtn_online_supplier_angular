import { ComponentModule } from './Component/component.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';


// import { ListGIFComponent } from './shared/list-gif/list-gif.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MatGridListModule } from '@angular/material';

// import { ModalPopUpComponent } from './shared/modal-pop-up/modal-pop-up.component';


@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    // MatGridListModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ComponentModule,
    AnimateOnScrollModule.forRoot()
  ],

  // entryComponents: [ModalPopUpComponent],

  providers: [
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
