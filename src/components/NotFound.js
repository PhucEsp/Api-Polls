import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div>
            <h2>Sorry</h2>
            <p>That page can't be found</p> 
            <p>Back to the  <Link to="/login">Login page</Link> </p>
        </div>
    )
}

export default NotFound
