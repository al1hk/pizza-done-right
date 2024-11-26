import Image from 'next/image'
import styles from './Items.module.css'
import { Suspense } from 'react'

interface PizzaItem {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

const pizzaItems: PizzaItem[] = [
    {
        id: 1,
        name: "Margherita Supreme",
        description: "Fresh mozzarella, basil leaves, cherry tomatoes, and extra virgin olive oil on our signature crust",
        price: 14.99,
        image: "/assets/margherita.jpg"
    },
    {
        id: 2,
        name: "Pepperoni Paradise",
        description: "Double layer of spicy pepperoni, mozzarella cheese, and our special tomato sauce",
        price: 16.99,
        image: "/assets/pepperoni.jpg"
    },
    {
        id: 3,
        name: "Veggie Delight",
        description: "Bell peppers, mushrooms, onions, black olives, and fresh tomatoes with mozzarella",
        price: 15.99,
        image: "/assets/veggie.jpg"
    },
    {
        id: 4,
        name: "BBQ Chicken",
        description: "Grilled chicken, red onions, and cilantro with tangy BBQ sauce and mozzarella",
        price: 17.99,
        image: "/assets/bbq-chicken.jpg"
    },
    {
        id: 5,
        name: "Mediterranean",
        description: "Feta cheese, spinach, black olives, sun-dried tomatoes, and oregano",
        price: 16.99,
        image: "/assets/mediterranean.jpg"
    },
    {
        id: 6,
        name: "Meat Lovers",
        description: "Pepperoni, Italian sausage, bacon, ham, and ground beef with extra cheese",
        price: 18.99,
        image: "/assets/meat-lovers.jpg"
    }
];

const PizzaCard = ({ pizza }: { pizza: PizzaItem }) => (
    <div className={styles.itemCard}>
        <div className={styles.imageContainer}>
            <Image
                src={pizza.image}
                alt={pizza.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={pizza.id <= 2}
                loading={pizza.id <= 2 ? "eager" : "lazy"}
                className={styles.pizzaImage}
            />
        </div>
        <div className={styles.content}>
            <h2 className={styles.pizzaName}>{pizza.name}</h2>
            <p className={styles.description}>{pizza.description}</p>
            <div className={styles.price}>
                <span>$</span>
                {pizza.price}
            </div>
            <button className={styles.orderButton}>Order Now</button>
        </div>
    </div>
);

export default function Items() {
    return (
        <section id="items" className={styles.itemsSection}>
            <h1 className={styles.title}>Our Signature Pizzas</h1>
            <div className={styles.itemsGrid}>
                <Suspense fallback={<div className={styles.loading}>Loading pizzas...</div>}>
                    {pizzaItems.map((pizza) => (
                        <PizzaCard key={pizza.id} pizza={pizza} />
                    ))}
                </Suspense>
            </div>
        </section>
    )
}