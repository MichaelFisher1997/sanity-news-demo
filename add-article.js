#!/usr/bin/env node
import { createClient } from '@sanity/client';
import readline from 'readline';

const client = createClient({
  projectId: '247bx5rt',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'skwUHomguQHDr9tQLD2E2Koy76tQDspvoR6vRRm3Shc6Sz5Ugo2fksGgRFn6t6HdLZUcBWl6VwfdvfDns7mXC9xQfO6lqc1X1QZJrCYRAQdvWGEpsoMMF0lqcEsVOxWJDFZPTJzMNpVsP4g1NTk6YnnjRqigeE5R95GAdmMi7P2FaN9cnGqX'
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const categories = ['technology', 'politics', 'sports', 'entertainment', 'business'];

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

async function createArticle() {
  console.log('🚀 Create New Article\n');
  
  const title = await question('Title: ');
  const author = await question('Author: ');
  const excerpt = await question('Excerpt (optional): ');
  
  console.log('\nCategories:');
  categories.forEach((cat, index) => {
    console.log(`${index + 1}. ${cat.charAt(0).toUpperCase() + cat.slice(1)}`);
  });
  
  const categoryIndex = await question('\nSelect category (1-5): ');
  const category = categories[parseInt(categoryIndex) - 1];
  
  const content = await question('Article content: ');
  
  console.log('\n📝 Creating article...');
  
  try {
    const article = await client.create({
      _type: 'article',
      title,
      slug: { current: createSlug(title) },
      excerpt: excerpt || undefined,
      category,
      author,
      publishedAt: new Date().toISOString(),
      body: [
        {
          _type: 'block',
          _key: 'block1',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'span1',
              text: content
            }
          ]
        }
      ]
    });
    
    console.log('\n✅ Article created successfully!');
    console.log(`📄 Title: ${title}`);
    console.log(`🔗 URL: http://localhost:4322/article/${createSlug(title)}`);
    console.log(`📰 View all articles: http://localhost:4322/news`);
    
  } catch (error) {
    console.error('\n❌ Error creating article:', error.message);
  }
  
  rl.close();
}

createArticle();