import classNames from 'classnames/bind';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './SignIn.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '~/redux/authenticationSlide';
import { setAvatar } from '~/redux/avatarSlice';
import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useGoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '~/config/firebase';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

const cx = classNames.bind(styles);
function SignIn() {
    const user = useSelector((state) => state.authentication.login.currentUser);

    useEffect(() => {
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
                    navigate('/');
                } else if (response === 'Bạn chưa có mã token') {
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [dataLogin, setDataLogin] = useState();
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Vui lòng nhập đầy đủ'),
            password: Yup.string().required('Vui lòng nhập đầy đủ'),
        }),
        onSubmit: (values) => {
            (async () => {
                dispatch(loginStart());
                await fetch(`http://localhost:8080/api/v1/login`, {
                    method: 'POST',
                    body: JSON.stringify({
                        username: values?.username,
                        password: values?.password,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((result) => {
                        console.log(result);
                        setDataLogin(result);
                        if (result.status === true) {
                            dispatch(loginSuccess(result));
                            getDownloadURL(ref(storage, `user/${result?._id}/${result?.avatar}`))
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
                            navigate('/personal-detail');
                        } else {
                            dispatch(loginFailure());
                        }
                        return result;
                    })
                    .catch((err) => {
                        dispatch(loginFailure());
                    });
            })();
        },
    });

    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            dispatch(loginStart());

            console.log(tokenResponse);
            var userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
            });

            axios({
                method: 'POST',
                url: 'http://localhost:8080/api/v1/login-googles',
                data: {
                    email: userInfo.data?.email,
                    email_verified: userInfo.data?.email_verified,
                    family_name: userInfo.data?.family_name,
                    given_name: userInfo.data?.given_name,
                    name: userInfo.data?.name,
                    avatar: userInfo.data?.picture,
                },
            })
                .then((response) => {
                    dispatch(loginSuccess(response.data.user));
                    navigate('/');
                })
                .catch(() => {
                    dispatch(loginFailure());
                });
        },
        onError: (errorResponse) => dispatch(loginFailure()),
    });
    const responseFacebook = (response) => {
        dispatch(loginStart());
        axios({
            method: 'POST',
            url: 'http://localhost:8080/api/v1/login-facebook',
            data: { accessToken: response.accessToken, userID: response.id },
        })
            .then((response) => {
                dispatch(loginSuccess(response.data.user));
                navigate('/');
            })
            .catch(() => {
                dispatch(loginFailure());
            });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('', 'form-login')}>
                <div className={cx('header')}>
                    <img src="https://townhub.kwst.net/images/logo3.png" alt="logo" />
                    <h3>Chào mừng bạn đến với hệ thống đăng nhập</h3>
                </div>

                <form className={cx('body')} onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col l-12 m-12 c-12">
                            {dataLogin?.status === false && <p className={cx('warning')}>{dataLogin?.msg}</p>}
                        </div>
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="username">Tên đăng nhập*</label>
                        <input
                            name="username"
                            id="username"
                            type="text"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.username && <p className={cx('alert-message')}>{formik.errors.username}</p>}
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="password">Mật khẩu *</label>
                        <input
                            name="password"
                            id="password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.password && <p className={cx('alert-message')}>{formik.errors.password}</p>}
                    </div>
                    <Button large type="submit">
                        Đăng Nhập
                    </Button>
                    <div className={cx('function')}>
                        <NavLink to="/signup">Tạo tài khoản</NavLink>
                        <NavLink to="/forgot-password" className={cx('forgot-password')}>
                            Quên mật khẩu?
                        </NavLink>
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                            <p className={cx('login-orther-text')}>Hoặc tiếp tục với</p>
                        </div>
                    </div>

                    <div className="grid">
                        <div className="row">
                            <div className="col l-12 m-12 c-12">
                                <div className={cx('btn-social')}>
                                    <GoogleLoginButton onClick={() => login()} className={cx('btn-social')}>
                                        <strong> ĐĂNG NHẬP GOOGLE</strong>
                                    </GoogleLoginButton>
                                </div>
                            </div>
                            <div className="col l-12 m-12 c-12">
                                <FacebookLoginButton>
                                    <FacebookLogin
                                        appId="5791810414235073"
                                        fields="name,email,picture"
                                        callback={responseFacebook}
                                        textButton="Đăng nhập với Facebook"
                                        size="small"
                                        buttonStyle={{ width: '100%', height: '100%', textAlign: 'left' }}
                                    />
                                </FacebookLoginButton>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
