import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './styles/index.css';
import Layout from './pages/Layout'
import Home from './pages/Home';
import Error404 from './pages/Error404';
import About from './pages/About';
import Logement from './pages/PageLogement';


// création des routes
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='Logement' element={<Logement />} />
                    <Route path='About' element={<About />} />
                    <Route path='*' element={<Error404 />} />
                </Route>
            </Routes> 
        </Router>
    </React.StrictMode>
);
