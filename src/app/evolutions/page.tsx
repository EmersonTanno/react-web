"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import CardSection from '../../components/CardSection';

const EvolutionsPage = () => {
    const searchParams = useSearchParams();
    const evolucao = searchParams.get('evolucao');
    const [evolutionData, setEvolutionData] = React.useState<any>(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        if (evolucao) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${evolucao.toLowerCase()}`)
                .then(response => response.json())
                .then(data => {
                    setEvolutionData(data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    setLoading(false);
                });
        }
    }, [evolucao]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <Suspense fallback={<p>Loading...</p>}>
            {evolutionData ? (
                <CardSection titulo={String(evolucao)}>
                    <Image
                        src={evolutionData.sprites.front_default}
                        alt={String(evolucao)}
                        width={200}
                        height={200}
                    />
                </CardSection>
            ) : (
                <p>No data available</p>
            )}
        </Suspense>
    );
};

export default EvolutionsPage;
