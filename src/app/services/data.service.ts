import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://jsonplaceholder.typicode.com'; // Exemplo de uma API de teste

  constructor(private http: HttpClient) { }

  // Método para obter dados do servidor
  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts`);
  }

  // Método para enviar dados para o servidor (exemplo)
  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/posts`, data);
  }
}
