import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  declare global {
    interface Array<T> {
      remove(elem: T): Array<T>;
    }
  }
  
  if (!Array.prototype.remove) {
    Array.prototype.remove = function<T>(this: T[], elem: T) {
      return this.filter(e => e !== elem);
    }
  }