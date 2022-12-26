import React from 'react';
import { useRouter } from 'next/router';
import type { GetServerSideProps } from 'next';

export const Header: React.FC = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push({
      pathname: '/login',
      query: {
        redirectUrl: '/home',
      }
    });
  }

  return (
    <div style={{ backgroundColor: '#b5b5b5', width: '100%', height: '88px' }}>
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button type='button' onClick={handleLogin}>ログイン</button>
      </nav>
    </div>
  );
}
