# Content Creation Guide

## 🎨 Adding Content to Your News Site

### Method 1: Using Sanity Studio (Recommended)

1. **Access Sanity Studio**
   ```bash
   # Make sure your dev server is running
   npm run dev
   
   # Visit the studio
   http://localhost:4323/studio
   ```

2. **Create Your First Article**
   - Click "Create" → "Article"
   - Fill in the required fields:
     - **Title**: Your article headline
     - **Slug**: Auto-generated from title (click "Generate")
     - **Excerpt**: Brief summary (optional but recommended)
     - **Category**: Choose from: Technology, Politics, Sports, Entertainment, Business
     - **Author**: Your name
     - **Published At**: Set publication date
     - **Main Image**: Upload a featured image
     - **Body**: Write your article content

3. **Publish Your Article**
   - Click "Publish" to make it live
   - Visit your news site to see it appear

### Method 2: Using Sanity CLI

```bash
# Install Sanity CLI globally
npm install -g @sanity/cli

# Create a new document
sanity documents create
```

### Method 3: Direct API Integration

```javascript
// Using the Sanity client directly
import { sanityClient } from './src/lib/sanity';

const newArticle = await sanityClient.create({
  _type: 'article',
  title: 'My New Article',
  slug: { current: 'my-new-article' },
  excerpt: 'This is a brief summary',
  category: 'technology',
  author: 'John Doe',
  publishedAt: new Date().toISOString(),
  body: [
    {
      _type: 'block',
      children: [
        {
          _type: 'span',
          text: 'Your article content here...'
        }
      ]
    }
  ]
});
```

## 📝 Content Structure

### Article Fields:
- **Title** (required): Article headline
- **Slug** (required): URL-friendly version of title
- **Excerpt**: Brief summary for article cards
- **Main Image**: Featured image with alt text
- **Body**: Rich text content
- **Author**: Writer's name
- **Published At**: Publication date and time
- **Category**: One of: Technology, Politics, Sports, Entertainment, Business

### Content Best Practices:
- Keep titles under 60 characters for SEO
- Write compelling excerpts (150-200 characters)
- Use high-quality images (1200x600px recommended)
- Include alt text for accessibility
- Set appropriate publication dates
- Choose relevant categories

## 🚀 Quick Start Sample Articles

Here are some sample articles you can create:

### Technology Article:
```
Title: "The Future of AI in Web Development"
Category: Technology
Excerpt: "How artificial intelligence is revolutionizing the way we build websites and applications."
Author: Your Name
```

### Politics Article:
```
Title: "Local Election Results Impact Community"
Category: Politics
Excerpt: "Analysis of recent local election outcomes and their implications for residents."
Author: Your Name
```

### Sports Article:
```
Title: "Championship Game Highlights"
Category: Sports
Excerpt: "Recap of the thrilling championship match that kept fans on the edge of their seats."
Author: Your Name
```

## 🔧 Troubleshooting

### Common Issues:

1. **Articles not appearing:**
   - Check your .env file has correct project ID
   - Ensure articles are published in Sanity Studio
   - Verify your dataset name is correct

2. **Images not loading:**
   - Make sure images are uploaded to Sanity
   - Check image permissions in Sanity settings

3. **Studio not loading:**
   - Confirm project ID in both config files
   - Check if you have proper permissions

### Debug Commands:
```bash
# Check Sanity connection
npm run build

# View logs
npm run dev -- --verbose
```

## 🎯 Next Steps

1. **Create 3-5 sample articles** to test the system
2. **Add more content types** (e.g., authors, categories)
3. **Implement search functionality**
4. **Add comment system**
5. **Set up content scheduling**

Your news site is now ready for content creation! 🚀