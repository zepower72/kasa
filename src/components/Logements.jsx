import React from 'react'
import Fiche from './FicheLogement'
import "../styles/Logements.css"

import datas from "../datas/logements.json"
//
function Logements() { // Logements is a component

    return ( // return a component
      <div className='logements'> 
            {
                datas.map( data => { // data is an object
                    return ( // return a component
                        <Fiche key={data.id} id={data.id} cover={data.cover} title={data.title} />
                    )
                })
            }
      </div>
    )
}

export default Logements
