import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '~/components/ScrollToTop';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header />
            </div>
            <div className={cx('content')}>{children}</div>
            <div className={cx('footer')}>
                <Footer />
            </div>
            {/* button scroll to top  */}
            <ScrollToTop />
            {/* button scroll to top  */}
        </div>
    );
}

export default DefaultLayout;
