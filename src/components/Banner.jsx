import React from "react";
import "../styles/Banner.css";

export default function Banner(props) {
  const { banner, text } = props;
  //L'expression {banner, text} = props est une façon concise de déclarer deux variables, banner et text,
  //et de les initialiser avec les valeurs correspondantes extraites de l'objet props.

  return (
    // return a component
    <section className="banner">
      <div className="banner__shadow"></div>
      <img src={banner} className="banner__img" alt="falaise" />
      {text && <h1>{text}</h1>}
    </section>
  );
}
