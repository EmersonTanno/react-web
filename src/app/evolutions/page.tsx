'use client'

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import CardSection from '../../components/CardSection';

const EvolucoesPage = () => {
    const searchParams = useSearchParams();
    const evolucao = searchParams.get('evolucao');
    const [evolutionData, setEvolutionData] = useState(null);

    useEffect(() => {
        if (evolucao) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${evolucao.toLowerCase()}`)
                .then(response => response.json())
                .then(data => setEvolutionData(data));
        }
    }, [evolucao]);

    return (
        <div>
            {evolutionData ? (
                <CardSection titulo={String(evolucao)}>
                    <img src={evolutionData['sprites']['front_default']} alt={String(evolucao)} />
                </CardSection>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default EvolucoesPage;