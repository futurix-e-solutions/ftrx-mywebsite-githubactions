import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  Inject,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="landing-container">
      <!-- Hero Section -->
      <section class="hero-section d-flex align-items-center justify-content-center">
        <div class="hero-content text-center">
          <h1 class="hero-title">
            <span class="text-3d">{{ typedText }}</span>
          </h1>
          <p class="typed-text">
            Web Development • Mobile Apps • E-commerce • Digital Marketing • UI/UX Design
          </p>
          <a href="https://ftrxsoftsolutions.in/contact" class="btn btn-primary btn-lg mt-3">Get Started</a>
        </div>
      </section>

      <!-- Services Section -->
      <section class="services-section py-5 bg-light">
        <div class="container">
          <h2 class="text-center mb-5">Our Services</h2>
          <div class="row g-4">
            <div
              class="col-md-4 service-card"
              *ngFor="let service of services; let i = index"
              [ngClass]="i % 2 === 0 ? 'slide-left' : 'slide-right'"
            >
              <div class="card h-100 shadow-sm">
                <img [src]="service.image" class="card-img-top" [alt]="service.title" />
                <div class="card-body">
                  <h5 class="card-title">{{ service.title }}</h5>
                  <p class="card-text">{{ service.description }}</p>
                  <a [href]="service.link" class="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


       <section class="services-section py-5 bg-light">
        <div class="container">
          <h2 class="text-center mb-5">Our Blobs</h2>
          <div class="row g-4">
            <div
              class="col-md-4 service-card"
              *ngFor="let blob of blobs; let i = index"
              [ngClass]="i % 2 === 0 ? 'slide-left' : 'slide-right'"
            >
              <div class="card h-100 shadow-sm">
                <img [src]="blob.image" class="card-img-top" [alt]="blob.title" />
                <div class="card-body">
                  <h5 class="card-title">{{ blob.title }}</h5>
                  <p class="card-text">{{ blob.description }}</p>
                  <a [href]="blob.link" class="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq-section py-5">
  <div class="container">
    <h2 class="text-center mb-4">FAQs</h2>
    <div class="faq-item fade-in" *ngFor="let faq of faqs; let i = index">
      <div class="faq-question" (click)="toggleFaq(i)">
        {{ faq.question }}
        <span class="faq-icon">{{ openFaq[i] ? '-' : '+' }}</span>
      </div>
      <div
        class="faq-answer"
        [style.height]="openFaq[i] ? faqHeights[i] + 'px' : '0'"
        #faqContent
      >
        <div class="faq-text">{{ faq.answer }}</div>
      </div>
    </div>
  </div>
</section>


      <!-- Contact Section -->
      <section class="contact-section py-5 bg-light" id="contact">
        <div class="container">
          <h2 class="text-center mb-4">Contact Us</h2>
          <form class="row g-3">
            <div class="col-md-6">
              <input type="text" class="form-control" placeholder="Your Name" required />
            </div>
            <div class="col-md-6">
              <input type="email" class="form-control" placeholder="Your Email" required />
            </div>
            <div class="col-12">
              <textarea
                class="form-control"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>
            <div class="col-12 text-center">
              <button class="btn btn-primary btn-lg">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      /* General */
      .landing-container {
        font-family: 'Segoe UI', Tahoma, sans-serif;
      }

      section {
        padding: 80px 20px;
      }

      /* Hero Section */
      .hero-section {
        background: url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600')
          center/cover no-repeat;
        height: 90vh;
        color: white;
        text-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .hero-title {
        font-size: 3rem;
        margin-bottom: 15px;
      }

      .text-3d {
        font-weight: bold;
        color: #ffd700;
        text-shadow: 1px 1px 0 #000, 2px 2px 0 #333, 3px 3px 0 #666;
        display: inline-block;
      }

      .typed-text {
        font-weight: 500;
        margin-top: 10px;
      }

      /* Buttons */
      .btn-primary {
        background-color: #007bff;
        border: none;
        transition: 0.3s;
      }
      .btn-primary:hover {
        background-color: #0056b3;
      }

      /* Services Cards */
      .service-card {
        opacity: 0;
        transition: all 0.8s ease-in-out;
      }

      .slide-left {
        transform: translateX(-100px);
      }
      .slide-right {
        transform: translateX(100px);
      }
      .in-view {
        opacity: 1;
        transform: translateX(0) !important;
      }

      .service-card .card:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      }

      /* FAQ */
      .accordion-button {
        font-weight: 500;
      }

      /* Fade-in */
      .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
      }
      .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
      }
      .faq-item {
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd;
}

.faq-question {
  font-weight: 500;
  cursor: pointer;
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
}

.faq-answer {
  overflow: hidden;
  transition: height 0.3s ease;
}

.faq-text {
  padding: 10px;
}

