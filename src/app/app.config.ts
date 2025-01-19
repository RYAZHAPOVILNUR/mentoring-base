import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { userReducer } from './components/pages/user-list/store/user.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoReducer } from './components/pages/todos-list/store/todo.reducer';
import { TodosEffects } from './components/pages/todos-list/store/todos.effects';
import { provideEffects } from '@ngrx/effects';
import { UsersEffects } from './components/pages/user-list/store/users.effects';
import { DialogService } from './services/dialog.service';
import { MatDialog } from '@angular/material/dialog';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideStore({
      users: userReducer,
      todos: todoReducer,
    }),
    provideEffects(TodosEffects, UsersEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    {
      provide: DialogService,
      useFactory: (dialog: MatDialog) => new DialogService(dialog),
      deps: [MatDialog],
    },
  ],
};
