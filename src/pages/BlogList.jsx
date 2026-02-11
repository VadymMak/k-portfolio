import { Link } from 'react-router-dom';
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import { useLanguage } from '../hooks/useLanguage';
import { useTranslation } from '../hooks/useTranslation';
import { parseFrontmatter } from '../blog/parseFrontmatter';
import posts from '../blog/blogIndex';
import  ProtectedImage  from '../components/ProtectedImage';
import styles from './BlogList.module.css';

const BlogList = () => {
  const { currentLanguage } = useLanguage();
  const { translate } = useTranslation();

  // Parse metadata for each post in the current language
  const parsedPosts = posts.map((post) => {
    const raw = post.content[currentLanguage] || post.content.en;
    const { meta } = parseFrontmatter(raw);
    return {
      slug: post.slug,
      cover: post.cover,
      date: post.date,
      title: meta.title || post.slug,
      description: meta.description || '',
      tags: meta.tags || post.tags || [],
      readingTime: meta.readingTime || 5,
    };
  });

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

  return (
    <div className={styles.blogList}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link to="/" className={styles.breadcrumbLink}>
          {translate('blog.home') || 'Home'}
        </Link>
        <span className={styles.breadcrumbSeparator}>→</span>
        <span className={styles.breadcrumbCurrent}>
          {translate('menu.blog') || 'Blog'}
        </span>
      </nav>

      <motion.h1
        className={styles.pageTitle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {translate('menu.blog') || 'Blog'}
      </motion.h1>

      <div className={styles.postsGrid}>
        {parsedPosts.map((post, index) => (
          <motion.article
            key={post.slug}
            className={styles.postCard}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link to={`/blog/${post.slug}`} className={styles.postLink}>
              <div className={styles.coverWrap}>
                <ProtectedImage
                  src={post.cover}
                  alt={post.title}
                  className={styles.coverImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.postInfo}>
                <div className={styles.postMeta}>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span className={styles.readTime}>
                    {post.readingTime} {translate('blog.minRead') || 'min read'}
                  </span>
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <p className={styles.postExcerpt}>{post.description}</p>
                <div className={styles.tags}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default BlogList;