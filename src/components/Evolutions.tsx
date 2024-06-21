import React from 'react';
import styles from './CardSection.module.css';
import Link from 'next/link';

const evolutions = [
    { name: 'Squirtle', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png' },
    { name: 'Wartortle', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png' },
    { name: 'Blastoise', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png' }
];

const Evolutions = () => {
    return (
        <div className={styles.cardSection}>
            <div className={styles.cardTitle}>Evolutions</div>
            <ul>
                {evolutions.map(evolution => (
                    <li key={evolution.name}>
                        <Link href={`../../evolutions?evolucao=${evolution.name}`}>
                            <img src={evolution.img} alt={evolution.name} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Evolutions;
