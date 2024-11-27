"use client"
import React, { useState, useEffect } from "react"
import styles from "./Navbar.module.css"

export default function Navbar() {
    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navbar');
            if (navbar) {
                const navbarBottom = navbar.getBoundingClientRect().bottom;
                setShowNav(navbarBottom > 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <nav id="navbar" className={styles.navbar}>
            <div className={`${styles.navButtons} ${showNav ? '' : styles.hidden}`}>
                <button onClick={() => scrollToSection('specials')} className={styles.navButton}>Specials</button>
                <button onClick={() => scrollToSection('items')} className={styles.navButton}>Menu</button>
                <button onClick={() => scrollToSection('about')} className={styles.navButton}>About</button>
                <button onClick={() => scrollToSection('hours')} className={styles.navButton}>Hours</button>
                <button onClick={() => scrollToSection('contact')} className={styles.navButton}>Contact Us</button>
            </div>
            <h1 className={styles.title}>Pizza</h1>
            <h1 className={styles.subtitle}>D O N E  R I G H T</h1>
            <button onClick={() => scrollToSection('specials')} className={styles.button}>Get Started</button>
        </nav>
    )
}
