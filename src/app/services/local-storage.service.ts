import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    public getFromLocalStorage<T>(key: string): T | null {
        const data: string | null = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }

    public saveToLocalStorage<T>(key: string, data: T): void {
        localStorage.setItem(key, JSON.stringify(data))
    }

    public removeToLocalStorage(key: string): void {
        localStorage.removeItem(key);
    }
}
