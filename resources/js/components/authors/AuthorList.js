import {React, useState, useEffect } from 'react';
import axios from 'axios';

export default function AuthorList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/authors')
        .then(response => {
            setData(response.data);
        })
    }, []);

    return (
        <ul className="list-group mt-3">
            { data.map(row => {return <li className="list-group-item" key={row.id}>{row.name}</li>}) }
        </ul>
    );
}