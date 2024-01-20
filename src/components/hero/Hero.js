import "./hero.css";
import * as React from "react";
import { Link } from "react-router-dom";
function Heroes() {
    return(
        <div className="Heroes">
            <section className="hero">
                <div className="conta">
                    <div className="hero-content">

                        <p className="hero-subtitle">Filmlane</p>

                        <h1 className="bigtextmode hero-title ">
                            Бібліотека <strong>Фільмів</strong>, серіалів, та іншого.
                        </h1>

                        <div className="meta-wrapper">

                            <div className="badge-wrapper">
                                <div className="badge badge-fill">PG 18</div>

                                <div className="badge badge-outline">4K</div>
                                <div className="badge badge-outline">Full HD</div>
                                <div className="badge badge-outline">HD</div>
                            </div>


                        </div>

                            <Link to="/films" className="fixthis">
                                <button className="btn btn-primary">
                                    <span>Дивитись зараз</span>
                                </button>
                            </Link>

                    </div>
                </div>
            </section>
        </div>
    );

}
export default Heroes;