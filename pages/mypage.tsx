import React from 'react';
import { useRouter } from 'next/router';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import type { NextPage, GetServerSideProps } from 'next';
import type { AuthEventData } from '@aws-amplify/ui';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';

type ServerPropsType = {
  hoge: string;
}
type PropsType = ServerPropsType & WithAuthenticatorProps;

const MyPage: NextPage<PropsType> = (props) => {
  const router = useRouter();

  const handleSignOut = (signOut: ((data?: AuthEventData | undefined) => void) | undefined) => {
    if (!signOut) {
      return;
    }
    signOut();

    router.replace('/');
  }

  return (
    <div>
      <h1>マイページ</h1>
      <p>
        <a href="/">トップへ</a>
      </p>
      <p>
        <button onClick={() => handleSignOut(props.signOut)}>サインアウト</button>
      </p>
    </div>
  )
}

export default withAuthenticator(MyPage);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      hoge: 'これはホゲです',
    },
  };
}