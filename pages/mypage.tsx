import React from 'react';
import { useRouter } from 'next/router';
import { Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { getServices } from '../lib/amplifyAuthServices';
import type { NextPage, GetServerSideProps } from 'next';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';

type ServerPropsType = {
  hoge: string;
}
type PropsType = ServerPropsType & WithAuthenticatorProps;

const MyPage: NextPage<PropsType> = () => {
  const router = useRouter();
  const services = getServices(router, { signIn: '/mypage' });

  const handleSignOut = () => {
    Auth.signOut();
    router.replace('/');
  }

  return (
    <Authenticator services={services}>
      <>
        <h1>マイページ</h1>
        <p>
          <a href="/">トップへ</a>
        </p>
        <button onClick={handleSignOut}>サインアウト</button>
      </>
    </Authenticator>
  )
}

export default MyPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      hoge: 'これはホゲです',
    },
  };
}