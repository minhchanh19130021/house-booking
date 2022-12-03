import classNames from 'classnames/bind';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './SignUp.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { registerFailure, registerStart, registerSuccess } from '~/redux/authenticationSlide';

const cx = classNames.bind(styles);
function SignUp() {
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
            username: Yup.string().required('Vui lòng nhập đầy đủ'),
            birthday: Yup.string().required('Vui lòng nhập đầy đủ'),
            gender: Yup.string().required('Vui lòng nhập đầy đủ'),
            email: Yup.string()
                .required('Vui lòng nhập đầy đủ')
                .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email không hợp lệ'),
            password: Yup.string().required('Vui lòng nhập đầy đủ'),
            confirmedPassword: Yup.string()
                .required('Vui lòng nhập đầy đủ')
                .oneOf([Yup.ref('password'), null], 'Mật khẩu chưa khớp'),
            // address: Yup.string().required('Vui lòng nhập đầy đủ'),
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
                // console.log(res.data.districts);
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
                            type="text"
                        />

                        {formik.errors.firstname && <p className={cx('alert-message')}>{formik.errors.firstname}</p>}
                    </div>
                    <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-12')}>
                        <label htmlFor="lastname">Tên*</label>
                        <input
                            name="lastname"
                            id="lastname"
                            value={formik.values.lastname}
                            onChange={formik.handleChange}
                            type="text"
                        />
                        {formik.errors.lastname && <p className={cx('alert-message')}>{formik.errors.lastname}</p>}
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-12')}>
                        <label htmlFor="username">Tên tài khoản</label>
                        <input
                            name="username"
                            id="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            type="text"
                        />
                        {formik.errors.username && <p className={cx('alert-message')}>{formik.errors.username}</p>}
                    </div>
                    <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-12')}>
                        <label htmlFor="birthday">Ngày sinh*</label>
                        <input
                            name="birthday"
                            id="birthday"
                            value={formik.values.birthday}
                            onChange={formik.handleChange}
                            type="date"
                            max={new Date().toISOString().split('T')[0]}
                        />
                        {formik.errors.birthday && <p className={cx('alert-message')}>{formik.errors.birthday}</p>}
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label>Giới tính</label>
                        <select name="gender" value={formik.values.gender} onChange={formik.handleChange}>
                            <option value="">---Chọn giới tính---</option>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ </option>
                        </select>
                        {formik.errors.gender && <p className={cx('alert-message')}>{formik.errors.gender}</p>}
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label htmlFor="email">Địa chỉ email</label>
                        <input
                            name="email"
                            id="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            type="email"
                        />
                        {formik.errors.email && <p className={cx('alert-message')}>{formik.errors.email}</p>}
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label htmlFor="password">Mật khẩu</label>
                        <input
                            name="password"
                            id="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            type="password"
                        />
                        {formik.errors.password && <p className={cx('alert-message')}>{formik.errors.password}</p>}
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label htmlFor="confirmedPassword">Nhập lại mật khẩu</label>
                        <input
                            name="confirmedPassword"
                            id="confirmedPassword"
                            value={formik.values.confirmedPassword}
                            onChange={formik.handleChange}
                            type="password"
                        />
                        {formik.errors.confirmedPassword && (
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
                            value={formik.values.address.city}
                            onChange={formik.handleChange}
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
                    </div>
                    <div className={cx('form-group', 'col', 'l-4', 'm-4', 'c-12')}>
                        <label>Huyện</label>
                        <select
                            name="address.district"
                            id="address.district"
                            value={formik.values.address.district}
                            onChange={formik.handleChange}
                        >
                            <option value="">--Chọn huyện--</option>
                            {districts?.map((district) => (
                                <option key={district.code} value={district?.code + '_' + district?.name}>
                                    {district.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={cx('form-group', 'col', 'l-4', 'm-4', 'c-12')}>
                        <label>Xã</label>
                        <select
                            name="address.village"
                            id="address.village"
                            value={formik.values.address.village}
                            onChange={formik.handleChange}
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
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label htmlFor="address">Địa chỉ cụ thể (bao gồm số nhà, đường, hẻm)</label>
                        <textarea
                            name="address.specifically"
                            id="address.specifically"
                            value={formik.values.address.specifically}
                            onChange={formik.handleChange}
                            type="text"
                        />
                        {formik.errors.address && <p className={cx('alert-message')}>{formik.errors.address}</p>}
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

                <div className={cx('row')}>
                    <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                        <p className={cx('login-orther-text')}>Hoặc tiếp tục với</p>
                    </div>
                </div>

                <div className={cx('login-social')}>
                    <Button className={cx('btn-social', 'facebook')}>Facebook</Button>
                    <Button className={cx('btn-social', 'google')}>Google</Button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
