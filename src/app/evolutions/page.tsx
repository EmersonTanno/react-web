"use client";

import React, { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import CardSection from '../../components/CardSection';

const EvolutionsPageContent = () => {
    const searchParams = useSearchParams();
    const evolucao = searchParams.get('evolucao');
    const [evolutionData, setEvolutionData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                evolutionData && (
                    <CardSection titulo={String(evolucao)}>
                        <Image
                            src={evolutionData.sprites.front_default}
                            alt={String(evolucao)}
                            width={200}
                            height={200}
                            unoptimized
                        />
                    </CardSection>
                )
            )}
        </div>
    );
};

const EvolutionsPage = () => {
    return (
        <Suspense fallback={<p>Loading page...</p>}>
            <EvolutionsPageContent />
        </Suspense>
    );
};

export default EvolutionsPage;
