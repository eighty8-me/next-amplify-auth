import { Auth } from 'aws-amplify';
import type { NextRouter } from 'next/router';
import type { ISignUpResult } from 'amazon-cognito-identity-js';
import type { AmplifyUser } from '@aws-amplify/ui';

type FormData = {
  username: string;
  password: string;
  attributes: {
    email: string;
  };
}

type RedirectUrlType = {
  signUp?: string;
  signIn?: string;
}

type ServicesType = {
  handleSignUp: (formData: FormData) => Promise<ISignUpResult>;
  handleSignIn: (formData: FormData) => Promise<AmplifyUser>;
}

export const getServices = (router?: NextRouter, redirectUrl?: RedirectUrlType): ServicesType => {
  return {
    handleSignUp: async (formData: FormData): Promise<ISignUpResult> => {
      const { username, password, attributes } = formData;

      console.log('signup_formData', formData);

      const result = await Auth.signUp({
        username,
        password,
        attributes,
        autoSignIn: {
          enabled: true,
        },
      });

      if (router && redirectUrl && redirectUrl.signUp) {
        router.push(redirectUrl.signUp);
      }

      return result;
    },
    handleSignIn: async (formData: FormData): Promise<AmplifyUser> => {
      const { username, password, attributes } = formData;

      console.log('signin_formData', formData);

      const user = await Auth.signIn({
        username,
        password,
      });

      if (router && redirectUrl && redirectUrl.signIn) {
        router.push(redirectUrl.signIn);
      }

      return user;
    }
  }
}
