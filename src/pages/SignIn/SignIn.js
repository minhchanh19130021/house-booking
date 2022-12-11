import classNames from 'classnames/bind';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './SignIn.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '~/redux/authenticationSlide';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';

const cx = classNames.bind(styles);
function SignIn() {
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
    // const [userInfoGoogle, setUserInfoGoogle] = useState();
    // const login = useGoogleLogin({
    //     onSuccess: async (tokenResponse) => {
    //         const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
    //             headers: { Authorization: `Bearer ${tokenResponse?.access_token}` },
    //         });
    //         dispatch(loginStart());
    //         console.log(userInfoGoogle);
    //         const ress = await fetch(`http://localhost:8080/api/v1/login-google`, {
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 email: userInfo?.data.email,
    //                 firstname: userInfo?.data.family_name,
    //                 lastname: userInfo?.data.given_name,
    //                 username: userInfo?.data.email.split('@')[0],
    //                 picture: userInfo?.data.picture,
    //             }),
    //             headers: {
    //                 'Content-type': 'application/json; charset=UTF-8',
    //             },
    //         })
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 console.log(data);
    //             })
    //             .catch((err) => console.log(err));

    //         // await axios({
    //         //     method: 'POST',
    //         //     url: 'http://localhost:8080/api/v1/login-google',
    //         //     data: {
    //         //         email: userInfoGoogle?.data.email,
    //         //         firstname: userInfoGoogle?.data.family_name,
    //         //         lastname: userInfoGoogle?.data.given_name,
    //         //         username: userInfoGoogle?.data.email.split('@')[0],
    //         //         picture: userInfoGoogle?.data.picture,
    //         //     },
    //         // }).then((response) => {
    //         //     console.log(response);
    //         //     dispatch(loginSuccess(response.data.user));
    //         //     navigate('/');
    //         // });
    //         // console.log(userInfo);
    //     },
    //     onError: (errorResponse) => console.log(errorResponse),
    // });

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
                    <div className={cx('login-social')}>
                        {/* <Button className={cx('btn-social', 'facebook')}>Facebook</Button> */}
                        {/* <Button className={cx('btn-social', 'google')}>Google</Button> */}
                    </div>
                    <div className="grid">
                        <div className="row">
                            <div className="col l-6 m-12 c-12">
                                <GoogleLogin
                                    onSuccess={(credentialResponse) => {
                                        dispatch(loginStart());
                                        axios({
                                            method: 'POST',
                                            url: 'http://localhost:8080/api/v1/login-google',
                                            data: { idToken: credentialResponse.credential },
                                        }).then((response) => {
                                            dispatch(loginSuccess(response.data.user));
                                            navigate('/');
                                        });
                                    }}
                                    onError={() => {
                                        console.log('Login Failed');
                                        dispatch(loginFailure());
                                    }}
                                    useOneTap
                                />
                            </div>
                            <div className="col l-6 n-12 c-12">
                                {/* <FacebookLogin
                                    appId="1088597931155576"
                                    autoLoad={true}
                                    fields="name,email,picture"
                                    onClick={componentClicked}
                                    callback={responseFacebook}
                                    cssClass="btn-social"
                                    icon="fa-facebook"
                                /> */}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
