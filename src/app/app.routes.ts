import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LandingPageComponent } from './pages/landing-page.component';

export const routes: Routes = [
  // Landing / Home
  {
    path: '',
    component: LandingPageComponent,
    data: {
      title: 'FTRX Soft Solutions | Software Development Company Hyderabad',
      description: 'FTRX Soft Solutions provides cutting-edge software, web, and mobile app development services with innovative solutions tailored for businesses in Hyderabad and worldwide.',
      keywords: 'top software company in Hyderabad, best software company in Hyderabad, leading software solutions in Hyderabad, software development company Hyderabad, IT company in Hyderabad'
    }
  },

  // About Page
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About FTRX Soft Solutions | IT Company Hyderabad',
      description: 'Learn about FTRX Soft Solutions, our vision, mission, and innovative team providing top software, web, and mobile solutions in Hyderabad.',
      keywords: 'professional software developers Hyderabad, custom software solutions Hyderabad, IT company in Hyderabad'
    }
  },

  // Services Overview
  {
    path: 'services',
    component: ServicesComponent,
    data: {
      title: 'Our Services | Software, Web & Mobile App Development Hyderabad',
      description: 'Explore FTRX Soft Solutions services including web development, mobile app development, UI/UX design, digital marketing, and software consultancy in Hyderabad.',
      keywords: 'software service provider Hyderabad, IT services Hyderabad, software consultancy Hyderabad'
    }
  },

  // Web Development
  {
    path: 'web-development',
    component: LandingPageComponent,
    data: {
      title: 'Web Development Services Hyderabad | FTRX Soft Solutions',
      description: 'Professional web development and responsive website design services in Hyderabad. We deliver ecommerce websites, corporate websites, and custom solutions.',
      keywords: 'best web development company Hyderabad, top web development services Hyderabad, website design company Hyderabad, professional web developers Hyderabad, ecommerce website development Hyderabad'
    }
  },

  // Mobile App Development
  {
    path: 'mobile-app-development',
    component: LandingPageComponent,
    data: {
      title: 'Mobile App Development Hyderabad | iOS & Android Apps',
      description: 'FTRX Soft Solutions builds high-quality mobile apps for iOS, Android, and cross-platform solutions in Hyderabad. We deliver user-friendly and scalable applications.',
      keywords: 'best app development company Hyderabad, mobile app developers Hyderabad, iOS app development Hyderabad, Android app development Hyderabad, cross-platform app development Hyderabad, top mobile app solutions Hyderabad'
    }
  },

  // Digital Design / UI/UX
  {
    path: 'ui-ux-design',
    component: LandingPageComponent,
    data: {
      title: 'UI/UX & Digital Design Services Hyderabad | FTRX Soft Solutions',
      description: 'Creative UI/UX and graphic design services in Hyderabad. We design websites, apps, and digital interfaces with professional and modern aesthetics.',
      keywords: 'best designing company Hyderabad, UI/UX design services Hyderabad, creative design company Hyderabad, top graphic designers Hyderabad, professional website designers Hyderabad, app design company Hyderabad'
    }
  },

  // Digital Marketing / SEO
  {
    path: 'digital-marketing',
    component: LandingPageComponent,
    data: {
      title: 'Digital Marketing & SEO Services Hyderabad | FTRX Soft Solutions',
      description: 'Digital marketing, SEO, social media, and online marketing services for businesses in Hyderabad. Boost your online presence with FTRX Soft Solutions.',
      keywords: 'digital marketing company Hyderabad, SEO services Hyderabad, online marketing agency Hyderabad, social media marketing Hyderabad, best digital solutions Hyderabad'
    }
  },

  // Other Service-Based
  {
    path: 'other-services',
    component: LandingPageComponent,
    data: {
      title: 'IT & Software Services Hyderabad | FTRX Soft Solutions',
      description: 'Enterprise software solutions, ERP, IT consulting, and software outsourcing services in Hyderabad. Get reliable and scalable solutions for your business.',
      keywords: 'software consultancy Hyderabad, enterprise software solutions Hyderabad, IT services Hyderabad, software development outsourcing Hyderabad, custom ERP solutions Hyderabad'
    }
  },

  // Portfolio Page
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: {
      title: 'Portfolio | FTRX Soft Solutions Projects Hyderabad',
      description: 'Explore our portfolio showcasing web development, mobile apps, UI/UX designs, and software solutions delivered for clients in Hyderabad and globally.',
      keywords: 'portfolio, web projects Hyderabad, mobile app projects Hyderabad, UI/UX design portfolio Hyderabad, software solutions portfolio Hyderabad'
    }
  },

  // Blog Page
  {
    path: 'blog',
    component: BlogComponent,
    data: {
      title: 'FTRX Soft Solutions Blog | IT Trends & Software Insights Hyderabad',
      description: 'Read articles, tutorials, and insights about software development, mobile apps, web technologies, UI/UX, and digital marketing from FTRX Soft Solutions.',
      keywords: 'FTRX Soft Solutions blog, IT trends Hyderabad, software development tips Hyderabad, mobile app insights Hyderabad, web technology blog Hyderabad'
    }
  },

  // Contact Page
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Contact FTRX Soft Solutions | Software Company Hyderabad',
      description: 'Reach out to FTRX Soft Solutions for software development, web, mobile app, or digital marketing inquiries in Hyderabad. Get expert IT services.',
      keywords: 'contact FTRX Soft Solutions, Hyderabad IT company contact, software development inquiries, mobile app development contact'
    }
  },
