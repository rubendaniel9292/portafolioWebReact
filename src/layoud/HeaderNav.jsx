import React from 'react';
import { useState} from 'react';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

const HeaderNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuClose, setMenuClose] = useState(true);



    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setMenuClose(menuClose);
    };

    return (
        <>
            <header >
                <nav id="menu" className={`navbar navbar-expand-lg position-fixed ${menuOpen ? 'expanded' : ''}`}>
                    <div class="container-fluid">
                        <span className="navbar-brand"></span>
                        <button className="navbar-toggler" onClick={toggleMenu} type="button" data-bs-toggle="collapse"
                            aria-controls="navbarNav">
                            <span
                                className={`navbar-brand boton-menu text-white navbar-toggler-icon ${menuOpen ? 'icono-x' : ''}`}>
                                {menuOpen ? <FontAwesomeIcon icon={faTimes} beat /> : <FontAwesomeIcon icon={faBars} beat />}
                            </span>
                        </button>

                        <div className="collapse navbar-collapse text-center justify-content-end pt-xs-2 mt-xs-2" id="navbarNav">
                            <ul className='navbar-nav text-center fw-bold'>

                                <li className="nav-item mx-1 my-1">
                                    <NavLink to='/inicio' className={'nav-link text-white'} onClick={() => { toggleMenu(); }}>
                                        Inicio
                                    </NavLink>
                                </li>
                                <li className="nav-item mx-1 my-1">
                                    <NavLink to='/sobre-mi' className="nav-link text-white" aria-current="page" onClick={toggleMenu}>
                                        Sobre mí
                                    </NavLink>
                                </li>

                                <li className="nav-item mx-1 my-1">
                                    <NavLink to='/conocimientos' className="nav-link text-white" aria-current="page" onClick={toggleMenu}>
                                        Conocimientos
                                    </NavLink>
                                </li>
                                <li className="nav-item mx-1 my-1 pb-1">
                                    <NavLink to='/portafolio' className="nav-link text-white" aria-current="page" onClick={toggleMenu}>
                                        Portafolio
                                    </NavLink>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>

            </header>
        </>


    )
}

export default HeaderNav;