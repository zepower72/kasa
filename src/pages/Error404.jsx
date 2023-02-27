
import React from 'react'
import Header from '../components/Header'
// import { useRouteError } from "react-router-dom";
import "../styles/Error404.css"
import "../styles/Header.css"


function Error404() {
    // const error = useRouteError();
    // console.log(error)
    return (
        <div className='error404'>
            <Header/> 
            <h1>404</h1>  
            <p>Oups! La page que vous demandez n'existe pas</p> 
             
        </div>
    )
}

export default Error404;