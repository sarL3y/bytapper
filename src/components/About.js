import React from 'react';

// import { ThemeContext } from '../context/ThemeContext';

import './About.scss';

export default function About(props) {
    // const { theme } = useContext(ThemeContext);

    return (
        <div className="about-container">
            <section className="about">
                <div className="headshot-container">
                    <div className="headshot">

                    </div>
                </div>
                <div className="bio-container">
                    <h2>I’m a web developer based in Los Angeles, and I’m excited to build something new. </h2>
                    <p>For 6 years, I worked in the television industry on teams that produce some of the biggest unscripted shows in the world. My problem-solving skills, curiosity, and desire for a more personal connection with an audience(user) led me to programming and web development.</p>
                    <p>It’s been a little over a year since my first commit. Since then, I’ve been absorbing the latest JavaScript frameworks (React Hooks!), expanding a freelance client base for building custom sites, and figuring out what I can make next.</p>
                </div>
            </section>
            <section className="photos">
                <div className="photos-container">
                    <div className="photo">

                    </div>
                    <div className="photo">
                        
                    </div>
                    <div className="photo">
                        
                    </div>
                </div>
            </section>
        </div>
    )
}