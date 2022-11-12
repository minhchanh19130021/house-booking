import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ScrollToTop.module.scss';

const cx = classNames.bind(styles);

function ScrollToTop() {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 70) {
            setVisible(true);
        } else if (scrolled <= 70) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }} className={cx('btn-toTop')}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
            </svg>
        </button>
    );
}

export default ScrollToTop;
