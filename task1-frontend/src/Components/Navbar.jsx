import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='w-full bg-black text-white flex justify-between p-3'>
            <h2>Candidates</h2>
            <div className="menu flex gap-3">
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
            </div>
        </div>
    )
}

export default Navbar
