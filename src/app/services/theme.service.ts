import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isBrowser: boolean;
  private isDarkMode = new BehaviorSubject<boolean>(false);
  public isDarkMode$ = this.isDarkMode.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.initializeTheme();
  }

  private initializeTheme(): void {
    if (!this.isBrowser) return;

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme !== null ? savedTheme === 'dark' : prefersDark;

    this.setTheme(isDark);
  }

  toggleTheme(): void {
    if (!this.isBrowser) return;

    const currentTheme = this.isDarkMode.value;
    this.setTheme(!currentTheme);
  }

  private setTheme(isDark: boolean): void {
    if (!this.isBrowser) return;

    const theme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    this.isDarkMode.next(isDark);
  }

  getCurrentTheme(): boolean {
    return this.isDarkMode.value;
  }
}
