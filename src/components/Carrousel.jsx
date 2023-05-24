import {useState}  from 'react'

import LeftChevron from "../assets/Vector-left.png"
import RightChevron  from "../assets/Vector-right.png"

export default function Carrousel({pictures}) {
    const [imgCarrousel, setImgCarrousel] = useState(0)
    const activeCarousel = pictures.length > 1

    function previousImg() {
      imgCarrousel <= 0 ? setImgCarrousel(pictures.length -1): setImgCarrousel(imgCarrousel - 1)
    }
    function nextImg () {
      (imgCarrousel +1) < pictures.length ? setImgCarrousel(imgCarrousel +1): setImgCarrousel(0)
  }
  
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