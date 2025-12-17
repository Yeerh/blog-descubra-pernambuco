import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "@fontsource/noto-serif/400.css";
import "@fontsource/noto-serif/700.css";
import './index.css'
import "aos/dist/aos.css"; // ← Agora funciona após o npm install

import AOS from 'aos';

AOS.init({
  duration: 800,
  once: true,
  easing: 'ease-in-out',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)