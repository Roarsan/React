import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import '../css/Home.css';
import { getPopularMovies } from "../services/api";
import { searchMovies } from "../services/api";



function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const popularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.log("error loading...")
            }
        }
        popularMovies();
    }, [])

    async function handleSearch(e) {
        e.preventDefault();
        try {
            const searchResult = await searchMovies(searchQuery);
            setMovies(searchResult);
        } catch (error) {
            console.log("error loading...")
        }
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
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>

    );

}
export default Home;