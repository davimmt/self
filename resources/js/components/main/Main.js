import React from 'react';
import Logo from '../Logo';
import Quote from './Quote';
import Text from './Text';
import Author from './Author';
import Book from './Book';

export default function Main() {
    const main = {
        height: '60vh',
        width: '60vw',
        margin: 'auto'
    }
    
    return (
        <div className="container h-100">
            <Logo/>
            <div className="d-flex" style={main}>
                <div className="row align-items-center">
                    <Quote/>
                    <Text/>
                </div>
                <div className="row ml-5 align-items-center">
                    <Author/>
                    <Book/>
                </div>
            </div>
        </div>
    );
}