import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Helmet} from "react-helmet";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Mountainnest</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
</>
);
