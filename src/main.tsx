import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "@fontsource/bbh-sans-hegarty/400.css"; // Weight normal (400)
import "@fontsource/noto-serif/400.css"; // Normal
import "@fontsource/noto-serif/700.css"; // Bold (para títulos fortes)
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <App />
  </>
)