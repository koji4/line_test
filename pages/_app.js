import { useEffect } from 'react';
import liff from '@line/liff';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // LIFF SDKの初期化
    liff.init({ liffId: '2006104869-3VgkYXeG' }).then(() => {
      if (!liff.isLoggedIn()) {
        liff.login();
      }
    }).catch(err => {
      console.error('LIFF initialization failed', err);
    });
  }, []);

  return <Component {...pageProps} />;
}
