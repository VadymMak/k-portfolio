/**
 * Blog Post Registry
 * Central index of all blog posts with metadata.
 * To add a new post: import its .md files and add an entry to the posts array.
 */

// Import markdown files as raw strings
import enPost1 from './posts/from-rejection-to-illustrator/en.md?raw';
import ruPost1 from './posts/from-rejection-to-illustrator/ru.md?raw';
import skPost1 from './posts/from-rejection-to-illustrator/sk.md?raw';
import uaPost1 from './posts/from-rejection-to-illustrator/ua.md?raw';

const posts = [
  {
    slug: 'from-rejection-to-illustrator',
    date: '2026-02-15',
    cover: '/blog/from-rejection-to-illustrator/cover.webp',
    tags: ['story', 'freelance', 'design', 'motivation'],
    content: {
      en: enPost1,
      ru: ruPost1,
      sk: skPost1,
      ua: uaPost1,
    },
  },
  // Add more posts here:
  // {
  //   slug: 'illustration-cost-2026',
  //   date: '2026-03-01',
  //   cover: '/blog/illustration-cost-2026/cover.webp',
  //   tags: ['guide', 'pricing', 'illustration'],
  //   content: { en: enPost2, ru: ruPost2, sk: skPost2, ua: uaPost2 },
  // },
];

// Sort posts by date (newest first)
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

export default posts;