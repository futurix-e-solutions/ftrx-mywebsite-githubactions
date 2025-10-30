# Company Constants Documentation

## Overview
This directory contains centralized constants for all company information, contact details, social media links, team member information, and other business-related data used throughout the application.

## File: `company.constants.ts`

### Purpose
The `company.constants.ts` file serves as the single source of truth for all company-related information. This approach provides several benefits:

1. **Centralization**: All company information is in one place, making it easy to find and update
2. **Consistency**: Ensures the same information is used across all components
3. **Maintainability**: Changes only need to be made in one location
4. **Type Safety**: TypeScript constants provide compile-time checking

## Available Constants

### COMPANY_INFO
Contains basic company information:
- `name`: Company name
- `tagline`: Company tagline/slogan
- `description`: Company description
- `foundedYear`: Year the company was founded
- `website`: Company website URL
- `logo`: Object containing paths to various logo files

### CONTACT_INFO
Contains all contact information:
- `phone`: Phone numbers and dial links
- `email`: Email addresses (info, sales, support)
- `whatsapp`: WhatsApp link and number
- `address`: Complete address details including geo coordinates
- `businessHours`: Operating hours in multiple formats

### SOCIAL_MEDIA
Contains social media profile information:
- Facebook, Instagram, LinkedIn, Twitter
- Each includes: name, URL, icon class, and username

### SOCIAL_MEDIA_LINKS
Array of all social media URLs for easy iteration or schema.org integration

### TEAM_MEMBERS
Array of team member/director objects containing:
- Personal information (name, position, role)
- Bio and skills
- Contact information
- Social media links
- Profile image

### COMPANY_STATS
Company statistics for display:
- Projects completed/delivered
- Happy clients
- Team size
- Years of experience
- Awards won
- Support availability

### SEO_INFO
SEO and meta information:
- Page titles
- Meta descriptions
- Keywords
- Open Graph data
- Twitter Card data

### STRUCTURED_DATA
Schema.org structured data for LocalBusiness

### Navigation and Links
- `QUICK_LINKS`: Main navigation links
- `SERVICES_LIST`: List of services offered
- `LEGAL_LINKS`: Legal pages (Privacy Policy, Terms of Service)

### Other Constants
- `COPYRIGHT`: Copyright information with dynamic year
- `GOOGLE_MAPS_EMBED`: Google Maps embed URL
- `AWARDS`: Array of awards and recognition

## Usage Examples

### In a Component

```typescript
import { Component } from '@angular/core';
import { COMPANY_INFO, CONTACT_INFO, SOCIAL_MEDIA } from '../../constants/company.constants';

@Component({
  selector: 'app-example',
  template: `
    <h1>{{ companyInfo.name }}</h1>
    <p>{{ companyInfo.description }}</p>
    <a [href]="contactInfo.phone.dialLink">Call: {{ contactInfo.phone.display }}</a>
    <a [href]="socialMedia.facebook.url" target="_blank">
      <i [class]="socialMedia.facebook.icon"></i>
    </a>
  `
})
export class ExampleComponent {
  companyInfo = COMPANY_INFO;
  contactInfo = CONTACT_INFO;
  socialMedia = SOCIAL_MEDIA;
}
```

## Components Using Constants

The following components have been updated to use these constants:

1. **footer.component.ts** - Uses company info, contact info, social media, navigation links
2. **about.component.ts** - Uses team members, company stats, awards
3. **contact.component.ts** - Uses contact info, company info, Google Maps embed
4. **home.component.ts** - Uses company info, contact info, company stats
5. **header.component.ts** - Uses company info for logo and branding
6. **floating-buttons.component.ts** - Uses contact info for WhatsApp and phone buttons

## Updating Company Information

To update any company information:

1. Open `src/app/constants/company.constants.ts`
2. Find the relevant constant (e.g., `CONTACT_INFO` for phone numbers)
3. Update the value
4. Save the file
5. The changes will automatically propagate to all components using that constant

### Example: Updating Phone Number

```typescript
export const CONTACT_INFO = {
  phone: {
    display: '+91 12345 67890',  // Update here
    raw: '+911234567890',         // And here
    dialLink: 'tel:+911234567890' // And here
  },
  // ... rest of the configuration
};
```

## Important Notes

### Static HTML Files
The `index.html` file cannot directly use TypeScript constants. If you need to update company information in `index.html`, you must:
1. Update the constants file
2. Manually update the corresponding values in `index.html`
3. Ensure both files stay in sync

### Build Process
The Angular build process will inline these constants at compile time, so there's no runtime performance impact.

### Type Safety
All constants are exported with proper TypeScript types. If you're using TypeScript strict mode, you'll get compile-time errors if you try to access properties that don't exist.

## Best Practices

1. **Always use constants**: Never hardcode company information in components
2. **Update in one place**: Make changes only in the constants file
3. **Check dependencies**: Before removing a constant, search the codebase to ensure it's not being used
4. **Keep it organized**: If adding new constants, follow the existing structure and naming conventions
5. **Document changes**: If adding new complex constants, document their usage in this README

## Adding New Constants

When adding new company-related constants:

1. Add them to `company.constants.ts`
2. Follow the existing naming convention (UPPER_SNAKE_CASE for constants)
3. Export the constant
4. Update this README with documentation
5. Use TypeScript types for better IDE support

Example:

```typescript
export const NEW_CONSTANT = {
  property1: 'value1',
  property2: 'value2'
};
```

## Contact

For questions about these constants or suggestions for improvements, please contact the development team.

---

**Last Updated**: 2025-10-30
**Maintained By**: Development Team
