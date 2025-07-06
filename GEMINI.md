# NewsHub - News Website Demo

## Project Overview
A modern news website built with Astro, TypeScript, TailwindCSS, and Sanity CMS.

## Tech Stack
- **Astro** - Static site generator with partial hydration
- **TypeScript** - Type-safe JavaScript development
- **TailwindCSS** - Utility-first CSS framework
- **Sanity** - Headless CMS for content management

## Project Structure
```
news-site/
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # Main layout component
│   ├── pages/
│   │   ├── index.astro           # Homepage
│   │   ├── news.astro            # News listing page
│   │   └── about.astro           # About page
│   └── styles/
│       └── global.css            # Global styles with Tailwind
├── astro.config.mjs              # Astro configuration
├── sanity.config.ts              # Sanity CMS configuration
└── package.json                  # Dependencies
```

## Features Implemented
- [x] Basic Astro project setup with TypeScript
- [x] TailwindCSS integration for styling
- [x] Sanity CMS integration and schema
- [x] Responsive layout with navigation
- [x] Homepage with hero section and category cards
- [x] News listing page with article cards
- [x] About page with technical stack info

## Sanity CMS Schema
- **Article** document type with fields:
  - Title and slug
  - Excerpt and main image
  - Rich text body content
  - Author and publish date
  - Category (Technology, Politics, Sports, Entertainment, Business)

## Setup Instructions
1. Install dependencies: `npm install`
2. Configure Sanity project ID in `astro.config.mjs` and `sanity.config.ts`
3. Run development server: `npm run dev`
4. Access Sanity Studio at `/studio`

## Current Status
✅ Basic site scaffold completed
✅ Sanity integration configured
✅ Data fetching utilities created
✅ News page updated to use real Sanity data
⏳ Ready for Sanity project connection

## Sanity Connection Setup
1. **Create/Access your Sanity project**
2. **Get your project credentials:**
   - Project ID
   - Dataset name (usually 'production')
   - API token (if needed)
3. **Configure environment variables:**
   - Copy `.env.example` to `.env`
   - Update with your actual Sanity credentials
4. **Update configuration files:**
   - `astro.config.mjs` - Add your project ID
   - `sanity.config.ts` - Add your project ID

## Next Steps
- Connect to your actual Sanity project
- Create sample articles in Sanity Studio
- Add dynamic article pages with [slug].astro
- Implement search functionality
- Add more interactive features