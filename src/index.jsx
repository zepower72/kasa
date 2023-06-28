import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from "react-router-dom";

import App from './routes/App';
import './styles/index.css';

/*
Ce code crée une racine ReactDOM et utilise la méthode render pour rendre l'application React dans l'élément HTML avec l'ID "root". 
L'application est rendue à l'intérieur du composant <React.StrictMode>, ce qui active le mode strict pour effectuer des vérifications supplémentaires. 
Le composant <Router> englobe l'application et le composant <App/> est rendu à l'intérieur du <Router>, représentant le point d'entrée principal de l'application.
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>
);
