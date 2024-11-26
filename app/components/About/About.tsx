import Image from 'next/image'
import styles from './About.module.css'

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <Image
                src="/assets/male-baker-prepares-bread-with-flour.jpg"
                alt="Baker preparing bread"
                fill
                className={styles.backgroundImage}
                priority
            />
            <div className={styles.overlay}></div>
            
            <div className={styles.content}>
                <h1 className={styles.title}>Our Story</h1>
                
                <p className={styles.description}>
                    Welcome to <span className={styles.highlight}>Pizza Done Right</span>, where passion meets perfection in every slice. For over two decades, we've been crafting authentic pizzas using time-honored recipes and the finest ingredients.
                </p>
                
                <p className={styles.description}>
                    Our dough is made fresh daily, hand-stretched to perfection, and topped with our signature sauce made from vine-ripened tomatoes. We source our ingredients from local suppliers who share our commitment to quality.
                </p>
                
                <p className={styles.description}>
                    Each pizza is carefully crafted in our stone-fired ovens, creating that perfect balance of crispy crust and melted toppings that our customers have come to love and expect.
                </p>
                
                <p className={styles.description}>
                    From traditional favorites to innovative creations, every pizza tells a story of culinary excellence and dedication to the craft of pizza-making.
                </p>
                
                <p className={styles.description}>
                    At <span className={styles.highlight}>Pizza Done Right</span>, we believe that great food brings people together. We're not just serving pizzas; we're creating memories, one slice at a time.
                </p>
            </div>
        </section>
    )
}