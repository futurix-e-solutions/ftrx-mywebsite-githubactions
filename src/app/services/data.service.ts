import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Service, Project, BlogPost, Testimonial } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private services: Service[] = [
    {
      id: 1,
      title: 'Web Application Development',
      description: 'Custom web applications built with modern technologies like Angular, React, and Spring Boot.',
      icon: 'pi pi-globe',
      features: ['Responsive Design', 'Modern Frameworks', 'SEO Optimized', 'Performance Focused']
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      icon: 'pi pi-mobile',
      features: ['Cross-Platform', 'Native Performance', 'User-Friendly UI', 'App Store Ready']
    },
    {
      id: 3,
      title: 'E-commerce Development',
      description: 'Complete e-commerce solutions with payment integration and inventory management.',
      icon: 'pi pi-shopping-cart',
      features: ['Payment Gateway', 'Inventory Management', 'Admin Dashboard', 'Mobile Responsive']
    },
    {
      id: 4,
      title: 'Company Website Development',
      description: 'Professional business websites that represent your brand and drive conversions.',
      icon: 'pi pi-building',
      features: ['Professional Design', 'CMS Integration', 'Contact Forms', 'Analytics Setup']
    },
    {
      id: 5,
      title: 'SEO & Digital Marketing',
      description: 'Comprehensive SEO strategies and digital marketing to boost your online presence.',
      icon: 'pi pi-chart-line',
      features: ['Keyword Research', 'Content Strategy', 'Social Media', 'Analytics Tracking']
    }
  ];

  private projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce solution with advanced features including inventory management, payment processing, and customer analytics.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Stripe API'],
      category: 'E-Commerce',
      link: '#'
    },
    {
      id: 2,
      title: 'Corporate Website',
      description: 'Modern corporate website with CMS integration, SEO optimization, and responsive design for a leading manufacturing company.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'TailwindCSS', 'PrimeNG', 'Node.js'],
      category: 'Corporate',
      link: '#'
    },
    {
      id: 3,
      title: 'Restaurant Management System',
      description: 'Complete restaurant management solution with online ordering, table reservations, inventory tracking, and customer management.',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Payment Gateway'],
      category: 'Mobile App',
      link: '#'
    }
  ];

  private blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.',
      content: 'Full article content here...',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'FTRX Team',
      publishDate: new Date('2024-12-15'),
      tags: ['Web Development', 'Technology', 'Trends'],
      readTime: 5
    },
    {
      id: 2,
      title: 'Angular vs React: Choosing the Right Framework for Your Project',
      excerpt: 'A comprehensive comparison of Angular and React to help you make the right choice for your next project.',
      content: 'Full article content here...',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'FTRX Team',
      publishDate: new Date('2024-12-10'),
      tags: ['Angular', 'React', 'Frontend'],
      readTime: 8
    },

    
    {
      id: 3,
      title: 'SEO Best Practices for Modern Websites',
      excerpt: 'Learn the essential SEO strategies that will help your website rank higher in search engine results.',
      content: 'Full article content here...',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'FTRX Team',
      publishDate: new Date('2024-12-05'),
      tags: ['SEO', 'Digital Marketing', 'Web Development'],
      readTime: 6
    }
  ];

  private testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'CEO',
      company: 'TechStart Solutions',
      content: 'FTRX delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise is remarkable.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'Marketing Director',
      company: 'Digital Innovations',
      content: 'The team at FTRX transformed our online presence completely. Our website traffic increased by 300% after their SEO optimization.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 3,
      name: 'Amit Patel',
      position: 'Founder',
      company: 'StartupHub',
      content: 'Professional, reliable, and innovative. FTRX helped us launch our mobile app successfully with their expert development skills.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  getServices(): Observable<Service[]> {
    return of(this.services);
  }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getBlogPosts(): Observable<BlogPost[]> {
    return of(this.blogPosts);
  }

  getTestimonials(): Observable<Testimonial[]> {
    return of(this.testimonials);
  }

  getBlogPost(id: number): Observable<BlogPost | undefined> {
    const post = this.blogPosts.find(p => p.id === id);
    return of(post);
  }
}
