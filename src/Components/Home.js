import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Home.css";
import Logo from "./logo.png";

const Home = () => {
  const [imageData, setImageData] = useState([]);
  // const [query, setQuery] = useState('');
  const apiUrl =
    "https://pixabay.com/api/?key=40390159-eeebda2279084f6ec1f524ac5&image_type=all";

  useEffect(() => {
    axios(apiUrl).then((response) => setImageData(response.data.hits));
    console.log(imageData);
  }, []);

  return (
    <>
      <nav>
        <div className="navTitle">
          <img src={Logo} alt="Virtual Art Gallery"></img>
          <h1>Virtual Art Gallery</h1>
        </div>
        <div className="navBtn">
          {/* <h2>Sign in</h2> */}
          <Link to="/signin">
            <h2>Sign in</h2>
          </Link>
          <Link to="/signup">
            <h2>Sign up</h2>
          </Link>
          {/* <h2>Sign up</h2> */}
        </div>
      </nav>
      {/* <input type='text' onChange={(e) => setQuery(e.target.value)} value={query} placeholder='Search'></input> */}
      <div className="imageContent">
        {imageData.map(
          (image) =>
            image.userImageURL !== "" && (
              <img src={image.userImageURL} alt="Art Gallery"></img>
            )
        )}
      </div>
    </>
  );
};

export default Home;
