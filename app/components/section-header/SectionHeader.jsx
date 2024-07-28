// components/section-header/SectionHeader.jsx
import React from 'react';
import styles from './SectionHeader.module.css'; // Ensure this CSS module file exists

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className={styles.sectionHeader}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
