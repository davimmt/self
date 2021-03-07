import React from 'react';
import { Link } from 'react-router-dom';

export default function Author() {
    return (
        <Link to="/authors">
            <div className="container d-flex justify-content-end">
                <i className="fas fa-book-reader fa-5x mr-5"></i>
                <div className="w-100">
                    <p className="h2 font-weight-bold">Banco de Autores</p>
                    <p className="h6">Banco de Autores</p>
                </div>
            </div>
        </Link>
    );
}