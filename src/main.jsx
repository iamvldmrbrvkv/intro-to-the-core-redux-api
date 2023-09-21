import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));

// Store State Change Listener
const render = () => {
  root.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch} />
    </React.StrictMode>
  );
}

render();

// Subscribe to state changes
store.subscribe(render);