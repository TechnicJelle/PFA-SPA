import React from 'react';
import { mdiAtom, mdiBookshelf, mdiMolecule, mdiSchool } from '@mdi/js';

import FeatureCard from './components/FeatureCard';
import TeamModal from './components/Team/Modal';


export default class App extends React.Component {
    toggleModal() {
        document.getElementById("modal").classList.toggle('is-active')
    }

    render() {
        return(
            <div className="app">
                <section className="section is-large has-text-centered ">
                    <h1 className="title">Features</h1>
                    <div className="container columns">
                        <FeatureCard className="column" icon={mdiBookshelf} title="Physics" description="Not only are physics implemented into our game, physics are also the basis for our game."/>
                        <FeatureCard className="column" icon={mdiMolecule} title="Catoms and Molecats" description="Cat themed atoms and molecules turn them into catoms and molecats, now I call that molecute." />
                        <FeatureCard className="column" icon={mdiAtom} title="Collision Theory" description="Collide catoms into each other to create all molecats." />
                        <FeatureCard className="column" icon={mdiSchool} title="Educational" description="The game is also educational, teaching the player what some common molecules are made out of." />
                    </div>
                </section>

                <section className="is-large has-text-centered" id="team">
                    <h1 className="title">Meet the team</h1>
                    <TeamModal />
                </section>
            </div>
        )
    }
}