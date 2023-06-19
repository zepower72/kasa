import React from 'react'
import { Link } from "react-router-dom"
import "../styles/FicheLogement.css"

function ficheLogement({ id, cover, title }) {
//fonction ficheLogement qui prend en paramètre id, cover et title
    return (
        <div className='fiche-logement'>
            <Link to={{pathname: "/Rental",search: "?_id="+id }}>
                <img src={cover} alt={title} />
                <h3>{title}</h3>
            </Link>
        </div>
    )
}

export default ficheLogement