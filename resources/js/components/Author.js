import React from 'react';
import ReactDOM from 'react-dom';

function Author() {
    return (
        <a href="#author">
            <div class="container d-flex justify-content-end">
                <i class="fas fa-bookmark fa-5x mr-5"></i>
                <div class="w-100">
                    <p class="h2 font-weight-bold">Banco de Authoros</p>
                    <p class="h6">Banco de Authoros</p>
                </div>
            </div>
        </a>
    );
}

export default Author;

if (document.getElementById('welcome-author')) {
    ReactDOM.render(<Author />, document.getElementById('welcome-author'));
}
