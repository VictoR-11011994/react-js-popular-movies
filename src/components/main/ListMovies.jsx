import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { FEATURED_API } from '../../config';

import image from '../../assets/img/pexels-photo-4205210.jpeg';

function ListMovies() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

      getMovies(FEATURED_API);

    }, []);

    const getMovies = async (API) => {
        await axios.get(API).then((res) => {
            setMovies(res.data.results)
        });
    }

    return (
        <div>

            <div style={{display: "flex", flexWrap: "wrap"}}>
            {
            movies.length === 0
            ?
            <p className="animate__animated animate__fadeIn animate__infinite" style={{color: "white", padding: "20px"}}>Loading...</p>
            :
            movies.map((movie) => (
                <div className="movie-card-section" key = {movie.id}>
                    <div className="movie-card">
                        <div className="movie-poster">
                        <img src={movie.poster_path ? (`https://image.tmdb.org/t/p/w1280${movie.poster_path}`) : image} alt={movie.title}></img>
                        </div>
                        <div className="movie-details">
                            <h3 className="movie-title">{movie.title}</h3>
                            <p className="movie-rating">Vote Average: {movie.vote_average}</p>
                            <p className="movie-release-date">Release Date: {movie.release_date}</p>
                            <a className="movie-search-on-google" href={`https://www.google.com/search?q=${movie.title}`} target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                            </a>
                        </div>
                    </div>
                </div>
            ))} 
            
            </div>

        </div>
    )
}

export default ListMovies
