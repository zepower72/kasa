import Banner from '../components/Banner'
import Logements from '../components/Logements'
import Main from '../components/Main'

import '../styles/index.css';
import bannerHome from "../assets/banner-home.png"


function App() {
    return (
        <div>
            <Banner  banner={bannerHome} text="Chez vous, partout et ailleurs"/>
            <Main>
                <Logements />
            </Main>
            
        </div>
    );
}

export default App;
