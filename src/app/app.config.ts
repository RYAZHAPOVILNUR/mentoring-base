import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { usersReducer } from './users-list/store/users.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todosReducer } from './todos-list/store/todos.reducer';
import { provideEffects } from '@ngrx/effects';
import { loadTodos } from './todos-list/store/todos.effects';
import { loadUsers } from './users-list/store/users.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideStore({
      users: usersReducer,
      todos: todosReducer,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects({ loadUsers, loadTodos }),
  ],
};
