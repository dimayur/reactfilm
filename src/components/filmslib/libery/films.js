import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import { IonIcon } from '@ionic/react';
import { timeOutline, star } from 'ionicons/icons';

import Gotop from '../../basecomp/gotop';
import "./films.css";

const Films = () => {
    const chunkSize = 4;
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [movies, setMovies] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [visibleMovies, setVisibleMovies] = useState(chunkSize);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await Axios.get('https://api.themoviedb.org/3/movie/popular', {
                    params: {
                        api_key: 'fe32ee99813ae89923f6239a74918769',
                        language: 'uk',
                        page: page
                    }
                });
                const results = response.data.results;
                const totalPages = response.data.total_pages;
                setMovies(prevMovies => {
                    const uniqueMovies = results.filter(newFilm => !prevMovies.some(oldFilm => oldFilm.id === newFilm.id));
                    return [...prevMovies, ...uniqueMovies];
                });
                setTotalPages(totalPages);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [page]);

    const genres = [
        { id: 0, name: "Всі" },
        { id: 18, name: "Драми" },
        { id: 28, name: "Бойовики" },
        { id: 878, name: "Фантастика" },
        { id: 12, name: "Пригодницький жанр" },
        { id: 53, name: "Триллер" },
        { id: 14, name: "Фентезі" },
        { id: 35, name: "Комедія" },
        { id: 27, name: "Жахи" },
    ];

    const filterMoviesByGenre = (genreId) => {
        setSelectedGenre(genreId);
    };

    const filteredMovies = selectedGenre
        ? movies.filter(film => film.genre_ids.includes(selectedGenre))
        : movies;

    const chunks = filteredMovies.reduce((acc, _, index) => {
        if (index % chunkSize === 0) {
            acc.push(filteredMovies.slice(index, index + chunkSize));
        }
        return acc;
    }, []);

    const handleAddMoreMovies = () => {
        if (visibleMovies * chunkSize <= chunks.length * chunkSize) {
            setVisibleMovies(prevVisibleMovies => prevVisibleMovies + chunkSize);
        } else {
            setPage(prevPage => prevPage + 1);
        }
    };

    return (
        <div className="Films">
            <div className="container">
                <p className="section-subtitle">БІБЛІОТЕКА ФІЛЬМІВ</p>
                <h2 className="h2 section-title">Кращі за рейтингом</h2>
                <ul className="filter-list">
                    {genres.map((genre) => (
                        <li key={genre.id}>
                            <button className="filter-btn" onClick={() => filterMoviesByGenre(genre.id)}>{genre.name}</button>
                        </li>
                    ))}
                </ul>
                {chunks.slice(0, visibleMovies).map((chunk, chunkIndex) => (
                    <ul className="movies-list" key={chunkIndex}>
                        {chunk.map((film, filmIndex) => (
                            <li key={filmIndex}>
                                <div className="movie-card">
                                    <Link to={`/film/${film.id}`}>
                                        <figure className="card-banner">
                                            <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt={`${film.title} movie poster`} />
                                        </figure>
                                    </Link>
                                    <div className="title-wrapper ">
                                        <Link to={`/film/${film.id}`}>
                                            <h3 className="card-title">{film.title}</h3>
                                        </Link>
                                        <time dateTime={film.release_date}>{film.release_date.substring(0, 4)}</time>
                                    </div>
                                    <div className="card-meta">
                                        <div className="badge badge-outline">{film.adult ? '18+' : 'PG'}</div>
                                        <div className="duration">
                                            <IonIcon icon={timeOutline} />
                                            <time dateTime={`PT${film.runtime}M`}>{film.runtime} min</time>
                                        </div>
                                        <div className="rating">
                                            <IonIcon icon={star} />
                                            <data>{film.vote_average}</data>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ))}
                {(
                    <button className="btn btn-primary stabel" onClick={handleAddMoreMovies}>
                        Показати ще
                    </button>
                )}
                {isLoading && (
                    <p className="section-subtitle">Завантаження...</p>
                )}
            </div>

            <Gotop />
        </div>
    );
}

export default Films;
