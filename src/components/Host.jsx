import React from "react";
import '../styles/Host.css'

//. La fonction Host accepte un objet en tant qu'argument, et à l'intérieur de la fonction, on accède aux propriétés name et profil de cet objet.
export default function Host({ name, profil }) {
  return <img src={profil} className="hostPicture" alt={`profile of${name}`} />;
}
