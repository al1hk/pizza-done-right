import styles from './Menu.module.css'

export default function Menu() {
    return (
        <section id="specials" className={styles.menu}>
            <h1 className={styles.title}>Lunch Specials</h1>
            <section className={styles.menuSection}>
                <div className={styles.menuContent}>
                    <h2 className={styles.menuItem}>2 SLICES OF CHEESE PIZZA WITH SIDES AND A DRINK FOR 6$ </h2>
                    <p className={styles.menuItemExtra}>+ taxes (Toppings are extra)</p>
                    
                    <h2 className={styles.menuItem}>1 SLICE OF CHEESE PIZZA WITH A SMALL HOUSE SALAD AND A DRINK FOR 4$</h2>
                    <p className={styles.menuItemExtra}>+ taxes (Toppings are extra)</p>
                    
                    <h1 className={styles.timeInfo}>AVAILABLE MONDAY-SATURDAY 11AM - 8PM</h1>
                    <h1 className={styles.time}>Dine in or take out only</h1>
                </div>
                <img 
                    src="/assets/pexels-nadin-sh-78971847-15796333.jpg" 
                    alt="pizza" 
                    className={styles.pizzaImage}
                />
            </section>
        </section>
    );
}