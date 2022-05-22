import React from 'react';
import './Home.css';
import About from '../about/About';

import back1 from "../../assets/back1.jpg"
import Card from '../../components/card/Card';
import Footer from '../../components/footer/Footer';

function Home() {
    return (
        <>
            <div>
                <img src={back1} style={{ height: "500px", width: '100%' }} class="img-fluid" alt="Responsive image" />


            </div>
            <Card />
            <Footer />
        </>

    );
}

export default Home;