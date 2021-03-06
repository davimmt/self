import React from 'react';
import ReactDOM from 'react-dom';

function QuoteSearch() {
    return (
        <div className="d-flex justify-content-start">
            <input className="form-control" placeholder="Procure citações..."/>
            <button className="btn btn-primary ml-3">Buscar</button>
        </div>
    );
}

export default QuoteSearch;

if (document.getElementById('quotes-search')) {
    ReactDOM.render(<QuoteSearch />, document.getElementById('quotes-search'));
}
