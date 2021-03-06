import React from 'react';
import ReactDOM from 'react-dom';

function Quote() {
    return (
        <a href={window.location.pathname + 'quotes'}>
            <div class="container d-flex justify-content-around">
                <i class="fas fa-bookmark fa-5x mr-5"></i>
                <div class="w-100">
                    <p class="h2 font-weight-bold">Banco de Citações</p>
                    <p class="h6">Banco de Citações</p>
                </div>
            </div>
        </a>
    );
}

export default Quote;

if (document.getElementById('welcome-quote')) {
    ReactDOM.render(<Quote />, document.getElementById('welcome-quote'));
}
