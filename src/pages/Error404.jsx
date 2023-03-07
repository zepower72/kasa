import { Link } from 'react-router-dom'
import React from 'react'

import Main from '../components/Main'
// import { useRouteError } from "react-router-dom";
import "../styles/Error404.css"

function Error404() {
    // const error = useRouteError();
    // console.log(error)
    return (
        <div className='error404'>
            
            <Main>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas</p> 
            <Link to='/'>Retourner sur la page d'accueil</Link>
            
            </Main>
        </div>
    )
}

export default Error404;