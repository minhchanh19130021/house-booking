import classNames from 'classnames/bind';
import styles from './PersonalDetail.module.scss';
import ProfileSidebar from '../ProfileSidebar';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function PersonalDetail() {
    return (
        <div className="grid wide">
            <div className="row">
                <div className="col l-3 m-12 c-12">
                    <ProfileSidebar />
                </div>
                <div className="col l-8 m-12 c-12">
                    <h2>Thông tin cá nhân</h2>
                    <div className={cx('profile-form', 'row')}>
                        <div className={cx('profile-input', 'col', 'l-6', 'm-12', 'c-12')}>
                            <label htmlFor="firstname">Họ</label>
                            <input id="firstname" name="firstname" type="text" />
                            <span className={cx('alert-message')}></span>
                        </div>
                        <div className={cx('profile-input', 'col', 'l-6', 'm-12', 'c-12')}>
                            <label htmlFor="lastname">Tên</label>
                            <input id="lastname" name="lastname" type="text" />
                            <span className={cx('alert-message')}></span>
                        </div>

                        <div className={cx('profile-input', 'col', 'l-6', 'm-12', 'c-12')}>
                            <label htmlFor="username">Tên tài khoản</label>
                            <input id="username" name="username" type="text" />
                            <span className={cx('alert-message')}></span>
                        </div>
                        <div className={cx('profile-input', 'col', 'l-6', 'm-12', 'c-12')}>
                            <label>Giới tính</label>
                            <select>
                                <option value="male">Nam</option>
                                <option value="female">Nữ </option>
                                <option value="other">Khác</option>
                            </select>
                            <span className={cx('alert-message')}></span>
                        </div>
                        <div className={cx('profile-input', 'col', 'l-12', 'm-12', 'c-12')}>
                            <label htmlFor="birthday">Ngày sinh</label>
                            <input id="birthday" name="birthday" type="date" />
                            <span className={cx('alert-message')}></span>
                        </div>
                        <div className={cx('profile-input', 'col', 'l-6', 'm-12', 'c-12')}>
                            <label htmlFor="email">Địa chỉ email</label>
                            <input id="email" name="email" type="text" />
                            <span className={cx('alert-message')}></span>
                        </div>
                        <div className={cx('profile-input', 'col', 'l-6', 'm-12', 'c-12')}>
                            <label htmlFor="phone">Số điện thoại</label>
                            <input id="phone" name="phone" type="text" />
                            <span className={cx('alert-message')}></span>
                        </div>
                        <div className={cx('profile-input', 'col', 'l-12', 'm-12', 'c-12')}>
                            <label htmlFor="avatar">Thay đổi ảnh đại diện</label>
                            <input id="avatar" name="avatar" type="file" />
                            <span className={cx('alert-message')}></span>
                        </div>
                        <div className={cx('profile-input', 'col', 'l-12', 'm-12', 'c-12')}>
                            <Button large className={cx('submit-info')}>
                                Lưu Thay Đổi
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalDetail;
