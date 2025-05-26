import "./_Introduction.scss";
import { FC } from 'react';
import profil from '@assets/profil.webp';

const Introduction:FC = () => {
    return (
        <section className="intro background-section">
            <img src={profil} alt="" loading='lazy' />
            <article className='intro-container'>
                <h3>Bienvenue sur mon portfolio !</h3>
                <p>
                    Après sept années dans le secteur de la vente, j'ai choisi de me reconvertir dans un domaine qui me passionne : 
                    le développement web, avec une affinité particulière pour l’UI/UX design.
                </p>
                <p>
                    Après une première formation chez OpenClassrooms, j’ai poursuivi mon parcours avec deux années d’alternance en tant que développeuse front-end, où j’ai perfectionné mes compétences, notamment sur le framework React.
                </p>
                <p>
                    Vous trouverez ci-dessous une sélection de projets réalisés tout au long de mon apprentissage. Bonne visite !
                </p>
            </article>
        </section>
    )
}

export default Introduction;