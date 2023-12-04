import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { AppRoutes } from './app/app.routes';

bootstrapApplication(AppComponent,
  {
    providers: [ 
      provideRouter( AppRoutes )
    ]
  }
).catch(err => console.error(err));

