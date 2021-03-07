import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default function Text() {
    return (
        <Link to="text">
            <div className="container d-flex justify-content-end">
                <i className="fas fa-file-alt fa-5x mr-5"></i>
                <div className="w-100">
                    <p className="h2 font-weight-bold">Banco de Textos</p>
                    <p className="h6">Banco de Textos</p>
                </div>
            </div>
        </Link>
    );
}