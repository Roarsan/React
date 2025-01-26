import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import '../css/Home.css';



function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: 'hero', release_date: 2020 },
        { id: 2, title: 'zero', release_date: 2020 },
        { id: 3, title: 'tero', release_date: 2020 },
        { id: 4, title: 'mero', release_date: 2020 }

    ]

    function handleSearch(e) {
        e.preventDefault();
    }

    return (
        <div className="home">
        <form className="search-form" onSubmit={handleSearch}>
            <input
                className="search-input"
                placeholder="Search Movies"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-button" type="submit">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) => (
                movie.title.startsWith(searchQuery) && (
                    <MovieCard movie={movie} key={movie.id} />
                )
            ))}
        </div>
    </div>
    
    );

}
export default Home;