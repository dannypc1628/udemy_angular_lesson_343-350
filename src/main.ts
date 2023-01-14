import { AnalyticsService } from 'src/app/shared/analytics.service';
import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, { providers: [AnalyticsService] });
