import React from 'react';
import styles from './about.module.css'; // Ensure the path is correct
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

import { DiBootstrap, DiCss3, DiHtml5, DiJavascript1, DiMongodb, DiNodejs, DiReact } from 'react-icons/di';
import { SiC, SiExpress, SiFirebase } from 'react-icons/si';


const About = () => {
  return (
    <div className={`container ${styles.container}`}>
      <div class={styles.con}>
      <div className={styles.headerLeft}>
        <h1>About Me</h1>
          
        <p>
          <strong>Education:</strong><br />
          <br/>
          Bachelor of Technology, Electronics and Communication Engineering (2019 - 2023), Siddharth Institute of Engineering & Technology College, Puttur, India<br/>
          Intermediate - Mathematics & Science (2017 - 2019), Sri Chaitanya Junior College, Tirupati, India
        </p><br />
        
        <p>
          <strong>Technical Skills:</strong><br/><br />
          Programming Languages: CORE Java, MERN Stack<br/><br />
          Database Technologies: SQL<br/><br />
          Web Technologies: HTML, CSS, JavaScript, Bootstrap<br/><br />
          Tools: Arduino IDE, Embedded C
        </p><br />
        
        <div>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.icon} />
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaFacebook className={styles.icon} />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.icon} />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} />
          </a>
        </div>
      </div>

      <div className={styles.circularImageContainer}>
      <header className={styles.b}>
      <Image src="/akhila/image1.png" alt="Header Image"    width={100} height={100} className={styles.img1} />
    </header>
      </div>
<div className={styles.back}>
      {/* Adding more icon backgrounds */}
      <div className={styles.iconBackground}>
        <FaLinkedin size={30} />
      </div>
      <div className={styles.iconBackground}>
        <FaFacebook size={30} />
      </div>
      <div className={styles.iconBackground}>
        <FaInstagram size={30} />
      </div>
      <div className={styles.iconBackground}>
        <FaGithub size={30} />
      </div>
      <div className={styles.iconBackground}>
        <FaLinkedin size={30} />
      </div>
      <div className={styles.iconBackground}>
        <FaFacebook size={30} />
      </div>
      <div className={styles.iconBackground}>
        <FaInstagram size={30} />
      </div>
      <div className={styles.iconBackground}>
        <FaGithub size={30} />
      </div>
      <div className={styles.iconBackground}>
        <FaLinkedin size={30} />
      </div>
      <div className={styles.iconBackground}>
        <FaFacebook size={30} />
      </div>
      <div className={styles.iconBackground}>
        <FaInstagram size={30} />
      </div>
      <div className={styles.iconBackground}>
        <FaGithub size={30} />
      </div>
      <div className={styles.iconBackground}>
        <FaLinkedin size={30} />
      </div>
      <div className={styles.iconBackground}>
        <FaFacebook size={30} />
      </div>
      </div>
      </div>


      <div className={styles.project}>
        <h1 className={styles.proj}>PROJECTS</h1>
      <div data-aos="fade-up" data-aos-duration="2000" id="service" className={styles.section}>
      <div className="container Services_sec">
        <div className="row mt-3">
          {/* Project 1 */}
          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="4000">
            <div className={styles.card}>
              <h2 className={styles.head}>SOLAR POWERED AUTOMATED MULTITASKING AGRICULTURE ROBOT</h2>
              <p className={styles.Des1}>This is a Solar-Powered Automated</p>
              <p className={styles.Des5}>Multitasking Agriculture Robot Project</p>
              <div className={styles.iconContainer}>
                <span className={styles.icon}><SiC /></span>
              </div>
              {/* Static image */}
              <Image 
                src='/akhila/project1.jpg'
                alt='Solar Powered Automated Multitasking Agriculture Robot'
                className={styles.cardImage}
                width={100} 
                height={100} 
              />
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="4000">
            <div className={styles.card}>
              <h2 className={styles.head}>E-COMMERCE WEB APPLICATION</h2>
              <p className={styles.Des2}>This is an e-commerce web application</p>
              <p className={styles.Des5}>for online shopping Project</p>
              <div className={styles.iconContainer}>
                <span className={styles.icon}><DiMongodb /></span>
                <span className={styles.icon}><SiExpress /></span>
                <span className={styles.icon}><DiReact /></span>
                <span className={styles.icon}><DiNodejs /></span>
              </div>
              {/* Static image */}
              <Image 
                src='/akhila/project2.jpg'
                alt='E-Commerce Web Application'
                className={styles.cardImage}
                width={100} height={100} 
              />
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="4000">
            <div className={styles.card}>
              <h2 className={styles.head}>FRONTEND DESIGN</h2>
              <p className={styles.Des3}>Design and develop the frontend</p>
              <p className={styles.Des5}>of web applications Project</p>
              <div className={styles.iconContainer}>
                <span className={styles.icon}><DiHtml5 /></span>
                <span className={styles.icon}><DiCss3 /></span>
                <span className={styles.icon}><DiBootstrap /></span>
                <span className={styles.icon}><DiJavascript1 /></span>
              </div>
              {/* Static image */}
              <Image 
                src='/akhila/project3.jpg'
                alt='Frontend Design'
                className={styles.cardImage}
                width={100} height={100} 
              />
            </div>
          </div>

          {/* Project 4 */}
          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="4000">
            <div className={styles.card}>
              <h2 className={styles.head}>GOOGLE AUTHENTICATION INTEGRATION</h2>
              <p className={styles.Des4}>Integrate Google Authentication</p>
              <p className={styles.Des5}>for secure user login Project</p>
              <div className={styles.iconContainer}>
                <span className={styles.icon}><DiReact /></span>
                <span className={styles.icon}><SiFirebase /></span>
                <span className={styles.icon}><DiJavascript1 /></span>
              </div>
              {/* Static image */}
              <Image
                src='/akhila/project4.png'
                alt='Google Authentication Integration'
                className={styles.cardImage}
                width={100} height={100} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
  

    </div>
  );
};

export default About;
