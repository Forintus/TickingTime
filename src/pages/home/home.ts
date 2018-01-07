import { Component, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnDestroy {

  private interval: any;
  private time: Date;
  private date: string;
  private seconds: string;

  constructor(public navCtrl: NavController) {
    this.interval = setInterval(() => {
      let date = new Date();
      this.seconds = date.getSeconds() / 60 * 100 + "%";
      this.time = new Date(); 
      const options = { 
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric' 
      };
      // let language = 'fr-FR';
      let language = navigator.language;
      this.date = date.toLocaleString(language, options);
    }, 1000);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}