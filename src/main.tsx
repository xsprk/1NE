import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initTheme } from "./theme";
initTheme();
import App from './App.tsx';
import { LanguageProvider } from './contexts/LanguageContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);
