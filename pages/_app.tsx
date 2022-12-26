import { Amplify, I18n } from 'aws-amplify';
import { translations } from '@aws-amplify/ui';
import awsconfig from '../src/aws-exports';
import '@aws-amplify/ui-react/styles.css';

import '../styles/globals.css'
import type { AppProps } from 'next/app'

Amplify.configure(awsconfig);
I18n.putVocabularies(translations);
I18n.setLanguage('ja');

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
