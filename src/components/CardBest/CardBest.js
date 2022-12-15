import classNames from 'classnames/bind';
import styles from './CardBest.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function CardBest({ bg, title, desc, link }) {
    return (
        <NavLink to={link}>
            <div className={cx('banner')}>
                <div className={cx('img')}>
                    <img src={bg} alt="card-img" />
                    <div className={cx('overlay')}></div>
                </div>
                <div className={cx('description')}>
                    <p className={cx('link')}>{title}</p>
                    <p>{desc}</p>
                </div>
            </div>
        </NavLink>
    );
}

export default CardBest;
