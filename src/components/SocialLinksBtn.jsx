import React from 'react';
import { IconMap, ArrowRightIcon } from './Icons';
import styles from './SocialLinksBtn.module.css';

const SocialLinksBtn = ({ social }) => {
  const { name, handle, url, color, description, icon } = social;
  
  const IconComponent = IconMap[icon] || IconMap['ExternalLink'];

  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.linkButton}
      style={{ '--hover-color': color }}
    >
      <div className={styles.iconContainer}>
        <IconComponent className={styles.icon} width={22} height={22} strokeWidth={1.8} />
      </div>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.name}>{name}</span>
          <span className={styles.handle}>{handle}</span>
        </div>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.arrow}>
        <ArrowRightIcon width={18} height={18} strokeWidth={2.5} />
      </div>
    </a>
  );
};

export default SocialLinksBtn;