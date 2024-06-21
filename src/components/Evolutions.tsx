import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CardSection.module.css';

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
                        <Link href={`./evolutions?evolucao=${evolution.name}`}>

                            <Image
                                src={evolution.img}
                                alt={evolution.name}
                                width={100}
                                height={100}
                                unoptimized
                            />

                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Evolutions;
