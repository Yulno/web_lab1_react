import React from "react";
import styles from './header.module.css';
import illustration from '../../assets/illustration.png';
import dots from '../../assets/dots.png';
import Button from "../button/button.tsx";

interface IProps {
    className?: string;
}

const Header: React.FC<IProps> = ({className}) => {
    return (
        <div className={`${className} ${styles.container}`}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <div className={styles.circle}>
                        <span className={styles.letter}>T</span>
                    </div>
                    <div className={styles.brand}>
                        HealthCare
                    </div>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li>
                            <a href="/" className={styles.navLink}>Home</a>
                        </li>
                        <li>
                            <a href="/find_a_doctor" className={styles.navLink}>Find a doctor</a>
                        </li>
                        <li>
                            <a href="/apps" className={styles.navLink}>Apps</a>
                        </li>
                        <li>
                            <a href="/testimonials" className={styles.navLink}>Testimonials</a>
                        </li>
                        <li>
                            <a href="/about_us" className={styles.navLink}>About us</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <img src={dots} alt="dots" className={styles.dots} />
            <div className={styles.contentBlock}>
                <div className={styles.textContainer}>
                    <div className={styles.text}>
                        <h1> Virtual healthcare<br/> for you </h1>
                        <h3>
                            Our service provides progressive, and <br/> affordable healthcare,
                            accessible on mobile <br/> and online for everyone
                        </h3>
                        <Button className={styles.myCustomButton} textColor = "#ffffff" color="#458FF6" buttonText="Consult today"/>
                    </div>
                    <img src={illustration} alt="Illustration" className={styles.illustration} />
                </div>
            </div>
        </div>
    );
};

export default Header;