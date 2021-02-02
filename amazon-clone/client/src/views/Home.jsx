import React from 'react';
import '../style/Home.css';
import Product from '../components/Product';
import SignInTab from '../components/SignInTab';
import SliderData from '../components/SliderData';
import Slider from '../components/Slider';

const Home = props => {

    return (
        <div>
            <div className="home">
                <div className="home_container">
                    <Slider slides={SliderData}/>
                    <div className="home_row">
                        <Product
                        title="The Lean Startup, a refreshing start by Eric Ries"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={4}
                        />
                        <Product
                        title="Asus ROG Swift PG279Q 27 Gaming Monitor, 1440P WQHD (2560 x 1440), IPS, 165Hz (Supports 144Hz)"
                        price={849.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61v-rARRiIL._AC_SX425_.jpg"
                        rating={5}
                        />
                        <Product
                        title="NUBWO PS4 Xbox one Headset 7.1 Surround Sound PC USB Gaming Headset with Noise Reduction Mic, Over Ear Headphones"
                        price={30.99}
                        image="https://m.media-amazon.com/images/I/61LnVrrFyhL._AC_SX425_.jpg"
                        rating={4}
                        />
                        <SignInTab />
                    </div>
                    <div className="home_row">
                        <Product
                        title="iPhone Charger, YUNSONG 3Pack 6FT Nylon Braided Lightning Cable Charging Cord"
                        price={9.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61uCW3fM65L._AC_SX425_.jpg"
                        rating={3}
                        />
                        <Product
                        title="VAVA USB C Hub, 7-in-1 USB C Adapter for MacBook/Pro/Air (Thunderbolt 3)"
                        price={19.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51bw9yexTGL._AC_SX522_.jpg"
                        rating={5}
                        />
                        <Product
                        title="Bose QuiteComfort 35 Wireless Bluetooth Headphones, Noise-Cancelling"
                        price={199.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/41jSuUHT8eL._AC_SR400,600_.jpg"
                        rating={5}
                        />
                    </div>
                    <div className="home_row">
                        <Product
                        title="All-new Fire TV Stick with Alexa Voice Remote (includes TV controls) | HD streaming device | 2020 release"
                        price={27.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51GF9vRAnFL._AC_SX425_.jpg"
                        rating={5}
                        />
                        <Product
                        title="All-new Echo Dot (4th Gen) | Smart speaker with Alexa | Charcoal"
                        price={28.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/714Rq4k05UL._AC_SX425_.jpg"
                        rating={4}
                        />
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default Home;