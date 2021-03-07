import React from 'react';
import { Link } from 'react-router-dom';

export default function Book() {
    return (
        <Link to="book">
            <div className="container d-flex justify-content-end">
                <i className="fas fa-book-open fa-5x mr-5"></i>
                <div className="w-100">
                    <p className="h2 font-weight-bold">Banco de Livros</p>
                    <p className="h6">Banco de Livros</p>
                </div>
            </div>
        </Link>
    );
}