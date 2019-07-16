import React from 'react'

export default function Header() {
    return (
        <header style = {headerStyele}>
            <h1 style ={{color:'white'}}>Redux-Todo</h1>
        </header>
    )
}
const headerStyele = {
    background: '#666',
    padding: '1px 2px',
    margin: '4px'
}