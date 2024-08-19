import React from 'react';
import styles from '../styles/CustomerDetail.module.css';

const CustomerDetail = ({ customer, onClose }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <img src={customer.image} alt={customer.name} className={styles.image} />
                <h2>{customer.name}</h2>
                <div className={styles.profileGrid}>
                    <div className={styles.profileItem}>
                        <strong>年齢:</strong>
                        <p>{customer.age}</p>
                    </div>
                    <div className={styles.profileItem}>
                        <strong>住所:</strong>
                        <p>{customer.address}</p>
                    </div>
                    <div className={styles.profileItem}>
                        <strong>メール:</strong>
                        <p>{customer.email}</p>
                    </div>
                    <div className={styles.profileItem}>
                        <strong>TikTok ID:</strong>
                        <p>{customer.tiktokId}</p>
                    </div>
                    <div className={styles.profileItem}>
                        <strong>Instagram ID:</strong>
                        <p>{customer.instagramId}</p>
                    </div>
                    <div className={styles.profileItem}>
                        <strong>X ID:</strong>
                        <p>{customer.xId}</p>
                    </div>
                    <div className={styles.profileItem}>
                        <strong>バスト:</strong>
                        <p>{customer.bust} cm</p>
                    </div>
                    <div className={styles.profileItem}>
                        <strong>ウエスト:</strong>
                        <p>{customer.waist} cm</p>
                    </div>
                    <div className={styles.profileItem}>
                        <strong>ヒップ:</strong>
                        <p>{customer.hip} cm</p>
                    </div>
                    <div className={styles.profileItem}>
                        <strong>身長:</strong>
                        <p>{customer.height} cm</p>
                    </div>
                    <div className={styles.profileItem}>
                        <strong>体重:</strong>
                        <p>{customer.weight} kg</p>
                    </div>
                    <div className={styles.profileItem}>
                        <strong>クラス:</strong>
                        <p>{customer.classType}</p>
                    </div>
                    <div className={styles.profileItem}>
                        <strong>希望職種:</strong>
                        <p>{customer.desiredJob}</p>
                    </div>
                    <div className={styles.profileItem}>
                        <strong>希望報酬:</strong>
                        <p>{customer.desiredSalary}</p>
                    </div>
                    <div className={styles.profileItem}>
                        <strong>メモ:</strong>
                        <p>{customer.notes}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerDetail;
