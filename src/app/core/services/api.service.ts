import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  header = { 
    headers: new HttpHeaders({
      'Authorization': 'Bearer test_89acb986c3664fff32ef7286f68deb'
    })
  }

  autenticacao(): Observable<any> {
     return this.httpClient.get<any>(API, this.header)
  }
}
