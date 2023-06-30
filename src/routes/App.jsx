import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import About from "../pages/About";
import Rental from "../pages/Rental";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Rental/:id" element={<Rental />} />
          <Route path="/About" element={<About />} />
          <Route path="/*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}
/*
<>...</> : C'est une syntaxe de fragment vide qui permet de regrouper plusieurs éléments JSX sans ajouter d'élément DOM supplémentaire.
 <Routes> : C'est un composant de React Router qui représente la collection de toutes les routes définies dans l'application.
<Route path="/" element={<Layout />}> C'est la première route définie avec l'attribut path qui spécifie le chemin de l'URL à matcher. 
Dans ce cas, elle correspond à l'URL racine "/". Le composant <Layout/> sera rendu lorsque cette route correspondra.
<Route path="/" element={<Home/>}/> : C'est une route enfant de la première route définie. Elle est définie avec le même chemin path que la route parente, 
ce qui signifie qu'elle correspondra également à l'URL racine "/". Le composant <Home/> sera rendu lorsque cette route correspondra.
idem pour les autres routes
*/
