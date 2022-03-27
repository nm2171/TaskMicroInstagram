import { Injectable } from '@angular/core';

import { Image } from 'src/app/image';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getData(): Observable<Image[]>{
    return this.http.get<Image[]>(this.apiUrl);
  }

  getImageById(id: number): Observable<Image> {
    const newUrl = `${this.apiUrl}/${id}`;
    return this.http.get<Image>(newUrl);
  }

  addImage(img: Image): Observable<Image> {
    const header = new HttpHeaders().append('Content-Type', 'application/json; charset=UTF-8');
    return this.http.post<Image>(this.apiUrl, img, {headers: header});
  }
  
  updateData(img: Image): Observable<Image> {
    const header = new HttpHeaders().append('Content-Type', 'application/json; charset=UTF-8');
    return this.http.put<Image>(`${this.apiUrl}/${img.id}`, img, {headers: header});
  }
  
  deleteData(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);    
  }


}
