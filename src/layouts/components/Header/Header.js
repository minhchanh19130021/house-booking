import classNames from 'classnames/bind';
import styles from '../Header/Header.module.scss';
import Button from '~/components/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HeaderSearch from './HeaderSearch';
import { useDispatch, useSelector } from 'react-redux';
import { logoutFailure, logoutStart, logoutSuccess } from '~/redux/authenticationSlide';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import useMatchMedia from 'react-use-match-media';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '~/config/firebase';
import { setAvatar } from '~/redux/avatarSlice';

const cx = classNames.bind(styles);
function Header() {
    const [searchModal, setSearchModal] = useState(false);
    const user = useSelector((state) => state.authentication.login.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [modalMenu, setModalMenu] = useState(false);
    modalMenu ? disableBodyScroll(document) : enableBodyScroll(document);
    const isDesktopResolution = useMatchMedia('(max-width:992px)', true);
    let avatar = useSelector((state) => state.avatar.avatar.url);

    // get avatar from firebase
    useEffect(() => {
        if (user?._id) {
            fetch(`http://localhost:8080/api/v1/user/get`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    token: `Bearer ${user?.accessToken}`,
                },
                body: JSON.stringify({ uid: user._id }),
            })
                .then((response) => response.json())
                .then((response) => {
                    if (response.success) {
                        getDownloadURL(ref(storage, `user/${user._id}/${response.data[0]?.avatar}`))
                            .then((link) => {
                                dispatch(setAvatar({ url: link }));
                            })
                            .catch((error) => {
                                dispatch(
                                    setAvatar({
                                        url: 'https://i.pinimg.com/originals/e2/a8/31/e2a831a40846322742739537c9aaec1c.png',
                                    }),
                                );
                            });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

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
                    if (result.status) {
                        // googleLogout();
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
    useEffect(() => {
        document.addEventListener('scroll', () => {
            const scrollCheck = window.scrollY < 1;
            if (scrollCheck) {
                setSearchModal(false);
            }
        });
    });

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
            {!isDesktopResolution && (
                <div className={cx('right')}>
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
                            <img src={avatar} alt="user-avatar" className={cx('user-avatar')} />

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
            )}
            {searchModal && <HeaderSearch />}
            {isDesktopResolution && (
                <div className={cx('right-mobile')}>
                    <button className={cx('btn-bar')} onClick={() => setModalMenu(true)}>
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
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                    {modalMenu && (
                        <div className={cx('modal-menu')}>
                            <div className={cx('overlay')} onClick={() => setModalMenu(false)}></div>
                            <div className={cx('modal-content')}>
                                {user?.status && user !== null ? (
                                    <div className={cx('menu')}>
                                        <NavLink
                                            to="/personal-detail"
                                            className={cx('menu-item')}
                                            onClick={() => setModalMenu(false)}
                                        >
                                            Xin chào! {user?.username}
                                        </NavLink>
                                        <NavLink
                                            to={
                                                user.type === 'host'
                                                    ? '/statistical'
                                                    : user.type === 'visitor'
                                                    ? '/personal-detail'
                                                    : '/'
                                            }
                                            className={cx('menu-item')}
                                            onClick={() => setModalMenu(false)}
                                        >
                                            Trang cá nhân
                                        </NavLink>
                                        <NavLink
                                            to="/personal-detail"
                                            className={cx('menu-item')}
                                            onClick={() => setModalMenu(false)}
                                        >
                                            Lịch sử đặt nhà
                                        </NavLink>
                                        <NavLink className={cx('menu-item')} onClick={handleLogout}>
                                            Đăng xuất
                                        </NavLink>
                                    </div>
                                ) : (
                                    <div className={cx('menu')}>
                                        <NavLink
                                            to="/signin"
                                            className={cx('menu-item')}
                                            onClick={() => setModalMenu(false)}
                                        >
                                            Đăng nhập
                                        </NavLink>
                                        <NavLink
                                            to="/signup"
                                            className={cx('menu-item')}
                                            onClick={() => setModalMenu(false)}
                                        >
                                            Đăng ký
                                        </NavLink>
                                        <NavLink
                                            to="/signup-owner"
                                            className={cx('menu-item')}
                                            onClick={() => setModalMenu(false)}
                                        >
                                            Đăng ký chủ nhà
                                        </NavLink>
                                        <div className={cx('menu-button')} onClick={() => setModalMenu(false)}>
                                            <Button className={cx('btn-close')}>Đóng</Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Header;
