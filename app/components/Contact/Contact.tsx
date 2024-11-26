import styles from './Contact.module.css'
import Link from 'next/link'

export default function Contact() {
    return (
        <div className={styles.contact} id="contact">
            <h1 className={styles.title}>Contact Us</h1>
            <section className={styles.contactSection}>
                <div className={styles.contactContent}>
                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            📞 Phone: (555) 123-4567
                        </div>
                        <div className={styles.contactItem}>
                            📧 Email: alihxssanx@gmail.com
                        </div>
                        <div className={styles.contactItem}>
                            📍 Address: 123 Pizza Street, Foodville, FD 12345
                        </div>
                    </div>
                    <div className={styles.socialLinks}>
                        <Link href="https://github.com/al1hk" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                            <span>GitHub</span>
                        </Link>
                        <Link href="https://www.linkedin.com/in/ali-hassan-16a5682b7/" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                            <span>LinkedIn</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}