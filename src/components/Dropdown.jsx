import React, {useState} from 'react'
//permet de conserver l'état de l'élément (ouvert ou fermé) même si on change de page
import DownChevron from "../assets/Vector-down.png"
import UpChevron from "../assets/Vector-up.png"


//https://blog.openreplay.com/creating-a-collapsible-component-for-react/
import "../styles/Dropdown.css"
//Définition de l'état par défaut du pliable sur faux (fermé)
//Définition de la fonction qui va permettre de changer l'état du pliable (mise à jour de l'état avec setOPen)
//On utilise useState pour définir l'état du pliable
//On utilise useState pour définir la fonction qui va permettre de changer l'état du pliable

function Dropdown({title, body}) {
    const [open, setOpen] = useState(false)
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

