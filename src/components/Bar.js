import React, { useState, useEffect } from 'react';
import '../css/bar.css';
import logo from "../img/logo.png"
import searchIcon from "../img/search.png"
import menuIcon from "../img/menu.png"


function Bar() {

    const [isbarScrolled, setIsbarScrolled] = useState(false)

    const listenScrollEvent = (event) => {
        if (window.scrollY < 400) {
            return setIsbarScrolled(false);
        } else if (window.scrollY > 400) {
            return setIsbarScrolled(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <div id='bar' className={isbarScrolled ? "barColored" : ""}>
            <div id='logoArea' className={ isbarScrolled ? "logoAreaFontColor" : "" }>
            <img src= { menuIcon } id="menuIcon" />
                <div>
                    <img src={logo} id="barLogo" />
                </div>
                <div>
                    <div>Online</div>
                    <div>Blogs</div>
                </div>
            </div>

            <div id='menu'>
                <div>HOME</div>
                <div>COACHING</div>
                <div>BLOG</div>
                <div>PODCAST</div>
                <div>ABOUT</div>
                <div>TESTIMONIALS</div>
                <div>CONTACT</div>
                <img src={searchIcon} height='30px' />
            </div>
        </div>
    );
}

export default Bar;
