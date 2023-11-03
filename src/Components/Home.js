import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CSS/Home.css';
import Logo from './logo.png';
import { NavLink, useNavigate } from 'react-router-dom';

const Home = () => {
    const [imageData, setImageData] = useState([]);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const apiKey = 'WVTO_mhvsaowVdPJPKUf1BlzuJZ1N8qPS-qLKqpHwGc';
    const defaultQuery = 'Art'; // Set your default query here

    useEffect(() => {
        const initialApiUrl = `https://api.unsplash.com/search/photos?query=${defaultQuery}&per_page=12`;

        axios(initialApiUrl, {
            headers: {
                Authorization: `Client-ID ${apiKey}`,
            },
        })
        .then(response => setImageData(response.data.results));
    }, [defaultQuery]); // This effect runs when the component mounts and when the default query changes

    const searchBtnHandler = () => {
        // Set the query to the default query if it's empty
        const newQuery = query.trim() === '' ? defaultQuery : query;
        const apiUrl = `https://api.unsplash.com/search/photos?query=${defaultQuery} ${newQuery}&per_page=12`;
        axios(apiUrl, {
            headers: {
                Authorization: `Client-ID ${apiKey}`,
            },
        })
        .then(response => setImageData(response.data.results));
    }

    const enterPressHandler = (e) => {
        if (e.key === 'Enter')
            searchBtnHandler();
    }

    return (
        <>
            <nav>
                <div className='navTitle' onClick={() => navigate('/dashboard') }>
                    <img src={Logo} alt='Virtual Art Gallery'></img>
                    <h1>Virtual Art Gallery</h1>
                </div>
                <div className='navBtn'>
                    <NavLink className='navLink' to='/login'><h2>Login</h2></NavLink>
                    <NavLink className='navLink' to='/register'><h2>Register</h2></NavLink>
                </div>
            </nav>
            <div className='searchBar'>
                <input type='text' className='inputField' onChange={(e) => setQuery(e.target.value)} value={query} onKeyDown={enterPressHandler} placeholder='Search'></input>
                <button type='button' onClick={searchBtnHandler}><i className="material-icons">search</i></button>
            </div>
            <div className='imageContent'>
                {imageData.map(image =>
                    <img src={image.urls.small} alt='Art Gallery' key={image.id}></img>
                )}
            </div>
        </>
    )
};

export default Home;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './CSS/Home.css';
// import Logo from './logo.png';
// import { NavLink } from 'react-router-dom';

// const Home = () => {
//     const [imageData, setImageData] = useState([]);
//     const [query, setQuery] = useState('');
//     const apiKey = 'WVTO_mhvsaowVdPJPKUf1BlzuJZ1N8qPS-qLKqpHwGc';
//     const defaultQuery = 'Art'; // Set your default query here
//     const fileInputRef = React.createRef(); // Create a ref for the file input

//     useEffect(() => {
//         const initialApiUrl = `https://api.unsplash.com/search/photos?query=${defaultQuery}&per_page=12`;

//         axios(initialApiUrl, {
//             headers: {
//                 Authorization: `Client-ID ${apiKey}`,
//             },
//         })
//         .then(response => setImageData(response.data.results));
//         console.log(imageData);
//     }, [defaultQuery]);

//     const searchBtnHandler = () => {
//         const newQuery = query.trim() === '' ? defaultQuery : query;
//         const category = defaultQuery; // Use selected category or default
//         const apiUrl = `https://api.unsplash.com/search/photos?query=${category} ${newQuery}&per_page=12`;
//         axios(apiUrl, {
//             headers: {
//                 Authorization: `Client-ID ${apiKey}`,
//             },
//         })
//         .then(response => setImageData(response.data.results));
//         console.log(imageData);
//     }

//     const enterPressHandler = (e) => {
//         if (e.key === 'Enter')
//             searchBtnHandler();
//     }

//     const handleFileSelect = () => {
//         fileInputRef.current.click(); // Trigger the file input when the button is clicked
//     }

//     return (
//         <>
//             <nav>
//                 <div className='navTitle'>
//                     <img src={Logo} alt='Virtual Art Gallery'></img>
//                     <h1>Virtual Art Gallery</h1>
//                 </div>
//                 <div className='navBtn'>
//                     <button className='uploadBtn' onClick={handleFileSelect}><b>Upload Artwork</b></button>
//                     <NavLink className='navLink' to='/login'><h2>Login</h2></NavLink>
//                     <NavLink className='navLink' to='/register'><h2>Register</h2></NavLink>
//                     <input type="file" ref={fileInputRef} style={{ display: 'none' }} accept="image/*" />
//                 </div>
//             </nav>
//             <div className='searchBar'>
//                 <input
//                     type='text'
//                     className='inputField'
//                     onChange={(e) => setQuery(e.target.value)}
//                     value={query}
//                     onKeyDown={enterPressHandler}
//                     placeholder='Search'
//                 />
//                 <button type='button' onClick={searchBtnHandler}><i className="material-icons">search</i></button>
//             </div>
//             <div className='imageContent'>
//                 {imageData.length !== 0 ? imageData.map(image =>
//                     <img src={image.urls.small} alt='Art Gallery' key={image.id}></img>
//                 ) : <h1 className='errorMsg'>Invalid Input!<br/>Please enter valid input.</h1>}
//             </div>
//         </>
//     )
// };

// export default Home;