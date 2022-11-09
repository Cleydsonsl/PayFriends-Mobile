import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SignIn } from './src/screens/SignIn';

import theme from './src/global/styles/theme';

export function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <SignIn/>
    </ThemeProvider>
  )
}
