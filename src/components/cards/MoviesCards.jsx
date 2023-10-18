import React from "react";
import './MoviesCards.css'


const MoviesCards = () => {
  return (
    <div>
      <div className="accordion">
        <ul>
          <li>
            <div className="image_title">
              <a href="ds">Transformers: The Last Knight</a>
            </div>
            <a href="https://ibb.co/gGv6QS">
              <img
                src="https://image.ibb.co/k7P0kS/transformers4_640x320.jpg"
                alt="transformers4_640x320"
                border="0"
              />
            </a>
          </li>
          <li>
            <div className="image_title">
              <a href="home">Blade Runner 2049</a>
            </div>
            <a href="https://ibb.co/cXjfKn">
              <img
                src="https://image.ibb.co/ct9rQS/Blade_Runner2049_640x320.jpg"
                alt="Blade_Runner2049_640x320"
                border="0"
              />
            </a>
          </li>
          <li>
            <div className="image_title">
              <a href="home">Guardians of the Galaxy: Vol. 2</a>
            </div>
            <a href="https://ibb.co/b4nLkS">
              <img
                src="https://image.ibb.co/jAu0kS/GOG2_640x320.jpg"
                alt="GOG2_640x320"
                border="0"
              />
            </a>
          </li>
          <li>
            <div className="image_title">
              <a href="home">Spiderman: Homecoming</a>
            </div>
            <a href="https://ibb.co/mC5Uen">
              <img
                src="https://image.ibb.co/da7xX7/spiderman_homecoming_640x320.jpg"
                alt="spiderman_homecoming_640x320"
                border="0"
              />
            </a>
          </li>
          <li>
            <div className="image_title">
              <a href="jjkn">Wonder Woman</a>
            </div>
            <a href="https://ibb.co/enV1s7">
              <img
                src="https://image.ibb.co/dHdAkS/Wonder_Woman_640x320.jpg"
                alt="Wonder_Woman_640x320"
                border="0"
              />
            </a>
          </li>
        </ul>
      </div>
      <h1 className="text-center">Get Amazing Movies From Getflix</h1>
    </div>
  );
};

export default MoviesCards;
