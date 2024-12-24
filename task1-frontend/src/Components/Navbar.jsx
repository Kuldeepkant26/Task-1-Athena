import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='w-full bg-black text-white flex justify-between p-3'>
            <h2>TASK-1</h2>
            <div className="menu flex gap-3">
                <a href="https://github.com/Kuldeepkant26/Task-1-Athena" target='_blank'><i className="ri-github-fill"></i>CODE</a>
            </div>
        </div>
    )
}

export default Navbar
