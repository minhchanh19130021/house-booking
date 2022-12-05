import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './SignIn.module.scss';

const cx = classNames.bind(styles);
function SignIn() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('', 'form-login')}>
                <div className={cx('header')}>
                    <img src="https://townhub.kwst.net/images/logo3.png" alt="logo" />
                    <h3>Chào mừng bạn đến với hệ thống đăng nhập</h3>
                </div>
                <div className={cx('body')}>
                    <div className={cx('form-group')}>
                        <label htmlFor="username">Tên tài khoản hoặc địa chỉ email *</label>
                        <input name="username" id="username" type="text" />
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="password">Mật khẩu *</label>
                        <input name="password" id="password" type="password" />
                    </div>
                    <Button large>Đăng Nhập</Button>
                    <div className={cx('function')}>
                        <NavLink to="/signup">Tạo tài khoản</NavLink>
                        <NavLink to="/forgot_password" className={cx('forgot-password')}>
                            Quên mật khẩu?
                        </NavLink>
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                            <p className={cx('login-orther-text')}>Hoặc tiếp tục với</p>
                        </div>
                    </div>
                    <div className={cx('login-social')}>
                        <Button className={cx('btn-social', 'facebook')}>Facebook</Button>
                        <Button className={cx('btn-social', 'google')}>Google</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
