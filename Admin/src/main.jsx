import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import "./index.css";
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App />
    
    
  </React.StrictMode>
);
