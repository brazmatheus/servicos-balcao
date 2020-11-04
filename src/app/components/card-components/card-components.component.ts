import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-components',
  templateUrl: './card-components.component.html',
  styleUrls: ['./card-components.component.css']
})
export class CardComponentsComponent implements OnInit {

  pedidos: Array<any> = [{
    senha: 1,
    nome: 'a',
    itens: [{
      nome: 'hamburguer a',
      quantidade: 2
    }, {
      nome: 'batata pequena',
      quantidade: 1
    }]
  },{
    senha: 2,
    nome: 'b',
    itens: [{
      nome: 'hamburguer b',
      quantidade: 2
    }, {
      nome: 'batata média',
      quantidade: 1
    }]
  },{
    senha: 3,
    nome: 'c',
    itens: [{
      nome: 'hamburguer c',
      quantidade: 2
    }, {
      nome: 'batata grande',
      quantidade: 1
    }]
  }] 

  constructor() { }

  ngOnInit(): void {
  }

  maisInformacoes(){

  }

}
