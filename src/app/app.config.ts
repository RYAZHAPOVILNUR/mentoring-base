import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthGuardService } from './auth-guard.service';
import { CurrentUserService } from './currentUser.service';
import { LocalStorageService } from './local-storage.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    AuthGuardService,
    CurrentUserService,
    LocalStorageService
  ],
};
