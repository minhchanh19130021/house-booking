import classNames from 'classnames/bind';
import styles from '../Header/Header.module.scss';
import Button from '~/components/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import HeaderSearch from './HeaderSearch';
import { useDispatch, useSelector } from 'react-redux';
import { logoutFailure, logoutStart, logoutSuccess } from '~/redux/authenticationSlide';

const cx = classNames.bind(styles);
function Header() {
    const [searchModal, setSearchModal] = useState(false);
    const user = useSelector((state) => state.authentication.login.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleVisibleModal = () => {
        setSearchModal((searchModal) => !searchModal);
    };

    const handleLogout = () => {
        dispatch(logoutStart());
        (async () => {
            await fetch(`http://localhost:8080/api/v1/logout`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    token: `Bearer ${user?.accessToken}`,
                },
            })
                .then((response) => response.json())
                .then((result) => {
                    console.log(result);
                    if (result.status) {
                        dispatch(logoutSuccess(result));
                        navigate('/signin');
                    } else {
                        dispatch(logoutFailure());
                    }
                    return result;
                })
                .catch((err) => {
                    dispatch(logoutFailure());
                    console.log(err);
                });
        })();
    };
    return (
        <div className={cx('wrapper', 'grid')}>
            <div className={cx('left')}>
                <NavLink to="/" className={cx('logo')}>
                    <img src="https://townhub.kwst.net/images/logo.png" alt="logo-img" />
                </NavLink>
                <div className={cx('search')} onClick={handleVisibleModal}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>

                    <p className={cx('search-title')}>Tìm kiếm</p>
                </div>
            </div>
            <div className={cx('', '', 'right')}>
                {/* <HeaderLanguage /> */}

                <Button
                    to="/signup"
                    className={cx('sign-in')}
                    leftIcon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                            />
                        </svg>
                    }
                >
                    Đăng Ký
                </Button>
                {user?.status && user !== null ? (
                    <div className={cx('user')}>
                        <img
                            src="https://a0.muscache.com/im/pictures/user/feac4078-fdbd-4a28-bf73-a11bc4019781.jpg?im_w=240"
                            alt="user-avatar"
                            className={cx('user-avatar')}
                        />

                        <p className={cx('username')}>Xin chào, {user?.username}</p>
                        <div className={cx('menu-user')}>
                            <li className={cx('menu-item')}>
                                <NavLink to="/personal-detail">Trang cá nhân</NavLink>
                            </li>
                            <li className={cx('menu-item')} onClick={handleLogout}>
                                Đăng xuất
                            </li>
                        </div>
                    </div>
                ) : (
                    <Button
                        to="/signin"
                        className={cx('sign-in')}
                        leftIcon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                />
                            </svg>
                        }
                    >
                        Đăng Nhập
                    </Button>
                )}

                <Button
                    to="/signup-owner"
                    large
                    className={cx('owner-register')}
                    leftIcon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                            />
                        </svg>
                    }
                >
                    Đăng Ký Chủ Nhà
                </Button>
            </div>
            {searchModal && <HeaderSearch />}
        </div>
    );
}

export default Header;
