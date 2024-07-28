"use client"; // Ensure this is at the top of the file if using browser-specific code

import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { RiInstagramLine, RiLinkedinBoxFill } from 'react-icons/ri';
import styles from './header.module.css';
import NaukriIcon from './NaukriIcon';
import Image from 'next/image';


import { BsWhatsapp } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa'; // LinkedIn icon
import { MdOutlineEmail } from 'react-icons/md';
import SectionHeader from '../section-header/SectionHeader';

const Header = () => {
  const [role, setRole] = useState('Web Developer');

  useEffect(() => {
    AOS.init();

    const roles = ['Web Developer', 'Front End Developer', 'Back End Developer'];
    let roleIndex = 0;
    const timer = setInterval(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      setRole(roles[roleIndex]);
    }, 1000);

    return () => clearInterval(timer); // Corrected cleanup for interval
  }, []);

  return (
    <div className={styles.mainsection}>
      <div className={styles.container}>
        <div className={`col-md-7 ${styles.mainsectioncon}`} data-aos="fade-up" data-aos-duration="2000">
          <h1 className={styles.head}>Hi, Im Potha Akhila</h1>
          <div data-aos="zoom-in" data-aos-duration="2000" className={styles.h3}>
            <h3 className="ml-[3rem] text-[2.2rem] font-[700]">
              <span className="text-[#78b6e6]">{role}</span>
            </h3>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <p className={styles.para}>Having completed my degree in Electronics and Communication Engineering,<br /> I am now applying my skills and knowledge at Synery Universal Company</p>
          </div>
          <div className={styles.icons}>
            <div data-aos="fade-up" data-aos-duration="2000">
              <a href="https://www.naukri.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                <NaukriIcon />
              </a>
              &nbsp;&nbsp;
              <a href="https://github.com/pothaakhila" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                <FaGithub />
              </a>
              &nbsp;&nbsp;
              <a href="https://www.linkedin.com/in/potha-akhila" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                <RiLinkedinBoxFill />
              </a>
              &nbsp;&nbsp;
              <a href="https://www.instagram.com/pothaakhila" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                <RiInstagramLine />
              </a>
            </div>
          </div>
          <div className={styles.card}>
        
                        <header className={styles.a}>
      <Image src="/akhila/image1.png" alt="Header Image"    width={300} height={100} className={styles.img} />
    </header>

          </div>
          <div className={styles.buttons} data-aos="fade-up" data-aos-duration="2000">
            <button className={styles.btn} data-aos="fade-up" data-aos-duration="1000">
              <a className="btn ml-[4rem] my-[1rem] hover:shadow-none" href="https://drive.google.com/file/d/1zt4AmOOfYYWObWtv9uO3amYpQb8ck_RU/view?usp=drive_link">Download CV</a>
            </button>
            <button className={styles.btn} data-aos="fade-up" data-aos-duration="2000">Hire Me</button>
          </div>
        </div>
      </div>
      <div className={`container ${styles.header}`}>
      <h1 className={styles.courses}>COURSES & CERTIFICATIONS</h1>
        <div className={styles.courses1}>
     
        <div className={styles.certificate1}  data-aos="zoom-in">
          <h2>Java Full Stack Development (Tap Academy)</h2>
          <p>Completed course from Tap Academy between October 2023 and March 2024.</p>
        </div>
        <div className={styles.certificate2}  data-aos="zoom-in">
          <h2>Industrial IOT 4.0 (NPTEL)</h2>
          <p className={styles.par}>Completed Industrial IoT 4.0 course from NPTEL in February 2023.</p>
        </div>
        <div className={styles.certificate3}  data-aos="zoom-in">
          <h2>Azure Fundamentals(AZ-900)</h2>
          <p className={styles.par}>Completed  course from AZ in October 2022.</p>
        </div>
        <div className={styles.certificate4}  data-aos="zoom-in">
          <h2>PHP (Simple learn)</h2>
          <p className={styles.par}>Completed  PHP (Simple learn) course from PHP in October 2023.</p>
        </div>
        </div>
      </div>
  
    <section>
      <SectionHeader />
      <div className={styles.h}>
        
      <h1 className={styles.sub}>Get In Touch</h1>
      <p className={styles.sub1}> Contact me via any of the options below </p>
      </div>
      <div className={`container ${styles.contactWrapper}`}>
        <a href="mailto:pothaakhila275@gmail.com" className={styles.contactOption} target="_blank" rel="noopener noreferrer">
          <MdOutlineEmail className={styles.contactIcon} />
        </a>
        <a href="https://www.linkedin.com/in/potha-akhila-6210491ba/" className={styles.contactOption} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={styles.contactIcon} />
        </a>
        <a href="https://wa.me/918639605431" className={styles.contactOption} target="_blank" rel="noopener noreferrer">
          <BsWhatsapp className={styles.contactIcon} />
        </a>
      </div>
    </section>

      <div className={styles.footers}>
        <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.socialIcons}>
              <a href="https://github.com/pothaakhila" target="_blank" rel="noopener noreferrer">
                <FaGithub className={styles.icon} />
              </a>
              <a href="https://www.linkedin.com/in/potha-akhila" target="_blank" rel="noopener noreferrer">
                <RiLinkedinBoxFill className={styles.icon} />
              </a>
              <a href="https://www.instagram.com/pothaakhila" target="_blank" rel="noopener noreferrer">
                <RiInstagramLine className={styles.icon} />
              </a>
            </div>
            <div className={styles.links}>
              <Link href="/about">About</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} Potha Akhila. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Header;
