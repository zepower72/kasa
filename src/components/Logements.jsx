import React from 'react'
import Fiche from './FicheLogement'
import "../styles/Logements.css"
import "../styles/FicheLogement.css"
import datas from "../datas/logements.json"

function Logements() {

    return (
      <div className='logements'>
            {
                datas.map( data => {
                    return (
                        <Fiche key={data.id} id={data.id} cover={data.cover} title={data.title} />
                    )
                })
            }
      </div>
    )
}

export default Logements
