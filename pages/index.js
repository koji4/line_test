import { useEffect, useState } from 'react';
import liff from '@line/liff';

export default function Home() {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    liff.init({ liffId: '2006104869-3VgkYXeG' }).then(() => {
      if (liff.isLoggedIn()) {
        liff.getProfile().then(profile => {
          setUserProfile(profile);
        }).catch(err => {
          console.error('Failed to get profile', err);
        });
      } else {
        liff.login();
      }
    }).catch(err => {
      console.error('LIFF initialization failed', err);
    });
  }, []);

  return (
    <div>
      <h1>Hello, LINE User!</h1>
      {userProfile ? (
        <p>Welcome, {userProfile.displayName}!</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