// SEO Optimized Routes for FTRX Soft Solutions

{
  path: 'best-software-company-in-hyderabad',
  component: LandingPageComponent,
  data: {
    title: 'Best Software Company in Hyderabad | FTRX Soft Solutions',
    description: 'Looking for the best software company in Hyderabad? FTRX Soft Solutions delivers high-quality software, web, and mobile app solutions.',
    keywords: 'best software company in Hyderabad, top IT company Hyderabad, professional software services Hyderabad, custom app development Hyderabad'
  }
},
{
  path: 'nearby-software-company-hyderabad',
  component: LandingPageComponent,
  data: {
    title: 'Nearby Software Company in Hyderabad | FTRX Soft Solutions',
    description: 'Searching for a nearby software company in Hyderabad? FTRX Soft Solutions is your trusted partner for innovative IT and development services.',
    keywords: 'nearby software company Hyderabad, local IT company Hyderabad, software development near me, software services Hyderabad'
  }
},
{
  path: 'most-famous-software-company-hyderabad',
  component: LandingPageComponent,
  data: {
    title: 'Most Famous Software Company in Hyderabad | FTRX Soft Solutions',
    description: 'FTRX Soft Solutions is among the most famous software companies in Hyderabad, trusted for innovative web and mobile applications.',
    keywords: 'most famous software company Hyderabad, reputed IT company Hyderabad, leading software solutions Hyderabad, famous software development Hyderabad'
  }
},
{
  path: 'top-software-company-in-hyderabad',
  component: LandingPageComponent,
  data: {
    title: 'Top Software Company in Hyderabad | FTRX Soft Solutions',
    description: 'Ranked as a top software company in Hyderabad, FTRX Soft Solutions delivers scalable IT, mobile, and web development services.',
    keywords: 'top software company Hyderabad, leading IT company Hyderabad, best software developers Hyderabad, software service provider Hyderabad'
  }
},
{
  path: 'leading-software-solutions-hyderabad',
  component: LandingPageComponent,
  data: {
    title: 'Leading Software Solutions in Hyderabad | FTRX Soft Solutions',
    description: 'FTRX Soft Solutions provides leading software solutions in Hyderabad, helping startups and enterprises with custom IT development.',
    keywords: 'leading software solutions Hyderabad, innovative IT company Hyderabad, enterprise app development Hyderabad, digital solutions Hyderabad'
  }
},
{
  path: 'software-development-company-hyderabad',
  component: LandingPageComponent,
  data: {
    title: 'Software Development Company Hyderabad | FTRX Soft Solutions',
    description: 'Trusted software development company in Hyderabad offering web, mobile, and enterprise IT solutions tailored to your business needs.',
    keywords: 'software development company Hyderabad, IT company Hyderabad, software developers Hyderabad, custom software Hyderabad'
  }
},
{
  path: 'custom-software-development-hyderabad',
  component: LandingPageComponent,
  data: {
    title: 'Custom Software Development Hyderabad | FTRX Soft Solutions',
    description: 'Get custom software development services in Hyderabad with FTRX Soft Solutions for scalable and future-ready IT solutions.',
    keywords: 'custom software development Hyderabad, software customization Hyderabad, tailored software Hyderabad, IT services Hyderabad'
  }
},
{
  path: 'professional-software-developers-hyderabad',
  component: LandingPageComponent,
  data: {
    title: 'Professional Software Developers in Hyderabad | FTRX Soft Solutions',
    description: 'Hire professional software developers in Hyderabad from FTRX Soft Solutions for high-quality apps and enterprise solutions.',
    keywords: 'professional software developers Hyderabad, skilled IT developers Hyderabad, expert software engineers Hyderabad, app developers Hyderabad'
  }
},
{
  path: 'it-company-in-hyderabad',
  component: LandingPageComponent,
  data: {
    title: 'IT Company in Hyderabad | FTRX Soft Solutions',
    description: 'FTRX Soft Solutions is a trusted IT company in Hyderabad delivering complete software, web, and mobile app development services.',
    keywords: 'IT company Hyderabad, software IT services Hyderabad, app development company Hyderabad, IT solutions Hyderabad'
  }
},
{
  path: 'software-service-provider-hyderabad',
  component: LandingPageComponent,
  data: {
    title: 'Software Service Provider in Hyderabad | FTRX Soft Solutions',
    description: 'As a leading software service provider in Hyderabad, FTRX Soft Solutions delivers end-to-end IT and development services.',
    keywords: 'software service provider Hyderabad, IT services Hyderabad, custom IT solutions Hyderabad, web app development Hyderabad'
  }
},
{
  path: 'top-it-company-in-hyderabad',
  component: LandingPageComponent,
  data: {
    title: 'Top IT Company in Hyderabad | FTRX Soft Solutions',
    description: 'Recognized as a top IT company in Hyderabad, FTRX Soft Solutions delivers high-end software, web, and mobile app development.',
    keywords: 'top IT company Hyderabad, best IT solutions Hyderabad, software IT Hyderabad, enterprise IT services Hyderabad'
  }
},
{
  path: 'best-web-development-company-hyderabad',
  component: LandingPageComponent,
  data: {
    title: 'Best Web Development Company in Hyderabad | FTRX Soft Solutions',
    description: 'FTRX Soft Solutions is the best web development company in Hyderabad, creating responsive, SEO-friendly, and scalable websites.',
    keywords: 'best web development company Hyderabad, website design Hyderabad, web developers Hyderabad, responsive websites Hyderabad'
  }
},
{
  path: 'best-app-development-company-hyderabad',
  component: LandingPageComponent,
  data: {
    title: 'Best App Development Company in Hyderabad | FTRX Soft Solutions',
    description: 'Looking for the best app development company in Hyderabad? FTRX Soft Solutions builds innovative Android and iOS mobile apps.',
    keywords: 'best app development company Hyderabad, mobile app developers Hyderabad, iOS Android development Hyderabad, custom app solutions Hyderabad'
  }
},
{
  path: 'software-company-near-me-hyderabad',
  component: LandingPageComponent,
  data: {
    title: 'Software Company Near Me in Hyderabad | FTRX Soft Solutions',
    description: 'Find a trusted software company near you in Hyderabad with FTRX Soft Solutions delivering custom software, web, and app solutions.',
    keywords: 'software company near me Hyderabad, nearby software company Hyderabad, local IT company Hyderabad, nearby software developers Hyderabad'
  }
},
{
  path: 'reputed-software-company-hyderabad',
  component: LandingPageComponent,
  data: {
    title: 'Reputed Software Company in Hyderabad | FTRX Soft Solutions',
    description: 'FTRX Soft Solutions is a reputed software company in Hyderabad offering innovative IT services and enterprise software solutions.',
    keywords: 'reputed software company Hyderabad, trusted IT company Hyderabad, popular software development Hyderabad, reliable IT services Hyderabad'
  }
},
  // --- Catch-All ---
  { path: '**', redirectTo: '' }
];



