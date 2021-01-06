import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

var giphyKey = "RSqt4yIW1nj82pXkiL5Fr6uGqItlWSlP";
var limit = "15";
var offset = "0";
var rating = 'g';

@Injectable({
  providedIn: 'root'
})



export class ImageserviceService {
  imageToShow: any;
  data = new BehaviorSubject<any>([]);
  searchEndpointGiphy: string;



  constructor(
    private http: HttpClient
  ) {
    this.searchEndpointGiphy = environment.baseUrlGiphy + "gifs/search?";
   }


   getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, { responseType: 'blob' });
  }


 
}
