import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nation } from '../types/nation';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  private title = 'nations_angular';
  private author = 'HeinzCodeur';
  private api = 'https://restcountries.com/v3.1/all';
  private nations: Nation[];


  constructor(private http: HttpClient) { 

  }

  getAuthor(){
    return this.author;
  }

  getNationList(){
    return this.http.get<Nation[]>(`${this.api}`); // Utilisation correcte du type Nation[]
  }

  getNationByName(name: string){
    this.getNationList().subscribe((res) => {
      this.nations = res;
      console.log(this.nations); // Placer le console.log à l'intérieur de la fonction de rappel
    });
    return this.nations.find(nation => nation.name.common == name);
  }
}
