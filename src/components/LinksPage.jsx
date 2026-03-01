import React from 'react';
import { Mail, Send } from 'lucide-react';
import SocialLinksBtn from './SocialLinksBtn';
import { socials } from '../data/socials';
import { profile } from '../data/profile';
import styles from './LinksPage.module.css';

const LinksPage = () => {
  const categories = profile.categories || [];
  
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        
        {/* Profile Header Section */}
        <h1 className={styles.title}>
          {profile.name || '@default'}
        </h1>
        
        {/* Subtitle with inline contact */}
        <p className={styles.subtitle}>
          {profile.tagline || 'Custom solutions for your business'}
          <span className={styles.inlineContact}>
            <a href="mailto:brightlabs.agency@gmail.com" className={styles.inlineContactItem}>
              <Mail size={12} strokeWidth={1.8} />
              brightlabs.agency@gmail.com
            </a>
            <span className={styles.inlineDivider}>|</span>
            Send a DM
          </span>
        </p>
        
        {/* Category Chips */}
        {categories.length > 0 && (
          <div className={styles.categoriesContainer}>
            {categories.map((category, index) => (
              <span key={index} className={styles.categoryChip}>
                {category}
              </span>
            ))}
          </div>
        )}
        
        {/* Status Badge - Available for work */}
        <div className={styles.statusBadge}>
          <span className={styles.statusDot}></span>
          Available for Commission
        </div>
        
        {/* Social Links Section */}
        <div className={styles.linksList}>
          {socials.map((social) => (
            <SocialLinksBtn 
              key={social.id}
              social={social}
            />
          ))}
        </div>
        
        {/* Footer Section */}
        <p className={styles.footer}>
          {profile.footerText || 'all links lead to creative spaces'}
        </p>
        
        {/* Update Button */}
        <button className={styles.updateBtn}>
          {profile.updateHandle || 'update handle'}
        </button>
        
      </div>
    </div>
  );
};

export default LinksPage;