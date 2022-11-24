import classNames from 'classnames/bind';
import Button from '~/components/Button';
import ProfileHostSidebar from '../ProfileHostSidebar';
import styles from './HouseList.module.scss';

const cx = classNames.bind(styles);
function HouseList() {
    return (
        <div className="grid wide">
            <div className="row">
                <div className="col l-3 m-12 c-12">
                    <ProfileHostSidebar />
                </div>
                <div className="col l-8 m-12 c-12">
                    <h2>Danh sách nhà cho thuê</h2>
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

export default HouseList;
