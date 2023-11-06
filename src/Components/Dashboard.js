import React, { useState, useEffect } from 'react';
import Logo from './logo.png';
import { useNavigate } from 'react-router-dom';
import './CSS/Dashboard.css';
import ProfilePicture from './Profile Pic.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, deleteComment, updateComment } from '../Redux/Actions/actions';

const Dashboard = () => {
    const navigate = useNavigate();
    const [flag, setFlag] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const data = useSelector((state) => state.newComment);
    const dispatch = useDispatch();
    const [newComment, setNewComment] = useState('');
    const [editComment, setEditComment] = useState('');
    const [editValue, setEditValue] = useState('');
    const [flagForInput, setFlagForInput] = useState(false);

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

    const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
    };

    const editClickHandler = (data) => {
        setEditComment(data);
        setFlagForInput(true);
    }

    useEffect(() => {
        setEditValue(editComment.task);
    }, [editComment])


    const postBtnHandler = () => {
        if (newComment !== '') {
            let uniqueID = new Date().getTime().toString();
            let obj = {
                id: uniqueID,
                task: newComment,
                completed: false
            }
            setNewComment('');
            dispatch(addComment(obj));
        }
        else
            alert("First add your comment please!");
    }

    const pressEnterBtnHandler = (e) => {
        if (e.key === 'Enter') {
            postBtnHandler();
        }
    }

    const updateBtnHandler = () => {
        let editTaskObj = {
            id: editComment.id,
            task: editValue,
            completed: false
        }
        setNewComment('');
        dispatch(updateComment(editTaskObj));
        setFlagForInput(false);
    }

    const updatePressEnterBtnHandler = (e) => {
        if (e.key === 'Enter') {
            updateBtnHandler();
        }
    }

    return (
        <>
            <nav>
                <div className='navTitle'>
                    <img src={Logo} alt='Virtual Art Gallery'></img>
                    <h1>Virtual Art Gallery</h1>
                </div>
                <div className='navbar'>
                    <h2 className='dashboardNavBtn' onClick={() => navigate('/dashboard')}>Dashboard</h2>
                    <div className="dropdown" onClick={myFunction}>
                        <h2>Account</h2>
                        <i class="fa fa-caret-down"></i>
                        {
                            flag && <div className="dropdown-content">
                                <li>Username</li>
                                <li onClick={() => navigate('/')}>Log out</li>
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

            <hr className='lineUnderDashboardName'></hr>
            <h2 className='artWorkTitle'>Gallery</h2>

            <div className='imageContainer'>
                <div className='imageWtihIcon' onClick={toggleOverlay}>
                    <img src={ProfilePicture} alt='Profile'></img>
                    <div className='overlay'>
                        <i className="material-icons likeIcon">favorite</i>
                        <p>2</p>
                        <i className='material-icons commentIcon'>comment</i>
                        <p>5</p>
                    </div>
                </div>
                <div className='imageWtihIcon' onClick={toggleOverlay}>
                    <img src={ProfilePicture} alt='Profile'></img>
                    <div className='overlay'>
                        <i className="material-icons likeIcon">favorite</i>
                        <p>2</p>
                        <i className='material-icons commentIcon'>comment</i>
                        <p>5</p>
                    </div>
                </div>
                <div className='imageWtihIcon' onClick={toggleOverlay}>
                    <img src={ProfilePicture} alt='Profile'></img>
                    <div className='overlay'>
                        <i className="material-icons likeIcon">favorite</i>
                        <p>2</p>
                        <i className='material-icons commentIcon'>comment</i>
                        <p>5</p>
                    </div>
                </div>
                <div className='imageWtihIcon' onClick={toggleOverlay}>
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

            {showOverlay && (
                <div className="overlayContainer">
                    <div className="overlay-content">
                        <div className='imageAndCommentContentContainer'>
                            <img className='imageAfterOverlay' src={ProfilePicture} alt='Profile Pic' />
                            <div className='commentsContainer'>
                                <img className='imageInCommentContainer' src={ProfilePicture} alt='Profile Pic'></img>
                                <h3 style={{ fontWeight: 'bold', position: 'absolute', top: '0.2rem', left: '4.2rem' }}>Himanshu Singh</h3>
                                <hr style={{ borderWidth: '2px', borderColor: 'black', margin: '4rem 0.7rem 0 0.7rem' }} />
                                <div className='onlyForliTag' style={{ height: '41.5rem', overflowY: 'scroll' }}>
                                    {
                                        data.map(data =>
                                            <div className='content'>
                                                <div className='textContainer'>
                                                    <li className='contextText'>{data.task}</li>
                                                </div>
                                                <div className='iconContainer'>
                                                    <span onClick={() => editClickHandler(data)}><i className='editBtn' class="material-icons">edit</i></span>
                                                    <span onClick={() => dispatch(deleteComment(data.id))}><i class="material-icons">delete</i></span>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                                {
                                    flagForInput ? (
                                        <div style={{ position: 'absolute', bottom: '1rem', left: '0.7rem' }}>
                                            <hr style={{ borderWidth: '2px', borderColor: 'black', margin: '0 0 0.6rem 0' }} />
                                            <span style={{ fontSize: '1.4rem', marginRight: '0.5rem' }} role="img" aria-label="Happy Emoji">
                                                😊
                                            </span>
                                            <input type="text" onChange={(e) => setEditValue(e.target.value)} value={editValue||""} onKeyDown={updatePressEnterBtnHandler} placeholder="Add a comment" style={{ width: '28rem', border: 'none', borderRadius: '7px', padding: '2px 10px' }}></input>
                                            <button className='buttonInsideCommentContainer' onClick={updateBtnHandler} style={{ marginLeft: '0.4rem', cursor: 'pointer', border: '2px solid black', borderRadius: '7px', transition: 'transform 0.3s' }}>update</button>
                                        </div>
                                    ):(
                                        <div style={{ position: 'absolute', bottom: '1rem', left: '0.7rem' }}>
                                            <hr style={{ borderWidth: '2px', borderColor: 'black', margin: '0 0 0.6rem 0' }} />
                                            <span style={{ fontSize: '1.4rem', marginRight: '0.5rem' }} role="img" aria-label="Happy Emoji">
                                                😊
                                            </span>
                                            <input type="text" onChange={(e) => setNewComment(e.target.value)} value={newComment} onKeyDown={pressEnterBtnHandler} placeholder="Add a comment" style={{ width: '28rem', border: 'none', borderRadius: '7px', padding: '2px 10px' }}></input>
                                            <button className='buttonInsideCommentContainer' onClick={postBtnHandler} style={{ marginLeft: '0.4rem', cursor: 'pointer', border: '2px solid black', borderRadius: '7px', transition: 'transform 0.3s' }}>post</button>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className='deleteOverlayIcon' onClick={toggleOverlay}><i className='material-icons'>clear</i></div>
                    </div>
                </div>
            )}

        </>
    )
};

export default Dashboard;