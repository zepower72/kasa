import React from 'react'
import Tag from '../components/Tag'
import Host from '../components/Host'
import Slideshow from '../components/Slideshow'
import Dropdown from '../components/Dropdown'
import Main from '../components/Main'
import '../styles/PageLogement.css'


function x() {
    // const error = useRouteError();
    // console.log(error)
    return (
        <div className='detail'>
          
            <Main>  
            <Slideshow/>
            <Dropdown/>
            </Main>

             
        </div>
    )
}

export default x;
