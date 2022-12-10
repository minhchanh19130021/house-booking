import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './ForgotPassword.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
const cx = classNames.bind(styles);

function NewPassword() {
    const { id, token } = useParams();
    const [statusUpdate, setStatusUpdate] = useState();
    const formik = useFormik({
        initialValues: {
            password: '',
            confirmedPassword: '',
        },
        validationSchema: Yup.object({
            password: Yup.string().required('Vui lòng nhập đầy đủ'),
            confirmedPassword: Yup.string()
                .required('Vui lòng nhập đầy đủ')
                .oneOf([Yup.ref('password'), null], 'Mật khẩu chưa khớp'),
        }),
        onSubmit: (values, e) => {
            console.log(token.split('=')[1]);
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
                        console.log(data);
                        setStatusUpdate(data);
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
                <div className="row">
                    <div className="col l-12 m-12 c-12">
                        {statusUpdate?.status === false && <p className={cx('warning')}>{statusUpdate?.msg}</p>}
                    </div>
                    <div className="col l-12 m-12 c-12">
                        {statusUpdate?.status === true && <p className={cx('warning')}>{statusUpdate?.msg}</p>}
                    </div>
                </div>
                <div className={cx('body')}>
                    <div className={cx('form-group')}>
                        <label htmlFor="password">Mật khẩu mới</label>
                        <input
                            name="password"
                            id="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            type="text"
                        />
                       {formik.errors.password && <p className={cx('alert-message')}>{formik.errors.password}</p>}
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="confirmedPassword">Nhập lại khẩu mới</label>
                        <input
                            name="confirmedPassword"
                            id="confirmedPassword"
                            value={formik.values.confirmedPassword}
                            onChange={formik.handleChange}
                            type="text"
                        />{' '}
                        {formik.errors.confirmedPassword && (
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
