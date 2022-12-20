import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './ForgotPassword.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
const cx = classNames.bind(styles);

function NewPassword() {
    const { id, token } = useParams();
    const [statusUpdate, setStatusUpdate] = useState();
    const navigate = useNavigate();
   
    const formik = useFormik({
        initialValues: {
            password: '',
            confirmedPassword: '',
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .required('Vui lòng nhập đầy đủ')
                .min(6, 'Mật khẩu của bạn ít nhất phải có 6 kí tự')
                .max(16, 'Mật khẩu của bạn chỉ được tối đa 16 kí tự'),
            confirmedPassword: Yup.string()
                .required('Vui lòng nhập đầy đủ')
                .oneOf([Yup.ref('password'), null], 'Mật khẩu chưa khớp'),
        }),
        onSubmit: (values, e) => {
            (async () => {
                const response = await fetch('http://localhost:8080/api/v1/new-password', {
                    method: 'POST',
                    body: JSON.stringify({
                        id: id.split('=')[1],
                        token: token.split('=')[1],
                        password: values.confirmedPassword,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {
                        setStatusUpdate(data);
                        if (data.status === true) {
                            formik.values.password = '';
                            formik.values.confirmedPassword = '';
                            setTimeout(() => {
                                navigate('/signin');
                            },3000)
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
                    <div className=" row">
                        <div className="col l-12 m-12 c-12">
                            {statusUpdate?.status === false && <p className={cx('warning')}>{statusUpdate?.msg}</p>}
                        </div>
                        <div className="col l-12 m-12 c-12">
                            {statusUpdate?.status === true && <p className={cx('success')}>{statusUpdate?.msg}</p>}
                        </div>
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="password">Mật khẩu mới</label>
                        <input
                            name="password"
                            id="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="password"
                        />
                        {formik.errors.password && formik.touched.password && (
                            <p className={cx('alert-message')}>{formik.errors.password}</p>
                        )}
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="confirmedPassword">Nhập lại khẩu mới</label>
                        <input
                            name="confirmedPassword"
                            id="confirmedPassword"
                            value={formik.values.confirmedPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="password"
                        />
                        {formik.errors.confirmedPassword && formik.touched.confirmedPassword && (
                            <p className={cx('alert-message')}>{formik.errors.confirmedPassword}</p>
                        )}
                    </div>
                    <Button large type="submit">
                        Xác nhận
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default NewPassword;
