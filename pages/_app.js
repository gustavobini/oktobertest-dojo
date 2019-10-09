import App from 'next/app';
import React from 'react';

import { AppWrapper } from '../components/app-wrapper';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </>
    );
  }
}
