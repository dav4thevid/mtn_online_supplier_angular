import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPopUpComponent } from './../modal-pop-up/modal-pop-up.component';
// import { SearchModel } from "../models/searchModel";
import {SearchModel} from '../models/searchModel';
import { environment } from "../../../environments/environment.prod";
import { Component, Input, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { Router } from '@angular/router';




//tenor
var apikey = "WEFVEHVQMWTU";
var lmt = 10;


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
  closeResult = '';
  user = {name: 'David', profession: "coder"}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      // 'api_key': 'RSqt4yIW1nj82pXkiL5Fr6uGqItlWSlP'
      key: "WEFVEHVQMWTU",
    }),
  };

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router, private modalService: NgbModal

     )
     {

    // this.searchEndpointTenor = environment.baseUrlTenor + "search?q=";
    this.searchEndpointGiphy = environment.baseUrlGiphy + "gifs/search?";

  }


  // https://api.giphy.com/v1/gifs/search?api_key=RSqt4yIW1nj82pXkiL5Fr6uGqItlWSlP&q=boys&limit=25&offset=0&rating=g&lang=en

  ngOnInit() {
    this.createSearch();
  }

  modalPopUp() {
		const modalRef = this.modalService.open(ModalPopUpComponent);
    modalRef.componentInstance.data = this.data;
	}

	closePopUp() {
		this.modalService.dismissAll();
	}


  createSearch() {
    this.searchForm = this.fb.group({
      q: [this.searchModel.q, Validators.required],

    });

  }

  //Switch for Tenor API here
  // async search(event) {
  //   // console.log(event.target.value.toString());
  //  await this.http
  //     .get(
  //       this.searchEndpointTenor +
  //         event.target.value +
  //         "&key=" +
  //         apikey +
  //         "&limit=" +
  //         lmt
  //     )
  //     .subscribe((gifData: any) => {
  //       this.data.next(gifData.results);
  //       // console.log(gifData.results);
  //     }
  //     );
  //     this.modalPopUp();
  // }


  async search(event) {
    // console.log(event.target.value.toString());
   await this.http
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
        // console.log(gifData.results);
      }
      );
      this.modalPopUp();
  }

}


