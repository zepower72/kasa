// import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Logements from '../components/Logements'
import Footer from '../components/Footer'
import Main from '../components/Main'

import '../styles/index.css';
import bannerHome from "../assets/banner-home.png"

function App() {
    return (
        <div>
            <Main>
                <Header />
                <Banner  banner={bannerHome} text="Chez vous, partout et ailleurs"/>
                <Logements />
            </Main>
            <Footer />
        </div>
    );
}

export default App;
