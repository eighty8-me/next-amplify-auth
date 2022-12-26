import React from 'react';
import { useRouter } from 'next/router';
import { Authenticator } from '@aws-amplify/ui-react';
import { getServices } from '../lib/amplifyAuthServices';
import type { NextPage } from 'next';

const Login: NextPage = () => {
  const router = useRouter();
  const redirectUrl = router.query.redirectUrl as string;
  const services = getServices(router, { signIn: redirectUrl });
  
  return <Authenticator services={services} />;
}

export default Login;
