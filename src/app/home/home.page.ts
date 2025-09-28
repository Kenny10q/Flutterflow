import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor(private platform: Platform, private iab: InAppBrowser) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      const url = 'https://bubble.io/';
      
      if (this.platform.is('cordova') || this.platform.is('capacitor')) {
        // Cargar Bubble en InAppBrowser
        this.iab.create(
          url,
          '_self', // abre dentro de la app
          'location=no,zoom=no,hardwareback=yes'
        );
      } else {
        // Fallback para navegador
        window.location.href = url;
      }
    });
  }
}
