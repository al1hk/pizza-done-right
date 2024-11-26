import React from 'react';
import styles from './Hours.module.css';

interface HoursData {
    day: string;
    hours: string;
    closed?: boolean;
}

const businessHours: HoursData[] = [
    { day: 'Monday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Tuesday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Wednesday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Thursday', hours: '11:00 AM - 11:00 PM' },
    { day: 'Friday', hours: '11:00 AM - 12:00 AM' },
    { day: 'Saturday', hours: '12:00 PM - 12:00 AM' },
    { day: 'Sunday', hours: 'Closed', closed: true }
];

export default function Hours() {
    return (
        <section id="hours" className={styles.hoursSection}>
            <h1 className={styles.title}>Hours</h1>
            <div className={styles.hoursContainer}>
                {businessHours.map((schedule, index) => (
                    <div key={index} className={styles.dayRow}>
                        <span className={styles.day}>{schedule.day}</span>
                        <span className={`${styles.hours} ${schedule.closed ? styles.closed : ''}`}>
                            {schedule.hours}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}