import React, { useState } from 'react';
import Logo from './logo.png';
import { useNavigate } from 'react-router-dom';
import './CSS/Dashboard.css';
import ProfilePicture from './Profile Pic.jpg';

const Dashboard = () => {
    const navigate = useNavigate();
    const [flag, setFlag] = useState(false);
    const myFunction = () => {
        setFlag(!flag);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // You can now handle the selected file, e.g., upload it to a server.
        // Add your file upload logic here.
    };

    const handlePlusIconClick = () => {
        // Trigger a click on the hidden file input when the plus icon is clicked.
        document.getElementById('fileInput').click();
    };

    return (
        <>
            <nav>
                <div className='navTitle'>
                    <img src={Logo} alt='Virtual Art Gallery'></img>
                    <h1>Virtual Art Gallery</h1>
                </div>
                <div className='navbar'>
                    <h2 className='dashboardNavBtn' onClick={()=>navigate('/dashboard')}>Dashboard</h2>
                    <div className="dropdown" onClick={myFunction}>
                        <h2>Account</h2>
                        <i class="fa fa-caret-down"></i>
                        {
                            flag && <div className="dropdown-content">
                                <li>Username</li>
                                <li onClick={()=>navigate('/')}>Log out</li>
                            </div>
                        }
                    </div>
                </div>
            </nav>

            <div className='userInfo'>
                <img className='profilePic' src={ProfilePicture} alt='Profile Pic'></img>
                <h1 className='userName'>Jennifer S <i class="material-icons">edit</i></h1>
                <div className='pffInfo'>
                    <div>
                        <p>0</p>
                        <p>posts</p>
                    </div>
                    <div>
                        <p>20</p>
                        <p>followers</p>
                    </div>
                    <div>
                        <p>10</p>
                        <p>following</p>
                    </div>
                </div>
            </div>

            <hr></hr>
            <h2 className='artWorkTitle'>Gallery</h2>

            <div className='imageContainer'>
                <div className='imageWtihIcon'>
                    <img src={ProfilePicture} alt='Profile'></img>
                    <div className='overlay'>
                        <i className="material-icons likeIcon">favorite</i>
                        <p>2</p>
                        <i className='material-icons commentIcon'>comment</i>
                        <p>5</p>
                    </div>
                </div>
                <div className='imageWtihIcon'>
                    <img src={ProfilePicture} alt='Profile'></img>
                    <div className='overlay'>
                        <i className="material-icons likeIcon">favorite</i>
                        <p>2</p>
                        <i className='material-icons commentIcon'>comment</i>
                        <p>5</p>
                    </div>
                </div>
                <div className='imageWtihIcon'>
                    <img src={ProfilePicture} alt='Profile'></img>
                    <div className='overlay'>
                        <i className="material-icons likeIcon">favorite</i>
                        <p>2</p>
                        <i className='material-icons commentIcon'>comment</i>
                        <p>5</p>
                    </div>
                </div>
                <div className='imageWtihIcon'>
                    <img src={ProfilePicture} alt='Profile'></img>
                    <div className='overlay'>
                        <i className="material-icons likeIcon">favorite</i>
                        <p>2</p>
                        <i className='material-icons commentIcon'>comment</i>
                        <p>5</p>
                    </div>
                </div>
                <div className='plusIconContainer' onClick={handlePlusIconClick}>
                    <i class="material-icons plusIcon">add</i>
                    <input
                        id="fileInput"
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />    
                 </div>
             </div>

         </>
    )
};

export default Dashboard;