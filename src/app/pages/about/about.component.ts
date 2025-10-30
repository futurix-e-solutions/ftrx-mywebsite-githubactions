import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { COMPANY_INFO, TEAM_MEMBERS, AWARDS, COMPANY_STATS } from '../../constants/company.constants';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Page Header -->
    <section class="page-header text-white position-relative overflow-hidden">
      <div class="floating-shapes">
        <div class="floating-shape"></div>
        <div class="floating-shape"></div>
        <div class="floating-shape"></div>
      </div>

      <div class="container position-relative">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <div class="animate-fade-in-left">
              <span class="badge bg-warning text-dark fs-6 mb-3"
                >About {{ companyInfo.name }}</span
              >
              <h1 class="display-3 fw-bold mb-4 text-white">
                AI Digital <span class="text-warning">Innovation</span> Since
                {{ companyInfo.foundedYear }}
              </h1>
              <p class="lead fs-4 mb-4">
                {{ companyInfo.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="section-lg">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <div class="animate-fade-in-left">
              <span class="badge badge-gradient fs-6 mb-3">Our Journey</span>
              <h2 class="display-4 fw-bold mb-4">
                From Vision to <span class="text-gradient">Reality</span>
              </h2>
              <p class="lead text-muted mb-4">
                Founded in {{ companyInfo.foundedYear }} in the heart of Hyderabad's tech hub, {{ companyInfo.name }} began with a simple yet powerful vision: to
                democratize cutting-edge technology for businesses of all sizes.
              </p>
              <p class="mb-4">
                What started as a passionate team of 3 developers in a small
                Madhapur office has evolved into a powerhouse of 25+ technology
                experts, serving clients across India and internationally. Our
                journey is marked by relentless innovation, unwavering
                commitment to quality, and an obsession with client success.
              </p>
              <p class="mb-4">
                Today, we're proud to be recognized as
                <strong>"India's Best Startup IT Company 2025"</strong> by
                TechStartup Awards, having successfully delivered 100+ projects
                across diverse industries including fintech, healthcare,
                e-commerce, and education technology.
              </p>
              <div class="row g-3 mt-4">
                <div class="col-sm-6">
                  <div class="d-flex align-items-center">
                    <div
                      class="icon-box-outline me-3"
                      style="width: 50px; height: 50px; font-size: 1.25rem;"
                    >
                      <i class="fas fa-calendar-alt"></i>
                    </div>
                    <div>
                      <h6 class="fw-bold mb-0">Founded</h6>
                      <small class="text-muted">{{ companyInfo.foundedYear }}</small>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-flex align-items-center">
                    <div
                      class="icon-box-outline me-3"
                      style="width: 50px; height: 50px; font-size: 1.25rem;"
                    >
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h6 class="fw-bold mb-0">Headquarters</h6>
                      <small class="text-muted">Hyderabad, India</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="animate-fade-in-right">
              <div class="position-relative">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="FTRX Office Culture"
                  class="img-fluid rounded-3 shadow-xl"
                />
                <div class="position-absolute bottom-0 end-0 p-4">
                  <div class="card card-glass text-white">
                    <div class="card-body p-3">
                      <div class="d-flex align-items-center">
                        <div
                          class="icon-box me-3"
                          style="width: 50px; height: 50px; font-size: 1.25rem; background: rgba(255,255,255,0.2);"
                        >
                          <i class="fas fa-trophy"></i>
                        </div>
                        <div>
                          <h6 class="mb-0 fw-bold">{{ companyStats.projectsDelivered }} Projects</h6>
                          <small class="opacity-75"
                            >Successfully Delivered</small
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

    <!-- Mission & Vision -->
    <section class="section-lg bg-light-gradient">
      <div class="container">
        <div class="text-center mb-5">
          <div class="animate-fade-in-up">
            <span class="badge badge-gradient fs-6 mb-3">Our Purpose</span>
            <h2 class="display-4 fw-bold mb-4">Mission & Vision</h2>
            <p class="lead text-muted mx-auto" style="max-width: 600px;">
              Driven by purpose, guided by innovation, and committed to
              excellence in everything we do.
            </p>
          </div>
        </div>

        <div class="row g-5">
          <div class="col-lg-6">
            <div class="card border-0 shadow-xl h-100 animate-fade-in-left">
              <div class="card-body p-5 text-center">
                <div class="icon-box mb-4 mx-auto">
                  <i class="fas fa-bullseye"></i>
                </div>
                <h3 class="fw-bold mb-4 text-gradient">Our Mission</h3>
                <p class="lead text-muted mb-4">
                  To empower businesses with innovative, scalable, and
                  affordable technology solutions that drive sustainable growth
                  and digital transformation in the modern economy.
                </p>
                <div class="row g-3 text-start">
                  <div class="col-12" *ngFor="let point of missionPoints">
                    <div class="d-flex align-items-start">
                      <i class="fas fa-check-circle text-success me-3 mt-1"></i>
                      <span>{{ point }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card border-0 shadow-xl h-100 animate-fade-in-right">
              <div class="card-body p-5 text-center">
                <div class="icon-box mb-4 mx-auto">
                  <i class="fas fa-eye"></i>
                </div>
                <h3 class="fw-bold mb-4 text-gradient">Our Vision</h3>
                <p class="lead text-muted mb-4">
                  To become India's most trusted technology partner, setting new
                  standards in innovation, quality, and customer satisfaction
                  while fostering a culture of continuous learning.
                </p>
                <div class="row g-3 text-start">
                  <div class="col-12" *ngFor="let point of visionPoints">
                    <div class="d-flex align-items-start">
                      <i class="fas fa-star text-warning me-3 mt-1"></i>
                      <span>{{ point }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="section-lg">
      <div class="container">
        <div class="text-center mb-5">
          <div class="animate-fade-in-up">
            <span class="badge badge-gradient fs-6 mb-3">Our Values</span>
            <h2 class="display-4 fw-bold mb-4">What Drives Us Forward</h2>
            <p class="lead text-muted mx-auto" style="max-width: 600px;">
              Our core values are the foundation of everything we do, guiding
              our decisions and shaping our culture.
            </p>
          </div>
        </div>

        <div class="row g-4">
          <div
            class="col-lg-3 col-md-6"
            *ngFor="let value of coreValues; let i = index"
          >
            <div
              class="text-center animate-fade-in-up"
              [style.animation-delay]="i * 150 + 'ms'"
            >
              <div
                class="icon-box mb-4 mx-auto"
                [style.background]="
                  'linear-gradient(135deg, ' +
                  value.color +
                  ' 0%, ' +
                  value.colorSecondary +
                  ' 100%)'
                "
              >
                <i [class]="value.icon"></i>
              </div>
              <h4 class="fw-bold mb-3">{{ value.title }}</h4>
              <p class="text-muted">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section-lg bg-light-gradient">
      <div class="container">
        <div class="text-center mb-5">
          <div class="animate-fade-in-up">
            <span class="badge badge-gradient fs-6 mb-3">Our Leadership</span>
            <h2 class="display-4 fw-bold mb-4">Meet the Visionaries</h2>
            <p class="lead text-muted mx-auto" style="max-width: 600px;">
              The brilliant minds behind FTRX's success, leading with passion,
              expertise, and unwavering commitment to excellence.
            </p>
          </div>
        </div>

        <div class="row g-4 justify-content-center">
          <div
            class="col-lg-4 col-md-6"
            *ngFor="let member of teamMembers; let i = index"
          >
            <div
              class="card border-0 shadow-xl text-center h-100 animate-fade-in-up"
              [style.animation-delay]="i * 200 + 'ms'"
            >
              <div class="card-body p-5">
                <div class="position-relative mb-4">
                  <img
                    [src]="member.image"
                    [alt]="member.name"
                    class="rounded-circle shadow-lg"
                    style="width: 150px; height: 150px; object-fit: cover;"
                  />
                  <div class="position-absolute bottom-0 end-0">
                    <div
                      class="icon-box"
                      style="width: 40px; height: 40px; font-size: 1rem;"
                    >
                      <i [class]="member.icon"></i>
                    </div>
                  </div>
                </div>
                <h4 class="fw-bold mb-2">{{ member.name }}</h4>
                <p class="text-primary fw-bold mb-3">{{ member.position }}</p>
                <p class="text-muted mb-4">{{ member.bio }}</p>
                <div class="mb-4">
                  <div class="row g-2 text-center">
                    <div class="col-4" *ngFor="let skill of member.skills">
                      <div class="badge bg-light text-dark">{{ skill }}</div>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-center gap-3">
                  <a href="#" class="text-primary fs-5"
                    ><i class="fab fa-linkedin"></i
                  ></a>
                  <a href="#" class="text-primary fs-5"
                    ><i class="fab fa-twitter"></i
                  ></a>
                  <a href="#" class="text-primary fs-5"
                    ><i class="fas fa-envelope"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Stats -->
    <section class="section-lg">
      <div class="container">
        <div class="text-center mb-5">
          <div class="animate-fade-in-up">
            <span class="badge badge-gradient fs-6 mb-3">Our Impact</span>
            <h2 class="display-4 fw-bold mb-4">Numbers That Speak</h2>
            <p class="lead text-muted mx-auto" style="max-width: 600px;">
              Our achievements reflect our commitment to excellence and client
              success.
            </p>
          </div>
        </div>

        <div class="row g-4">
          <div
            class="col-lg-3 col-md-6"
            *ngFor="let stat of statsDisplay; let i = index"
          >
            <div
              class="text-center animate-scale-in"
              [style.animation-delay]="i * 200 + 'ms'"
            >
              <div
                class="icon-box mb-4 mx-auto"
                [style.background]="
                  'linear-gradient(135deg, ' +
                  stat.color +
                  ' 0%, ' +
                  stat.colorSecondary +
                  ' 100%)'
                "
              >
                <i [class]="stat.icon"></i>
              </div>
              <div class="stat-number mb-2">{{ stat.value }}</div>
              <h5 class="fw-bold mb-2">{{ stat.label }}</h5>
              <p class="text-muted">{{ stat.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Awards & Recognition -->
    <section class="section-lg bg-light-gradient">
      <div class="container">
        <div class="text-center mb-5">
          <div class="animate-fade-in-up">
            <span class="badge badge-gradient fs-6 mb-3">Recognition</span>
            <h2 class="display-4 fw-bold mb-4">Awards & Achievements</h2>
            <p class="lead text-muted mx-auto" style="max-width: 600px;">
              Our commitment to excellence has been recognized by industry
              leaders and prestigious organizations.
            </p>
          </div>
        </div>

        <div class="row g-4">
          <div
            class="col-lg-4 col-md-6"
            *ngFor="let award of awards; let i = index"
          >
            <div
              class="card border-0 shadow-lg text-center h-100 animate-fade-in-up"
              [style.animation-delay]="i * 200 + 'ms'"
            >
              <div class="card-body p-5">
                <div
                  class="icon-box mb-4 mx-auto"
                  style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);"
                >
                  <i class="fas fa-trophy"></i>
                </div>
                <h4 class="fw-bold mb-3">{{ award.title }}</h4>
                <p class="text-muted mb-3">{{ award.organization }}</p>
                <div class="badge bg-primary fs-6">{{ award.year }}</div>
                <p class="text-muted mt-3 small">{{ award.description }}</p>
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
            Ready to Join Our Success Story?
          </h2>
          <p class="lead mb-5 mx-auto" style="max-width: 700px;">
            Let's discuss how we can help transform your business with our
            proven expertise and innovative solutions.
          </p>
          <div class="d-flex justify-content-center gap-3 flex-wrap">
            <a
              routerLink="/contact"
              class="btn btn-warning btn-xl animate-pulse"
            >
              <i class="fas fa-handshake me-2"></i>
              Partner With Us
            </a>
            <a routerLink="/portfolio" class="btn btn-outline-light btn-xl">
              <i class="fas fa-eye me-2"></i>
              See Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .card:hover {
        transform: translateY(-8px) scale(1.02);
      }

      .team-card:hover img {
        transform: scale(1.1);
      }

      @media (max-width: 768px) {
        .display-3 {
          font-size: 2.5rem;
        }
      }
    `,
  ],
})
export class AboutComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit() {
    // Update SEO for about page
    this.seoService.updateAboutPage();
  }

  missionPoints = [
    'Deliver innovative technology solutions',
    'Ensure 100% client satisfaction',
    'Maintain transparent communication',
    'Provide ongoing support and maintenance',
  ];

  visionPoints = [
    "Lead India's digital transformation",
    'Set new industry standards',
    'Foster innovation and creativity',
    'Build lasting client partnerships',
  ];

  coreValues = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description:
        'Constantly pushing boundaries with cutting-edge technologies and creative solutions that solve real-world problems.',
      color: '#6366f1',
      colorSecondary: '#8b5cf6',
    },
    {
      icon: 'fas fa-handshake',
      title: 'Integrity',
      description:
        'Building trust through transparent communication, honest practices, and ethical business conduct.',
      color: '#8b5cf6',
      colorSecondary: '#06b6d4',
    },
    {
      icon: 'fas fa-star',
      title: 'Excellence',
      description:
        'Delivering superior quality in every project, exceeding client expectations consistently.',
      color: '#06b6d4',
      colorSecondary: '#10b981',
    },
    {
      icon: 'fas fa-users-cog',
      title: 'Collaboration',
      description:
        'Working together as a unified team to achieve remarkable results for our clients and partners.',
      color: '#10b981',
      colorSecondary: '#f59e0b',
    },
  ];

  companyInfo = COMPANY_INFO;
  companyStats = COMPANY_STATS;
  teamMembers = TEAM_MEMBERS;

  statsDisplay = [
    {
      icon: 'fas fa-project-diagram',
      value: COMPANY_STATS.projectsDelivered,
      label: 'Projects Completed',
      description: 'Successfully delivered across industries',
      color: '#6366f1',
      colorSecondary: '#8b5cf6',
    },
    {
      icon: 'fas fa-users',
      value: COMPANY_STATS.clientsSatisfied,
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide',
      color: '#8b5cf6',
      colorSecondary: '#06b6d4',
    },
    {
      icon: 'fas fa-clock',
      value: COMPANY_STATS.support,
      label: 'Support Available',
      description: 'Round-the-clock assistance',
      color: '#10b981',
      colorSecondary: '#f59e0b',
    },
  ];

  awards = AWARDS.slice(1); // Skip the first award (Best Startup IT Company) to show other awards
}
