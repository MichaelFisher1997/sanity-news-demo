import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID || 'your-project-id',
  dataset: import.meta.env.SANITY_DATASET || 'production',
  apiVersion: import.meta.env.SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
  token: import.meta.env.SANITY_TOKEN,
});

export interface Article {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  mainImage?: {
    asset: {
      _ref: string;
      url: string;
    };
    alt?: string;
  };
  body: any[];
  author?: string;
  publishedAt: string;
  category?: string;
}

export async function getArticles(): Promise<Article[]> {
  try {
    const articles = await sanityClient.fetch(`
      *[_type == "article"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        mainImage {
          asset->{
            _ref,
            url
          },
          alt
        },
        body,
        author,
        publishedAt,
        category
      }
    `);
    return articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const article = await sanityClient.fetch(`
      *[_type == "article" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        excerpt,
        mainImage {
          asset->{
            _ref,
            url
          },
          alt
        },
        body,
        author,
        publishedAt,
        category
      }
    `, { slug });
    return article;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}