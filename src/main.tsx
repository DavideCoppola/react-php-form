import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import FormStore from './store/FormStore.tsx';

const formStore = new FormStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App formStore={formStore}/>
  </React.StrictMode>,
)
