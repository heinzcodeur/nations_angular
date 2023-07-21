import { Component, OnInit } from '@angular/core';
import { lesNations } from './../nations-list';
import { National } from '../national';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: []
})
export class HomePageComponent implements OnInit {

  nations: National[];
  author: string = 'HeinzCodeur';

  ngOnInit() {
    this.nations = lesNations;
    console.log(this.nations);
  }

}
