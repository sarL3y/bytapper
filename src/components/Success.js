// import React, { useContext } from 'react';
import React from 'react';

// import { ThemeContext } from '../context/ThemeContext';

export default function Success(props) {
    // const { theme } = useContext(ThemeContext);

    return (
        <div className="success-container">
            <section className="success-message">
                <div className="success-left">
                    <h2>
                    </h2>
                </div>

                <div className="success-right">
                    <h3>
                        Here is a haiku
                    </h3>
                    <div className="logos-list">
                        <h4>
                            All of your contact info 
                        </h4>
                        <h4>
                            You just sent to me
                        </h4>
                    </div> 
                </div>
            </section>
        </div>
    )
}