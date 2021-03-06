import React from 'react';
import ReactDOM from 'react-dom';

function Text() {
    return (
        <a href="#text">
            <div class="container d-flex justify-content-end">
                <i class="fas fa-bookmark fa-5x mr-5"></i>
                <div class="w-100">
                    <p class="h2 font-weight-bold">Banco de Textos</p>
                    <p class="h6">Banco de Textos</p>
                </div>
            </div>
        </a>
    );
}

export default Text;

if (document.getElementById('welcome-text')) {
    ReactDOM.render(<Text />, document.getElementById('welcome-text'));
}
