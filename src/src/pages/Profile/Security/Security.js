import classNames from 'classnames/bind';
import styles from './Security.module.scss';
import ProfileSidebar from '../ProfileSidebar';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Security() {
    return (
        <div className="grid wide">
            <div className="row">
                <div className="col l-3 m-12 c-12">
                    <ProfileSidebar />
                </div>
                <div className="col l-8 m-12 c-12">
                    <h2>An toàn và bảo mật</h2>
                    <div className={cx('profile-form', 'row')}>
                        <div className={cx('profile-input', 'col', 'l-12', 'm-12', 'c-12')}>
                            <label htmlFor="current-password">Mật khẩu hiện tại</label>
                            <input id="current-password" name="current-password" type="password" />
                            <span className={cx('alert-message')}></span>
                        </div>
                        <div className={cx('profile-input', 'col', 'l-12', 'm-12', 'c-12')}>
                            <label htmlFor="new-password">Mật khẩu mới</label>
                            <input id="new-password" name="new-password" type="password" />
                            <span className={cx('alert-message')}></span>
                        </div>
                        <div className={cx('profile-input', 'col', 'l-12', 'm-12', 'c-12')}>
                            <label htmlFor="confirm-new-password">Xác nhận mật khẩu mới</label>
                            <input id="confirm-new-password" name="confirm-new-password" type="text" />
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

export default Security;
