import React from "react";
import { Link } from "react-router-dom";
import "../styles/FicheLogement.css";

function ficheLogement({ id, cover, title }) {
  //fonction ficheLogement qui prend en paramètre id, cover et title
  /* crée un lien vers la page "/Rental" avec un paramètre de recherche _id qui est défini avec la valeur de la variable id. 
Lorsque ce lien est cliqué, l'URL sera mise à jour en conséquence et l'utilisateur sera dirigé vers la page de destination avec les paramètres de recherche appropriés.*/
  //search: "?_id=" + id : Cela spécifie les paramètres de recherche à ajouter à l'URL. Dans ce cas, le paramètre de recherche est "_id" avec la valeur id.
  //Le symbole "+" est utilisé pour concaténer la chaîne de caractères du paramètre id à la chaîne de recherche.

  return (
    <div className="fiche-logement">
      <Link to={{ pathname: "/Rental/" + id }}>
        <img src={cover} alt={title} />
        <h3>{title}</h3>
      </Link>
    </div>
  );
}

export default ficheLogement;
