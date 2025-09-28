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
      if (this.platform.is('cordova') || this.platform.is('capacitor')) {
        // Carga web en InAppBrowser en móvil
        this.iab.create(
          'https://www.flutterflow.io/',
          '_self',  // abre en la misma ventana
          'location=no,zoom=no,hardwareback=yes'
        );
      } else {
        // Fallback en navegador
        window.location.href = 'https://www.flutterflow.io/';
      }
    });
  }
}
