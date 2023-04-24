import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './components/App/App';
// import { ThemeProvider } from '@emotion/react';
// import { theme } from './components/constants/theme';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
