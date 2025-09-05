import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Page Header -->
    <section class="page-header bg-gradient text-white pb-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h1 class="display-4 fw-bold mb-3">Our Services</h1>
            <p class="lead">Comprehensive IT solutions tailored for your business success</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-6" *ngFor="let service of services">
            <div class="card border-0 shadow-sm h-100 service-card">
              <div class="row g-0 h-100">
                <div class="col-4">
                  <img [src]="service.image" [alt]="service.title" class="img-fluid h-100 w-100" style="object-fit: cover;">
                </div>
                <div class="col-8">
                  <div class="card-body p-4 h-100 d-flex flex-column">
                    <div class="mb-3">
                      <i [class]="service.icon" class="fs-2 text-primary"></i>
                    </div>
                    <h3 class="fw-bold mb-3">{{ service.title }}</h3>
                    <p class="text-muted mb-4 flex-grow-1">{{ service.description }}</p>
                    <div>
                      <a routerLink="/contact" class="btn btn-primary">Get Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Service Sections -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="mb-5" *ngFor="let detail of serviceDetails; let i = index">
          <div class="row align-items-center g-5" [class.flex-row-reverse]="i % 2 === 1">
            <div class="col-lg-6">
              <h2 class="display-6 fw-bold mb-4">{{ detail.title }}</h2>
              
              <div class="mb-4">
                <h4 class="fw-bold mb-3">What We Offer:</h4>
                <ul class="list-unstyled">
                  <li class="mb-2" *ngFor="let feature of detail.features">
                    <i class="fas fa-check text-success me-2"></i>{{ feature }}
                  </li>
                </ul>
              </div>

              <div class="mb-4">
                <h4 class="fw-bold mb-3">Technologies:</h4>
                <div class="d-flex flex-wrap gap-2">
                  <span class="badge bg-primary" *ngFor="let tech of detail.technologies">{{ tech }}</span>
                </div>
              </div>

              <div class="mb-4">
                <h4 class="fw-bold mb-3">Perfect For:</h4>
                <p class="text-muted">{{ detail.idealFor }}</p>
              </div>

              <a routerLink="/contact" class="btn btn-primary btn-lg">Start Your Project</a>
            </div>
            <div class="col-lg-6">
              <img [src]="detail.image" [alt]="detail.title" class="img-fluid rounded-3 shadow">
            </div>
          </div>
          <hr class="my-5" *ngIf="i < serviceDetails.length - 1">
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold">Our Development Process</h2>
          <p class="lead text-muted">A proven methodology that ensures project success</p>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-3 col-md-6" *ngFor="let step of processSteps; let i = index">
            <div class="text-center">
              <div class="process-step mb-3">
                <div class="step-number">{{ i + 1 }}</div>
              </div>
              <h4 class="fw-bold mb-3">{{ step.title }}</h4>
              <p class="text-muted">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold">Frequently Asked Questions</h2>
          <p class="lead text-muted">Common questions about our services</p>
        </div>
        
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="accordion" id="faqAccordion">
              <div class="accordion-item" *ngFor="let faq of faqs; let i = index">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" 
                          [attr.data-bs-toggle]="'collapse'" 
                          [attr.data-bs-target]="'#faq' + i"
                          [attr.aria-expanded]="false" 
                          [attr.aria-controls]="'faq' + i">
                    {{ faq.question }}
                  </button>
                </h2>
                <div [id]="'faq' + i" class="accordion-collapse collapse" 
                     [attr.data-bs-parent]="'#faqAccordion'">
                  <div class="accordion-body">
                    {{ faq.answer }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5 bg-primary text-white">
      <div class="container text-center">
        <h2 class="display-5 fw-bold mb-4">Ready to Get Started?</h2>
        <p class="lead mb-4">Let's discuss your project requirements and create something amazing together</p>
        <div class="d-flex justify-content-center gap-3 flex-wrap">
          <a routerLink="/contact" class="btn btn-warning btn-lg px-5 py-3 fw-bold">
            Get Free Consultation
          </a>
          <a routerLink="/portfolio" class="btn btn-outline-light btn-lg px-5 py-3">
            View Our Work
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding-top: 120px;
    }

    .service-card {
      transition: all 0.3s ease;
    }

    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
    }

    .process-step {
      position: relative;
    }

    .step-number {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0 auto;
    }

    .accordion-button:not(.collapsed) {
      background-color: var(--bs-primary);
      color: white;
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      icon: 'fas fa-code',
      title: 'Web Development',
      description: 'Custom web applications with modern frameworks and responsive design.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'UI/UX Design',
      description: 'Beautiful, user-friendly designs that convert visitors into customers.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'Digital Marketing',
      description: 'SEO, social media marketing, and PPC campaigns for growth.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  serviceDetails = [
    {
      title: 'Web Development Services',
      features: [
        'Responsive website design',
        'E-commerce development',
        'Custom web applications',
        'CMS development',
        'API integration',
        'Performance optimization'
      ],
      technologies: ['React', 'Angular', 'Node.js', 'PHP', 'Python', 'MongoDB', 'MySQL'],
      idealFor: 'Businesses looking to establish strong online presence with custom web solutions that drive engagement and conversions.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Mobile App Development',
      features: [
        'Native iOS & Android apps',
        'Cross-platform development',
        'App Store optimization',
        'Push notifications',
        'Offline functionality',
        'Third-party integrations'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
      idealFor: 'Companies wanting to reach customers on mobile devices with feature-rich, performance-optimized applications.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  processSteps = [
    {
      title: 'Discovery',
      description: 'Understanding your requirements, goals, and target audience through detailed consultation.'
    },
    {
      title: 'Planning',
      description: 'Creating project roadmap, timeline, and technical specifications for development.'
    },
    {
      title: 'Development',
      description: 'Building your solution using agile methodology with regular progress updates.'
    },
    {
      title: 'Launch',
      description: 'Testing, deployment, and ongoing support to ensure smooth operation.'
    }
  ];

  faqs = [
    {
      question: 'How long does it take to develop a website?',
      answer: 'Typically 2-8 weeks depending on complexity. Simple websites take 2-4 weeks, while complex web applications may take 6-8 weeks.'
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Yes, we provide 3 months of free support after launch, including bug fixes and minor updates. Extended support plans are also available.'
    },
    {
      question: 'Can you help with SEO and digital marketing?',
      answer: 'Absolutely! We offer comprehensive digital marketing services including SEO, social media marketing, and PPC campaigns.'
    },
    {
      question: 'What is your payment structure?',
      answer: 'We typically work with 50% upfront and 50% on completion. For larger projects, we can discuss milestone-based payments.'
    }
  ];
}