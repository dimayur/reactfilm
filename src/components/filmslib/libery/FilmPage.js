import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { IonIcon } from '@ionic/react';
import { play, timeOutline, calendar } from 'ionicons/icons';
import { useParams } from 'react-router-dom';
import "./FilmPage.css";

const FilmPage = () => {
    const { filmId } = useParams();
    const [film, setFilm] = useState(null);
    const [trailer, setTrailer] = useState(null);

    useEffect(() => {
        const fetchFilm = async () => {
            try {
                const filmResponse = await Axios.get(`https://api.themoviedb.org/3/movie/${filmId}`, {
                    params: {
                        api_key: 'fe32ee99813ae89923f6239a74918769', // Замініть на свій ключ API
                        language: 'uk'
                    }
                });
                setFilm(filmResponse.data);

                const videosResponse = await Axios.get(`https://api.themoviedb.org/3/movie/${filmId}/videos`, {
                    params: {
                        api_key: 'fe32ee99813ae89923f6239a74918769' // Замініть на свій ключ API
                    }
                });
                const trailers = videosResponse.data.results;
                if (trailers.length > 0) {
                    setTrailer(trailers[0]);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchFilm();
    }, [filmId]);

    if (!film) {
        return <p>Loading...</p>;
    }

    const handleTrailerClick = () => {
        if (trailer) {
            // Ваш код для відтворення трейлера фільму
            console.log("Play trailer");
        }
    };

    return (
        <div className="movie-detail">
            <div className="container">

                <figure className="movie-detail-banner">
                    <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} />
                </figure>

                <div className="movie-detail-content">

                    <p className="detail-subtitle">Чудовий вибір!</p>

                    <h1 className="h1 detail-title">
                        {film.title}
                    </h1>

                    <div className="meta-wrapper">

                        <div className="badge-wrapper">
                            <div className="badge badge-outline">{film.adult ? '18+' : 'PG'}</div>

                            <div className="badge badge-outline">4K</div>
                        </div>

                        <div className="ganre-wrapper">
                            {film.genres.map(genre => (
                                <a key={genre.id}>{genre.name},</a>
                            ))}
                        </div>

                        <div className="date-time">

                            <div>
                                <IonIcon icon={calendar} />
                                <time dateTime={film.release_date}>{film.release_date.substring(0, 4)}</time>
                            </div>

                            <div>
                                <IonIcon icon={timeOutline} />

                                <time dateTime={`PT${film.runtime}M`}>{film.runtime} min</time>
                            </div>

                        </div>

                    </div>

                    <p className="storyline">
                        <p>{film.overview}</p>
                    </p>

                </div>

            </div>
            <div className="tv-series">
                <p className="section-subtitle">Ну що глянемо?</p>

                <h2 className="h2 section-title">ТРЕЙЛЕР</h2>
                <div className="trailer">

                    {trailer && (
                        <div className="trailer">
                            <iframe
                                title=""
                                width="1080"
                                height="600"
                                src={`https://www.youtube.com/embed/${trailer.key}`}
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}

                </div>
            </div>

        </div>

    );
};

export default FilmPage;
