import React from 'react';

export default function Logo() {
    const logo = {
        fontSize: "70px",
        fontWeight: "bolder",
    };

    return (
        <div className="container" style={logo}>
            <p>Self</p>
        </div>
    );
}