.faq-icon {
  font-weight: bold;
}

    `,
  ],
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  typedText = '';
  isBrowser = false;
  blobs = [ {
      title: 'Leading Software Solutions in Hyderabad',
      description:
        'From enterprise applications to mobile solutions, learn how leading software solution companies in Hyderabad are shaping industries.',
      image: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: 'https://ftrxsoftsolutions.in/services',
    },
    {
      title: 'Software Development Company in Hyderabad',
      description:
        'Searching for reliable software development companies? Hyderabad is home to innovators delivering scalable digital solutions.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: 'https://ftrxsoftsolutions.in/services',
    },
    {
      title: 'IT Companies in Hyderabad 2025',
      description:
        'Hyderabad is one of India’s top IT hubs. Explore IT companies offering advanced technology solutions and career opportunities.',
      image:
        'https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?auto=compress&cs=tinysrgb&w=400',
    
      link: 'https://ftrxsoftsolutions.in/services',
    },
    {
      title: 'Top 10 Best IT Companies in Hyderabad 2025',
      description:
        'Discover the leading IT companies in Hyderabad that are driving innovation and digital transformation in 2025.',
      image:
        'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400',

      link: 'https://ftrxsoftsolutions.in/services',
    },
    {
      title: 'Nearby Software Companies in Hyderabad You Should Know',
        image:
        'https://images.pexels.com/photos/3182772/pexels-photo-3182772.jpeg?auto=compress&cs=tinysrgb&w=400',
      description:
        'Looking for software companies near you in Hyderabad? Here’s a list of top-rated firms providing IT, web, and app development services.',
      link: 'https://ftrxsoftsolutions.in/services',
    },
    {
      title: 'Most Famous Software Companies in Hyderabad 2025',
      description:
        'Explore the most recognized and reputed software development companies that are shaping Hyderabad’s tech ecosystem.',
      image:
        'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',

      link: 'https://ftrxsoftsolutions.in/services',
    },]

  services = [
    {
      title: 'Web Development',
      description: 'Custom web solutions.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://ftrxsoftsolutions.in/services',
    },
    {
      title: 'Mobile App Development',
      description: 'iOS & Android apps.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://ftrxsoftsolutions.in/services',
    },
    {
      title: 'E-commerce Development',
      description: 'Online stores that sell.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://ftrxsoftsolutions.in/services',
    },
    {
      title: 'UI/UX Design',
      description: 'Designs that convert.',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://ftrxsoftsolutions.in/services',
    },
    {
      title: 'Digital Marketing',
      description: 'SEO & social media.',
      image: 'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://ftrxsoftsolutions.in/services',
    },
  ];

  faqs = [
    {
      question: 'What services does FTRX provide?',
      answer: 'Web, mobile, e-commerce, landing pages, digital marketing.',
    },
    {
      question: 'Are your websites SEO-friendly?',
      answer: 'Yes, SEO, meta tags, fast loading.',
    },
    {
      question: 'Do you provide post-launch support?',
      answer: 'Yes, maintenance and marketing support.',
    },
    {
      question: 'Can you design UI/UX?',
      answer: 'Yes, modern and responsive UI/UX design.',
    },
  ];
openFaq: boolean[] = [];
  faqHeights: number[] = [];

  constructor(
    private title: Title,
    private meta: Meta,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.openFaq = this.faqs.map(() => false);
    this.faqHeights = this.faqs.map(() => 0);
    // SSR-safe typing animation
    if (this.isBrowser) {
      const text = 'FTRX Soft Solutions';
      let i = 0;
      const type = () => {
        if (i < text.length) {
          this.typedText += text.charAt(i);
          i++;
          setTimeout(type, 150);
        }
      };
      type();
    }

    this.route.data.subscribe((data) => {
      this.title.setTitle(
        data['title'] || 'FTRX Soft Solutions | Best IT Company in Hyderabad'
      );
      this.meta.updateTag({
        name: 'description',
        content:
          data['description'] ||
          'Top web, mobile, and e-commerce solutions in Hyderabad.',
      });
      this.meta.updateTag({
        name: 'keywords',
        content:
          data['keywords'] ||
          'software company Hyderabad, web development, mobile apps, e-commerce, IT services',
      });
    });
  }
toggleFaq(index: number) {
    this.openFaq[index] = !this.openFaq[index];
    // optional: close other FAQs
    // this.openFaq = this.openFaq.map((_, i) => i === index ? this.openFaq[i] : false);
  }
  ngAfterViewInit() {
    if (!this.isBrowser) return;

    // Fade-in for FAQ and cards
    const fadeElements = this.el.nativeElement.querySelectorAll('.fade-in');
    fadeElements.forEach((el: any) => this.observeElement(el));

    const cards = this.el.nativeElement.querySelectorAll('.service-card');
    cards.forEach((el: any) => this.observeElement(el));

    setTimeout(() => {
      const elements = document.querySelectorAll('.faq-text');
      elements.forEach((el, i) => {
        this.faqHeights[i] = el.clientHeight;
      });
    }, 0);
  }

  observeElement(el: any) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(entry.target, 'in-view');
            this.renderer.addClass(entry.target, 'visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
  }
}
