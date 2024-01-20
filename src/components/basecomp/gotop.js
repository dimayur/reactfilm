import React, { useEffect, useState } from 'react';
import { IonIcon } from '@ionic/react';
import { chevronUp } from 'ionicons/icons';
import "./gotop.css";

const Gotop = () => {
    const [isButtonActive, setIsButtonActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 500) {
                setIsButtonActive(true);
            } else {
                setIsButtonActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleGoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            className={`go-top ${isButtonActive ? 'active' : ''}`}
            onClick={handleGoTop}
            data-go-top
        >
            <IonIcon icon={chevronUp} />
        </button>
    );
};

export default Gotop;