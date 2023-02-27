// import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Logements from '../components/Logements'
import Footer from '../components/Footer'
import Main from '../components/Main'

import '../styles/index.css';

function App() {
    return (
        <div>
            <Main>
                <Header />
                <Banner />
                <Logements />
            </Main>
            <Footer />
        </div>
    );
}

export default App;
