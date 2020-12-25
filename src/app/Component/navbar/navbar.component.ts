import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPopUpComponent } from './../modal-pop-up/modal-pop-up.component';
// import { SearchModel } from "../models/searchModel";
import {SearchModel} from '../models/searchModel';
import { environment } from "../../../environments/environment.prod";
import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BehaviorSubject } from "rxjs";




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
      key: "WEFVEHVQMWTU",
    }),
  };

  constructor(
      private http: HttpClient,
      private fb: FormBuilder,
      private modalService: NgbModal

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

	closePopUp() {
		this.modalService.dismissAll();
	}


  createSearch() {
    this.searchForm = this.fb.group({
      q: [this.searchModel.q, Validators.required],

    });

  }



  search(event) {
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

}


