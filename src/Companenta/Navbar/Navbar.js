import React from 'react';
import "./Navbar.css";
import { NavLink } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import GroupIcon from '@mui/icons-material/Group';



export function Navbar() {
    return (
            <div className='navbar-main'>
                <NavLink activeclassname="active" to='/'> <HomeIcon/> Home</NavLink>
                <NavLink activeclassname="active" to='/addStudents'> <PersonAddAltIcon/> Add Students</NavLink>
                <NavLink activeclassname="active" to='/journal'> <HowToRegIcon/> Journal</NavLink>
                <NavLink activeclassname="active" to='/students'> <GroupIcon/> Students</NavLink>
            </div>
    )
}
