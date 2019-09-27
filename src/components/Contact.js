import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { ThemeContext } from '../context/ThemeContext';

import './Contact.scss';

export default function Contact(props) {
    const { theme } = useContext(ThemeContext);
    const [loading, setLoading] = useState(false);

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [toHome, setToHome] = useState(false);

    let contactData = {
        name,
        company,
        email,
        message
    };

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        console.log('Submitting form!');

        setTimeout(() => {
            setToHome(true);
        }, 2000);
    }

    return (
        <>
        {toHome ? <Redirect to="/Success" /> : null}
        <div className="contact-container">
            <section className="contact">
                <form 
                    className="contact-form"
                    style={{
                        backgroundColor: theme.backgroundColorDarkest,
                        boxShadow: `0px 0px 8px -4px ${theme.backgroundColorMid}`,
                        borderRadius: `5px`
                    }}
                    onSubmit={handleSubmit}
                >
                    <div className="form-row">
                        <div className="form-input">
                            <input 
                                placeholder="Name"
                                type="text"
                                // value={topic.toString()}
                                aria-label="name"
                                style={{
                                    color: theme.color,
                                    backgroundColor: theme.backgroundColorDarkest,
                                    borderBottom: `1px solid ${theme.color}`
                                }}
                                autoComplete="none"
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-input">
                            <input 
                                placeholder="Email Address"
                                type="email"
                                // value={topic.toString()}
                                aria-label="email"
                                style={{
                                    color: theme.color,
                                    backgroundColor: theme.backgroundColorDarkest,
                                    borderBottom: `1px solid ${theme.color}`
                                }}
                                autoComplete="none"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <div className="form-input">
                            <input 
                                placeholder="Company"
                                type="text"
                                // value={topic.toString()}
                                aria-label="company"
                                style={{
                                    color: theme.color,
                                    backgroundColor: theme.backgroundColorDarkest,
                                    borderBottom: `1px solid ${theme.color}`

                                }}
                                autoComplete="none"
                                onChange={e => setCompany(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <div className="form-textarea">
                            <textarea 
                                placeholder="Message"
                                rows="6"
                                // value={topic.toString()}
                                aria-label="message"
                                style={{
                                    color: theme.color,
                                    backgroundColor: theme.backgroundColorDarkest,
                                    border: `1px solid ${theme.color}`
                                }}
                                autoComplete="none"
                                onChange={e => setMessage(e.target.value)}
                            />
                        </div>
                    </div>
                    {!loading ?
                        <button 
                            type="submit" 
                            className="form-submit-button" 
                            style={{
                                backgroundColor: theme.backgroundColorDarkest,
                                color: theme.color,
                                border: `1px solid ${theme.color}`
                            }}
                            onClick={e => console.log(contactData)}
                        >
                            Submit
                        </button>
                    : (
                        <button 
                            type="submit" 
                            className="form-submit-button" 
                            style={{
                                backgroundColor: theme.backgroundColorDarkest,
                                color: theme.color,
                                border: `1px solid ${theme.color}`
                            }}
                            onClick={e => e.preventDefault()}
                        >
                            Submitting
                        </button>
                    )}
                </form>
            </section>
        </div>
        </>
    )
}