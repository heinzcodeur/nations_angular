import { Component, Input } from '@angular/core';
import { Nation } from 'src/app/types/nation';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styles: [`
    .card {
      position: relative;
      height: 100px;
      width: 160px;
      border-radius: 4px;
      transition: 0.3s;
      padding: 3px;
      color:white;
    }
      h2 {
        font-size: 1rem;
      }
    
      .card:hover {
        transform: scale(1.2);
        z-index: 2;
      }
    
      .card:hover .infos {
        opacity: 1;
        transform: scaleY(1);
      }
    
      .infos {
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.7);
        color: $white;
        height: 100%;
        width: 100%;
        display: grid;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        opacity: 0;
        transform: scaleY(0);
        transition: 0.3s;
      }
      img {
        height: 100px;
        width: 160px;
        object-fit: cover;
        border-radius: 10px;
      }
    
    
  `]
})
export class CountryCardComponent {
  @Input() nation: Nation;
}