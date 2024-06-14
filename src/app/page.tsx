"use client"
import React from "react"
import CardSection from "../components/CardSection";
import Header from "../components/Header";

export default function Home() {
    return (
        <div>
            <Header titulo="Squirtle" />
            <CardSection titulo="About Squirtle">
                <p>Squirtle is a Water-type Pokémon introduced in Generation I.</p>
            </CardSection>
            <CardSection titulo="Abilities">
                <ul>
                    <li>Rain Dish</li>
                    <li>Torrent</li>
                </ul>
            </CardSection>
            <CardSection titulo="Evolutions">
                <p>Squirtle evolves into Wartortle at level 16 and then into Blastoise at level 36.</p>
            </CardSection>
        </div>
    );
}
