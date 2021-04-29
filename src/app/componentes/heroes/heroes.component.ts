import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
   selector: 'app-heroes',
   templateUrl: './heroes.component.html',
   styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
   public filterPost = "";
   public listaHeroes: Array<Heroe> = [];
   constructor(private _heroe: HeroesService) { }

   ngOnInit(): void {
      this.listarHeroes();
   }

   public listarHeroes() {
      this._heroe.showHeroes().subscribe(data => {
         let randomHeroes: number = data.length;
         let random;
         let seleccion;
         for (let i = 0; i < randomHeroes; i++) {
            random = Math.floor(Math.random() * (data.length));
            seleccion = data[random];
            this.listaHeroes.push(seleccion);
         }
      })
   }

}
