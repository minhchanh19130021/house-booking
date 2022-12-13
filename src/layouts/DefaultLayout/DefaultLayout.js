import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '~/components/ScrollToTop';
import { useLocation } from 'react-router-dom';
import config from '~/config';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const user = useSelector((state) => state.authentication.login.currentUser);
    const navigate = useNavigate();
    const location = useLocation();
    const [allowRender, setAllowRender] = useState(false);

    // detect url then check type user and login
    useEffect(() => {
        if (
            [
                config.routes.personal_detail,
                config.routes.history_booking,
                config.routes.preference,
                config.routes.security,
                config.routes.payment_detail,
                config.routes.email_nofication,
                config.routes.profile,
                config.routes.review,
            ]
                .map((e) => e.split('/')?.[1])
                .includes(location.pathname.split('/')[1])
        ) {
            fetch(`http://localhost:8080/api/v1/isLogin`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    token: `Bearer ${user?.accessToken}`,
                },
                body: JSON.stringify({ uid: user?._id ? user?._id : null }),
            })
                .then((response) => response.json())
                .then((response) => {
                    if (response.success === true) {
                        if (user.type === 'host') {
                            setAllowRender(true);
                            alert('Chủ nhà không có quyền truy cập vào profile du khách');
                            navigate(config.routes.statistical);
                        }
                        setAllowRender(true);
                    } else if (response === 'Bạn chưa có mã token') {
                        setAllowRender(true);
                        navigate('/signin');
                    } else {
                        setAllowRender(true);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else if (
            [
                config.routes.statistical,
                config.routes.profile_host,
                config.routes.house_list,
                config.routes.rent_history,
                config.routes.host_manage,
                config.routes.host_new,
                config.routes.host_renting,
                config.routes.review,
            ]
                .map((e) => e.split('/')?.[1])
                .includes(location.pathname.split('/')[1])
        ) {
            fetch(`http://localhost:8080/api/v1/isLogin`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    token: `Bearer ${user?.accessToken}`,
                },
                body: JSON.stringify({ uid: user?._id ? user?._id : null }),
            })
                .then((response) => response.json())
                .then((response) => {
                    if (response.success === true) {
                        if (user?.type === 'visitor') {
                            setAllowRender(true);
                            alert('Quyền khách không được phép vào profile của chủ nhà');
                            navigate(config.routes.personal_detail);
                        }
                        setAllowRender(true);
                    } else if (response === 'Bạn chưa có mã token') {
                        setAllowRender(true);
                        navigate('/signin');
                    } else {
                        setAllowRender(true);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            setAllowRender(true);
        }
    }, [location]);
    console.log(children);

    return (
        allowRender && (
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
        )
    );
}

export default DefaultLayout;
