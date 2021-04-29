import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Heroe } from '../../interfaces/heroe';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
   selector: 'app-heroe-detalle',
   templateUrl: './heroe-detalle.component.html',
   styleUrls: ['./heroe-detalle.component.scss']
})
export class HeroeDetalleComponent implements OnInit {

   public heroe: Array<Heroe> = [];
   public idHero: Observable<Heroe>;
   constructor(private _heroe: HeroesService, private router: ActivatedRoute) {
      this.idHero = this.router.paramMap.pipe(switchMap((params: ParamMap) =>
         this._heroe.showHeroe(params.get('id'))
      ))
   }

   ngOnInit(): void {
      this.getHeroe();
   }

   public getHeroe() {
      
     console.log(this.idHero);
   }


}
