import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import './styles/global.scss';
import '@fontsource/permanent-marker';
import '@fontsource/bangers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
