import React from 'react'
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import Dropdown from "../components/Collapse"
import HostName from "../components/HostName"
import Host  from "../components/Host"
import Rating from "../components/Rating"
import Carrousel from "../components/Carrousel"
import Tags from "../components/Tags"

import dataRent from "../datas/logements.json"
import '../styles/Rental.css'

export default async function Rental() {
    const {id} = useParams()
    //permet de récupérer l'URL du paramètre id

    // Vérification si la variable "id" contient une valeur
if (id) {
   
    console.log("ID est présent dans la variable 'id'.");
    } else {
           
    console.log("La variable 'id' est vide ou n'a pas été définie.");
    }
    const rent = dataRent.find(rental => rental.id === id.slice(1))
/* La méthode find est utilisée pour rechercher un élément spécifique dans un tableau et renvoie la première occurrence qui satisfait une condition donnée.*/
/*Le paramètre de find est une fonction fléchée : rental => rental.id === id.slice(1). 
Cette fonction est utilisée pour vérifier si chaque élément rental du tableau dataRent correspond à la condition donnée.*/
/* Dans cette condition, rental.id fait référence à la propriété id de chaque élément rental, et id.slice(1)est une opération qui extrait une partie de la chaîne 
de caractères id. La méthode slice est utilisée ici pour obtenir tous les caractères id à partir de l'indice 1 jusqu'à la fin de la chaîne.*/
/*Ainsi, la condition rental.id === id.slice(1)rendue si la propriété id de chaque élément rental est égale à la chaîne de caractères obtenue en enlevant 
le premier caractère de id. Si une correspondance est trouvée, find renverra cet élément rental.
En conclusion, cette ligne de code recherche dans le tableau dataRent un élément dont la propriété idcorrespond à une partie spécifique de la variable id
(à partir du deuxième caractère). Le résultat est stocké dans la constante rent.*/

    const navigate = useNavigate() 
    /* La première ligne déclare une constante appelée navigateen utilisant le hook useNavigate. useNavigateest un crochet de routage fourni par React Router. 
    Il renvoie une fonction navigatequi peut être utilisée pour effectuer des transitions de page dans une application React.
    Ensuite, il y a l'utilisation du crochet useEffect. useEffectest un crochet de gestion des effets secondaires dans les composants React. 
    Il permet d'exécuter le code en réponse aux changements dans certaines dépendances.*/
    useEffect(() => 
    { if (!rent) 
        { return navigate("/*") }
    },[navigate, rent])
    //Dans ce cas, la fonction fournie à useEffectsera exécutée chaque fois que les dépendances s'imposeront, c'est-à-dire [navigate, rent], changeront.
    /*À l'intérieur de la fonction de useEffect, il y a une condition : if (!rent) { return navigate("/*") }. 
    /*Si rent est renvoyé à false ou null, cela signifie qu'aucun emplacement n'a été trouvé (peut-être à partir de la ligne de code que nous avons évoquée précédemment). 
    Dans ce cas, la fonction navigate est appelée avec l'argument "/*". 
    Cela désignera une transition de page pour rediriger l'utilisateur vers la route "/*"(généralement utilisée pour une page d'erreur ou une page de redirection par défaut).*/


    let firstName
    let lastName

    if (rent)  {
        const arrayHost = rent.host.name.split(" ")
        firstName = arrayHost.shift()
        lastName = arrayHost.join(" ")
/*La méthode split(" ")découpe la chaîne de caractères nameen un tableau de sous-chaînes, en utilisant l'espace comme séparateur. Par exemple, si rent.host.nameest "John Doe", alors arrayHostsera un tableau contenant ["John", "Doe"].
Ensuite, la ligne firstName = arrayHost.shift()utilise la méthode shift()sur le tableau arrayHostpour extraire et supprimer le premier élément du tableau, et le stocker dans la variable firstName.
La méthode shift()retourne l'élément supprimé, donc firstNamecontiendra la première partie du nom de l'hôte (dans l'exemple précédent, firstNamesera "John").
Enfin, la ligne lastName = arrayHost.join(" ")utilise la méthode join(" ")sur le tableau arrayHostpour concaténer tous les éléments restants du tableau en une seule chaîne de caractères, séparés par un espace. Le résultat est stocké dans la variable lastName.
Ainsi, si rentest défini et non faux, le code extraira le prénom et le nom de l'hôte à partir de la propriété namede l'objet rent.hostet les stockera dans les variables firstNameet lastNamerespectivement.*/
        return (
            <main className="rental__container">
                <Carrousel pictures={rent.pictures}/>

                <div className="rental__presentation">
                    <h1>{rent.title}</h1>
                    <p className="rental__location">{rent.location}</p>
                </div>

                <section className='host'>
                    <HostName firstName={firstName} lastName={lastName}/>
                    <Host name={rent.host.name} profil ={rent.host.picture}/>
                </section>

                <Rating rating={rent.rating}/>
            
                <Tags tags={rent.tags}/>

                <section className="dropdown__container">
                    <Dropdown title="Description" >
                        <p className="dropdown__body">{rent.description}</p>
                    </Dropdown>
                    <Dropdown title="Équipements" >
                        <ul className="dropdown__body" >
                            { rent.equipments.map((item, index) => 
                                <li key={ index } className="dropdown__body__item">{ item }</li>) 
                            }
                        </ul>
                    </Dropdown>
                </section> 
                
            </main>
        )
    }
}
