
import {Link} from "react-router-dom"
import logo from '../assets/logo.png'
import '../styles/Header.css'

function header() {
	return (
        <div className='header'>
            <img src={logo} alt='Logo du site Kasa' />
            <nav>
                <ul>
                    <Link to="/"><li>Accueil</li></Link>
                    <Link to="/about"><li>A Propos</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default header