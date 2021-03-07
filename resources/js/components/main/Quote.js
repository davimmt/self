import React from 'react';
import { Link } from 'react-router-dom';

export default function Quote() {
    return (
        <Link to="quotes">
            <div className="container d-flex justify-content-around">
                <i className="fas fa-quote-left fa-5x mr-5"></i>
                <div className="w-100">
                    <p className="h2 font-weight-bold">Banco de Citações</p>
                    <p className="h6">Banco de Citações</p>
                </div>
            </div>
        </Link>
    );
}
