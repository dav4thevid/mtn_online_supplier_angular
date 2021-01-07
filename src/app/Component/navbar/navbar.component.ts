// import { ImageserviceService } from './../../Services/imageservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPopUpComponent } from './../modal-pop-up/modal-pop-up.component';
// import { SearchModel } from "../models/searchModel";
import {SearchModel} from '../models/searchModel';
import { environment } from "../../../environments/environment.prod";
import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BehaviorSubject, Observable } from "rxjs";
import {ImageserviceService} from '../../Services/imageservice.service';
import { map, catchError } from 'rxjs/operators';
import { Directive,HostListener ,ChangeDetectorRef} from '@angular/core';

//giphy
var giphyKey = "RSqt4yIW1nj82pXkiL5Fr6uGqItlWSlP";
var limit = "15";
var offset = "0";
var rating = 'g';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})

export class NavbarComponent implements OnInit {
  environment = "api.giphy.com/v1/gifs/";
  searchEndpointTenor: string;
  searchEndpointGiphy: string;
  searchForm: FormGroup;
  searchModel = new SearchModel();
  searchResults = {};
  data = new BehaviorSubject<any>([]);
  // data$ = new BehaviorSubject<any>({});
  closeResult = '';
  // user = {name: 'David', profession: "coder"}
  // isImageLoading;
  // imageToShow: any;

  navbarCollapsed = true;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      key: "WEFVEHVQMWTU",
    }),
  };

  constructor(
      private http: HttpClient,
      private fb: FormBuilder,
      private modalService: NgbModal,
      // private imageService: ImageserviceService,
      private cdr: ChangeDetectorRef,
    // private modalComponent: ModalPopUpComponent
     )
     {
    this.searchEndpointGiphy = environment.baseUrlGiphy + "gifs/search?";
  }

  ngOnInit() {
    this.createSearch();
  }

  modalPopUp() {
		const modalRef = this.modalService.open(ModalPopUpComponent);
    modalRef.componentInstance.data = this.data;
  }


  // getImageFromService(event) {
  //   this.isImageLoading = true;
  //   this.imageService.getImage(
  //     this.searchEndpointGiphy +
  //         "api_key=" +
  //         giphyKey +
  //         "&q=" +
  //         event.target.value +
  //         "&limit =" +
  //         limit +
  //         "&offset=" +
  //         offset +
  //         "&rating=" +
  //         rating +
  //         "&lang=en",
  //   ).subscribe(gifData => {
  //     this.data.next(gifData);
  //     this.createImageFromBlob(gifData);
  //     this.isImageLoading = false;
  //     this.modalPopUp();
  //   }, error => {
  //     this.isImageLoading = false;
  //     console.log(error);
  //   });
// }



toggleNavbarCollapse() {
  this.navbarCollapsed = !this.navbarCollapsed;
}


  createSearch() {
    this.searchForm = this.fb.group({
      q: [this.searchModel.q, Validators.required],

    });

  }

  search(event){
    this.http
       .get(
         this.searchEndpointGiphy +
           "api_key=" +
           giphyKey +
           "&q=" +
           event.target.value +
           "&limit =" +
           limit +
           "&offset=" +
           offset +
           "&rating=" +
           rating +
           "&lang=en",

       )
       .subscribe((gifData: any) => {
         this.data.next(gifData.data);
        
       }
       );
       this.modalPopUp();
   }


  // search(event){
  //  this.http
  //     .get(
  //       this.searchEndpointGiphy +
  //         "api_key=" +
  //         giphyKey +
  //         "&q=" +
  //         event.target.value +
  //         "&limit =" +
  //         limit +
  //         "&offset=" +
  //         offset +
  //         "&rating=" +
  //         rating +
  //         "&lang=en",

  //     ).pipe(map(datas => {
  //       const result = datas['datas'];
  //       result.forEach(data => data[data].url =  "api_key=" +
  //       giphyKey +
  //       "&q=" +
  //       event.target.value +
  //       "&limit =" +
  //       limit +
  //       "&offset=" +
  //       offset +
  //       "&rating=" +
  //       rating +
  //       "&lang=en" + data[data].url );
  //       return result;
  //     }))
  //     .subscribe(
  //       res => { this.data.next(res.data);
  //           console.log(this.data)
  //       },
  //       err => { console.log(err); },
  //       () => { console.log(this.data); }
  //     );
  //     this.modalPopUp();
  // }

}


