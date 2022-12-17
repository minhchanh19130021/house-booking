import classNames from 'classnames/bind';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './SignUp.module.scss';
import { ErrorMessage, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
    loginFailure,
    loginStart,
    loginSuccess,
    registerFailure,
    registerStart,
    registerSuccess,
} from '~/redux/authenticationSlide';
import { useGoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

const cx = classNames.bind(styles);
function SignUp() {
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

    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [villages, setVillages] = useState();
    const [dataRegister, setDataRegister] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            username: '',
            birthday: '',
            gender: '',
            email: '',
            password: '',
            confirmedPassword: '',
            address: {
                city: '',
                district: '',
                village: '',
                specifically: '',
            },
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required('Vui lòng nhập đầy đủ'),
            lastname: Yup.string().required('Vui lòng nhập đầy đủ'),
            username: Yup.string()
                .required('Tên đăng nhập không hợp lệ')
                .min(8, 'Tên đăng nhập phải có ít nhất có 6 ký tự')
                .max(15, 'Tên đăng nhập chứa nhiều nhất 15 ký tự')
                .matches(
                    /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
                    'Tên đăng nhập chỉ chứa các kí tự cho phép gồm: chữ in hoa, chữ in thường, chữ số (a-z, A-Z, 0-9), dấu gạch dưới, dấu gạch ngang và dấu chấm. Tên đăng nhập phải bắt đầu hoặc kết thúc bằng chữ cái hoặc chữ số và phải chứa ít nhất một chữ cái.',
                ),
            birthday: Yup.string().required('Vui lòng nhập đầy đủ'),
            gender: Yup.string().required('Vui lòng nhập đầy đủ'),
            email: Yup.string()
                .required('Vui lòng nhập đầy đủ')
                .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email không hợp lệ'),
            password: Yup.string()
                .required('Vui lòng nhập đầy đủ')
                .min(6, 'Mật khẩu của bạn ít nhất phải có 8 kí tự')
                .max(16, 'Mật khẩu của bạn chỉ được tối đa 16 kí tự'),
            confirmedPassword: Yup.string()
                .required('Vui lòng nhập đầy đủ')
                .oneOf([Yup.ref('password'), null], 'Mật khẩu chưa khớp'),
            address: Yup.object().shape({
                city: Yup.string()
                    .required('Vui lòng chọn thành phô')
                    .default(null)
                    .nullable()
                    .test((value) => value === null || value),
                district: Yup.string()
                    .required('Vui lòng nhập đầy đủ')
                    .default(null)
                    .nullable()
                    .test((value) => value === null || value),
                village: Yup.string()
                    .required('Vui lòng nhập đầy đủ')
                    .default(null)
                    .nullable()
                    .test((value) => value === null || value),
                specifically: Yup.string()
                    .required('Vui lòng nhập đầy đủ')
                    .default(null)
                    .nullable()
                    .test((value) => value === null || value),
            }),
        }),
        onSubmit: (values) => {
            // const entries = Object.values(formik.values.address);
            // values['address'] = entries;
            dispatch(registerStart());
            (async () => {
                const response = await fetch('http://localhost:8080/api/v1/register', {
                    method: 'POST',
                    body: JSON.stringify({
                        firstname: values.firstname,
                        lastname: values.lastname,
                        username: values.username,
                        birthday: values.birthday,
                        gender: values.gender,
                        email: values.email,
                        password: values.confirmedPassword,
                        address: values.address,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        setDataRegister(data);
                        if (data.status === true) {
                            dispatch(registerSuccess());
                            navigate('/signin');
                        } else {
                            dispatch(registerFailure());
                        }
                        return data;
                    })
                    .catch((err) => console.log(err));
            })();
        },
    });
    const validationSchema = Yup.object({
        firstname: Yup.string().required('Vui lòng nhập đầy đủ'),
        lastname: Yup.string().required('Vui lòng nhập đầy đủ'),
        username: Yup.string()
            .required('Tên đăng nhập không hợp lệ')
            .min(8, 'Tên đăng nhập phải có ít nhất có 6 ký tự')
            .max(15, 'Tên đăng nhập chứa nhiều nhất 15 ký tự')
            .matches(
                /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
                'Tên đăng nhập chỉ chứa các kí tự cho phép gồm: chữ in hoa, chữ in thường, chữ số (a-z, A-Z, 0-9), dấu gạch dưới, dấu gạch ngang và dấu chấm. Tên đăng nhập phải bắt đầu hoặc kết thúc bằng chữ cái hoặc chữ số và phải chứa ít nhất một chữ cái.',
            ),
        birthday: Yup.string().required('Vui lòng nhập đầy đủ'),
        gender: Yup.string().required('Vui lòng nhập đầy đủ'),
        email: Yup.string()
            .required('Vui lòng nhập đầy đủ')
            .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email không hợp lệ'),
        password: Yup.string()
            .required('Vui lòng nhập đầy đủ')
            .min(6, 'Mật khẩu của bạn ít nhất phải có 8 kí tự')
            .max(16, 'Mật khẩu của bạn chỉ được tối đa 16 kí tự'),
        confirmedPassword: Yup.string()
            .required('Vui lòng nhập đầy đủ')
            .oneOf([Yup.ref('password'), null], 'Mật khẩu chưa khớp'),
        address: Yup.object().shape({
            city: Yup.string()
                .required('Vui lòng chọn thành phô')
                .default(null)
                .nullable()
                .test((value) => value === null || value),
            district: Yup.string()
                .required('Vui lòng nhập đầy đủ')
                .default(null)
                .nullable()
                .test((value) => value === null || value),
            village: Yup.string()
                .required('Vui lòng nhập đầy đủ')
                .default(null)
                .nullable()
                .test((value) => value === null || value),
            specifically: Yup.string()
                .required('Vui lòng nhập đầy đủ')
                .default(null)
                .nullable()
                .test((value) => value === null || value),
        }),
    });
    useEffect(() => {
        axios
            .get(`https://provinces.open-api.vn/api/?depth=1`)
            .then((res) => {
                setProvinces(res.data);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        const city = formik.values.address.city.split('_')[0];

        axios
            .get(`https://provinces.open-api.vn/api/p/${city}?depth=2`)
            .then((res) => {
                setDistricts(res.data.districts);
            })
            .catch((error) => console.log(error));
    }, [formik.values.address.city]);
    useEffect(() => {
        const district = formik.values.address.district.split('_')[0];
        axios
            .get(`https://provinces.open-api.vn/api/d/${district}?depth=2`)
            .then((res) => {
                setVillages(res.data.wards);
            })
            .catch((error) => console.log(error));
    }, [formik.values.address.district]);
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
            <form className={cx('form-login')} onSubmit={formik.handleSubmit}>
                <div className={cx('header')}>
                    <img src="https://townhub.kwst.net/images/logo3.png" alt="logo" />
                    <h3>Chào mừng bạn đến với hệ thống đăng ký</h3>
                </div>
                <div className="row">
                    <div className="col l-12 m-12 c-12">
                        {dataRegister?.status === false && <p className={cx('warning')}>{dataRegister?.msg}</p>}
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-12')}>
                        <label htmlFor="firstname">Họ</label>
                        <input
                            name="firstname"
                            id="firstname"
                            value={formik.values.firstname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                        />
                        {formik.touched.firstname && formik.errors.firstname && (
                            <p className={cx('alert-message')}>{formik.errors.firstname}</p>
                        )}
                    </div>
                    <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-12')}>
                        <label htmlFor="lastname">Tên*</label>
                        <input
                            name="lastname"
                            id="lastname"
                            value={formik.values.lastname.trim()}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                        />
                        {formik.touched.lastname && formik.errors.lastname && (
                            <p className={cx('alert-message')}>{formik.errors.lastname}</p>
                        )}
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label htmlFor="username">Tên đăng nhập</label>
                        <input
                            name="username"
                            id="username"
                            value={formik.values.username.trim()}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                        />
                        {formik.touched.username && formik.errors.username && (
                            <p className={cx('alert-message')}>{formik.errors.username}</p>
                        )}
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-12')}>
                        <label htmlFor="birthday">Ngày sinh*</label>
                        <input
                            name="birthday"
                            id="birthday"
                            value={formik.values.birthday.trim()}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="date"
                            max={new Date().toISOString().split('T')[0]}
                        />
                        {formik.errors.birthday && formik.touched.birthday && (
                            <p className={cx('alert-message')}>{formik.errors.birthday}</p>
                        )}
                    </div>
                    <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-12')}>
                        <label>Giới tính</label>

                        <select
                            name="gender"
                            value={formik.values.gender}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="">---Chọn giới tính---</option>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ </option>
                        </select>
                        {formik.touched.gender && formik.errors.gender && (
                            <p className={cx('alert-message')}>{formik.errors.gender}</p>
                        )}
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label htmlFor="email">Địa chỉ email</label>
                        <input
                            name="email"
                            id="email"
                            value={formik.values.email.trim()}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="email"
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className={cx('alert-message')}>{formik.errors.email}</p>
                        )}
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label htmlFor="password">Mật khẩu</label>
                        <input
                            name="password"
                            id="password"
                            value={formik.values.password.trim()}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="password"
                        />
                        {formik.errors.password && formik.touched.password && (
                            <p className={cx('alert-message')}>{formik.errors.password}</p>
                        )}
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label htmlFor="confirmedPassword">Nhập lại mật khẩu</label>
                        <input
                            name="confirmedPassword"
                            id="confirmedPassword"
                            value={formik.values.confirmedPassword.trim()}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="password"
                        />
                        {formik.errors.confirmedPassword && formik.touched.confirmedPassword && (
                            <p className={cx('alert-message')}>{formik.errors.confirmedPassword}</p>
                        )}
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-4', 'm-4', 'c-12')}>
                        <label>Tỉnh</label>
                        <select
                            name="address.city"
                            id="address.city"
                            value={formik.values.address.city.trim()}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="">--Chọn huyện--</option>

                            {provinces?.map((province) => (
                                <option
                                    key={province.code}
                                    value={province?.code + '_' + province?.name}
                                    id={province.code}
                                >
                                    {province.name}
                                </option>
                            ))}
                        </select>
                        {formik.errors?.address?.city && formik.touched.address?.city && (
                            <p className={cx('alert-message')}>{formik.errors?.address?.city}</p>
                        )}
                    </div>
                    <div className={cx('form-group', 'col', 'l-4', 'm-4', 'c-12')}>
                        <label>Huyện</label>
                        <select
                            name="address.district"
                            id="address.district"
                            value={formik.values.address.district}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="">--Chọn huyện--</option>
                            {districts?.map((district) => (
                                <option key={district.code} value={district?.code + '_' + district?.name}>
                                    {district.name}
                                </option>
                            ))}
                        </select>
                        {formik.errors?.address?.district && formik.touched.address?.district && (
                            <p className={cx('alert-message')}>{formik.errors?.address.district}</p>
                        )}
                    </div>
                    <div className={cx('form-group', 'col', 'l-4', 'm-4', 'c-12')}>
                        <label>Xã</label>
                        <select
                            name="address.village"
                            id="address.village"
                            value={formik.values.address.village}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="">--Chọn xã--</option>

                            {villages?.map((village) => (
                                <option
                                    key={village?.code}
                                    value={village?.code + '_' + village?.name}
                                    id={village?.code}
                                >
                                    {village?.name}
                                </option>
                            ))}
                        </select>
                        {formik.errors?.address?.village && formik.touched.address?.village && (
                            <p className={cx('alert-message')}>{formik.errors?.address?.village}</p>
                        )}
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label htmlFor="address">Địa chỉ cụ thể (bao gồm số nhà, đường, hẻm)</label>
                        <textarea
                            name="address.specifically"
                            id="address.specifically"
                            value={formik.values.address.specifically.trim()}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                        />
                        {formik.errors?.address?.specifically && formik.touched.address?.specifically && (
                            <p className={cx('alert-message')}>{formik.errors?.address?.specifically}</p>
                        )}
                    </div>
                </div>

                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-3', 'm-3', 'c-3')}>
                        <Button large type="submit">
                            Đăng Ký
                        </Button>
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-8', 'm-12', 'c-12')}>
                        <span>
                            Bạn đã có tài khoản?
                            <NavLink to="/signin" className={cx('link-signin')}>
                                Đăng nhập
                            </NavLink>
                        </span>
                    </div>
                    <div className={cx('form-group', 'col', 'l-4', 'm-12', 'c-12')}>
                        <NavLink to="/signin" className={cx('forgot-link')}>
                            Quên mật khẩu
                        </NavLink>
                    </div>
                </div>

                {/* <div className={cx('row')}>
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
                </div> */}
            </form>
        </div>
    );
}

export default SignUp;
