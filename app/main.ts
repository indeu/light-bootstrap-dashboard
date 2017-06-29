import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import {enableProdMode} from '@angular/core';
import 'rxjs/Rx';

enableProdMode();
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
// ceva
