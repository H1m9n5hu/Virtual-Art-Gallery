import React, { useState } from 'react';
import Logo from './logo.png';
import { NavLink } from 'react-router-dom';
import './CSS/Dashboard.css';

const Dashboard = () => {
    const [flag, setFlag] = useState(false);
    const myFunction = () => {
        setFlag(!flag);
    };

    return (
        <>
            <nav>
                <div className='navTitle'>
                    <img src={Logo} alt='Virtual Art Gallery'></img>
                    <h1>Virtual Art Gallery</h1>
                </div>
                <div className='navbar'>
                    <h2 className='dashboardNavBtn'>Dashboard</h2>
                    <div className="dropdown" onClick={myFunction}>
                        <h2>Account</h2>
                        <i class="fa fa-caret-down"></i>
                        {
                            flag && <div className="dropdown-content">
                                <li>Username</li>
                                <li>Log out</li>
                            </div>
                        }
                    </div>
                </div>
            </nav>

            <h1>Dashboard</h1>
        </>
    )
};

export default Dashboard;