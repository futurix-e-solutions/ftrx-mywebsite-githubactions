/**
 * Company Constants
 * Central location for all company information, contact details, social media links,
 * director/team information, and other business-related constants.
 */

// Company Information
export const COMPANY_INFO = {
  name: 'FTRX Soft Solutions',
  tagline: "India's Best Startup IT Company 2025",
  description: "India's most innovative startup IT company delivering cutting-edge web and mobile solutions that drive business growth and digital transformation in 2025.",
  foundedYear: 2025,
  website: 'https://ftrxsoftsolutions.in',
  logo: {
    main: 'assets/logo.png',
    chrome: 'assets/logo-chrome.png',
    ftrx: 'assets/logo-ftrx.png'
  }
};

// Contact Information
export const CONTACT_INFO = {
  phone: {
    display: '+91 93916 90216',
    raw: '+919391690216',
    dialLink: 'tel:+919391690216'
  },
  email: {
    info: 'info@ftrxsoftsolutions.in',
    sales: 'sales@ftrxsoftsolutions.in',
    support: 'support@ftrxsoftsolutions.in'
  },
  whatsapp: {
    number: '919391690216',
    link: 'https://wa.me/919391690216'
  },
  address: {
    street: 'Madhapur',
    locality: 'Hyderabad',
    region: 'Telangana',
    postalCode: '500081',
    country: 'IN',
    countryName: 'India',
    full: 'FTRX Soft Solutions, Madhapur, Hyderabad, Telangana - 500081',
    short: 'JNTU, Hyderabad'
  },
  geo: {
    latitude: 17.4449,
    longitude: 78.3869
  },
  businessHours: {
    weekdays: 'Monday - Friday: 9:00 AM - 7:00 PM',
    saturday: 'Saturday: 10:00 AM - 4:00 PM',
    sunday: 'Sunday: Closed',
    structured: 'Mo-Sa 10:00-19:00'
  }
};

// Social Media Links
export const SOCIAL_MEDIA = {
  facebook: {
    name: 'Facebook',
    url: 'https://www.facebook.com/ftrxsoftsolutions',
    icon: 'fab fa-facebook',
    username: '@ftrxsoftsolutions'
  },
  instagram: {
    name: 'Instagram',
    url: 'https://www.instagram.com/ftrx_soft_solutions',
    icon: 'fab fa-instagram',
    username: '@ftrx_soft_solutions'
  },
  linkedin: {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/ftrx_soft_solutions',
    icon: 'fab fa-linkedin',
    username: 'ftrx_soft_solutions'
  },
  twitter: {
    name: 'Twitter',
    url: 'https://twitter.com/ftrxsoftsolutions',
    icon: 'fab fa-twitter',
    username: '@ftrxsoftsolutions'
  }
};

// Get all social media links as an array
export const SOCIAL_MEDIA_LINKS = [
  SOCIAL_MEDIA.facebook.url,
  SOCIAL_MEDIA.instagram.url,
  SOCIAL_MEDIA.linkedin.url
];

// Team Members / Directors
export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Siva Reddy',
    position: 'Founder & CEO',
    role: 'CEO',
    bio: 'Visionary leader with 8+ years in tech industry, passionate about digital transformation and startup growth.',
    image: 'assets/logo.png',
    icon: 'fas fa-crown',
    skills: ['Strategy', 'Leadership', 'Innovation'],
    email: 'siva@ftrxsoftsolutions.in',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 2,
    name: 'Mallikarjuna Reddy',
    position: 'Chief Technology Officer',
    role: 'CTO',
    bio: 'Tech innovator specializing in scalable architectures, cloud solutions, and emerging technologies.',
    image: 'assets/logo.png',
    icon: 'fas fa-code',
    skills: ['Architecture', 'Cloud', 'AI/ML'],
    email: 'mallikarjuna@ftrxsoftsolutions.in',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 3,
    name: 'Vinod Kumar',
    position: 'Head of Operations',
    role: 'Operations Head',
    bio: 'Operations expert ensuring seamless project delivery, client satisfaction, and business growth.',
    image: 'assets/logo.png',
    icon: 'fas fa-cogs',
    skills: ['Operations', 'Quality', 'Process'],
    email: 'vinod@ftrxsoftsolutions.in',
    linkedin: '#',
    twitter: '#'
  }
];

// Company Statistics
export const COMPANY_STATS = {
  projectsCompleted: '100+',
  projectsDelivered: '3+',
  happyClients: '100+',
  clientsSatisfied: '3+',
  teamSize: '25+',
  yearsExperience: '8+',
  awardsWon: '15+',
  support: '24/7'
};

