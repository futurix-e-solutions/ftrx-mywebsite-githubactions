import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FloatingButtonsComponent } from './components/floating-buttons/floating-buttons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    FloatingButtonsComponent,
  ],
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
    <app-floating-buttons></app-floating-buttons>
  `,
})
export class AppComponent implements OnInit {
  isBrowser = false;
  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateSEO(event.url);
      });

    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });

      setTimeout(() => {
        if ((window as any).AOS) {
          (window as any).AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100,
          });
        }
      }, 100);
    }
  }

  private updateSEO(url: string) {
    const seoData = this.getSEOData(url);

    // Update title
    this.title.setTitle(seoData.title);

    // Update meta tags
    this.meta.updateTag({ name: 'description', content: seoData.description });
    this.meta.updateTag({ property: 'og:title', content: seoData.title });
    this.meta.updateTag({
      property: 'og:description',
      content: seoData.description,
    });
    this.meta.updateTag({
      property: 'og:url',
      content: `https://ftrxsoftsolutions.in${url}`,
    });
    this.meta.updateTag({ name: 'twitter:title', content: seoData.title });
    this.meta.updateTag({
      name: 'twitter:description',
      content: seoData.description,
    });

    // Update canonical URL
    this.updateCanonicalUrl(url);
  }

  private getSEOData(url: string) {
    const seoMap: { [key: string]: { title: string; description: string } } = {
      '/': {
        title: 'FTRX Soft Solutions - Best Startup IT Company in India',
        description:
          'Top startup tech company in India offering web & mobile development services.',
      },
      '/about': {
        title: 'About Us - Leading Startup Tech Company | FTRX',
        description:
          'Learn about FTRX Soft Solutions, an emerging IT company dedicated to digital transformation.',
      },
      '/services': {
        title: 'Our Services - Web & Mobile App Development | FTRX',
        description:
          'Explore expert solutions in web, mobile app development, and digital marketing.',
      },
      '/portfolio': {
        title: 'Portfolio - Our Success Stories | FTRX',
        description:
          'Explore case studies and completed client projects across industries.',
      },
      '/blog': {
        title: 'Tech Blog - Latest Insights | FTRX Soft Solutions',
        description:
          'Read expert insights, tech news, and startup stories from FTRX.',
      },
      '/contact': {
        title: 'Contact Us - Get in Touch | FTRX',
        description:
          'Start your project today. Contact our expert team at FTRX for a free consultation.',
      },
    };

    return seoMap[url] || seoMap['/'];
  }

  private updateCanonicalUrl(url: string) {
    if (isPlatformBrowser(this.platformId)) {
      let link: HTMLLinkElement = document.querySelector(
        "link[rel='canonical']"
      ) as HTMLLinkElement;

      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }

      link.setAttribute('href', `https://ftrxsoftsolutions.in${url}`);
    }
  }
}
