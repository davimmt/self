import React from 'react';
import AuthorSearch from './AuthorSearch'
import AuthorList from './AuthorList'

export default function AuthorMain() {
    return (
        <div className="container h-100 py-5">
            <p className="h2 font-weight-bold">Banco de Autores</p>
            <AuthorSearch/>
            <AuthorList/>
        </div>
    );
}