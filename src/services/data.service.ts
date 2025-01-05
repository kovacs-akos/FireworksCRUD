import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FireworkModel } from '../app/models/firework-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url = 'http://localhost:3000/fireworks';
  constructor(private http: HttpClient) {}

  getFireworks(): Observable<FireworkModel[]> {
    return this.http.get<FireworkModel[]>(this.url);
  }

  addFirework(firework: FireworkModel): Observable<FireworkModel> {
    return this.http.post<FireworkModel>(this.url, firework);
  }

  modifyFirework(firework: FireworkModel): Observable<FireworkModel> {
    return this.http.put<FireworkModel>(this.url + '/' + firework.id, firework);
  }

  deleteFirework(firework: FireworkModel): Observable<FireworkModel> {
    return this.http.delete<FireworkModel>(this.url + '/' + firework.id);

  }
}
