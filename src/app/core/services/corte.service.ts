import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorteService {

  private apiUrl: string = environment.apiUrl;


  constructor(private http:HttpClient) {}

  getCortes(){
    return this.http.get(`${this.apiUrl}/cortes`);
  }

}
