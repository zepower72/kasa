import React from "react";
import "../styles/Main.css";

function Main({ children }) {
  return <div className="main">{children}</div>;
}

export default Main;
//C'est une déclaration de fonction nommée Main qui accepte un objet déstructuré avec une propriété children.
//Dans le contexte de React, children fait référence au contenu enfant transmis à ce composant lorsqu'il est utilisé.
