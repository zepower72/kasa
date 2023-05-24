import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './styles/index.css';
import Layout from './pages/Layout'
import Home from './pages/Home';
import Error404 from './pages/Error404';
import About from './pages/About';
import Rental from './pages/PageLogement';


// création des routes
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    */Ajouter une structuration Router>Routes>Routec'est que l'on appelle des Outlets/*
                    <Route index element={<Home />} />
                    <Route path='/PageLogement?_id' element={<Rental />} />
                    <Route path='About' element={<About />} />
                    <Route path='*' element={<Error404 />} />
                </Route>
            </Routes> 
        </Router>
    </React.StrictMode>
);
