import React from "react";
import "./devfile.css";
import {IonIcon} from "@ionic/react";
import { play, timeOutline, calendar } from 'ionicons/icons';

import Movie4 from "./movie-4.png";

function Devfile() {
    return(
        <div className="movie-detail">
            <div className="container">

                <figure className="movie-detail-banner">
                    <img src={Movie4} alt="Free guy movie poster" />
                </figure>

                <div className="movie-detail-content">

                    <p className="detail-subtitle">New Episodes</p>

                    <h1 className="h1 detail-title">
                        Free <strong>Guy</strong>
                    </h1>

                    <div className="meta-wrapper">

                        <div className="badge-wrapper">
                            <div className="badge badge-fill">PG 13</div>

                            <div className="badge badge-outline">HD</div>
                        </div>

                        <div className="ganre-wrapper">
                            <a>Comedy,</a>

                            <a>Action,</a>

                            <a>Adventure,</a>

                            <a>Science Fiction</a>
                        </div>

                        <div className="date-time">

                            <div>
                                <IonIcon icon={calendar} />
                                <time dateTime="2021">2021</time>
                            </div>

                            <div>
                                <IonIcon icon={timeOutline} />

                                <time dateTime="PT115M">115 min</time>
                            </div>

                        </div>

                    </div>

                    <p className="storyline">
                        A bank teller called Guy realizes he is a background character in an open world video game
                        called Free
                        City that will
                        soon go offline.
                    </p>

                    <div className="details-actions">

                        <div className="title-wrapper">
                            <p className="title">Prime Video</p>

                            <p className="text">Streaming Channels</p>
                        </div>

                        <button className="btn btn-primary">
                            <IonIcon icon={play} />

                            <span>Watch Now</span>
                        </button>
                    </div>
                </div>

            </div>
            <div className="tv-series">
                <div className="container">

                    <p className="section-subtitle">Трейлер</p>

                    <h2 className="h2 section-title">ТРЕЙЛЕР</h2>

                </div>
            </div>

        </div>
    );
}
export default Devfile;