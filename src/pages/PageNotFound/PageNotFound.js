import classNames from 'classnames/bind';
import styles from './PageNotFound.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function PageNotFound() {
    return (
        <div className={cx('not-found')}>
            <img src="https://reoton.com.ua/images/404_animation.gif" alt="not-found" />
            <Link to="/" className="/">
                <h1>Về trang chủ</h1>
            </Link>
        </div>
    );
}

export default PageNotFound;
