import React from 'react'
//permet de conserver l'état de l'élément (ouvert ou fermé) même si on change de page
import DetailDrop from "./Dropdown"
import "../styles/Dropdownmap.css"
import datas from "../datas/about.json"

function MapDrop() {
       return (
        <div className="dropdown">{
datas.map(data =>{
    return (
        <DetailDrop key={data.id} title={data.title} body={data.body}/>
    )
})
}
        </div>
    )
}

export default MapDrop
            

