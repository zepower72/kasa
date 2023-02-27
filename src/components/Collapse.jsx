import React from 'react'
import {Collapse} from 'react-collapse';
//https://blog.openreplay.com/creating-a-collapsible-component-for-react/
import "../styles/Collapse.css"

function CreateCollapse({ titre, description }) {
  return (
    <Collapse isOpened={true || false}>
        <div>
            {titre}
            {/* {description} */}
        </div>
    </Collapse>
  )
}

export default CreateCollapse
