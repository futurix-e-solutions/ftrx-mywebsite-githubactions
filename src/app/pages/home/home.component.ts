import {
  Component,
  OnInit,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { COMPANY_INFO, CONTACT_INFO, COMPANY_STATS } from '../../constants/company.constants';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section class="hero-section position-relative mt-5 pt-5 overflow-hidden">
      <div class="hero-bg"></div>
      <div class="hero-pattern"></div>
      <div class="floating-shapes">
        <div class="floating-shape"></div>
        <div class="floating-shape"></div>
        <div class="floating-shape"></div>
      </div>

      <div class="container hero-content">
        <div class="row align-items-center min-vh-100">
          <div class="col-lg-6 text-white">
            <div class="animate-fade-in-left">
              <h1 class="display-1 mb-4 text-white">
                Transform Your
                <span class="text-white">Digital Dreams</span> Into Reality
              </h1>
            </div>
            <div class="animate-fade-in-left delay-200">
              <p class="lead mb-4 fs-4">
                India's most innovative startup IT company delivering
                cutting-edge web and mobile solutions that drive business growth
                and digital transformation in 2025.
              </p>
            </div>
            <div class="animate-fade-in-left delay-400">
              <div class="d-flex flex-wrap gap-3 mb-4">
                <a
                  routerLink="/contact"
                  class="btn btn-warning btn-xl animate-pulse"
                >
                  <i class="fas fa-rocket me-2"></i>
                  Start Your Project
                </a>
                <a routerLink="/portfolio" class="btn btn-outline-light btn-xl">
                  <i class="fas fa-play me-2"></i>
                  View Our Work
                </a>
              </div>
            </div>
            <div class="animate-fade-in-left delay-600">
              <div class="row text-center mt-5">
                <div class="col-4">
                  <div class="stat-number">{{ companyStats.projectsDelivered }}</div>
                  <p class="text-white-50">Projects Delivered</p>
                </div>
                <div class="col-4">
                  <div class="stat-number">{{ companyStats.clientsSatisfied }}</div>
                  <p class="text-white-50">Happy Clients</p>
                </div>
                <div class="col-4">
                  <div class="stat-number">{{ companyStats.support }}</div>
                  <p class="text-white-50">Support</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="animate-fade-in-right delay-300">
              <div class="position-relative">
                <img
                  src="assets/banner.webp"
                  alt="FTRX Development Team"
                  class="img-fluid rounded-3 shadow-xl animate-float"
                />
                <!-- <div
                  class="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-10 rounded-3"
                ></div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="section-lg bg-light-gradient">
      <div class="container">
        <div class="text-center mb-5">
          <div class="animate-fade-in-up">
            <span class="badge badge-gradient fs-6 mb-3">Our Expertise</span>
            <h2 class="display-4 fw-bold mb-4">
              Comprehensive Digital Solutions
            </h2>
            <p class="lead text-muted mx-auto" style="max-width: 600px;">
              From concept to deployment, we deliver end-to-end technology
              solutions that transform businesses and create exceptional user
              experiences.
            </p>
          </div>
        </div>

        <div class="row g-4">
          <div
            class="col-lg-4 col-md-6"
            *ngFor="let service of services; let i = index"
          >
            <div
              class="card h-100 border-0 shadow-lg service-card animate-fade-in-up"
              [style.animation-delay]="i * 100 + 'ms'"
            >
              <div class="card-body p-4 text-center">
                <div class="icon-box mb-4" [ngClass]="service.iconClass">
                  <i [class]="service.icon"></i>
                </div>
                <h4 class="fw-bold mb-3">{{ service.title }}</h4>
                <p class="text-muted mb-4">{{ service.description }}</p>
                <div class="mb-4">
                  <div class="d-flex flex-wrap gap-2 justify-content-center">
                    <span
                      class="badge bg-light text-dark"
                      *ngFor="let tech of service.technologies"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
                <a routerLink="/services" class="btn btn-primary btn-lg w-100">
                  <i class="fas fa-arrow-right me-2"></i>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section-lg">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <div class="animate-fade-in-left">
              <span class="badge badge-gradient fs-6 mb-3">Why FTRX?</span>
              <h2 class="display-4 fw-bold mb-4">
                Your Success is Our <span class="text-gradient">Mission</span>
              </h2>
              <p class="lead text-muted mb-5">
                We don't just build software; we craft digital experiences that
                drive real business results. Our team combines technical
                expertise with creative innovation to deliver solutions that
                exceed expectations.
              </p>
            </div>

            <div class="row g-4">
              <div
                class="col-sm-6"
                *ngFor="let feature of whyChooseUs; let i = index"
              >
                <div
                  class="d-flex animate-fade-in-left"
                  [style.animation-delay]="i * 150 + 'ms'"
                >
                  <div class="flex-shrink-0">
                    <div
                      class="icon-box-outline me-3"
                      style="width: 60px; height: 60px; font-size: 1.5rem;"
                    >
                      <i [class]="feature.icon"></i>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h5 class="fw-bold mb-2">{{ feature.title }}</h5>
                    <p class="text-muted">{{ feature.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="animate-fade-in-left delay-600">
              <div class="mt-5">
                <a
                  routerLink="/about"
                  class="btn btn-outline-primary btn-lg me-3"
                >
                  <i class="fas fa-users me-2"></i>
                  Meet Our Team
                </a>
                <a routerLink="/contact" class="btn btn-primary btn-lg">
                  <i class="fas fa-phone me-2"></i>
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="animate-fade-in-right">
              <div class="position-relative">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="FTRX Team Collaboration"
                  class="img-fluid rounded-3 shadow-xl"
                />
                <div class="position-absolute bottom-0 start-0 p-4">
                  <div class="card card-glass text-white">
                    <div class="card-body p-3">
                      <div class="d-flex align-items-center">
                        <div
                          class="icon-box me-3"
                          style="width: 50px; height: 50px; font-size: 1.25rem;"
                        >
                          <i class="fas fa-award"></i>
                        </div>
                        <div>
                          <h6 class="mb-0 fw-bold">Award Winning Team</h6>
                          <small class="opacity-75"
                            >Recognized Excellence in IT</small
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="section-lg bg-light-gradient">
      <div class="container">
        <div class="text-center mb-5">
          <div class="animate-fade-in-up">
            <span class="badge badge-gradient fs-6 mb-3">Our Process</span>
            <h2 class="display-4 fw-bold mb-4">How We Bring Ideas to Life</h2>
            <p class="lead text-muted mx-auto" style="max-width: 600px;">
              Our proven 4-step methodology ensures your project is delivered on
              time, within budget, and exceeds your expectations.
            </p>
          </div>
        </div>

        <div class="row g-4">
          <div
            class="col-lg-3 col-md-6"
            *ngFor="let step of processSteps; let i = index"
          >
            <div
              class="text-center animate-fade-in-up"
              [style.animation-delay]="i * 200 + 'ms'"
            >
              <div class="position-relative mb-4">
                <div
                  class="icon-box mx-auto"
                  [style.background]="
                    'linear-gradient(135deg, ' +
                    step.color +
                    ' 0%, ' +
                    step.colorSecondary +
                    ' 100%)'
                  "
                >
                  <i [class]="step.icon"></i>
                </div>
                <div
                  class="position-absolute top-0 start-50 translate-middle-x"
                  style="margin-top: -10px; width: 30px; height: 30px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: var(--primary-color); box-shadow: var(--shadow-md);"
                >
                  {{ i + 1 }}
                </div>
              </div>
              <h4 class="fw-bold mb-3">{{ step.title }}</h4>
              <p class="text-muted">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-lg">
      <div class="container">
        <div class="text-center mb-5">
          <div class="animate-fade-in-up">
            <span class="badge badge-gradient fs-6 mb-3"
              >Client Success Stories</span
            >
            <h2 class="display-4 fw-bold mb-4">What Our Clients Say</h2>
            <p class="lead text-muted mx-auto" style="max-width: 600px;">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about working with FTRX.
            </p>
          </div>
        </div>

        <div class="row g-4">
          <div
            class="col-lg-4"
            *ngFor="let testimonial of testimonials; let i = index"
          >
            <div
              class="testimonial-card h-100 animate-fade-in-up"
              [style.animation-delay]="i * 200 + 'ms'"
            >
              <div class="mb-4">
                <div class="text-warning fs-5">
                  <i
                    class="fas fa-star"
                    *ngFor="let star of [1, 2, 3, 4, 5]"
                  ></i>
                </div>
              </div>
              <blockquote class="mb-4">
                <p class="fs-5 fst-italic">"{{ testimonial.text }}"</p>
              </blockquote>
              <div class="d-flex align-items-center">
                <img
                  [src]="testimonial.avatar"
                  [alt]="testimonial.name"
                  class="rounded-circle me-3 shadow"
                  style="width: 60px; height: 60px; object-fit: cover;"
                />
                <div>
                  <h6 class="mb-0 fw-bold">{{ testimonial.name }}</h6>
                  <small class="text-muted">{{ testimonial.position }}</small>
                  <div class="text-primary fw-bold small">
                    {{ testimonial.company }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies -->
    <section class="section-lg bg-light-gradient">
      <div class="container">
        <div class="text-center mb-5">
          <div class="animate-fade-in-up">
            <span class="badge badge-gradient fs-6 mb-3"
              >Technologies We Master</span
            >
            <h2 class="display-4 fw-bold mb-4">Cutting-Edge Tech Stack</h2>
            <p class="lead text-muted mx-auto" style="max-width: 600px;">
              We stay ahead of the curve by mastering the latest technologies
              and frameworks to deliver future-ready solutions.
            </p>
          </div>
        </div>

        <div class="row g-4">
          <div
            class="col-lg-3 col-md-4 col-sm-6"
            *ngFor="let tech of technologies; let i = index"
          >
            <div
              class="card border-0 shadow-sm h-100 text-center animate-scale-in"
              [style.animation-delay]="i * 100 + 'ms'"
            >
              <div class="card-body p-4">
                <div class="mb-3" [style.color]="tech.color">
                  <i [class]="tech.icon" class="fs-1"></i>
                </div>
                <h6 class="fw-bold mb-2">{{ tech.name }}</h6>
                <small class="text-muted">{{ tech.category }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="section-lg bg-gradient-primary text-white position-relative overflow-hidden"
    >
      <div class="floating-shapes">
        <div class="floating-shape"></div>
        <div class="floating-shape"></div>
        <div class="floating-shape"></div>
      </div>

      <div class="container text-center position-relative">
        <div class="animate-fade-in-up">
          <h2 class="display-4 fw-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p class="lead mb-5 mx-auto" style="max-width: 700px;">
            Join {{ companyStats.happyClients }} successful businesses who have transformed their digital
            presence with {{ companyInfo.name }}. Let's discuss your project and create something
            amazing together.
          </p>

          <div class="row justify-content-center mb-5">
            <div class="col-lg-4 col-md-6 mb-3">
              <div class="card card-glass text-white">
                <div class="card-body p-4">
                  <div
                    class="icon-box mb-3 mx-auto"
                    style="width: 60px; height: 60px; background: rgba(255,255,255,0.2);"
                  >
                    <i class="fas fa-phone"></i>
                  </div>
                  <h5 class="fw-bold mb-2">Call Us Now</h5>
                  <p class="mb-0">{{ contactInfo.phone.display }}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-3">
              <div class="card card-glass text-white">
                <div class="card-body p-4">
                  <div
                    class="icon-box mb-3 mx-auto"
                    style="width: 60px; height: 60px; background: rgba(255,255,255,0.2);"
                  >
                    <i class="fas fa-envelope"></i>
                  </div>
                  <h5 class="fw-bold mb-2">Email Us</h5>
                  <p class="mb-0">{{ contactInfo.email.info }}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-3">
              <div class="card card-glass text-white">
                <div class="card-body p-4">
                  <div
                    class="icon-box mb-3 mx-auto"
                    style="width: 60px; height: 60px; background: rgba(255,255,255,0.2);"
                  >
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <h5 class="fw-bold mb-2">Visit Us</h5>
                  <p class="mb-0">{{ contactInfo.address.locality }}, {{ contactInfo.address.countryName }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-center gap-3 flex-wrap">
            <a
              routerLink="/contact"
              class="btn btn-warning btn-xl animate-pulse"
            >
              <i class="fas fa-calendar-alt me-2"></i>
              Schedule Free Consultation
            </a>
            <a [href]="contactInfo.phone.dialLink" class="btn btn-outline-light btn-xl">
              <i class="fas fa-phone me-2"></i>
              Call: {{ contactInfo.phone.display }}
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .service-card {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        border: 2px solid transparent;
      }

      .service-card:hover {
        transform: translateY(-15px) scale(1.02);
        border-color: var(--primary-color);
        box-shadow: 0 25px 50px rgba(99, 102, 241, 0.15) !important;
      }

      .service-card:hover .icon-box {
        transform: scale(1.1) rotate(5deg);
        box-shadow: 0 15px 30px rgba(99, 102, 241, 0.3);
      }

      .testimonial-card:hover {
        transform: translateY(-8px) scale(1.02);
      }

      .text-white-50 {
        color: rgba(255, 255, 255, 0.7) !important;
      }

      @media (max-width: 768px) {
        .hero-section .row {
          text-align: center;
        }

        .hero-section .col-lg-6:first-child {
          order: 1;
        }

        .hero-section .col-lg-6:last-child {
          order: 0;
          margin-bottom: 2rem;
        }
      }
    `,
  ],
})
export class HomeComponent implements OnInit, AfterViewInit {
  companyInfo = COMPANY_INFO;
  contactInfo = CONTACT_INFO;
  companyStats = COMPANY_STATS;
  isBrowser: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private seoService: SeoService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    // Update SEO for home page
    this.seoService.updateHomePage();
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.observeElements(); // only run in browser
    }
  }

  private observeElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    });

    // Observe elements for animation
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });
  }

  services = [
    {
      icon: 'fab fa-react',
      iconClass: 'bg-gradient-primary',
      title: 'Web Development',
      description:
        'Custom web applications built with cutting-edge technologies like React, Angular, and Node.js. We create responsive, fast, and SEO-optimized websites that drive conversions.',
      technologies: ['React', 'Angular', 'Node.js', 'MongoDB', 'AWS'],
    },
    {
      icon: 'fas fa-mobile-alt',
      iconClass: 'bg-gradient-secondary',
      title: 'Mobile App Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android. From concept to App Store, we deliver apps that users love and businesses profit from.',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    },
    {
      icon: 'fas fa-paint-brush',
      iconClass: 'bg-gradient-accent',
      title: 'UI/UX Design',
      description:
        'Beautiful, intuitive designs that convert visitors into customers. We create user experiences that are both visually stunning and functionally superior.',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision'],
    },
    {
      icon: 'fas fa-bullhorn',
      iconClass: 'bg-gradient-primary',
      title: 'Digital Marketing',
      description:
        'Comprehensive digital marketing strategies including SEO, social media marketing, and PPC campaigns that drive traffic and generate leads.',
      technologies: ['Google Ads', 'Facebook Ads', 'SEO', 'Analytics', 'CRM'],
    },
  ];

  whyChooseUs = [
    {
      icon: 'fas fa-rocket',
      title: 'Lightning Fast Delivery',
      description:
        'We deliver projects 40% faster than industry average without compromising on quality.',
    },
    {
      icon: 'fas fa-shield-alt',
      title: '100% Security Guaranteed',
      description:
        'Your data and applications are secured with enterprise-grade security measures.',
    },
    {
      icon: 'fas fa-users-cog',
      title: 'Expert Team',
      description:
        'Our team  experts brings 5+ years of combined experience in cutting-edge technologies.',
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 Premium Support',
      description:
        'Round-the-clock support ensures your business never stops running smoothly.',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Proven ROI',
      description:
        'Our clients see an average of 300% ROI within the first 6 months of project launch.',
    },
    {
      icon: 'fas fa-award',
      title: 'Award-Winning Solutions',
      description:
        'Recognized as "Best Startup IT Company 2025" by TechStartup Awards India.',
    },
  ];

  processSteps = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Discovery & Strategy',
      description:
        'We dive deep into your business goals, target audience, and market landscape to create a winning strategy.',
      color: '#6366f1',
      colorSecondary: '#8b5cf6',
    },
    {
      icon: 'fas fa-drafting-compass',
      title: 'Design & Planning',
      description:
        'Our designers create stunning mockups and our architects plan the technical roadmap for your project.',
      color: '#8b5cf6',
      colorSecondary: '#06b6d4',
    },
    {
      icon: 'fas fa-code',
      title: 'Development & Testing',
      description:
        'Our developers bring designs to life with clean, scalable code while our QA team ensures perfection.',
      color: '#06b6d4',
      colorSecondary: '#10b981',
    },
    {
      icon: 'fas fa-rocket',
      title: 'Launch & Support',
      description:
        'We deploy your solution and provide ongoing support to ensure continued success and growth.',
      color: '#10b981',
      colorSecondary: '#f59e0b',
    },
  ];

  testimonials = [
    {
      text: 'FTRX delivered our business website exactly as we envisioned. Their attention to detail and professional approach made the entire process smooth and efficient.',
      name: 'Rajesh Kumar',
      position: 'CEO & Founder',
      company: 'Local Business Solutions',
      avatar:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      text: 'Working with FTRX was a great experience. They understood our requirements perfectly and delivered a high-quality mobile app that our customers love.',
      name: 'Priya Sharma',
      position: 'Founder',
      company: 'Health & Wellness Startup',
      avatar:
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      text: 'FTRX helped us launch our e-commerce platform with modern features and excellent user experience. Their team is knowledgeable and responsive.',
      name: 'Amit Patel',
      position: 'CTO',
      company: 'E-commerce Startup',
      avatar:
        'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
  ];

  technologies: any = [
    {
      name: 'React',
      icon: 'fab fa-react', // correct
      color: '#61dafb',
      category: 'Frontend',
    },
    {
      name: 'Angular',
      icon: 'fab fa-angular', // correct
      color: '#dd0031',
      category: 'Frontend',
    },
    {
      name: 'JavaScript',
      icon: 'fab fa-js-square', // better for JS
      color: '#f7df1e',
      category: 'Frontend',
    },
    {
      name: 'Java',
      icon: 'fab fa-java', // available in Font Awesome Pro; alternative below
      color: '#007396',
      category: 'Backend',
    },
    {
      name: 'AWS',
      icon: 'fab fa-aws', // correct
      color: '#ff9900',
      category: 'Cloud',
    },
    {
      name: 'SpringBoot',
      icon: 'fas fa-leaf', // generic leaf for Spring (no official FA icon)
      color: '#6db33f',
      category: 'Backend',
    },
    {
      name: 'Postgre Sql',
      icon: 'fas fa-database', // correct
      color: '#336791',
      category: 'Database',
    },
    {
      name: 'React Native',
      icon: 'fas fa-mobile-alt', // okay choice for mobile
      color: '#61dafb',
      category: 'Mobile',
    },
  ];
}