// SEO and Meta Information
export const SEO_INFO = {
  title: 'FTRX Soft Solutions | Best IT Company in Hyderabad | Web & App Development 2024',
  description: 'FTRX Soft Solutions is the best IT company in Hyderabad, offering expert web development, mobile app development, e-commerce, and digital marketing services with 100% client satisfaction.',
  keywords: 'IT company Hyderabad, web development Hyderabad, mobile app development Hyderabad, software company Hyderabad, digital marketing Hyderabad, Angular developers, Spring Boot developers, e-commerce solutions India',
  author: 'FTRX Soft Solutions',
  ogTitle: 'FTRX Soft Solutions | Top Software Company in Hyderabad',
  ogDescription: 'Award-winning software development company in Hyderabad offering web, mobile, SEO, and digital solutions.',
  twitterTitle: "FTRX Soft Solutions - Hyderabad's Best Startup Software Company 2024",
  twitterDescription: 'We develop scalable web and mobile solutions for startups and enterprises in Hyderabad and across India.'
};

// Structured Data for Schema.org
export const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: COMPANY_INFO.name,
  image: `${COMPANY_INFO.website}/assets/logo.png`,
  '@id': COMPANY_INFO.website,
  url: COMPANY_INFO.website,
  telephone: CONTACT_INFO.phone.raw,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT_INFO.address.street,
    addressLocality: CONTACT_INFO.address.locality,
    addressRegion: CONTACT_INFO.address.region,
    postalCode: CONTACT_INFO.address.postalCode,
    addressCountry: CONTACT_INFO.address.country
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: CONTACT_INFO.geo.latitude,
    longitude: CONTACT_INFO.geo.longitude
  },
  openingHours: CONTACT_INFO.businessHours.structured,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: CONTACT_INFO.phone.raw,
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi']
  },
  sameAs: SOCIAL_MEDIA_LINKS
};

// Quick Links for Footer
export const QUICK_LINKS = [
  { label: 'Home', path: '/', icon: 'fas fa-home' },
  { label: 'About', path: '/about', icon: 'fas fa-info-circle' },
  { label: 'Services', path: '/services', icon: 'fas fa-briefcase' },
  { label: 'Portfolio', path: '/portfolio', icon: 'fas fa-folder-open' },
  { label: 'Blog', path: '/blog', icon: 'fas fa-blog' },
  { label: 'Contact', path: '/contact', icon: 'fas fa-envelope' }
];

// Services List
export const SERVICES_LIST = [
  { label: 'Web Development', path: '/services', icon: 'fas fa-globe' },
  { label: 'Mobile Apps', path: '/services', icon: 'fas fa-mobile-alt' },
  { label: 'Digital Marketing', path: '/services', icon: 'fas fa-bullhorn' },
  { label: 'UI/UX Design', path: '/services', icon: 'fas fa-paint-brush' },
  { label: 'E-commerce Solutions', path: '/services', icon: 'fas fa-shopping-cart' },
  { label: 'SEO Services', path: '/services', icon: 'fas fa-chart-line' }
];

// Legal Links
export const LEGAL_LINKS = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms of Service', path: '/terms-of-service' }
];

// Copyright Information
export const COPYRIGHT = {
  year: new Date().getFullYear(),
  text: `© ${new Date().getFullYear()} ${COMPANY_INFO.name}. All rights reserved.`
};

// Google Maps Embed URL
export const GOOGLE_MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30444.20649122513!2d78.36831!3d17.4449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sMadhapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710515123456!5m2!1sen!2sin';

// Awards and Recognition
export const AWARDS = [
  {
    id: 1,
    title: 'Best Startup IT Company 2025',
    organization: 'TechStartup Awards India',
    year: '2025',
    description: 'Recognized as India\'s Best Startup IT Company 2025 by TechStartup Awards.'
  },
  {
    id: 2,
    title: 'Emerging Startup Recognition',
    organization: 'Hyderabad Tech Hub',
    year: '2025',
    description: 'Recognized as a promising new startup in the Hyderabad tech ecosystem.'
  },
  {
    id: 3,
    title: 'Quality Delivery Excellence',
    organization: 'Client Testimonials',
    year: '2025',
    description: 'Acknowledged for delivering high-quality projects within timeline and budget.'
  },
  {
    id: 4,
    title: 'E-commerce Innovation',
    organization: 'Product Development',
    year: '2025',
    description: 'Currently developing innovative e-commerce solutions for modern businesses.'
  },
  {
    id: 5,
    title: 'Client Choice Award',
    organization: 'Customer Feedback',
    year: '2025',
    description: '100% client satisfaction rate in our completed projects.'
  },
  {
    id: 6,
    title: 'Rapid Growth Potential',
    organization: 'Industry Analysis',
    year: '2025',
    description: 'Identified as a high-potential startup with innovative approach to technology.'
  },
  {
    id: 7,
    title: 'Future Tech Leaders',
    organization: 'Startup Community',
    year: '2025',
    description: 'Recognized for fresh perspective and modern approach to software development.'
  }
];
