import React from 'react';

export default function AuthorSearch() {
    return (
        <div className="d-flex justify-content-start">
            <input className="form-control" placeholder="Procure autores..."/>
            <button className="btn btn-primary ml-3">Buscar</button>
            <button className="btn btn-primary ml-3">Adicionar</button>
        </div>
    );
}