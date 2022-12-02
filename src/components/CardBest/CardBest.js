import classNames from 'classnames/bind';
import styles from './CardBest.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function CardBest({ bg, title, desc, link }) {
    return (
        // 'col', 'l-4', 'm-6', 'c-12',
        <div className={cx('banner')}>
            <div className={cx('img')}>
                <img src={bg} alt="card-img" />
                <div className={cx('overlay')}></div>
            </div>
            <div className={cx('description')}>
                <NavLink to={link} className={cx('link')}>
                    {title}
                </NavLink>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default CardBest;
