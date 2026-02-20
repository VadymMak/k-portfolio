/**
 * Blog Post Registry
 * Central index of all blog posts with metadata.
 * To add a new post: import its .md files and add an entry to the posts array.
 */

// Import markdown files as raw strings
import enPost1 from "./posts/from-rejection-to-illustrator/en.md?raw";
import ruPost1 from "./posts/from-rejection-to-illustrator/ru.md?raw";
import skPost1 from "./posts/from-rejection-to-illustrator/sk.md?raw";
import uaPost1 from "./posts/from-rejection-to-illustrator/ua.md?raw";

// Post #2: Sigurd illustration process
import enPost2 from "./posts/sigurd-illustration-process/en.md?raw";
import ruPost2 from "./posts/sigurd-illustration-process/ru.md?raw";
import skPost2 from "./posts/sigurd-illustration-process/sk.md?raw";
import uaPost2 from "./posts/sigurd-illustration-process/ua.md?raw";

// Post #3: Illustration cost guide
import enPost3 from "./posts/illustration-cost-2026/en.md?raw";
import ruPost3 from "./posts/illustration-cost-2026/ru.md?raw";
import skPost3 from "./posts/illustration-cost-2026/sk.md?raw";
import uaPost3 from "./posts/illustration-cost-2026/ua.md?raw";

const posts = [
  {
    slug: "from-rejection-to-illustrator",
    date: "2026-02-15",
    cover: "/blog/from-rejection-to-illustrator/cover.webp",
    tags: ["story", "freelance", "design", "motivation"],
    content: {
      en: enPost1,
      ru: ruPost1,
      sk: skPost1,
      ua: uaPost1,
    },
  },
  {
    slug: "sigurd-illustration-process",
    date: "2026-02-20",
    cover: "/blog/sigurd-illustration-process/cover.webp",
    tags: ["process", "illustration", "sigurd", "children's book"],
    content: {
      en: enPost2,
      ru: ruPost2,
      sk: skPost2,
      ua: uaPost2,
    },
  },
  {
    slug: "illustration-cost-2026",
    date: "2026-02-22",
    cover: "/blog/illustration-cost-2026/cover.webp",
    tags: ["pricing", "illustration", "guide", "children's book"],
    content: {
      en: enPost3,
      ru: ruPost3,
      sk: skPost3,
      ua: uaPost3,
    },
  },
];

// Sort posts by date (newest first)
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

export default posts;
