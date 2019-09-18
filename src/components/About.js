import React from 'react';

// import { ThemeContext } from '../context/ThemeContext';

import './About.scss';

export default function About(props) {
    // const { theme } = useContext(ThemeContext);

    return (
        <div className="about-container">
            {/* <header className="about-header">
                <div>
                    <h2>About</h2>
                </div>
            </header> */}

            <section className="about">
                <div className="headshot-container">
                    <div className="headshot">

                    </div>
                </div>
                <div className="bio-container">
                    <p>I’m a web developer based in Los Angeles, and I’m excited to join your team. I love seeing projects come to life, from the first concept in a wireframe to that first spark of personality when it comes to life on the page.</p>
                    <p>For the past 6 years, I’ve worked in the television industry on teams that produce some of the biggest reality shows in the world. My problem-solving skills and desire to connect more to a user’s experiences led me to programming and web development.</p>
                    <p>It’s been a year since my first commit. Since then, I’ve been absorbing the latest JavaScript frameworks (React Hooks!), building a freelance client base for personal sites, and forging my new path in this exciting industry. </p>
                </div>
            </section>
        </div>
    )
}