import React from 'react'
import logo from '../assets/dolistlogo.png'
import { Link } from 'react-router-dom'
function Navig () {
  return (
    <div>
        <ul className='nav'>
            <li>
            <Link to='/'>
                <img src={logo} alt="logo"/></Link></li>
            <li><Link to='/'>
                <h1>TO DO LIST</h1>
                </Link></li>
            
            <li>
                <Link to='/newtask'>
                    <button>Add new task</button>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navig