import React from "react";
import Star from "../assets/star_rate-24px empty.svg";
import Starfull from "../assets/star_rate-24px full.svg";

export default function Rating({ rating }) {
  const range = [1, 2, 3, 4, 5];

  return (
    <section className="rating">
      {range.map((number) =>
        rating >= number ? (
          <img src={Starfull} className="star" alt="star" key={number} />
        ) : (
          <img
            src={Star}
            className="starEmpty"
            alt="star empty"
            key={number + "star"}
          />
        )
      )}
    </section>
  );
}

/* const range = [1, 2, 3, 4, 5]: Cela crée un tableau range contenant les nombres de 1 à 5. 
Ce tableau est utilisé pour itérer et générer les éléments JSX correspondant à chaque étoile de notation.*/
/* Méthode map pour itérer sur le tableau range et générer des éléments JSX pour chaque élément du tableau :
- range.map((number) => ...): Cela itère   sur chaque élément number du tableau range et exécute la logique définie dans la fonction fléchée.
- Puis condition ternaire qui vérifie si la rating est supérieure ou égale à number 
=> Si c'est le cas, cela signifie que cette étoile doit être remplie (pleine), donc un composant <Star> avec la classe CSS 'star' est rend
=> Sinon, si rating est inférieure à number, cela signifie que cette étoile doit être vide, donc un composant <Star> avec la classe CSS 'starEmpty' est rendu
 La clé (key) est utilisée pour donner une identité unique à chaque étoile générée.*/
