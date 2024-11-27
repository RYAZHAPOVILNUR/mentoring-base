import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { userReduсer } from './user-list/store/user.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoReducer } from './todos-list/store/todo.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(), provideAnimationsAsync('noop'),
    provideStore({
        users: userReduсer,
        todos: todoReducer
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
