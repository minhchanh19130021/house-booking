import classNames from 'classnames/bind';
import styles from './Security.module.scss';
import ProfileSidebar from '../ProfileSidebar';
import Button from '~/components/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Security() {
    const user = useSelector((state) => state.authentication.login.currentUser);
    const [statusChangePassword, setStatusChangePassword] = useState();
    const formik = useFormik({
        initialValues: {
            oldPassword: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .required('Vui lòng nhập trường này')
                .min(6, 'Mật khẩu của bạn ít nhất phải có 6 kí tự')
                .max(16, 'Mật khẩu của bạn chỉ được tối đa 16 kí tự'),
            confirmPassword: Yup.string()
                .required('Vui lòng nhập trường này')
                .oneOf([Yup.ref('password'), null], 'Mật khẩu mới chưa khớp'),
        }),
        onSubmit: (values) => {
            fetch(`http://localhost:8080/api/v1/change-password`, {
                method: 'POST',
                body: JSON.stringify({
                    oldPassword: formik.values.oldPassword,
                    idUser: user?._id,
                    confirmPassword: formik.values.confirmPassword,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((response) => {
                    setStatusChangePassword(response);
                    if (response.status === true) {
                        formik.values.oldPassword = '';
                        formik.values.password = '';
                        formik.values.confirmPassword = '';
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    });
    return (
        <div className="grid wide">
            <div className="row">
                <div className="col l-3 m-12 c-12">
                    <ProfileSidebar />
                </div>
                <div className="col l-8 m-12 c-12">
                    <h2>An toàn và bảo mật</h2>
                    <form className={cx('profile-form', 'row')} onSubmit={formik.handleSubmit}>
                        <div className="col l-12 m-12 c-12">
                            {statusChangePassword?.status === false && (
                                <p className={cx('warning')}>{statusChangePassword?.msg}</p>
                            )}
                        </div>
                        <div className="col l-12 m-12 c-12">
                            {statusChangePassword?.status === true && (
                                <p className={cx('success')}>{statusChangePassword?.msg}</p>
                            )}
                        </div>
                        <div className={cx('profile-input', 'col', 'l-12', 'm-12', 'c-12')}>
                            <label htmlFor="oldPassword">Mật khẩu hiện tại</label>
                            <input
                                id="oldPassword"
                                name="oldPassword"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.oldPassword}
                            />
                        </div>
                        <div className={cx('profile-input', 'col', 'l-12', 'm-12', 'c-12')}>
                            <label htmlFor="password">Mật khẩu mới</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.errors.password && formik.touched.password && (
                                <p className={cx('alert-message')}>{formik.errors.password}</p>
                            )}
                        </div>
                        <div className={cx('profile-input', 'col', 'l-12', 'm-12', 'c-12')}>
                            <label htmlFor="confirmPassword">Xác nhận mật khẩu mới</label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                            />
                            {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                                <p className={cx('alert-message')}>{formik.errors.confirmPassword}</p>
                            )}
                        </div>

                        <div className={cx('profile-input', 'col', 'l-12', 'm-12', 'c-12')}>
                            <Button type="submit" large className={cx('submit-info')}>
                                Lưu Thay Đổi
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Security;
