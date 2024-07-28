"use client"; // Ensure this is present for client-side functionality

import React, { useEffect }  from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'; 
import styles from './portfolio.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';




const Page = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
 <div className={`container ${styles.background}`}> 
  <h1>contact</h1>
    <div className={`container ${styles.container}`} data-aos="fade-up"
        data-aos-duration="2000" >
      <h1 className={styles.h1}>Contact Me</h1>
      <p className={styles.p1}>
        <FaEnvelope className={styles.icon} />
      pothaakhila275@gmail.com
      </p>
      <p className={styles.p2}>
        <FaPhone className={styles.icon} /> 8639604531
      </p>
      <form className={styles.forms}
        action="https://formsubmit.co/pothaakhila275@gmail.com" // FormSubmit endpoint URL
        method="POST"
        target="_blank"
       
      >
        <input
          type="text"
          className={styles.input}
          name="name"
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          className={styles.input}
          name="email"
          placeholder="Email"
          required
        />
        <input
          type="tel"
          className={styles.input}
          name="phone"
          placeholder="Phone Number"
        />
        <textarea
          className={styles.textarea}
          name="message"
          placeholder="Message"
          required
        ></textarea>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Page
