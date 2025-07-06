import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  name: 'news-site',
  title: 'News Site',
  projectId: 'your-project-id',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [
      {
        name: 'article',
        title: 'Article',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 4,
          },
          {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
              {
                type: 'block',
              },
            ],
          },
          {
            name: 'author',
            title: 'Author',
            type: 'string',
          },
          {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
          },
          {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
              list: [
                { title: 'Technology', value: 'technology' },
                { title: 'Politics', value: 'politics' },
                { title: 'Sports', value: 'sports' },
                { title: 'Entertainment', value: 'entertainment' },
                { title: 'Business', value: 'business' },
              ],
            },
          },
        ],
      },
    ],
  },
})