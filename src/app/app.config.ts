import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { userReducer } from './users-list/store/users.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoReducer } from './todos-list/store/todos.reducer';

export const appConfig: ApplicationConfig = {
    providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync('animations'),
    provideStore({
        users: userReducer,
        todos: todoReducer
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
]
};
