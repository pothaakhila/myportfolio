// components/section-header/SectionHeader.jsx
import React from 'react';
import styles from './SectionHeader.module.css'; // Ensure this CSS module file exists
import Head from 'next/head';


const SectionHeader = ({ title, subtitle }) => {

  return (
    <>
     <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
 
    <div className={styles.sectionHeader}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
    </>
  );
};

export default SectionHeader;
