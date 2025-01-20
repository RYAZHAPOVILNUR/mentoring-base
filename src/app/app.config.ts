import { ApplicationConfig, isDevMode } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideHttpClient } from "@angular/common/http";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideStore } from '@ngrx/store';
import { userReducer } from "./user-list/store/user.reducer";
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoReducer } from "./todos-list/store/todo.reducer";
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync("noop"),
    provideAnimationsAsync(),
    provideStore({
        todos: todoReducer,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects()
]
};
