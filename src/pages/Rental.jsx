import React from "react";

//permet de récupérer l'URL du paramètre id
import { useParams } from "react-router-dom";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Importation des composants enfants
import Main from "../components/Main";
import Dropdown from "../components/Collapse";
import HostName from "../components/HostName";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Carrousel from "../components/Carrousel";
import Tags from "../components/Tags";

// Importation des données concernant les appartments
import dataRent from "../datas/logements.json";
import "../styles/Rental.css";

export default function Rental() {
  // On récupere l'id dans la constante "id"
  const { id } = useParams();
  // On mappe "logements.json" pour récup l'appartement (et ses caractéristiques) qui a pour id celui renseigné dans les paramètres d'url
  const picked = dataRent.find((rental) => rental.id === id);

  // Destructuration :  permet directement de déclarer une variable et de lui assigner la valeur d'une propriété d'un objet
  const {
    title,
    location,
    rating,
    host,
    equipments,
    tags,
    description,
    pictures,
  } = picked;
  const navigate = useNavigate();

  useEffect(() => {
    if (!picked) {
      return navigate("/*");
    }
  }, [navigate, picked]);

  let firstName;
  let lastName;

  if (picked) {
    const arrayHost = picked.host.name.split(" ");
    firstName = arrayHost.shift();
    lastName = arrayHost.join(" ");
  }
  /*La méthode split(" ")découpe la chaîne de caractères nameen un tableau de sous-chaînes, en utilisant l'espace comme séparateur. Par exemple, si rent.host.nameest "John Doe", alors arrayHostsera un tableau contenant ["John", "Doe"].
Ensuite, la ligne firstName = arrayHost.shift()utilise la méthode shift()sur le tableau arrayHostpour extraire et supprimer le premier élément du tableau, et le stocker dans la variable firstName.
La méthode shift()retourne l'élément supprimé, donc firstNamecontiendra la première partie du nom de l'hôte (dans l'exemple précédent, firstNamesera "John").
Enfin, la ligne lastName = arrayHost.join(" ")utilise la méthode join(" ")sur le tableau arrayHostpour concaténer tous les éléments restants du tableau en une seule chaîne de caractères, séparés par un espace. Le résultat est stocké dans la variable lastName.
Ainsi, si rentest défini et non faux, le code extraira le prénom et le nom de l'hôte à partir de la propriété namede l'objet rent.hostet les stockera dans les variables firstNameet lastNamerespectivement.*/

  return (
    <Main>
      <section className="carrousel">
        <Carrousel pictures={pictures} />
      </section>
      <section className="rental">
        <section className="rental__section">
          <div className="rental__presentation">
            <h1>{title}</h1>
            <p className="rental__location">{location}</p>
          </div>
          <div className="rental__tags">
            <Tags tags={tags} />
          </div>
        </section>

        <section className="rental__hosting">
          <div className="rental__host">
            <HostName firstName={firstName} lastName={lastName} />
            <Host name={host.name} profil={host.picture} />
          </div>
          <div className="rental__rating">
            <Rating rating={rating} />
          </div>
        </section>
      </section>

      <section className="dropdown__container">
        <div className="DD__header">
          <Dropdown title="Description" body={description} />
        </div>
        <div className="DD__header">
          <Dropdown
            title="Equipements"
            body={equipments.map((equipment, index) => (
              <li className="equipmentsList" key={index}>
                {equipment}
              </li>
            ))}
          />
        </div>
      </section>
    </Main>
  );
}
