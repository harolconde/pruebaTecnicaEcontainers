import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroe';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
   providedIn: 'root'
})
export class HeroesService {

   constructor(private http: HttpClient) { }

   public showHeroes(): Observable<any> {
      return this.http.get(`${environment.baseUrlService}/all.json`);
   }

   public showHeroe(id: any): Observable<any> {
      return this.http.get(`${environment.baseUrlService}/id/${id}.json`);
   }

}
