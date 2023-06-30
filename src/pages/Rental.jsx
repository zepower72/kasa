import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Main from "../components/Main";
import Dropdown from "../components/Collapse";
import HostName from "../components/HostName";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Carrousel from "../components/Carrousel";
import Tags from "../components/Tags";

import dataRent from "../datas/logements.json";
import "../styles/Rental.css";

export default function Rental() {
  const { id } = useParams();
  //permet de récupérer l'URL du paramètre id
  const picked = dataRent.find((rental) => rental.id === id);
  const navigate = useNavigate();

  //const [PickedRent, setPickedRent] = useState();

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
  const equipments = picked.equipments;
  const EquipmentsList = equipments.map((item, index) => (
    <li key={index} className="EquipmentsList">
      {item}
    </li>
  ));

  return (
    <div className="rental__container">
      <Main>
        <div>
          <Carrousel pictures={picked.pictures} />
        </div>

        <section className="rental__presentation">
          <div className="rental__title">
            <h1>{picked.title}</h1>
            <p className="rental__location">{picked.location}</p>
          </div>

          <div className="rental__host">
            <HostName firstName={firstName} lastName={lastName} />
            <Host name={picked.host.name} profil={picked.host.picture} />
          </div>
        </section>

        <div className="rental__info">
          <Tags tags={picked.tags} />
          <Rating rating={picked.rating} />
        </div>

        <section className="dropdown__container">
          <div className="DD__title">

            <Dropdown body={picked.description} />
          </div>

          <div className="DD__title">
            <Dropdown body={EquipmentsList} />
          </div>
        </section>
        
      </Main>
    </div>
  );
}
