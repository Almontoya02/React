//Aqui se indice de todo el proyecto
//es como el Main
//ayuda a arrancar toda la app
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//se hace el renderizados
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
