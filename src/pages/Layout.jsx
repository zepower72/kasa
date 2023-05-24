import {Outlet} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/Layout.css';

/*Un layoutsert à fournir une structure visuelle commune 
(comme une barre de navigation, un pied de page, etc.) à plusieurs pages ou composants dans une application web.
Tout contenu placé entre les balises est considéré comme un "enfant" du composant Layout, et est passé à la fonction Layout comme argument children*/

const Layout = () => {
    return (
        <div className='layout'>
        <Header />
        <Outlet />
        <Footer/>
        </div>
    );
    };

export default Layout;
