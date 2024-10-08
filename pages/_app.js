import { useEffect } from 'react';
import '../styles/globals.css';
import '../styles/Admin.module.css'; // 必要に応じて他のCSSモジュールもインポート

const LIFF_ID = '2006108606-o0KqQrjk'; // LINE Developersで取得したLIFF IDに置き換えてください

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    (async () => {
      try {
        await window.liff.init({ liffId: LIFF_ID });
        if (!window.liff.isLoggedIn()) {
          window.liff.login();
        }
      } catch (error) {
        console.error('LIFF Initialization failed ', error);
      }
    })();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
