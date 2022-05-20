import logo from './logo.svg';
import React from 'react';
import './header.css'
function Header() {
    return (
        <div id='head'>
            <header id='ui fixed menu' className='head' >
                <section id='ui fixed center'>

                    <span id='logo'><img src={logo} id='logo' height='70px' alt='Spottabl logo' /></span>
                    <div>

                        <p id='headername' ><b> YOUR SPOTTABL TEAM</b> </p>
                        <p id='tag'>spottabl supports you all throughout</p>

                    </div>


                    <div >

                    </div>

                </section>
            </header>
        </div>





    );
}
export default Header;