import type { AppProps /*, AppContext */ } from 'next/app'
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import '../styles/globals.css'
import theme from '../src/theme';


const SyomBeta = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default SyomBeta
