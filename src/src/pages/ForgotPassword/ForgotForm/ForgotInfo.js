import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from '../ForgotPassword.module.scss';

const cx = classNames.bind(styles);
function ForgotInfo({ children }) {
    return (
        <div className={cx('wrapper')}>
            <form action="#" method="post" className={cx('', 'form-login')}>
                <div className={cx('header')}>
                    <img src="https://townhub.kwst.net/images/logo3.png" alt="logo" />
                    <h3>Vui lòng điền đầy đủ thông tin</h3>
                </div>
                <div className={cx('body')}>
                    <div className={cx('form-group')}>
                        <label htmlFor="username">Tên tài khoản hoặc địa chỉ email *</label>
                        <input name="username" id="username" type="text" />
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="code">Mã xác nhận *</label>
                        <input name="code" id="code" type="password" />
                    </div>
                    {children}
                    <div className={cx('function')}>
                        <NavLink to="/signup">Tạo tài khoản</NavLink>
                        <NavLink to="/signin" className={cx('forgot-password')}>
                            Đăng nhập
                        </NavLink>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ForgotInfo;
