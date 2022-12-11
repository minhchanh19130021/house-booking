import classNames from 'classnames/bind';
import styles from './PersonalDetail.module.scss';
import ProfileSidebar from '../ProfileSidebar';
import Button from '~/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setAvatar } from '~/redux/avatarSlice';

const cx = classNames.bind(styles);
function PersonalDetail() {
    const user = useSelector((state) => state.authentication.login.currentUser);
    const [imageAsFile, setImageAsFile] = useState('');
    const [imageAsUrl, setImageAsUrl] = useState('');
    const [activeNotification, setActiveNotification] = useState(false);
    const [notification, setNotification] = useState('');
    const [imageChanged, setImageChanged] = useState(false);
    const dispatch = useDispatch();
    const avatar = useSelector((state) => state.avatar.avatar.url);
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            username: '',
            birthday: '',
            gender: '',
            email: '',
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
            try {
                const storage = getStorage();
                const storageRef = ref(storage, `user/${user._id}/${imageAsFile.name}`);
                uploadBytesResumable(storageRef, imageAsFile);
                values.avatar = imageAsFile.name;
                getDownloadURL(ref(storage, `user/${user._id}/${imageAsFile.name}`))
                    .then((link_img) => {
                        dispatch(
                            setAvatar({
                                url: link_img,
                            }),
                        );
                    })
                    .catch((error) => {});
            } catch (e) {
                setNotification('Thay đổi không thành công');
            }
            fetch(`http://localhost:8080/api/v1/user/update`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            })
                .then((response) => response.json())
                .then((response) => {
                    if (response.success == true) {
                        setNotification('Thay đổi thành công');
                    } else {
                        setNotification('Thay đổi không thành công');
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
            setActiveNotification(true);
        },
    });

    const handleImage = (e) => {
        const image = e.target.files[0];
        if (e.target.files && e.target.files[0]) {
            setImageAsUrl(URL.createObjectURL(e.target.files[0]));
            setImageAsFile(image);
            setImageChanged(true);
        }
    };

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/user/get/${user._id}`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.success === true) {
                    formik.setValues(response.data[0] ? response.data[0] : {});
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

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
                                    value={formik.values.firstname || ''}
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
                                    value={formik.values.lastname || ''}
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
                                    value={formik.values.username || ''}
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
                                    value={formik.values.gender || ''}
                                    onChange={formik.handleChange}
                                >
                                    <option value="">--Chọn giới tính--</option>
                                    <option value="Nam" label="Nam">
                                        Nam
                                    </option>
                                    <option value="Nữ" label="Nữ">
                                        Nữ{' '}
                                    </option>
                                </select>
                                {formik.errors.gender && <p className={cx('alert-message')}>{formik.errors.gender}</p>}
                            </div>
                            <div className={cx('profile-input', 'col', 'l-12', 'm-12', 'c-12')}>
                                <label htmlFor="birthday">Ngày sinh</label>
                                <input
                                    id="birthday"
                                    name="birthday"
                                    type="date"
                                    value={formik.values.birthday || ''}
                                    onChange={formik.handleChange}
                                    max={new Date().toISOString().split('T')[0]}
                                />
                                {formik.errors.birthday && (
                                    <p className={cx('alert-message')}>{formik.errors.birthday}</p>
                                )}
                            </div>
                            <div className={cx('profile-input', 'col', 'l-12', 'm-12', 'c-12')}>
                                <label htmlFor="avatar">Thay đổi ảnh đại diện</label>
                                <input id="avatar" name="avatar" type="file" onChange={handleImage} />
                                <span className={cx('alert-message')}></span>
                                <img
                                    className={cx('show_avatar')}
                                    src={!imageChanged ? avatar : imageAsUrl}
                                    alt="404 not found avatar"
                                />
                            </div>
                            <div className={cx('profile-input', 'col', 'l-12', 'm-12', 'c-12')}>
                                <Button large type="submit" className={cx('submit-info')}>
                                    Lưu Thay Đổi
                                </Button>
                            </div>
                            <div className={cx('notification')}>
                                <p className={cx(activeNotification ? 'active' : null)}>{notification}</p>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PersonalDetail;
