import classNames from 'classnames/bind';
import styles from './EmailNofication.module.scss';
import ProfileSidebar from '../ProfileSidebar';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function EmailNofication() {
    return (
        <div className="grid wide">
            <div className="row">
                <div className="col l-3 m-12 c-12">
                    <ProfileSidebar />
                </div>
                <form className="col l-8 m-12 c-12" action="#" method="post">
                    <h2>Thông báo email</h2>
                    <div className={cx('profile-form', 'row')}>
                        <div className={cx('profile-input', 'col', 'l-12', 'm-12', 'c-12')}>
                            <label htmlFor="email-notify">Địa chỉ email</label>
                            <input id="email-notify" name="email-notify" type="email" />
                            <span className={cx('alert-message')}></span>
                        </div>

                        <div className={cx('profile-input', 'col', 'l-12', 'm-12', 'c-12')}>
                            <Button large className={cx('submit-info')}>
                                Lưu Thay Đổi
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EmailNofication;
