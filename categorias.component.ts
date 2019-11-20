import { Component, OnInit } from '@angular/core';
import { ArrayType } from '@angular/compiler';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
 
  categorias = [
    {id: 1, nome: 'Infantojuvenis'},
    {id: 2, nome: 'Poesia'},
    {id: 3, nome: 'Romances'}
  ]

  constructor() {
    
    
   }

  ngOnInit() {
   
  }
  addCategoria (): void{
    
    }s

}
 
