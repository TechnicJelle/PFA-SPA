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
import aslan from '../../assets/Team/aslan.webp';
import joey from '../../assets/Team/joey.webp';
import rouge from '../../assets/Team/rouge.webp';
import tyler from '../../assets/Team/tyler.webp';


export default class TeamModal extends React.Component
{
    render()
    {
        return(
            <div className="columns has-text-left is-multiline">
                <TeamMember image={dirk} name="Dirk" title="@CEO" message="Our CEO and main mascot, completely responsible for moral support and leading presentations"/>
                <TeamMember image={aslan} name="Aslan" title="@CTO" message="Our CTO and master debugger, there is no bug that escapes his gaze."/>
                <TeamMember image={joey} name="Joey" title="@CFO" message="Our CFO and financial counselor, very good at making you feel secure about your financing."/>
                <TeamMember image={alwin}  name="Alwin" title="@scrum master" message="Our lead engineer and is responsible for keeping the planning up to date and making sure everyone is working on their assigned tasks."/>
                <TeamMember image={jelle}  name="Jelle" title="@engineer" message="Does most of his work actually creating the game and coding the physics." />
                <TeamMember image={maike}  name="Maike" title="@lead artist" message="Our lead artist, having made the moodboard and stylesheet as well as most concept art." />
                <TeamMember image={red}  name="Red" title="@artist" message="Our sound artist, having made all the music in our game, as well as being responsible for the other parts of the sound design." />
                <TeamMember image={lux}  name="Lux" title="@artist" message="Our artist who worked mostly on branding, having made the team and game logo and merchandise." />
                <TeamMember image={alexis}  name="Alexis" title="@product owner" message="Our lead designer, who designed the website, including the webshop, as well as being the product owner." />
                <TeamMember image={dennis}  name="Dennis" title="@designer" message="Our second designer, and is responsible for fleshing out the concepts and ideas into a working product." />
                <TeamMember image={tyler} name="Tyler" title="@HR" message="Our counselor, they're here for moral support and if you need an listening ear, Tyler's here for you"/>
                <TeamMember image={rouge} name="Rouge" title="@motivator" message="Our motivator, keeps our group up to date and excited to keep working."/>
            </div>
        )
    }
}