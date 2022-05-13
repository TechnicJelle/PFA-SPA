import React from 'react';
import TeamMember from './Member';

import alexis from '../../assets/Team/alexis.webp';
import alwin from '../../assets/Team/sora.webp';
import dennis from '../../assets/Team/dennis.webp';
import maike from '../../assets/Team/maike.jpg';
import red from '../../assets/Team/red.png';
import lux from '../../assets/Team/lux.png';
import jelle from '../../assets/Team/jelle.png';
import dirk from '../../assets/Team/dirk.webp';


export default class TeamModal extends React.Component
{
    render()
    {
        return(
            <div className="columns has-text-left is-multiline">
                <TeamMember image={dirk} name="Dirk" title="@CEO" message="Our CEO and main mascot, completely responsible for moral support and leading presentations"/>
                <TeamMember image={alwin}  name="Alwin" title="@scrum master" message="Our lead engineer and is responsible for keeping the planning up to date and making sure everyone is working on their assigned tasks."/>
                <TeamMember image={jelle}  name="Jelle" title="@engineer" message="Does most of his work actually creating the game and coding the physics." />
                <TeamMember image={maike}  name="Maike" title="@lead artist" message="Our lead artist, having made the moodboard and stylesheet as well as most concept art." />
                <TeamMember image={red}  name="Red" title="@artist" message="Our sound artist, having made all the music in our game, as well as being responsible for the other parts of the sound design." />
                <TeamMember image={lux}  name="Lux" title="@artist" message="Our artist who worked mostly on branding, having made the team and game logo and merchandise." />
                <TeamMember image={alexis}  name="Alexis" title="@product owner" message="Our lead designer, who designed the website, including the webshop, as well as being the product owner." />
                <TeamMember image={dennis}  name="Dennis" title="@designer" message="Our second designer, and is responsible for fleshing out the concepts and ideas into a working product." />
            </div>
        )
    }
}