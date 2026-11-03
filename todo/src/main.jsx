import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ToastProvider from './components/Toast.jsx';

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <ToastProvider>
         <App />
      </ToastProvider>
   </BrowserRouter>,
)
