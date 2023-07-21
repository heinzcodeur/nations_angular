import { Component, OnInit} from '@angular/core';
import { ServiceApiService } from '../services/service-api.service';
import { Observable } from 'rxjs';
import { Nation } from 'src/app/types/nation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: 'accueil.component.html',
  styles: [`
    .radio-container {
      justify-content: space-around;
      align-items: center;
      margin-bottom: 20px;
      background: $color-3;
      border-radius: 20px;
      padding: 10px;
      color: $white;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.452);
    }

    ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  ul li{
    list-style-type: none;
  }

  .countries {
  text-align: center;
  }

  `]
})

export class AccueilComponent implements OnInit{
  // countries$: Observable<Country[]>;
   auteur: String;
   nations: Nation[];
   radios = ["Africa", "America", "Asia", "Europe", "Oceania"]

   rangeValue: number = 145;

   constructor(private api: ServiceApiService, private router: Router){}


  handleRangeChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.rangeValue = +target.value;
  }

  goToNation(nation: Nation){
    this.router.navigate(['/nation', nation.name.common]);
  }

  // ngOnInit(): void {
  //   console.log(this.api.getAuthor());
  //   this.auteur = this.api.getAuthor();
  //   this.api.getNationList().subscribe((res) => this.nations = res);
  //   console.log(this.nations);
  // }
  ngOnInit(): void {
    console.log(this.api.getAuthor());
    this.auteur = this.api.getAuthor();
    this.api.getNationList().subscribe((res) => {
      this.nations = res;
      console.log(this.nations); // Placer le console.log à l'intérieur de la fonction de rappel
    });
  }
}
