import { useParams, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import ReactMarkdown from 'react-markdown';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslation } from '../hooks/useTranslation';
import { parseFrontmatter } from '../blog/parseFrontmatter';
import posts from '../blog/blogIndex';
import  ProtectedImage  from '../components/ProtectedImage';
import styles from './BlogPost.module.css';

const BlogPost = () => {
  const { slug } = useParams();
  const { currentLanguage } = useLanguage();
  const { translate } = useTranslation();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Find the post
  const post = posts.find((p) => p.slug === slug);

  // Parse content (safe even if post is null)
  const raw = post ? (post.content[currentLanguage] || post.content.en) : '';
  const { meta, content } = parseFrontmatter(raw);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const locale = currentLanguage === 'sk' ? 'sk-SK'
      : currentLanguage === 'ua' ? 'uk-UA'
      : currentLanguage === 'ru' ? 'ru-RU'
      : 'en-US';
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // SEO: update document head
  useEffect(() => {
    if (!post) return;

    if (meta.title) {
      document.title = `${meta.title} | Anastasiia Kolisnyk — Illustrator`;
    }

    // Meta description
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.name = 'description';
      document.head.appendChild(descMeta);
    }
    descMeta.content = meta.description || '';

    // Open Graph
    const ogLocaleMap = {
      en: 'en_US',
      sk: 'sk_SK',
      ru: 'ru_RU',
      ua: 'uk_UA',
    };

    const ogTags = {
      'og:title': meta.title,
      'og:description': meta.description,
      'og:image': `https://akillustrator.com${post.cover}`,
      'og:url': `https://akillustrator.com/blog/${slug}`,
      'og:type': 'article',
      'og:locale': ogLocaleMap[currentLanguage] || 'en_US',
    };

    Object.entries(ogTags).forEach(([property, val]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = val || '';
    });

    // Twitter Card
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': meta.title,
      'twitter:description': meta.description,
      'twitter:image': `https://akillustrator.com${post.cover}`,
    };

    Object.entries(twitterTags).forEach(([name, val]) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.content = val || '';
    });

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.href = `https://akillustrator.com/blog/${slug}`;

    // Hreflang tags (multilingual SEO)
    const hreflangMap = {
      en: 'en',
      sk: 'sk',
      ru: 'ru',
      ua: 'uk',
    };
    const blogUrl = `https://akillustrator.com/blog/${slug}`;

    // Remove old hreflang tags
    document.querySelectorAll('link[data-hreflang]').forEach((el) => el.remove());

    // Add hreflang for each language
    Object.entries(hreflangMap).forEach(([lang, hreflang]) => {
      if (post.content[lang]) {
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', hreflang);
        link.setAttribute('href', blogUrl);
        link.setAttribute('data-hreflang', 'true');
        document.head.appendChild(link);
      }
    });

    // x-default (fallback — English)
    const xDefault = document.createElement('link');
    xDefault.setAttribute('rel', 'alternate');
    xDefault.setAttribute('hreflang', 'x-default');
    xDefault.setAttribute('href', blogUrl);
    xDefault.setAttribute('data-hreflang', 'true');
    document.head.appendChild(xDefault);

    // Structured data: Article schema
    let scriptTag = document.getElementById('blog-structured-data');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'blog-structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: meta.title,
      description: meta.description,
      image: `https://akillustrator.com${post.cover}`,
      datePublished: post.date,
      dateModified: post.dateModified || post.date,
      author: {
        '@type': 'Person',
        name: 'Anastasiia Kolisnyk',
        url: 'https://akillustrator.com',
      },
    });

    // Cleanup on unmount
    return () => {
      document.title = 'Anastasiia Kolisnyk — Children\'s Book Illustrator & Visual Designer';
      document.querySelectorAll('link[data-hreflang]').forEach((el) => el.remove());
    };
  }, [meta, post, slug]);

  // Early return AFTER all hooks
  if (!post) return <Navigate to="/blog" replace />;

  // Custom renderers for ReactMarkdown
  const components = {
    img: ({ src, alt }) => (
      <figure className={styles.figure}>
        <ProtectedImage
          src={src}
          alt={alt || ''}
          className={styles.contentImage}
          loading="lazy"
        />
        {alt && <figcaption className={styles.caption}>{alt}</figcaption>}
      </figure>
    ),
    h2: ({ children }) => (
      <h2 className={styles.sectionHeading}>{children}</h2>
    ),
    p: ({ children }) => {
      // Filter out HTML comments (PLACEHOLDER markers)
      const text = typeof children === 'string' ? children : '';
      if (text.includes('PLACEHOLDER')) return null;
      return <p>{children}</p>;
    },
    strong: ({ children }) => (
      <strong className={styles.bold}>{children}</strong>
    ),
    hr: () => <div className={styles.divider} />,
    em: ({ children }) => (
      <em className={styles.italic}>{children}</em>
    ),
  };

  return (
    <>
      {/* Reading Progress Bar */}
      <div
        className={styles.progressBar}
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <article className={styles.article}>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/" className={styles.breadcrumbLink}>
            {translate('blog.home') || 'Home'}
          </Link>
          <span className={styles.breadcrumbSep}>→</span>
          <Link to="/blog" className={styles.breadcrumbLink}>
            {translate('menu.blog') || 'Blog'}
          </Link>
          <span className={styles.breadcrumbSep}>→</span>
          <span className={styles.breadcrumbCurrent}>{meta.title}</span>
        </nav>

        {/* Hero Cover */}
        <motion.div
          className={styles.heroWrap}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ProtectedImage
            src={post.cover}
            alt={meta.title}
            className={styles.heroImage}
          />
        </motion.div>

        {/* Post Header */}
        <motion.header
          className={styles.postHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.headerMeta}>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className={styles.readTime}>
              {meta.readingTime || 5} {translate('blog.minRead') || 'min read'}
            </span>
          </div>
          <h1 className={styles.title}>{meta.title}</h1>
          <div className={styles.tags}>
            {(meta.tags || []).map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </motion.header>

        {/* Post Content */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ReactMarkdown components={components}>
            {content}
          </ReactMarkdown>
        </motion.div>

        {/* CTA Block */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className={styles.ctaTitle}>
            {translate('blog.ctaTitle') || 'Want to work together?'}
          </h3>
          <p className={styles.ctaText}>
            {translate('blog.ctaText') || 'I\'m available for children\'s book illustration, branding, and visual design projects.'}
          </p>
          <Link to="/#services" className={styles.ctaButton}>
            {translate('blog.ctaButton') || 'View Services'}
          </Link>
        </motion.div>

        {/* Back to Blog */}
        <div className={styles.backWrap}>
          <Link to="/blog" className={styles.backLink}>
            ← {translate('blog.backToBlog') || 'Back to Blog'}
          </Link>
        </div>
      </article>
    </>
  );
};

export default BlogPost;