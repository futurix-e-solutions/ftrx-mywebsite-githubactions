import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div class="container">
        <a href="https://ftrxsoftsolutions.in/home" class="navbar-brand fw-bold text-primary">
          <img src="assets/logo-ftrx.png" 
               alt="FTRX Logo" class="ml-2" style="width: 60px; height: 40px">
        
        </a>
        
        <button class="navbar-toggler border-0 shadow-none" type="button" 
                data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                (click)="toggleMobile()">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav" [class.show]="isMobileMenuOpen">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMobileMenu()">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/about" routerLinkActive="active" (click)="closeMobileMenu()">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/services" routerLinkActive="active" (click)="closeMobileMenu()">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/portfolio" routerLinkActive="active" (click)="closeMobileMenu()">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/blog" routerLinkActive="active" (click)="closeMobileMenu()">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/contact" routerLinkActive="active" (click)="closeMobileMenu()">Contact</a>
            </li>
            <li class="nav-item ms-2">
              <a class="btn btn-primary px-4" routerLink="/contact" (click)="closeMobileMenu()">Get Quote</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      transition: all 0.3s ease;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    
    .navbar-brand {
      font-size: 1.5rem;
      display: flex;
      align-items: center;
    }
    
    .nav-link {
      font-weight: 500;
      margin: 0 0.5rem;
      transition: color 0.3s ease;
    }
    
    .nav-link:hover {
      color: var(--bs-primary) !important;
    }
    
    .nav-link.active {
      color: var(--bs-primary) !important;
      font-weight: 600;
    }
    
    @media (max-width: 991px) {
      .navbar-collapse {
        background: white;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin-top: 1rem;
      }
    }
  `]
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  toggleMobile() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}