import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { userReducer } from './users-list/store/users.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoReducer } from './todos-list/store/todo.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideAnimations(),
    provideStore({
      users: userReducer,
      todo: todoReducer
    }),
    provideStoreDevtools({ 
      maxAge: 25, logOnly: !isDevMode()
    })
]
};
