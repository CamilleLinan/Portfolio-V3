import "./_Header.scss";
import { FC } from "react";
import { NavLink } from 'react-router-dom';
import CV from '@documents/CV_Alternance_Linan_Camille_2023.pdf';

const Header:FC = () => {
    return (
        <header className="header">
            <div className='header-container'>
                <div className="header-titles">
                    <h1>Liñan Camille</h1>
                    <h2>Développeuse Web</h2>
                </div>
                <div className="header-nav">
                    <NavLink
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        end to='/'
                    >
                        Accueil
                    </NavLink>
                    <a href={CV} target='_blank' rel='noopener noreferrer'>
                        CV
                    </a>
                    <a href='mailto:camille.linan@hotmail.com'>
                        Contact
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;