import React from 'react';
import styles from './servicecard.module.css';
import line from "../../assets/line.png";
import consultationphoto from "../../assets/consultation_photo.png";
import detailsinfo from "../../assets/details_info_photo.png";
import emergencycore from "../../assets/emergency_core_photo.png";
import onlinepharmacy from "../../assets/online_pharmacy_photo.png";
import searchdoctor from "../../assets/search_doctor_photo.png";
import trackingphoto from "../../assets/tracking_photo.png";
import cloudphoto from  "../../assets/cloudphoto_servicecard.png";
import dots5 from "../../assets/dots5.png";
import Button from "../button/button.tsx";

interface IProps {
    className?: string;
}

const ServiceCard: React.FC<IProps> = ({className}) => {
    const photos: string[]  = [
        searchdoctor,
        onlinepharmacy,
        consultationphoto,
        detailsinfo,
        emergencycore,
        trackingphoto
    ];

    const titles:string[] = [
        'Search doctor',
        'Online pharmacy',
        'Consultation',
        'Details info',
        'Emergency care',
        'Tracking'
    ];

    const subtitles:string[]  = [
        'Choose your doctor from thousands of specialist, general, and trusted hospitals',
        'Buy your medicines with our mobile application with a simple delivery system',
        'Free consultation with our trusted doctors and get the best recommendations',
        'Free consultation with our trusted doctors and get the best recommendations',
        'You can get 24/7 urgent care for yourself or your children and your lovely family',
        'Track and save your medical history and health data'
    ];

    return (
        <div className={`${className} ${styles.container}`}>
            <img src={cloudphoto} alt="cloudphoto" className={styles.cloudphoto} />
            <div className={styles.title}>
                Our services
            </div>
            <img src={line} alt="line" className={styles.line} />
            <div className={styles.subtitle}>
                We provide to you the best choiches for you.
                Adjust it to your health needs and make sure your undergo treatment <br/>
                with our highly qualified doctors you can consult with us which
                type of service is suitable for your health
            </div>
            <div className={styles.cardContainer}>
                {photos.map((photo, index) => (
                    <div className={styles.card} key={index}>
                        <img src={photo} alt={`Photo ${index}`} className={`${styles.photo} ${styles.withMargin}`} />
                        <h2 className={`${styles.title_card} ${styles.withMargin}`}>{titles[index]}</h2>
                        <p className={`${styles.subtitle_card} ${styles.withMargin}`}>
                            {subtitles[index]}
                        </p>
                    </div>
                ))}
            </div>
            <img src={dots5} alt="dots5" className={styles.dots5} />
            <Button className={styles.button} textColor = "#458FF6" color="#FFFFFF" buttonText="Learn more" />
        </div>
    );
}

export default ServiceCard;