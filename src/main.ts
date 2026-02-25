import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component'; // <--- Mudamos de 'App' para 'AppComponent'

bootstrapApplication(AppComponent, appConfig)       // <--- Aqui também
  .catch((err) => console.error(err));