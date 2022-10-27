import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

import classNames from 'classnames/bind';
import styles from '../DefaultLayout/DefaultLayout.module.scss';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className="box-border p-0 m-0 h-full">
            <Header />
            {children}
            {/* <Footer /> */}
        </div>
    );
}

export default DefaultLayout;
