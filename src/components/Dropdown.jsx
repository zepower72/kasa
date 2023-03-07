import React, {useState} from 'react'
//permet de conserver l'état de l'élément (ouvert ou fermé) même si on change de page
import DownChevron from "../assets/Vector-down.png"
import UpChevron from "../assets/Vector-up.png"


//https://blog.openreplay.com/creating-a-collapsible-component-for-react/
import "../styles/Dropdown.css"

function Dropdown({title, body}) {
    const [open, setOpen] = useState(false)
    //open est l'état de l'élément actuel (ouvert ou fermé)
    //setOpen est la fonction qui permet de changer l'état de l'élément
    //useState(false) permet de définir l'état de l'élément à false (fermé)
//si open est true, on affiche le chevron vers le haut, sinon on affiche le chevron vers le bas
//si open est true, on affiche le body, sinon on affiche rien
    return (
        <div className="dropdown">
            <div className="dropdown__header" onClick={() => setOpen(!open)}>
                <h2>{title}</h2>
                <img src={open ? UpChevron : DownChevron} alt="chevron" />
            </div>
            {open && <p className="dropdown__body">{body}</p>}
            
        </div>
    )
}

export default Dropdown

