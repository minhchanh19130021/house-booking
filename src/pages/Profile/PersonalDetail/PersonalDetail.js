import classNames from 'classnames/bind';
import styles from './PersonalDetail.module.scss';
import ProfileSidebar from '../ProfileSidebar';
import Button from '~/components/Button';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const cx = classNames.bind(styles);
function PersonalDetail() {
    const user = useSelector((state) => state.authentication.login.currentUser);
    const formik = useFormik({
        initialValues: {
            firstname: user?.firstname,
            lastname: user?.lastname,
            username: user?.username,
            birthday: user?.birthday,
            gender: user?.gender,
            email: user?.email,
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
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div className="grid wide">
            <div className="row">
                <div className="col l-3 m-12 c-12">
                    <ProfileSidebar />
                </div>
                <div className="col l-8 m-12 c-12">
                    <h2>Thông tin cá nhân</h2>
                    {user && (
                        <form className={cx('profile-form', 'row')} onSubmit={formik.handleSubmit}>
                            <div className={cx('profile-input', 'col', 'l-6', 'm-12', 'c-12')}>
                                <label htmlFor="firstname">Họ</label>
                                <input
                                    id="firstname"
                                    name="firstname"
                                    type="text"
                                    value={formik.values.firstname }
                                    onChange={formik.handleChange}
                                />

                                {formik.errors.firstname && (
                                    <p className={cx('alert-message')}>{formik.errors.firstname}</p>
                                )}
                            </div>
                            <div className={cx('profile-input', 'col', 'l-6', 'm-12', 'c-12')}>
                                <label htmlFor="lastname">Tên</label>
                                <input
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    value={formik.values.lastname }
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.lastname && (
                                    <p className={cx('alert-message')}>{formik.errors.lastname}</p>
                                )}
                            </div>

                            <div className={cx('profile-input', 'col', 'l-6', 'm-12', 'c-12')}>
                                <label htmlFor="username">Tên tài khoản</label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.username && (
                                    <p className={cx('alert-message')}>{formik.errors.username}</p>
                                )}
                            </div>
                            <div className={cx('profile-input', 'col', 'l-6', 'm-12', 'c-12')}>
                                <label>Giới tính</label>
                                <select
                                    id="gender"
                                    name="gender"
                                    value={formik.values.gender}
                                    onChange={formik.handleChange}
                                >
                                    <option value="">--Chọn giới tính--</option>
                                    <option value="Nam">Nam</option>
                                    <option value="Nữ">Nữ </option>
                                </select>
                                {formik.errors.gender && <p className={cx('alert-message')}>{formik.errors.gender}</p>}
                            </div>
                            <div className={cx('profile-input', 'col', 'l-12', 'm-12', 'c-12')}>
                                <label htmlFor="birthday">Ngày sinh</label>
                                <input
                                    id="birthday"
                                    name="birthday"
                                    type="date"
                                    value={formik.values.birthday}
                                    onChange={formik.handleChange}
                                    max={new Date().toISOString().split('T')[0]}
                                />
                                {formik.errors.birthday && (
                                    <p className={cx('alert-message')}>{formik.errors.birthday}</p>
                                )}
                            </div>
                            <div className={cx('profile-input', 'col', 'l-12', 'm-12', 'c-12')}>
                                <label htmlFor="email">Địa chỉ email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.email && <p className={cx('alert-message')}>{formik.errors.email}</p>}
                            </div>

                            <div className={cx('profile-input', 'col', 'l-12', 'm-12', 'c-12')}>
                                <label htmlFor="avatar">Thay đổi ảnh đại diện</label>
                                <input id="avatar" name="avatar" type="file" />
                                <span className={cx('alert-message')}></span>
                            </div>
                            <div className={cx('profile-input', 'col', 'l-12', 'm-12', 'c-12')}>
                                <Button large type="submit" className={cx('submit-info')}>
                                    Lưu Thay Đổi
                                </Button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PersonalDetail;
