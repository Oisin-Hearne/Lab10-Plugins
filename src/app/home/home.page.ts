import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lon:number=0;
  lat:number=0;
  constructor() {}

  //Sets the value of lon and lat equal to the current longitute and latitude of the user device.
  async getGPS() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.lon = coordinates.coords.longitude; //If this seems a bit confusing, check the documentation
    this.lat = coordinates.coords.latitude; //Or try seeing what autofill gives you when you hit tab
  }

  //Opens a Browser Window to the designated URL.
  async openBrowser() {
    await Browser.open({url: 'http://capacitorjs.com/'});
  }
}

