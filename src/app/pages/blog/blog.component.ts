import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Page Header -->
    <section class="page-header bg-gradient text-white pb-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h1 class="display-4 fw-bold mb-3">Tech Blog</h1>
            <p class="lead">
              Latest insights, trends, and stories from the world of technology
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Post -->
    <section class="py-5">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-8">
            <div class="card border-0 shadow-lg mb-5">
              <img
                [src]="featuredPost.image"
                [alt]="featuredPost.title"
                class="card-img-top"
                style="height: 300px; object-fit: cover;"
              />
              <div class="card-body p-4">
                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                >
                  <span class="badge bg-primary fs-6">{{
                    featuredPost.category
                  }}</span>
                  <small class="text-muted">{{ featuredPost.date }}</small>
                </div>
                <h2 class="fw-bold mb-3">{{ featuredPost.title }}</h2>
                <p class="lead text-muted mb-4">{{ featuredPost.excerpt }}</p>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <img
                      [src]="featuredPost.author.avatar"
                      [alt]="featuredPost.author.name"
                      class="rounded-circle me-3"
                      style="width: 40px; height: 40px; object-fit: cover;"
                    />
                    <div>
                      <div class="fw-bold">{{ featuredPost.author.name }}</div>
                      <small class="text-muted"
                        >{{ featuredPost.readTime }} min read</small
                      >
                    </div>
                  </div>
                  <button class="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="col-lg-4">
            <div class="card border-0 shadow-sm mb-4">
              <div class="card-body">
                <h5 class="fw-bold mb-3">Categories</h5>
                <div class="d-flex flex-wrap gap-2">
                  <span
                    class="badge bg-outline-primary"
                    *ngFor="let category of categories"
                  >
                    {{ category }}
                  </span>
                </div>
              </div>
            </div>

            <div class="card border-0 shadow-sm mb-4">
              <div class="card-body">
                <h5 class="fw-bold mb-3">Popular Posts</h5>
                <div class="mb-3" *ngFor="let post of popularPosts">
                  <div class="d-flex">
                    <img
                      [src]="post.image"
                      [alt]="post.title"
                      class="rounded me-3"
                      style="width: 60px; height: 60px; object-fit: cover;"
                    />
                    <div class="flex-grow-1">
                      <h6 class="fw-bold mb-1">{{ post.title }}</h6>
                      <small class="text-muted">{{ post.date }}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card border-0 shadow-sm">
              <div class="card-body">
                <h5 class="fw-bold mb-3">Newsletter</h5>
                <p class="text-muted">
                  Get the latest tech insights delivered to your inbox.
                </p>
                <div class="input-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Your email"
                  />
                  <button class="btn btn-primary">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold">Latest Articles</h2>
          <p class="lead text-muted">Discover insights from our tech experts</p>
        </div>

        <div class="row g-4">
          <div class="col-lg-4 col-md-6" *ngFor="let post of blogPosts">
            <div class="card border-0 shadow-sm h-100 blog-card">
              <img
                [src]="post.image"
                [alt]="post.title"
                class="card-img-top"
                style="height: 200px; object-fit: cover;"
              />
              <div class="card-body d-flex flex-column">
                <div
                  class="d-flex justify-content-between align-items-center mb-2"
                >
                  <span class="badge bg-primary">{{ post.category }}</span>
                  <small class="text-muted">{{ post.date }}</small>
                </div>
                <h4 class="fw-bold mb-3">{{ post.title }}</h4>
                <p class="text-muted mb-4 flex-grow-1">{{ post.excerpt }}</p>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <img
                      [src]="post.author.avatar"
                      [alt]="post.author.name"
                      class="rounded-circle me-2"
                      style="width: 30px; height: 30px; object-fit: cover;"
                    />
                    <small class="text-muted">{{ post.author.name }}</small>
                  </div>
                  <small class="text-muted">{{ post.readTime }} min</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More -->
        <div class="text-center mt-5">
          <button class="btn btn-outline-primary btn-lg px-5">
            Load More Articles
          </button>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-5 bg-primary text-white">
      <div class="container text-center">
        <h2 class="display-5 fw-bold mb-4">Stay Updated with Tech Trends</h2>
        <p class="lead mb-4">
          Join 1000+ subscribers who get weekly insights from FTRX experts
        </p>
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="input-group input-group-lg">
              <input
                type="email"
                class="form-control"
                placeholder="Enter your email address"
              />
              <button class="btn btn-warning fw-bold px-4">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .page-header {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding-top: 120px;
      }

      .blog-card {
        transition: all 0.3s ease;
      }

      .blog-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
      }

      .badge.bg-outline-primary {
        color: var(--bs-primary);
        border: 1px solid var(--bs-primary);
        background: transparent;
      }
    `,
  ],
})
export class BlogComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit() {
    // Update SEO for blog page
    this.seoService.updateBlogPage();
  }

  featuredPost = {
    title: 'The Future of Web Development: Trends to Watch in 2025',
    excerpt:
      'Explore the latest trends shaping web development, from AI integration to new frameworks that are revolutionizing how we build applications.',
    image:
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Web Development',
    date: 'March 15, 2025',
    readTime: 8,
    author: {
      name: 'Arjun Mehta',
      avatar:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    },
  };

  categories = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'Digital Marketing',
    'Startup Stories',
    'Tech Trends',
    'Case Studies',
    'Tutorials',
  ];

  popularPosts = [
    {
      title: '10 Essential React Hooks Every Developer Should Know',
      date: 'March 10, 2025',
      image:
        'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      title: 'Mobile App Security: Best Practices for 2025',
      date: 'March 8, 2025',
      image:
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      title: 'How We Built a Scalable E-commerce Platform',
      date: 'March 5, 2025',
      image:
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  blogPosts = [
    {
      title: 'Best Software Company in Hyderabad 2025',
      excerpt:
        'Explore why FTRX Soft Solutions is recognized as the best software company in Hyderabad, delivering tailored web, mobile, and enterprise solutions.',
      image:
        'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Software Excellence',
      date: 'March 15, 2025',
      readTime: 7,
      author: {
        name: 'Sneha Gupta',
        avatar:
          'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      },
      link: '/best-software-company-in-hyderabad',
    },
    {
      title: 'Nearby Software Companies in Hyderabad',
      excerpt:
        'Looking for software companies near you? Discover top-rated software solution providers located across Hyderabad.',
      image:
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Local Insights',
      date: 'March 16, 2025',
      readTime: 6,
      author: {
        name: 'Rahul Verma',
        avatar:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      },
      link: '/nearby-software-company-in-hyderabad',
    },
    {
      title: 'Most Famous Software Companies in Hyderabad',
      excerpt:
        'Hyderabad is home to many globally recognized IT firms. Explore the most famous software companies making an impact worldwide.',
      image:
        'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Industry Insights',
      date: 'March 17, 2025',
      readTime: 9,
      author: {
        name: 'Priya Sharma',
        avatar:
          'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      },
      link: '/most-famous-software-company-in-hyderabad',
    },
    {
      title: 'Top Software Company in Hyderabad',
      excerpt:
        'Discover why FTRX Soft Solutions is considered among the top software companies in Hyderabad, trusted by startups and enterprises alike.',
      image:
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Top Rankings',
      date: 'March 18, 2025',
      readTime: 8,
      author: {
        name: 'Sneha Gupta',
        avatar:
          'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      },
      link: '/top-software-company-in-hyderabad',
    },
    {
      title: 'Leading Software Solutions in Hyderabad',
      excerpt:
        'From enterprise applications to mobile solutions, learn how leading software solution companies in Hyderabad are shaping industries.',
      image:
        'https://images.pexels.com/photos/3183172/pexels-photo-3183172.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Business Solutions',
      date: 'March 19, 2025',
      readTime: 7,
      author: {
        name: 'Rahul Verma',
        avatar:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      },
      link: '/leading-software-solutions-in-hyderabad',
    },
    {
      title: 'Software Development Company in Hyderabad',
      excerpt:
        'Searching for reliable software development companies? Hyderabad is home to innovators delivering scalable digital solutions.',
      image:
        'https://images.pexels.com/photos/1181279/pexels-photo-1181279.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Development Services',
      date: 'March 20, 2025',
      readTime: 8,
      author: {
        name: 'Priya Sharma',
        avatar:
          'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      },
      link: '/software-development-company-hyderabad',
    },
    {
      title: 'IT Companies in Hyderabad 2025',
      excerpt:
        'Hyderabad is one of India’s top IT hubs. Explore IT companies offering advanced technology solutions and career opportunities.',
      image:
        'https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'IT Industry',
      date: 'March 21, 2025',
      readTime: 10,
      author: {
        name: 'Sneha Gupta',
        avatar:
          'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      },
      link: '/it-company-in-hyderabad',
    },
    {
      title: 'Top 10 Best IT Companies in Hyderabad 2025',
      excerpt:
        'Discover the leading IT companies in Hyderabad that are driving innovation and digital transformation in 2025.',
      image:
        'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Industry Insights',
      date: 'March 15, 2025',
      readTime: 8,
      author: {
        name: 'Sneha Gupta',
        avatar:
          'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      },
      link: '/best-software-company',
    },
    {
      title: 'Nearby Software Companies in Hyderabad You Should Know',
      excerpt:
        'Looking for software companies near you in Hyderabad? Here’s a list of top-rated firms providing IT, web, and app development services.',
      image:
        'https://images.pexels.com/photos/3182772/pexels-photo-3182772.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Local Search',
      date: 'March 18, 2025',
      readTime: 6,
      author: {
        name: 'Ravi Kumar',
        avatar:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      },
      link: '/nearby-software-company',
    },
    {
      title: 'Most Famous Software Companies in Hyderabad 2025',
      excerpt:
        'Explore the most recognized and reputed software development companies that are shaping Hyderabad’s tech ecosystem.',
      image:
        'https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Reputation',
      date: 'March 20, 2025',
      readTime: 7,
      author: {
        name: 'Priya Sharma',
        avatar:
          'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      },
      link: '/most-famous-software-company',
    },
    {
      title: 'Leading Software Development Companies in Hyderabad',
      excerpt:
        'Get insights into the leading software companies in Hyderabad that specialize in custom solutions, IT services, and digital innovation.',
      image:
        'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Tech Leaders',
      date: 'March 22, 2025',
      readTime: 9,
      author: {
        name: 'Arjun Mehta',
        avatar:
          'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      },
      link: '/leading-software-company',
    },
    {
      title: 'Custom Software Solutions Providers in Hyderabad',
      excerpt:
        'Find the best software companies in Hyderabad offering tailored IT and digital solutions for businesses of all sizes.',
      image:
        'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Custom Solutions',
      date: 'March 25, 2025',
      readTime: 5,
      author: {
        name: 'Kavya Reddy',
        avatar:
          'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      },
      link: '/custom-software-solutions-hyderabad',
    },
  ];
}
