import styles from './ProtectedImage.module.css';

/**
 * ProtectedImage — wraps any <img> with anti-theft protection:
 * - Disables right-click context menu
 * - Disables drag-and-drop
 * - Transparent overlay prevents "Save Image As"
 * - CSS user-select: none
 * 
 * Usage (drop-in replacement for <img>):
 *   <ProtectedImage src="/gallery/nutcracker.webp" alt="Nutcracker illustration" />
 * 
 * Or wrap existing content:
 *   <ProtectedImage>
 *     <img src="/gallery/nutcracker.webp" alt="..." />
 *   </ProtectedImage>
 */
const ProtectedImage = ({ 
  children, 
  src, 
  alt = '', 
  className = '', 
  style = {},
  loading = 'lazy',
  ...imgProps 
}) => {
  const handleContextMenu = (e) => {
    e.preventDefault();
    return false;
  };

  const handleDragStart = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <div 
      className={`${styles.wrapper} ${className}`}
      style={style}
      onContextMenu={handleContextMenu}
      onDragStart={handleDragStart}
    >
      {children ? (
        children
      ) : (
        <img 
          src={src} 
          alt={alt} 
          draggable="false"
          loading={loading}
          className={styles.image}
          {...imgProps}
        />
      )}
      {/* Transparent overlay - "Save Image As" saves this, not the image */}
      <div className={styles.overlay} aria-hidden="true" />
    </div>
  );
};

export default ProtectedImage;