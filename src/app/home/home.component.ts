import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logo: string;
  nome : string;
  status: string;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){

    this.apiService.autenticacao().subscribe(res => {
      console.log(res[0])
       this.logo = res[0].logo;
       this.nome = res[0].nome;
       this.status = res[0].status;
    }, (error) => {
       console.warn(error)
    })

  }

}
