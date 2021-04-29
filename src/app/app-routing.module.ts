import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HeroeDetalleComponent } from './componentes/heroe-detalle/heroe-detalle.component';

const routes: Routes = [
   {
      path: '',
      redirectTo: 'heroes',
      pathMatch: 'full'
   },
   {
      path: 'heroes',
      component: HeroesComponent
   },
   {
      path: 'heroe/:id',
      component: HeroeDetalleComponent
   }
];

@NgModule({
   imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
   exports: [RouterModule]
})
export class AppRoutingModule { }
