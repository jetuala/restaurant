import React from 'react';
import { Link } from 'react-router-dom'

export default function Homepage() {
    return (
        <div>
            <h1>This is the Maagho Home page.</h1>
            <Link to="/menu">Menu</Link>
            <Link to="/reservations">Reservations</Link>
        </div>
    )
}