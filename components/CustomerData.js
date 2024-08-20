import React from 'react';
import styles from '../styles/CustomerData.module.css';
//neko

const CustomerData = ({ customers, onCardClick }) => {
    return (
        <div className={styles.container}>
            {customers.map((customer, index) => (
                <div key={index} className={styles.card} onClick={() => onCardClick(customer)}>
                    <img src={customer.image} alt={customer.name} className={styles.image} />
                    <h3>{customer.name}</h3>
                    <p>{customer.email}</p>
                    <p>{customer.phone}</p>
                </div>
            ))}
        </div>
    );
};

export default CustomerData;
