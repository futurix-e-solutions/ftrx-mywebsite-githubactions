import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { COMPANY_INFO, SEO_INFO } from '../constants/company.constants';

export interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private isBrowser: boolean;

  constructor(
    private meta: Meta,
    private titleService: Title,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  /**
   * Update all SEO meta tags for a page
   */
  updateSEO(config: SEOConfig): void {
    // Set page title
    const title = config.title || SEO_INFO.title;
    this.titleService.setTitle(title);

    // Basic meta tags
    this.updateTag('description', config.description || SEO_INFO.description);
    this.updateTag('keywords', config.keywords || SEO_INFO.keywords);
    this.updateTag('author', config.author || SEO_INFO.author);
    this.updateTag('robots', 'index, follow');

    // Open Graph tags
    this.updateTag('og:title', config.title || SEO_INFO.ogTitle, 'property');
    this.updateTag('og:description', config.description || SEO_INFO.ogDescription, 'property');
    this.updateTag('og:type', config.type || 'website', 'property');
    this.updateTag('og:url', config.url || COMPANY_INFO.website, 'property');
    this.updateTag('og:image', config.image || `${COMPANY_INFO.website}/assets/logo-ftrx.png`, 'property');
    this.updateTag('og:site_name', COMPANY_INFO.name, 'property');

    // Twitter Card tags
    this.updateTag('twitter:card', 'summary_large_image');
    this.updateTag('twitter:title', config.title || SEO_INFO.twitterTitle);
    this.updateTag('twitter:description', config.description || SEO_INFO.twitterDescription);
    this.updateTag('twitter:image', config.image || `${COMPANY_INFO.website}/assets/logo-ftrx.png`);

    // Article-specific tags (for blog posts)
    if (config.publishedTime) {
      this.updateTag('article:published_time', config.publishedTime, 'property');
    }
    if (config.modifiedTime) {
      this.updateTag('article:modified_time', config.modifiedTime, 'property');
    }
    if (config.section) {
      this.updateTag('article:section', config.section, 'property');
    }
    if (config.tags && config.tags.length > 0) {
      // Remove existing article:tag tags
      this.meta.removeTag('property="article:tag"');
      // Add new tags
      config.tags.forEach(tag => {
        this.meta.addTag({ property: 'article:tag', content: tag });
      });
    }

    // Canonical URL
    if (this.isBrowser) {
      this.updateCanonicalUrl(config.url || window.location.href);
    }
  }

  /**
   * Update a single meta tag
   */
  private updateTag(name: string, content: string, attribute: string = 'name'): void {
    if (!content) return;

    const selector = `${attribute}="${name}"`;
    const existingTag = this.meta.getTag(selector);

    if (existingTag) {
      this.meta.updateTag({ [attribute]: name, content }, selector);
    } else {
      this.meta.addTag({ [attribute]: name, content });
    }
  }

  /**
   * Update canonical URL
   */
  private updateCanonicalUrl(url: string): void {
    if (!this.isBrowser) return;

    const head = document.head;
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');

    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  /**
   * Generate structured data for a page
   */
  generateStructuredData(type: string, data: any): void {
    if (!this.isBrowser) return;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);

    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(s => {
      if (s.textContent && s.textContent.includes(type)) {
        s.remove();
      }
    });

    document.head.appendChild(script);
  }

  /**
   * Preset configurations for common pages
   */
  updateHomePage(): void {
    this.updateSEO({
      title: `${COMPANY_INFO.name} | ${COMPANY_INFO.tagline}`,
      description: COMPANY_INFO.description,
      keywords: 'IT company Hyderabad, web development, mobile app development, software company, digital marketing, Angular developers, Spring Boot developers, e-commerce solutions India',
      url: COMPANY_INFO.website,
      type: 'website'
    });
  }

  updateAboutPage(): void {
    this.updateSEO({
      title: `About Us - ${COMPANY_INFO.name} | ${COMPANY_INFO.tagline}`,
      description: `Learn about ${COMPANY_INFO.name}, founded in ${COMPANY_INFO.foundedYear}. We are ${COMPANY_INFO.tagline}, delivering cutting-edge web and mobile solutions.`,
      keywords: 'about FTRX, IT company Hyderabad, software development team, tech startup India',
      url: `${COMPANY_INFO.website}/about`,
      type: 'website'
    });
  }

  updateServicesPage(): void {
    this.updateSEO({
      title: `Our Services - ${COMPANY_INFO.name} | Web & Mobile Development`,
      description: 'Comprehensive IT services including web development, mobile apps, UI/UX design, digital marketing, and e-commerce solutions. 100+ successful projects delivered.',
      keywords: 'web development services, mobile app development, UI/UX design, digital marketing, e-commerce development, SEO services',
      url: `${COMPANY_INFO.website}/services`,
      type: 'website'
    });
  }

  updatePortfolioPage(): void {
    this.updateSEO({
      title: `Portfolio - ${COMPANY_INFO.name} | Our Work & Projects`,
      description: 'Explore our portfolio of successful projects including e-commerce platforms, corporate websites, and mobile applications. See the quality of our work.',
      keywords: 'portfolio, projects, web development projects, mobile app projects, case studies',
      url: `${COMPANY_INFO.website}/portfolio`,
      type: 'website'
    });
  }

  updateBlogPage(): void {
    this.updateSEO({
      title: `Blog - ${COMPANY_INFO.name} | Tech Insights & Tutorials`,
      description: 'Stay updated with the latest web development trends, technology insights, and expert tutorials from our team of experienced developers.',
      keywords: 'tech blog, web development blog, programming tutorials, technology insights, software development tips',
      url: `${COMPANY_INFO.website}/blog`,
      type: 'website'
    });
  }

  updateContactPage(): void {
    this.updateSEO({
      title: `Contact Us - ${COMPANY_INFO.name} | Get in Touch`,
      description: `Contact ${COMPANY_INFO.name} for your web and mobile development needs. Located in Hyderabad, India. Call us or visit our office for a free consultation.`,
      keywords: 'contact FTRX, IT company Hyderabad contact, web development company contact, get quote',
      url: `${COMPANY_INFO.website}/contact`,
      type: 'website'
    });
  }

  /**
   * Update SEO for blog post
   */
  updateBlogPost(post: any): void {
    this.updateSEO({
      title: `${post.title} - ${COMPANY_INFO.name} Blog`,
      description: post.excerpt || post.description,
      keywords: post.tags ? post.tags.join(', ') : '',
      url: `${COMPANY_INFO.website}/blog/${post.id}`,
      type: 'article',
      publishedTime: post.publishDate?.toISOString(),
      modifiedTime: post.modifiedDate?.toISOString(),
      tags: post.tags,
      image: post.image
    });

    // Add article structured data
    const articleStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      image: post.image,
      datePublished: post.publishDate?.toISOString(),
      dateModified: post.modifiedDate?.toISOString() || post.publishDate?.toISOString(),
      author: {
        '@type': 'Organization',
        name: COMPANY_INFO.name
      },
      publisher: {
        '@type': 'Organization',
        name: COMPANY_INFO.name,
        logo: {
          '@type': 'ImageObject',
          url: `${COMPANY_INFO.website}/assets/logo.png`
        }
      }
    };

    this.generateStructuredData('BlogPosting', articleStructuredData);
  }
}
