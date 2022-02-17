import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

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
     return this.httpClient.get<any>('https://api.api-futebol.com.br/v1/campeonatos/', this.header)
  }
}
