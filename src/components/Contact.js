import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import { ThemeContext } from '../context/ThemeContext';

import './Contact.scss';

export default function Contact(props) {
    const { theme } = useContext(ThemeContext);

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);
    const [toSuccess, setToSuccess] = useState(false);

    let contactData = {
        name,
        company,
        email,
        message
    };

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        axios({
            method: "POST", 
            url:"/.netlify/functions/server",
            // url: `${window.location.href}/submitForm`,
            data: {...contactData}
        }).then((response)=>{
            
            if (response.status === 200) {
                setToSuccess(true);
                console.log(response);

            } else {
                alert("Message failed to send.");
            }
        })
    }

    return (
        <>
            {toSuccess ? <Redirect to="/Success" /> : null}
            <div className="contact-container">
                <section className="contact">
                    <form 
                        className="contact-form"
                        style={{
                            backgroundColor: theme.backgroundColorDarkest,
                            borderRadius: `5px`,
                            transition: `all .2s ease-in`
                        }}
                        onSubmit={handleSubmit}
                    >
                        <div className="form-row">
                            <div className="form-input">
                                <input 
                                    placeholder="Name"
                                    type="text"
                                    value={name.toString()}
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
                                    value={email.toString()}
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
                                    placeholder="Company/Role"
                                    type="text"
                                    value={company.toString()}
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
                                    value={message.toString()}
                                    aria-label="message"
                                    style={{
                                        color: theme.color,
                                        backgroundColor: theme.backgroundColorDarkest,
                                        border: `1px solid ${theme.color}`,
                                        borderRadius: `3px`
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
                                    border: `1px solid ${theme.color}`,
                                    borderRadius: `3px`
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