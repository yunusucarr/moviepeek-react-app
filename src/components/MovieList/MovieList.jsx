import React, { useEffect, useState } from "react";
import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";
import _ from "lodash";

const MovieList = ({ type, title, emoji }) => {
    const [movies, setMovies] = useState([]);
    const [filterMovies, setFilterMovies] = useState([]);
    const [minRating, setMinRating] = useState(0);
    const [sort, setSort] = useState({
        by: "default",
        order: "asc"
    });

    useEffect(() => {
        fetchMovies();
    }, []);

    useEffect(() => {
        if (sort.by !== "default") {
            const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
            setFilterMovies(sortedMovies);
        }
    }, [sort]);

    const fetchMovies = async () => {
        try {
            const response1 = await fetch(
                `https://api.themoviedb.org/3/movie/${type}?api_key=${import.meta.env.VITE_API_KEY}&page=1)`
            );
            const data1 = await response1.json();

            const response2 = await fetch(
                `https://api.themoviedb.org/3/movie/${type}?api_key=${import.meta.env.VITE_API_KEY}&page=2)`
            );
            const data2 = await response2.json();

            const combined = [...data1.results, data2.results[0]];

            setMovies(combined);
            setFilterMovies(combined);
        } catch (error) {
            console.error("Filmler alınırken hata oluştu:", error);
        }
    };

    const handleFilter = (rate) => {
        if (rate === minRating) {
            setMinRating(0);
            setFilterMovies(movies);
        } else {
            setMinRating(rate);
            const filtered = movies.filter((movie) => movie.vote_average >= rate);
            setFilterMovies(filtered);
        }
    };

    const handleSort = (e) => {
        const { name, value } = e.target;
        setSort((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <section className="movie_list" id={type}>
            <header className="align_center movie_list_header">
                <h2 className="align_center movie_list_heading">
                    {title}{" "}
                    <img
                        src={emoji}
                        alt={`${emoji} icon`}
                        className="navbar_emoji"
                    />
                </h2>
                <div className="align_center movie_list_fs">
                    <FilterGroup
                        minRating={minRating}
                        onRatingClick={handleFilter}
                        ratings={[8, 7, 6]}
                    />
                    <select
                        name="by"
                        onChange={handleSort}
                        value={sort.by}
                        className="movie_sorting"
                    >
                        <option value="default">SortBy</option>
                        <option value="release_date">Date</option>
                        <option value="vote_average">Rating</option>
                    </select>
                    <select
                        name="order"
                        onChange={handleSort}
                        value={sort.order}
                        className="movie_sorting"
                    >
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </header>

            <div className="movie_cards">
                {filterMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
    );
};

export default MovieList;
