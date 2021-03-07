import React from 'react';
import { Link } from 'react-router-dom';


export default function NotFound() {
    const main = {
        boxSizing: 'border-box',
        position: 'relative',
        height: '100vh'
    };

    const notfound = {
        boxSizing: 'border-box',
        maxWidth: '767px',
        width: '100%',
        lineHeight: '1.4',
        textAlign: 'center',
        padding: '15px',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    };

    const notfound404 = {
        lineHeight: '1.4',
        textAlign: 'center',
        boxSizing: 'border-box',
        position: 'relative',
        height: '220px'
    };

    const h1 = {
        textAlign: 'center',
        boxSizing: 'border-box',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '186px',
        fontWeight: '200',
        margin: '0px',
    };
    
    return (
        <div id="notfound">
            <div style={main}>
                <div style={notfound}>
                    <div style={notfound404}><h1 style={h1}>404</h1></div>
                    <h2>Oops! Nothing was found</h2>
                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable. <Link to="/">Return to homepage</Link></p>
                </div>
            </div>
        </div>
    );
}