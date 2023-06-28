import React from 'react'
import DetailCollapse from "./Collapse"

import datas from "../datas/about.json"

function MapDrop() {
       return (
        <div className="dropdown-container">{
datas.map(data =>{
    return (
        <DetailCollapse key={data.id} title={data.title} body={data.body}/>
    )
})
}
        </div>
    )
}

export default MapDrop