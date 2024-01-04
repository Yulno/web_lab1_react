import React, { useState } from 'react';
import styles from './slider.module.css';
import arrowleft from "../../assets/left_arrow.png";
import arrowright from "../../assets/right_arrow.png";
import customer from "../../assets/customer.png"
import dots from "../../assets/dots.png";

interface IProps {
    className?: string;
}
const Slider: React.FC<IProps> = ({className}) => {
    const reviews = [
        {
            name: 'Edward Newgate',
            position: 'Founder Circle',
            info: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”',
        },
        {
            name: 'Antony Davidson',
            position: 'Patient',
            info: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”',
        },
        {
            name: 'Frances Bauldwin',
            position: 'Director',
            info: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”',
        },
        {
            name: 'Gregoriy Gorgon',
            position: 'Doctor',
            info: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”',
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <>
            <div className={`${className} ${styles.container}`}>
                <div className={styles.card}>
                    <div className={styles.title}>
                        What our customers are saying
                    </div>
                    <div className={styles.line_container}><div className={styles.line}></div></div>
                    <div className={styles.customer_container}>
                        <div className={styles.customer}>
                            <img src={customer} alt="customer" className={styles.customer_photo} />
                        </div>
                        <div className={styles.customer_details}>
                            <div className={styles.name}>
                                {reviews[currentSlide].name}
                            </div>
                            <div className={styles.pos_at_work}>
                                {reviews[currentSlide].position}
                            </div>
                        </div>
                        <div className={styles.info}>
                            {reviews[currentSlide].info}
                        </div>
                        <img src={dots} alt="dots" className={styles.dots} />
                        <img src={dots} alt="dots" className={styles.dotsblue} />
                    </div>
                </div>
            </div>
            <div className={styles.slider_dots}>
                <div className={styles.modal_nav_buttons}>
                    <button
                        className={`${styles.modal_nav_button} ${currentSlide === 0 ? styles.disabled : ''}`}
                        onClick={() => handleSlideChange(currentSlide - 1)}
                        disabled={currentSlide === 0}
                    >
                        <img src={arrowleft} alt="Previous"/>
                    </button>
                    <div className={styles.dot_indicator}>
                        {reviews.map((_, index) => (
                            <div
                                key={index}
                                className={`${styles.dot} ${index === currentSlide ? styles.active_dot : ''}`}
                                onClick={() => handleSlideChange(index)}
                            />
                        ))}
                    </div>
                    <button
                        className={`${styles.modal_nav_button} ${currentSlide === reviews.length - 1 ? styles.disabled : ''}`}
                        onClick={() => handleSlideChange(currentSlide + 1)}
                        disabled={currentSlide === reviews.length - 1}
                    >
                        <img src={arrowright} alt="Next"/>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Slider;
