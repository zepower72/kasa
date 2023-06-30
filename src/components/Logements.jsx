import React from "react";
import Fiche from "./FicheLogement";
import "../styles/Logements.css";

import datas from "../datas/logements.json";
//
function Logements() {
  return (
    <div className="logements">
      {datas.map((data) => {
        return (
          <Fiche
            key={data.id}
            id={data.id}
            cover={data.cover}
            title={data.title}
          />
        );
      })}
    </div>
  );
}
export default Logements;

/*  Méthode map pour itérer sur le tableau datas et générer des éléments JSX pour chaque élément du tableau :
- datas : C'est un tableau de données sur lequel la méthode map est appelée.
- data : C'est un nom de variable utilisé pour représenter chaque élément du tableau datas à chaque itération.
- <Fiche key={data.id} id={data.id} cover={data.cover} title={data.title} /> : C'est un composant Fiche qui est généré pour chaque élément du tableau datas.
Les propriétés key, id, cover, et title sont passées à chaque instance du composant Fiche avec les valeurs correspondantes extraites de l'élément data actuel.
- key={data.id} : La prop key est utilisée pour donner une clé unique à chaque élément généré par la méthode map. 
La clé aide React à identifier les éléments de manière efficace lorsqu'ils sont mis à jour ou supprimés.
*/
