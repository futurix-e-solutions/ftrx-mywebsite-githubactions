import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  COMPANY_INFO,
  CONTACT_INFO,
  SOCIAL_MEDIA,
  QUICK_LINKS,
  SERVICES_LIST,
  COPYRIGHT,
  STRUCTURED_DATA,
  LEGAL_LINKS
} from '../../constants/company.constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-dark text-white py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <h5 class="fw-bold mb-3">{{ companyInfo.name }}</h5>
            <p class="text-light mb-3">{{ companyInfo.tagline }}. We deliver cutting-edge web and mobile solutions to transform your business.</p>
            <div class="d-flex gap-3">
              <a target="_blank" [href]="socialMedia.facebook.url" class="text-white fs-5"><i [class]="socialMedia.facebook.icon"></i></a>
              <a target="_blank" [href]="socialMedia.linkedin.url" class="text-white fs-5"><i [class]="socialMedia.linkedin.icon"></i></a>
              <a target="_blank" [href]="socialMedia.instagram.url" class="text-white fs-5"><i [class]="socialMedia.instagram.icon"></i></a>
            </div>
          </div>

          <div class="col-lg-2 col-md-6">
            <h6 class="fw-bold mb-3">Quick Links</h6>
            <ul class="list-unstyled">
              <li *ngFor="let link of quickLinks.slice(0, 4)">
                <a [routerLink]="link.path" class="text-light text-decoration-none">{{ link.label }}</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6">
            <h6 class="fw-bold mb-3">Services</h6>
            <ul class="list-unstyled">
              <li *ngFor="let service of servicesList.slice(0, 4)">
                <a [routerLink]="service.path" class="text-light text-decoration-none">{{ service.label }}</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6">
            <h6 class="fw-bold mb-3">Contact Info</h6>
            <ul class="list-unstyled">
              <li class="text-light mb-2"><i class="fas fa-phone me-2"></i> {{ contactInfo.phone.display }}</li>
              <li class="text-light mb-2"><i class="fas fa-envelope me-2"></i> {{ contactInfo.email.info }}</li>
              <li class="text-light mb-2"><i class="fas fa-map-marker-alt me-2"></i> {{ contactInfo.address.short }}</li>
            </ul>
          </div>
        </div>

        <hr class="my-4 text-white-50">

        <div class="row align-items-center">
          <div class="col-md-6">
            <p class="mb-0 text-light">{{ copyright.text }}</p>
          </div>
          <div class="col-md-6 text-md-end">
            <a *ngFor="let link of legalLinks; let last = last"
               [routerLink]="link.path"
               class="text-light text-decoration-none"
               [class.me-3]="!last">
              {{ link.label }}
            </a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Structured Data -->
    <script type="application/ld+json">
    {{ structuredDataJson }}
    </script>
  `,
  styles: [`
    footer a:hover {
      color: var(--bs-primary) !important;
      transition: color 0.3s ease;
    }
  `]
})
export class FooterComponent {
  companyInfo = COMPANY_INFO;
  contactInfo = CONTACT_INFO;
  socialMedia = SOCIAL_MEDIA;
  quickLinks = QUICK_LINKS;
  servicesList = SERVICES_LIST;
  copyright = COPYRIGHT;
  legalLinks = LEGAL_LINKS;
  structuredDataJson = JSON.stringify(STRUCTURED_DATA, null, 2);
}
