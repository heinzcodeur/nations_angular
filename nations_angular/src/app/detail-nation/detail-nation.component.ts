import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceApiService } from '../services/service-api.service';
import { Nation } from '../types/nation';

@Component({
  selector: 'app-detail-nation',
  templateUrl: 'detail-nation.component.html',
  styles: [
  ]
})
export class DetailNationComponent {
  
nation: Nation|undefined;
 //injection pour acceder à la route courante
  constructor(private route: ActivatedRoute, private router: Router, private apiService: ServiceApiService){}

  ngOnInit(){
     const nationName: string|null = this.route.snapshot.paramMap.get('name');
     if(nationName){
           this.nation = this.apiService.getNationByName(nationName);
     }
     console.log(this.nation);

  }

  goToNationList(){
     this.router.navigate(['/pokemons']);
  }
}
