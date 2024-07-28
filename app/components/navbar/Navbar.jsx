"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from './navbar.module.css';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { GoMoon } from 'react-icons/go';
import { usePathname } from 'next/navigation';


const data = [
  { id: 1, link: '/', caption: 'Home' },
  { id: 2, link: '/about', caption: 'About' },
  //{ id: 5, link: '/part', caption: 'Part' },
  { id: 3, link: '/portfolio', caption: 'Contact Me' },

  
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();
useEffect(()=>{
  if(window.innerWidth > 600){
    setNavOpen(true);
  }
},[]);
  const closeNavHandler = () => {
    if (window.innerWidth <= 600) {
      setNavOpen(false);
    }
  };

  return (
    <>
     <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.navLogo} onClick={closeNavHandler}>
            POTHA AKHILA 
        </Link>
        {navOpen && (
          <ul className={styles.navItems}>
            {data.map(item => (
              <li key={item.id}>
                <Link href={item.link} onClick={closeNavHandler} className={pathname === item.link ? styles.active : ''}>
                  {item.caption}
                </Link>
              </li>
            ))}
          </ul>
        )}
           
   
        <div className={styles.navBtns}>
          <button className={styles.themeBtn}>
            <GoMoon />
          </button>
          <button className={styles.navBtn} onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <AiOutlineClose /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;


