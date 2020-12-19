import { SearchModel } from "./../models/searchModel";
import { environment } from "./../../../environments/environment.prod";
import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { ActivatedRoute, Params, Router } from '@angular/router';



var apikey = "WEFVEHVQMWTU";
var lmt = 20;

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  environment = "api.giphy.com/v1/gifs/";
  searchEndpoint: string;
  searchForm: FormGroup;
  searchModel = new SearchModel();
  searchResults = {};
  datas$ = new BehaviorSubject<any>([]);
  closeResult = '';

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      // 'api_key': 'RSqt4yIW1nj82pXkiL5Fr6uGqItlWSlP'
      key: "WEFVEHVQMWTU",
    }),
  };

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router,
    // private modalService: NgbModal
     )
     {
    // this.searchEndpoint = environment.baseUrl + "gifs/random";
    // this.searchEndpoint = "gifs/search/";
    // this.searchEndpoint = "https://api.tenor.com/v1/search";
    this.searchEndpoint = environment.baseUrl + "search?q=";
  }

  ngOnInit() {
    this.createSearch();
  }


  createSearch() {
    this.searchForm = this.fb.group({
      q: [this.searchModel.q, Validators.required],

    });

  }

  search(event) {
    console.log(event.target.value.toString());
    this.http
      .get(
        this.searchEndpoint +
          event.target.value +
          "&key=" +
          apikey +
          "&limit=" +
          lmt
      )
      .subscribe((gifData: any) => {
        this.datas$.next(gifData.results);
        console.log(gifData.results)
      });
  }

}
