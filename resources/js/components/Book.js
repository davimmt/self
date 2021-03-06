import React from 'react';
import ReactDOM from 'react-dom';

function Book() {
    return (
        <a href="#book">
            <div class="container d-flex justify-content-end">
                <i class="fas fa-bookmark fa-5x mr-5"></i>
                <div class="w-100">
                    <p class="h2 font-weight-bold">Banco de Bookos</p>
                    <p class="h6">Banco de Bookos</p>
                </div>
            </div>
        </a>
    );
}

export default Book;

if (document.getElementById('welcome-book')) {
    ReactDOM.render(<Book />, document.getElementById('welcome-book'));
}
