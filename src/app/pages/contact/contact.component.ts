import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <!-- Page Header -->
    <section class="page-header bg-gradient text-white pb-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h1 class="display-4 fw-bold mb-3">Get In Touch</h1>
            <p class="lead">Ready to transform your business? Let's discuss your project requirements</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Info -->
    <section class="py-5">
      <div class="container">
        <div class="row g-4 mb-5">
          <div class="col-lg-4" *ngFor="let info of contactInfo">
            <div class="card border-0 shadow-sm h-100 text-center">
              <div class="card-body p-4">
                <div class="contact-icon mb-3">
                  <i [class]="info.icon" class="fs-1 text-primary"></i>
                </div>
                <h4 class="fw-bold mb-3">{{ info.title }}</h4>
                <div class="text-muted" *ngFor="let detail of info.details">
                  <p class="mb-2">{{ detail }}</p>
                </div>
                <a [href]="info.link" class="btn btn-outline-primary mt-3" *ngIf="info.link">
                  {{ info.linkText }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form & Map -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row g-5">
          <!-- Contact Form -->
          <div class="col-lg-8">
            <div class="card border-0 shadow-sm">
              <div class="card-body p-5">
                <h2 class="fw-bold mb-4">Send Us a Message</h2>
                <p class="text-muted mb-4">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.
                </p>
                
                <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
                  <div class="row g-3 mb-3">
                    <div class="col-md-6">
                      <label class="form-label fw-bold">Full Name *</label>
                      <input type="text" class="form-control" [(ngModel)]="formData.name" 
                             name="name" required #name="ngModel">
                      <div class="text-danger small mt-1" *ngIf="name.invalid && name.touched">
                        Name is required
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label class="form-label fw-bold">Email Address *</label>
                      <input type="email" class="form-control" [(ngModel)]="formData.email" 
                             name="email" required email #email="ngModel">
                      <div class="text-danger small mt-1" *ngIf="email.invalid && email.touched">
                        Valid email is required
                      </div>
                    </div>
                  </div>
                  
                  <div class="row g-3 mb-3">
                    <div class="col-md-6">
                      <label class="form-label fw-bold">Phone Number</label>
                      <input type="tel" class="form-control" [(ngModel)]="formData.phone" name="phone">
                    </div>
                    <div class="col-md-6">
                      <label class="form-label fw-bold">Company Name</label>
                      <input type="text" class="form-control" [(ngModel)]="formData.company" name="company">
                    </div>
                  </div>
                  
                  <div class="mb-3">
                    <label class="form-label fw-bold">Service Interested In *</label>
                    <select class="form-select" [(ngModel)]="formData.service" name="service" required>
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-apps">Mobile App Development</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="consulting">IT Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div class="mb-3">
                    <label class="form-label fw-bold">Project Budget</label>
                    <select class="form-select" [(ngModel)]="formData.budget" name="budget">
                      <option value="">Select budget range</option>
                      <option value="under-50k">Under ₹50,000</option>
                      <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                      <option value="1l-3l">₹1,00,000 - ₹3,00,000</option>
                      <option value="3l-5l">₹3,00,000 - ₹5,00,000</option>
                      <option value="above-5l">Above ₹5,00,000</option>
                    </select>
                  </div>
                  
                  <div class="mb-4">
                    <label class="form-label fw-bold">Project Details *</label>
                    <textarea class="form-control" rows="5" [(ngModel)]="formData.message" 
                              name="message" required placeholder="Tell us about your project requirements..."
                              #message="ngModel"></textarea>
                    <div class="text-danger small mt-1" *ngIf="message.invalid && message.touched">
                      Project details are required
                    </div>
                  </div>
                  
                  <div class="d-grid">
                    <button type="submit" class="btn btn-primary btn-lg py-3" 
                            [disabled]="contactForm.invalid || isSubmitting">
                      <span *ngIf="isSubmitting" class="spinner-border spinner-border-sm me-2"></span>
                      {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                    </button>
                  </div>
                </form>
                
                <div class="alert alert-success mt-3" *ngIf="showSuccessMessage">
                  <i class="fas fa-check-circle me-2"></i>
                  Thank you! We'll get back to you within 24 hours.
                </div>
              </div>
            </div>
          </div>
          
          <!-- Quick Info -->
          <div class="col-lg-4">
            <div class="card border-0 shadow-sm mb-4">
              <div class="card-body p-4">
                <h4 class="fw-bold mb-3">Why Choose FTRX?</h4>
                <div class="mb-3" *ngFor="let benefit of whyChooseUs">
                  <div class="d-flex align-items-start">
                    <i [class]="benefit.icon" class="text-primary me-3 mt-1"></i>
                    <div>
                      <h6 class="fw-bold mb-1">{{ benefit.title }}</h6>
                      <small class="text-muted">{{ benefit.description }}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="card border-0 shadow-sm">
              <div class="card-body p-4">
                <h4 class="fw-bold mb-3">Business Hours</h4>
                <div class="mb-2" *ngFor="let hour of businessHours">
                  <div class="d-flex justify-content-between">
                    <span class="fw-bold">{{ hour.day }}</span>
                    <span class="text-muted">{{ hour.time }}</span>
                  </div>
                </div>
                
                <hr class="my-3">
                
                <div class="text-center">
                  <p class="text-muted mb-2">Need immediate assistance?</p>
                  <a href="tel:+919391690216" class="btn btn-success btn-sm me-2">
                    <i class="fas fa-phone"></i> Call Now
                  </a>
                  <a href="https://wa.me/919391690216" target="_blank" class="btn btn-success btn-sm">
                    <i class="fab fa-whatsapp"></i> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-0">
      <div class="container-fluid p-0">
        <div class="embed-responsive" style="height: 400px;">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30444.20649122513!2d78.36831!3d17.4449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sMadhapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710515123456!5m2!1sen!2sin"
            width="100%" 
            height="400" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5 bg-primary text-white">
      <div class="container text-center">
        <h2 class="display-5 fw-bold mb-4">Let's Build Something Amazing Together</h2>
        <p class="lead mb-4">Join 100+ successful projects and transform your business with FTRX</p>
        <div class="d-flex justify-content-center gap-3 flex-wrap">
          <a href="tel:+919391690216" class="btn btn-warning btn-lg px-5 py-3 fw-bold">
            <i class="fas fa-phone me-2"></i> Call: +91 93916 90216
          </a>
          <a href="mailto:info@ftrxsoftsolutions.in" class="btn btn-outline-light btn-lg px-5 py-3">
            <i class="fas fa-envelope me-2"></i> Email Us
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

    .contact-icon {
      transition: transform 0.3s ease;
    }

    .card:hover .contact-icon {
      transform: scale(1.1);
    }

    .form-control:focus {
      border-color: var(--bs-primary);
      box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
    }

    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  };

  isSubmitting = false;
  showSuccessMessage = false;

  contactInfo = [
    {
      icon: 'fas fa-phone',
      title: 'Call Us',
      details: ['+91 93916 90216', 'Available 10 AM - 7 PM'],
      link: 'tel:+919391690216',
      linkText: 'Call Now'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      details: ['info@ftrxsoftsolutions.in', 'sales@ftrxsoftsolutions.in'],
      link: 'mailto:info@ftrxsoftsolutions.in',
      linkText: 'Send Email'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Us',
      details: ['FTRX Soft Solutions', 'Madhapur, Hyderabad', 'Telangana - 500081'],
      link: '#',
      linkText: 'Get Directions'
    }
  ];

  whyChooseUs = [
    {
      icon: 'fas fa-clock',
      title: '24 Hours Response',
      description: 'Quick turnaround on all inquiries'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Secure & Reliable',
      description: 'Your data is safe with us'
    },
    {
      icon: 'fas fa-award',
      title: 'Award Winning',
      description: 'Recognized for excellence'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Dedicated Support',
      description: 'Ongoing project assistance'
    }
  ];

  businessHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', time: 'Closed' }
  ];

  onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.showSuccessMessage = true;
      this.resetForm();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 5000);
    }, 2000);
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      message: ''
    };
  }
}