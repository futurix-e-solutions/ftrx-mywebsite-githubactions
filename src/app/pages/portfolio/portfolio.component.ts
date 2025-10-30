import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Page Header -->
    <section class="page-header bg-gradient text-white pb-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h1 class="display-4 fw-bold mb-3">Our Portfolio</h1>
            <p class="lead">Showcasing our success stories and innovative solutions</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Filter -->
    <section class="py-4 bg-light">
      <div class="container">
        <div class="d-flex justify-content-center flex-wrap gap-2">
          <button class="btn btn-outline-primary" 
                  [class.active]="activeFilter === 'all'"
                  (click)="filterProjects('all')">
            All Projects
          </button>
          <button class="btn btn-outline-primary" 
                  [class.active]="activeFilter === 'web'"
                  (click)="filterProjects('web')">
            Web Development
          </button>
          <button class="btn btn-outline-primary" 
                  [class.active]="activeFilter === 'mobile'"
                  (click)="filterProjects('mobile')">
            Mobile Apps
          </button>
          <button class="btn btn-outline-primary" 
                  [class.active]="activeFilter === 'ecommerce'"
                  (click)="filterProjects('ecommerce')">
            E-commerce
          </button>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4 col-md-6" *ngFor="let project of filteredProjects">
            <div class="card border-0 shadow-sm portfolio-card h-100">
              <div class="portfolio-image">
                <img [src]="project.image" [alt]="project.title" class="card-img-top">
                <div class="portfolio-overlay">
                  <div class="portfolio-links">
                    <a [href]="project.liveUrl" target="_blank" class="btn btn-light btn-sm me-2" *ngIf="project.liveUrl">
                      <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <button class="btn btn-primary btn-sm" (click)="openProjectModal(project)">
                      <i class="fas fa-info-circle"></i> Details
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-2">
                  <h4 class="fw-bold">{{ project.title }}</h4>
                  <span class="badge bg-primary">{{ project.category }}</span>
                </div>
                <p class="text-muted mb-3">{{ project.description }}</p>
                <div class="d-flex flex-wrap gap-1 mb-3">
                  <span class="badge bg-light text-dark" *ngFor="let tech of project.technologies">{{ tech }}</span>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-muted">{{ project.duration }}</small>
                  <button class="btn btn-outline-primary btn-sm" (click)="openProjectModal(project)">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Statistics -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold">Our Impact</h2>
          <p class="lead text-muted">Numbers that speak for our excellence</p>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-3 col-md-6" *ngFor="let stat of statistics">
            <div class="text-center">
              <div class="stat-icon mb-3">
                <i [class]="stat.icon" class="fs-1 text-primary"></i>
              </div>
              <h2 class="display-4 fw-bold text-primary mb-0">{{ stat.value }}</h2>
              <p class="fw-bold text-dark">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold">Client Success Stories</h2>
          <p class="lead text-muted">What our clients say about working with us</p>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-6" *ngFor="let testimonial of portfolioTestimonials">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body p-4">
                <div class="mb-3">
                  <div class="text-warning">
                    <i class="fas fa-star" *ngFor="let star of [1,2,3,4,5]"></i>
                  </div>
                </div>
                <blockquote class="blockquote mb-4">
                  <p>"{{ testimonial.text }}"</p>
                </blockquote>
                <div class="d-flex align-items-center">
                  <img [src]="testimonial.avatar" [alt]="testimonial.name" 
                       class="rounded-circle me-3" style="width: 60px; height: 60px; object-fit: cover;">
                  <div>
                    <h6 class="mb-0 fw-bold">{{ testimonial.name }}</h6>
                    <small class="text-muted">{{ testimonial.position }}</small>
                    <div class="text-primary fw-bold">{{ testimonial.project }}</div>
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
        <h2 class="display-5 fw-bold mb-4">Ready to Start Your Project?</h2>
        <p class="lead mb-4">Join our growing list of satisfied clients and bring your vision to life</p>
        <div class="d-flex justify-content-center gap-3 flex-wrap">
          <a routerLink="/contact" class="btn btn-warning btn-lg px-5 py-3 fw-bold">
            Discuss Your Project
          </a>
          <a href="tel:+919876543210" class="btn btn-outline-light btn-lg px-5 py-3">
            Call: +91 98765 43210
          </a>
        </div>
      </div>
    </section>

    <!-- Project Modal -->
    <div class="modal fade" id="projectModal" tabindex="-1" *ngIf="selectedProject">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title fw-bold">{{ selectedProject.title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <img [src]="selectedProject.image" [alt]="selectedProject.title" class="img-fluid rounded mb-4">
            
            <div class="row g-4">
              <div class="col-md-8">
                <h6 class="fw-bold">Project Overview</h6>
                <p>{{ selectedProject.fullDescription }}</p>
                
                <h6 class="fw-bold mt-4">Key Features</h6>
                <ul>
                  <li *ngFor="let feature of selectedProject.features">{{ feature }}</li>
                </ul>
              </div>
              <div class="col-md-4">
                <h6 class="fw-bold">Project Details</h6>
                <div class="mb-3">
                  <strong>Category:</strong> {{ selectedProject.category }}
                </div>
                <div class="mb-3">
                  <strong>Duration:</strong> {{ selectedProject.duration }}
                </div>
                <div class="mb-3">
                  <strong>Client:</strong> {{ selectedProject.client }}
                </div>
                
                <h6 class="fw-bold">Technologies Used</h6>
                <div class="d-flex flex-wrap gap-1">
                  <span class="badge bg-primary" *ngFor="let tech of selectedProject.technologies">{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a [href]="selectedProject.liveUrl" target="_blank" class="btn btn-primary" *ngIf="selectedProject.liveUrl">
              <i class="fas fa-external-link-alt"></i> Visit Live Site
            </a>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding-top: 120px;
    }

    .btn.active {
      background-color: var(--bs-primary);
      color: white;
      border-color: var(--bs-primary);
    }

    .portfolio-card {
      transition: all 0.3s ease;
      overflow: hidden;
    }

    .portfolio-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
    }

    .portfolio-image {
      position: relative;
      overflow: hidden;
    }

    .portfolio-image img {
      height: 250px;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .portfolio-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .portfolio-card:hover .portfolio-overlay {
      opacity: 1;
    }

    .portfolio-card:hover .portfolio-image img {
      transform: scale(1.1);
    }

    .stat-icon {
      transition: transform 0.3s ease;
    }

    .stat-icon:hover {
      transform: scale(1.1);
    }
  `]
})
export class PortfolioComponent implements OnInit {
  activeFilter = 'all';
  selectedProject: any = null;

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    // Update SEO for portfolio page
    this.seoService.updatePortfolioPage();
  }

  projects = [
    {
      id: 1,
      title: 'Local Business E-commerce',
      category: 'E-commerce',
      description: 'Modern e-commerce platform with payment integration and inventory management.',
      fullDescription: 'A comprehensive e-commerce solution featuring product catalog, shopping cart, secure payment processing, inventory management, and analytics dashboard.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      duration: '6 weeks',
      client: 'Local Retail Business',
      liveUrl: '#',
      features: [
        'Product catalog with search and filters',
        'Shopping cart and wishlist functionality',
        'Secure payment processing with Stripe',
        'Admin dashboard for inventory management',
        'Order tracking and email notifications'
      ]
    },
    {
      id: 2,
      title: 'Health & Wellness App',
      category: 'Mobile',
      description: 'Mobile app for health tracking and wellness management.',
      fullDescription: 'A health and wellness application that helps users track their daily activities, monitor health metrics, and maintain wellness goals with personalized recommendations.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'Firebase', 'Node.js'],
      duration: '8 weeks',
      client: 'Healthcare Startup',
      liveUrl: '#',
      features: [
        'Health metrics tracking',
        'Daily activity monitoring',
        'Progress charts and analytics',
        'Personalized recommendations',
        'Offline data synchronization'
      ]
    },
    {
      id: 3,
      title: 'Business Management System',
      category: 'Web',
      description: 'Comprehensive business management system with CRM and analytics.',
      fullDescription: 'A complete business management solution with customer relationship management, inventory tracking, sales analytics, and reporting features.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'AWS'],
      duration: '8 weeks',
      client: 'SME Business',
      liveUrl: '#',
      features: [
        'Customer relationship management',
        'Inventory and stock management',
        'Sales analytics and reporting',
        'User role management',
        'Data export and backup'
      ]
    },
    {
      id: 4,
      title: 'Service Booking Platform',
      category: 'Web',
      description: 'Online service booking platform with scheduling and payments.',
      fullDescription: 'A service booking platform that allows customers to book appointments, make payments, and manage their bookings while providing businesses with scheduling and customer management tools.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MySQL', 'Payment APIs'],
      duration: '6 weeks',
      client: 'Service Provider',
      liveUrl: '#',
      features: [
        'Online appointment booking',
        'Payment processing integration',
        'Customer management system',
        'Service provider dashboard',
        'Booking analytics and reports'
      ]
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'E-commerce',
      description: 'Professional portfolio website with modern design and SEO optimization.',
      fullDescription: 'A professional portfolio website featuring modern design, responsive layout, SEO optimization, and content management system for showcasing work and attracting clients.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Angular', 'Bootstrap', 'Node.js', 'MongoDB'],
      duration: '4 weeks',
      client: 'Creative Professional',
      liveUrl: '#',
      features: [
        'Responsive portfolio showcase',
        'SEO optimized pages',
        'Contact form integration',
        'Blog management system',
        'Social media integration'
      ]
    }
  ];

  filteredProjects = this.projects;

  statistics = [
    { icon: 'fas fa-project-diagram', value: '3+', label: 'Projects Completed' },
    { icon: 'fas fa-users', value: '3+', label: 'Happy Clients' },
    { icon: 'fas fa-calendar', value: '2025', label: 'Founded' },
    { icon: 'fas fa-clock', value: '24/7', label: 'Support Available' }
  ];

  portfolioTestimonials = [
    {
      text: 'FTRX delivered our e-commerce platform exactly as we wanted. The team was professional and responsive throughout the project.',
      name: 'Rajesh Kumar',
      position: 'CEO',
      project: 'E-commerce Platform',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      text: 'The mobile app they developed for us works perfectly and our users love the interface. Great work by the FTRX team.',
      name: 'Priya Sharma',
      position: 'Founder',
      project: 'Health & Wellness App',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  filterProjects(category: string) {
    this.activeFilter = category;
    if (category === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => 
        project.category.toLowerCase() === category.toLowerCase()
      );
    }
  }

  openProjectModal(project: any) {
    this.selectedProject = project;
    // Bootstrap modal would be opened here
  }
}