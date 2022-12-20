import classNames from 'classnames/bind';
import styles from './ForgotPassword.module.scss';
import Button from '~/components/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ForgotPassword() {
    const [dataReset, setDataReset] = useState();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Vui lòng nhập đầy đủ'),
        }),
        onSubmit: (values, e) => {
            (async () => {
                const response = await fetch(`http://localhost:8080/api/v1/reset-password`, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: values.email,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {
                        setDataReset(data);
                        if (data.status === true) {
                            formik.values.email = '';
                            setTimeout(() => {
                                navigate('/signin');
                            }, 3000);
                        }
                        return data;
                    })
                    .catch((err) => console.log(err));
            })();
        },
    });
    return (
        <div className={cx('wrapper')}>
            <form className={cx('form-login')} onSubmit={formik.handleSubmit}>
                <div className={cx('header')}>
                    <img src="https://townhub.kwst.net/images/logo3.png" alt="logo" />
                    <h3>Vui lòng điền đầy đủ thông tin</h3>
                </div>

                <div className={cx('body')}>
                    <div className="row">
                        <div className="col l-12 m-12 c-12">
                            {dataReset?.status === false && <p className={cx('warning')}>{dataReset?.msg}</p>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l-12 m-12 c-12">
                            {dataReset?.status === true && <p className={cx('success')}>{dataReset?.msg}</p>}
                        </div>
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="username">Địa chỉ email</label>
                        <input
                            name="email"
                            id="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            type="text"
                        />
                        {formik.errors.email && <p className={cx('alert-message')}>{formik.errors.email}</p>}
                    </div>
                    <Button type="submit" large>
                        Gửi
                    </Button>
                    <div className={cx('function')}>
                        <NavLink to="/signup">Tạo tài khoản</NavLink>
                        <NavLink to="/signin" className={cx('forgot-password')}>
                            Đăng nhập
                        </NavLink>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ForgotPassword;
