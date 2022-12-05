import classNames from 'classnames/bind';
// import { NavLink } from 'react-router-dom';
import Button from '~/components/Button';
import styles from '../ForgotPassword.module.scss';

const cx = classNames.bind(styles);

function ForgotNewPassword({ children }) {
    return (
        <div className={cx('wrapper')}>
            <form action="#" method="post" className={cx('', 'form-login')}>
                <div className={cx('header')}>
                    <img src="https://townhub.kwst.net/images/logo3.png" alt="logo" />
                    <h3>Vui lòng điền đầy đủ thông tin</h3>
                </div>
                <div className={cx('body')}>
                    <div className={cx('form-group')}>
                        <label htmlFor="password-new">Mật khẩu mới</label>
                        <input name="password-new" id="password-new" type="text" />
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="confirm-password-new">Nhập lại khẩu mới</label>
                        <input name="confirm-password-new" id="confirm-password-new" type="text" />
                    </div>
                    {children}
                </div>
            </form>
        </div>
    );
}

export default ForgotNewPassword;
