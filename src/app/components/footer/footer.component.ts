import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-dark text-white py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <h5 class="fw-bold mb-3">FTRX Soft Solutions</h5>
            <p class="text-light mb-3">India's Best Startup IT Company 2025. We deliver cutting-edge web and mobile solutions to transform your business.</p>
            <div class="d-flex gap-3">
              <a target="_blank" href="https://www.facebook.com/ftrxsoftsolutions" class="text-white fs-5"><i class="fab fa-facebook"></i></a>
              <!-- <a target="_blank" href="https://www.facebook.com/ftrxsoftsolutions" class="text-white fs-5"><i class="fab fa-twitter"></i></a> -->
              <a target="_blank" href="https://www.linkedin.com/company/ftrx_soft_solutions" class="text-white fs-5"><i class="fab fa-linkedin"></i></a>
              <a target="_blank" href="https://www.instagram.com/ftrx_soft_solutions" class="text-white fs-5"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
          
          <div class="col-lg-2 col-md-6">
            <h6 class="fw-bold mb-3">Quick Links</h6>
            <ul class="list-unstyled">
              <li><a routerLink="/" class="text-light text-decoration-none">Home</a></li>
              <li><a routerLink="/about" class="text-light text-decoration-none">About</a></li>
              <li><a routerLink="/services" class="text-light text-decoration-none">Services</a></li>
              <li><a routerLink="/portfolio" class="text-light text-decoration-none">Portfolio</a></li>
            </ul>
          </div>
          
          <div class="col-lg-3 col-md-6">
            <h6 class="fw-bold mb-3">Services</h6>
            <ul class="list-unstyled">
              <li><a href="#" class="text-light text-decoration-none">Web Development</a></li>
              <li><a href="#" class="text-light text-decoration-none">Mobile Apps</a></li>
              <li><a href="#" class="text-light text-decoration-none">Digital Marketing</a></li>
              <li><a href="#" class="text-light text-decoration-none">UI/UX Design</a></li>
            </ul>
          </div>
          
          <div class="col-lg-3 col-md-6">
            <h6 class="fw-bold mb-3">Contact Info</h6>
            <ul class="list-unstyled">
              <li class="text-light mb-2"><i class="fas fa-phone me-2"></i> +91 93916 90216</li>
              <li class="text-light mb-2"><i class="fas fa-envelope me-2"></i> info&#64;ftrxsoftsolutions.in</li>
              <li class="text-light mb-2"><i class="fas fa-map-marker-alt me-2"></i> Madhapur, Hyderabad</li>
            </ul>
          </div>
        </div>
        
        <hr class="my-4 text-white-50">
        
        <div class="row align-items-center">
          <div class="col-md-6">
            <p class="mb-0 text-light">&copy; 2025 FTRX Soft Solutions. All rights reserved.</p>
          </div>
          <div class="col-md-6 text-md-end">
            <a href="#" class="text-light text-decoration-none me-3">Privacy Policy</a>
            <a href="#" class="text-light text-decoration-none">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "FTRX Soft Solutions",
      "image": "https://ftrxsoftsolutions.in/assets/logo.png",
      "@id": "https://ftrxsoftsolutions.in",
      "url": "https://ftrxsoftsolutions.in",
      "telephone": "+91-9391690216",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Madhapur",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500081",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 17.4449,
        "longitude": 78.3869
      },
      "openingHours": "Mo-Sa 10:00-19:00",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9391690216",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": [
        "https://www.facebook.com/ftrxsoftsolutions",
        "https://www.instagram.com/ftrx_soft_solutions",
        "https://www.linkedin.com/company/ftrx_soft_solutions"
      ]
    }
    </script>
  `,
  styles: [`
    footer a:hover {
      color: var(--bs-primary) !important;
      transition: color 0.3s ease;
    }
  `]
})
export class FooterComponent { }