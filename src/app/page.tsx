"use client"
import React from "react"
import CardSection from "../components/CardSection";
import Header from "../components/Header";
import Evolutions from "../components/Evolutions";

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
            <Evolutions />
        </div>
    );
}