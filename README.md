# Harley-Davidson Motorcycle Dealership

![App Preview](https://imgix.cosmicjs.com/95f74330-7f01-11f0-8dcc-651091f6a7c0-photo-1558618666-fcd25c85cd64-1755830520898.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A premium motorcycle dealership website that showcases the complete Harley-Davidson experience. Built with Next.js 15 and powered by Cosmic CMS, this application features motorcycles, parts, accessories, apparel, services, dealer locations, promotions, and news.

## Features

- **Motorcycle Showcase**: Browse the complete lineup with detailed specifications and pricing
- **Parts & Accessories**: Comprehensive catalog of genuine Harley-Davidson parts
- **Apparel Store**: Authentic clothing and accessories for men and women
- **Dealer Locator**: Find authorized dealers with contact information and services
- **Service Center**: Training courses, maintenance, repairs, and customization services
- **Promotions**: Current financing offers, discounts, and special deals
- **News Hub**: Latest company updates, events, and product announcements
- **Responsive Design**: Optimized for all devices and screen sizes
- **Image Optimization**: Fast-loading, high-quality images via imgix

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=68a7d83308a1b40ea22e724c&clone_repository=68a7db8349acf30a1a75329b)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> No content model prompt provided - app built from existing content structure

### Code Generation Prompt

> Clone the Harley Davidson website using Next.js

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Framework**: Next.js 15 with App Router
- **CMS**: Cosmic CMS for content management
- **Styling**: Tailwind CSS for responsive design
- **Language**: TypeScript for type safety
- **Images**: imgix for optimization
- **Package Manager**: Bun for fast installs
- **Deployment**: Vercel-ready configuration

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Cosmic account and bucket

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Cosmic credentials:
   ```
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Run the development server:
   ```bash
   bun run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the application

## Cosmic SDK Examples

### Fetching Motorcycles
```typescript
const motorcycles = await cosmic.objects
  .find({ type: 'motorcycles' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

### Fetching Dealer Information
```typescript
const dealers = await cosmic.objects
  .find({ type: 'dealers' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

### Fetching Latest News
```typescript
const news = await cosmic.objects
  .find({ type: 'news' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

## Cosmic CMS Integration

This application integrates with the following Cosmic object types:

- **Motorcycles**: Model information, specifications, pricing, and images
- **Parts & Accessories**: Product catalog with categories and compatibility
- **Apparel**: Clothing items with sizes, colors, and product images
- **Services**: Training courses, maintenance, and dealer services
- **Dealers**: Location information, hours, and contact details
- **Promotions**: Current offers, financing deals, and special promotions
- **News**: Company updates, events, and product announcements

All content is managed through your Cosmic CMS dashboard and automatically reflected in the application.

## Deployment Options

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add environment variables in the Vercel dashboard
3. Deploy automatically with git pushes

### Netlify
1. Connect repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables

For production deployment, ensure all environment variables are properly configured in your hosting platform.

<!-- README_END -->