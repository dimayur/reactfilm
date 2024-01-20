import "./Footer.css";
import { IonIcon } from '@ionic/react';
import { logoFacebook, logoTwitter, logoPinterest, logoLinkedin } from 'ionicons/icons';
function footer() {
    return(
        <div className={footer}>
            <footer className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="quicklink-wrapper">
                            <ul className="quicklink-list">
                                <li>
                                    <a href="#" className="quicklink-link">Поширені запитання</a>
                                </li>
                                <li>
                                    <a href="#" className="quicklink-link">ЦЕНТР ДОПОМОГИ</a>
                                </li>
                                <li>
                                    <a href="#" className="quicklink-link">Умови використання</a>
                                </li>
                                <li>
                                    <a href="#" className="quicklink-link">Конфіденційність</a>
                                </li>
                            </ul>

                            <ul className="social-list">

                                <li>
                                    <a href="#" className="social-link">
                                        <IonIcon icon={logoFacebook} />
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-link">
                                        <IonIcon icon={logoTwitter} />
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-link">
                                        <IonIcon icon={logoPinterest} />
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-link">
                                        <IonIcon icon={logoLinkedin} />
                                    </a>
                                </li>

                            </ul>

                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );

}

export default footer;