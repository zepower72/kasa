import {useState}  from 'react'

import LeftChevron from "../assets/Vector-left.png"
import RightChevron  from "../assets/Vector-right.png"

export default function Carrousel({pictures}) {
    const [imgCarrousel, setImgCarrousel] = useState(0)
    /* [imgCarrousel, setImgCarrousel]: C'est une déstructuration d'un tableau. 
    Cela signifie que nous déclarons deux variables (imgCarrousel et setImgCarrousel) qui prendront les valeurs correspondantes du tableau.
    useState(0): C'est un hook d'état (state) dans React. Le hook useState permet de déclarer une variable d'état et de lui attribuer une valeur initiale. 
    Dans cet exemple, la valeur initiale est 0.
     L'utilisation de setImgCarrousel permet de changer la valeur de imgCarrousel par la suite.*/
    const activeCarousel = pictures.length > 1
    /* C'est une condition logique qui vérifie si la longueur (nombre d'éléments) de l'array pictures est supérieure à 1. 
    La propriété length d'un tableau (pictures dans ce cas) renvoie le nombre d'éléments qu'il contient.
    Cette déclaration est souvent utilisée pour déterminer si le carrousel doit être actif ou non en fonction du nombre d'éléments dans pictures. 
    Par exemple, si pictures contient plusieurs images, activeCarousel sera vrai, ce qui peut être utilisé pour afficher ou masquer le carrousel 
    dans votre application en fonction de cette valeur.*/

    function previousImg() {
      imgCarrousel <= 0 ? setImgCarrousel(pictures.length -1): setImgCarrousel(imgCarrousel - 1)
    }
    /* imgCarrousel <= 0 ?: C'est une condition ternaire qui vérifie si l'index de l'image actuelle (imgCarrousel) est inférieur ou égal à 0. 
    Si c'est le cas, cela signifie que nous sommes déjà à la première image du carrousel.*/
    /* setImgCarrousel(pictures.length - 1): Si l'index de l'image actuelle est inférieur ou égal à 0, la fonction setImgCarrousel est appelée avec l'index de la dernière image (pictures.length - 1). 
    Cela permet de faire une boucle dans le carrousel, de sorte que si l'utilisateur est sur la première image et clique sur "précédent", il sera redirigé vers la dernière image du carrousel. */
    /* : setImgCarrousel(imgCarrousel - 1): Si l'index de l'image actuelle n'est pas inférieur ou égal à 0, cela signifie que nous ne sommes pas à la première image. 
    Dans ce cas, la fonction setImgCarrousel est appelée avec l'index précédent (imgCarrousel - 1), ce qui permet de passer à l'image précédente dans le carrousel.*/

    function nextImg () {
      (imgCarrousel +1) < pictures.length ? setImgCarrousel(imgCarrousel +1): setImgCarrousel(0)
  }
  /* (imgCarrousel + 1) < pictures.length ? : C'est une condition ternaire qui vérifie si l'index de l'image actuelle (imgCarrousel + 1) est inférieur à la longueur de l'array pictures. 
  Si c'est le cas, cela signifie qu'il y a une image suivante disponible.*/
  /* setImgCarrousel(imgCarrousel + 1) : Si l'index de l'image actuelle plus un (imgCarrousel + 1) est inférieur à la longueur de l'array pictures, la fonction setImgCarrousel est appelée avec l'index de l'image suivante (imgCarrousel + 1). 
  Cela permet de passer à l'image suivante dans le carrousel.*/
/* : setImgCarrousel(0) : Si l'index de l'image actuelle plus un (imgCarrousel + 1) dépasse ou est égal à la longueur de l'array pictures, cela signifie que nous avons atteint la dernière image du carrousel. 
Dans ce cas, la fonction setImgCarrousel est appelée avec l'index 0, ce qui permet de revenir à la première image du carrousel.*/
/* En résumé, la fonction nextImg() permet de passer à l'image suivante dans le carrousel en mettant à jour la valeur de imgCarrousel en fonction de l'index actuel et des images disponibles. 
Si l'index atteint la fin du carrousel, la fonction réinitialise l'index à 0 pour créer une boucle dans le carrousel.*/

  return (
    <section className='carrousel'>
      <img src={pictures[imgCarrousel]} alt={pictures[imgCarrousel].split("/").slice(-1)}/>
      { activeCarousel && 
        <>
          <LeftChevron onClick={ previousImg } className='left' alt="précedent"/> 
          <RightChevron onClick={ nextImg } className='right' alt="suivant"/>
          <p className='carrousel__page'>{imgCarrousel + 1} / {pictures.length}</p>
        </> }
    </section>
    
  )
}