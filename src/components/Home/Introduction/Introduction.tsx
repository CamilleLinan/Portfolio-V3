import "./_Introduction.scss";
import { FC } from 'react';
import profil from '@assets/profil.webp';

const Introduction:FC = () => {
    return (
        <section className="intro background-section">
            <img src={profil} alt="" loading='lazy' />
            <article className='intro-container'>
                <h3>Développeuse FullStack</h3>
                <p>
                    Formée chez OpenClassrooms, puis en alternance pendant deux ans, j’ai consolidé mes compétences autour du développement web, avec un fort attrait pour l’UI/UX.
                    Je travaille aujourd’hui en tant que développeuse full stack, principalement avec React et Node.js.
                </p>
                <p>
                    Vous trouverez ci-dessous une sélection de projets réalisés au fil de mon parcours. Bonne visite !
                </p>
            </article>
        </section>
    )
}

export default Introduction;