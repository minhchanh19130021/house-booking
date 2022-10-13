import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

import classNames from 'classnames/bind';
import styles from '../DefaultLayout/DefaultLayout.module.scss';
import { Link, NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;
