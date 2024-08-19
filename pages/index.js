import React, { useState } from 'react';
import CustomerData from '../components/CustomerData';
import CustomerDetail from '../components/CustomerDetail'; // 詳細画面コンポーネントをインポート
import styles from '../styles/Admin.module.css';

const customers = [
    { name: '佐藤 花子', age: 25, address: '東京都', email: 'hanako@example.com', tiktokId: 'hanako_tiktok', instagramId: 'hanako_insta', xId: 'hanako_xid', bust: 85, waist: 60, hip: 90, height: 165, weight: 50, classType: 'S', desiredJob: 'クラブ', desiredSalary: '50万', notes: '特になし', image: '/images/hanako.png' },
    { name: '田中 美香', age: 30, address: '大阪府', email: 'mika@example.com', tiktokId: 'mika_tiktok', instagramId: 'mika_insta', xId: 'mika_xid', bust: 88, waist: 62, hip: 92, height: 160, weight: 52, classType: 'M', desiredJob: 'モデル', desiredSalary: '40万', notes: '要相談', image: '/images/mika.png' },
    { name: '鈴木 由美', age: 28, address: '名古屋市', email: 'yumi@example.com', tiktokId: 'yumi_tiktok', instagramId: 'yumi_insta', xId: 'yumi_xid', bust: 90, waist: 64, hip: 94, height: 168, weight: 54, classType: 'L', desiredJob: '女優', desiredSalary: '60万', notes: 'スカウト待ち', image: '/images/yumi.png' },
    { name: '斎藤 春香', age: 26, address: '福岡市', email: 'haruka@example.com', tiktokId: 'haruka_tiktok', instagramId: 'haruka_insta', xId: 'haruka_xid', bust: 87, waist: 63, hip: 89, height: 162, weight: 51, classType: 'S', desiredJob: 'イベント', desiredSalary: '45万', notes: '経験豊富', image: '/images/haruka.png' },
    { name: '渡辺 優子', age: 27, address: '札幌市', email: 'yuko@example.com', tiktokId: 'yuko_tiktok', instagramId: 'yuko_insta', xId: 'yuko_xid', bust: 86, waist: 61, hip: 88, height: 164, weight: 53, classType: 'M', desiredJob: '俳優', desiredSalary: '55万', notes: '要面談', image: '/images/yuko.png' },
    // さらに顧客を追加できます
];

export default function Home() {
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const handleCardClick = (customer) => {
        setSelectedCustomer(customer);
    };

    const handleCloseDetail = () => {
        setSelectedCustomer(null);
    };

    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <h2>管理パネル</h2>
                <nav>
                    <ul>
                        <li>ダッシュボード</li>
                        <li>タレントリスト</li>
                        <li>設定</li>
                    </ul>
                </nav>
            </aside>
            <main className={styles.main}>
                <header className={styles.header}>
                    <h1>タレントリスト</h1>
                </header>
                <section className={styles.content}>
                    {selectedCustomer ? (
                        <CustomerDetail customer={selectedCustomer} onClose={handleCloseDetail} />
                    ) : (
                        <CustomerData customers={customers} onCardClick={handleCardClick} />
                    )}
                </section>
            </main>
        </div>
    );
}
