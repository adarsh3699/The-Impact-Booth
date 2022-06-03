import React from 'react';
import Bar from './components/Bar';
import BlogBar from './components/BlogBar';
import { Slide } from 'react-slideshow-image';

import './css/App.css';
import 'react-slideshow-image/dist/styles.css'

import blogImg1 from "./img/blogImg1.jpg"
import blogImg2 from "./img/blogImg2.jpg"
import blogImg3 from "./img/blogImg3.jpg"
import blogImg4 from "./img/blogImg4.jpg"
import calendarIcon from "./img/calendar.png"

const blogs = [
    { img: blogImg1, tilte: "LIEFDE", ques: "Waarom zou je trouwen?", date: "juli 27, 2021" },
    { img: blogImg2, tilte: "RELATIES", ques: "Grenzen aangeven in een liefdesrelatie", date: "juni 25, 2021" },
    { img: blogImg3, tilte: "PERSOONLIJKE ONTWIKKELING", ques: "Hoe ga je om met vervelende privévragen?", date: "mei 23, 2021" },
    { img: blogImg4, tilte: "LIEFDE,RELATIES", ques: "Bedank je ex(en) voor de waardevolle lessen", date: "april 24, 2021" },

]

const Slider = [
    { text: "Het coaching traject was confronterend en intrigerend.Ik zag al gauw dat veel emoties naar de oppervlakte kwamen, emoties die ik jarenlang had weggestopt. Ik heb de nodige handvatten meegekregen en kreeg de ruimte om op zelfonderzoek te gaan. De gesprekken heb ik als prettig ervaren, het gevoel dat ik er mag zijn deed me goed. De blokkades waar ik tegenaan liep zijn deels overwonnen en ik weet dat ik nog een weg te gaan heb, maar ik heb er alle vertrouwen in dat het goed komt. Het is zeker de moeite waard om Rani te consulteren.", name: "Viola" },
    { text: "Ik wil je hartelijk bedanken voor de warme gesprekken. Je hebt me waardevolle spiegels laten zien, thema’s die ik jarenlang onderdrukt had. Je hebt passie voor de mens en je hebt mij handvatten meegegeven van zeer hoog niveau! Thanks.", name: "Danny" },
    { text: "Rani is een toegewijde coach met het hart op de juiste plaats. Ik heb meer inzicht gekregen in mezelf en mijn partner en we hebben nu een betere verstandhouding. Rani komt tot de kern en is tegelijkertijd gericht op de doelstelling. De directe aanpak van Rani heeft er voor gezorgd dat ik mijn korte termijn doelen heb behaald. Ik vind het fijn om met Rani te sparren over mijn toekomst plannen. Ik beveel haar van harte aan als coach. ", name: "Yasmin" }
]

function App() {

    return (
        <div id='app'>
            <Bar />
            <div id='backgroundImg'></div>
            <div id='blogs'>
                <div id='blogsTitle'>Blogs</div>
                <div id='redTitle'>
                    <div>
                        online relatietherapie
                    </div>
                    <div id='border'></div>
                </div>
                <div id='Effectieve'>Effectieve, betaalbare relatietherapie om je leven, relatie of huwelijk te verbeteren.</div>

                <BlogBar blogs={blogs} />
            </div>

            <div className="slide-container">
                <Slide>
                    {Slider.map((item, index) => (
                        <div className="each-slide textSlide" key={index}>
                            <div className='slideTitle'>WAT ANDEREN ZEGGEN</div>
                            <div className='titleBotmBorder'></div>
                            <div className='slideText'>{item.text}</div>
                            <div className='slideName'>{item.name}</div>

                        </div>
                    ))}
                </Slide>
            </div>
            <div id='youtubeSec'>
                <div id='aboutVid'>
                    <div id='youtubeTitle'>Onze <br /> openingstijden</div>
                    <div className='day'>Maandag - 24 uur</div>
                    <div className='day'>Dinsdag - 24 uur</div>
                    <div className='day'>Woensdag - 24 uur</div>
                    <div className='day'>Donderdag - 24 uur</div>
                    <div className='day'>Vrijdag - 24 uur</div>
                    <div className='day'>Zaterdag - 24 uur</div>
                    <div className='day'>Zondag - 24 uur</div>
                    <div id='plan'> <img src={calendarIcon} height='15px' />Plan een gratis kennismakingsgesprek in</div>
                    <div id='question'>Hoe kan je ons <br /> bereiken?</div>
                    <div id='email'>info@online-relatietherapie.nl</div>

                </div>
                <iframe id='youtubeVid' src="https://www.youtube.com/embed/fvtlxEYLIoY?rel=0;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div id='spotifySec'>
                <iframe id='spotify' src="https://open.spotify.com/embed/track/2b2HutIDmoeBnnKRWDLAtV?utm_source=generator" width="100%" height="550" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                <div id='aboutSong'>
                    <div id='youtubeTitle'>Onze <br /> openingstijden</div>
                    <div className='day'>Maandag - 24 uur</div>
                    <div className='day'>Dinsdag - 24 uur</div>
                    <div className='day'>Woensdag - 24 uur</div>
                    <div className='day'>Donderdag - 24 uur</div>
                    <div className='day'>Vrijdag - 24 uur</div>
                    <div className='day'>Zaterdag - 24 uur</div>
                    <div className='day'>Zondag - 24 uur</div>
                    <div id='plan'> <img src={calendarIcon} height='15px' />Plan een gratis kennismakingsgesprek in</div>
                    <div id='question'>Hoe kan je ons <br /> bereiken?</div>
                    <div id='email'>info@online-relatietherapie.nl</div>
                </div>
            </div>

            <div id="bottomBar">
                <div id="top">
                    <div className="kauaa">
                        <div className="heading">Get to Know Us</div>
                        <div>About Us</div>
                        <div>Careers</div>
                        <div>Press Releases</div>
                        <div>Amazon Cares</div>
                        <div>Gift a Smile</div>
                        <div>Amazon Science</div>

                    </div>

                    <div className="kauaa">
                        <div className="heading">Connect with Us</div>
                        <div>Facebook</div>
                        <div>Twitter</div>
                        <div>Instagram</div>
                    </div>
                    <div className="kauaa">
                        <div className="heading">Make Money with Us</div>
                        <div>Sell under Amazon Accelerator</div>
                        <div>Sell on Amazon</div>
                        <div>Amazon Global Selling</div>
                        <div>Become an Affiliate</div>
                        <div>Fulfilment by Amazon</div>
                        <div>Advertise Your Products</div>
                        <div>Amazon Pay on Merchants</div>

                    </div>

                    <div className="kauaa">
                        <div className="heading">Let Us Help You</div>
                        <div>COVID-19 and Amazon</div>
                        <div>Your Account</div>
                        <div>Returns Centre</div>
                        <div>100% Purchase Protection</div>
                        <div>Amazon App Download</div>
                        <div>Amazon Assistant Download</div>
                        <div>Help</div>
                    </div>
                </div>

                <div id='copyright'>
                    <div id='copyrightReserved'>© Copyright 2020. All Rights Reserved – Online-relatietherapie.nl</div>
                    <div id='navBarMenu'>
                        <div>Over ons</div>
                        <div>Het team</div>
                        <div>Kosten</div>
                        <div>Privacy</div>
                        <div>Sitemap Contact</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
