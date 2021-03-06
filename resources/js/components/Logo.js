import React from 'react';
import ReactDOM from 'react-dom';

function Logo() {
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

export default Logo;

if (document.getElementById('logo')) {
    ReactDOM.render(<Logo />, document.getElementById('logo'));
}
