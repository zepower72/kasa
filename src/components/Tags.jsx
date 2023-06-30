import React from "react";
import '../styles/Tags.css'

export default function Tags(props) {
  const tags = props.tags; // Cette ligne extrait la propriété tags des props passées au composant Tags et la stocke dans une variable tags.
  return (
    <section className="tags__container">
      {tags.map((tag, index) => {
        return (
          <div className="tag" key={index + "tag"}>
            {tag}
          </div>
        );
      })}
    </section>
  );
}
/*méthode map pour itérer sur le tableau tags et générer des éléments JSX pour chaque élément du tableau :
- Cela itère sur chaque élément tag du tableau tags et exécute la logique définie dans la fonction fléchée. index représente l'index de l'élément actuel dans le tableau.
- La clé (key) est utilisée pour donner une identité unique à chaque élément généré.*/
