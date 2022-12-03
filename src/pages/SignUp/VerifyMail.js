import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './SignUp.module.scss';

const cx = classNames.bind(styles);
function VerifyMail() {
    return (
        <div className={cx('wrapper')}>
            <form className={cx('', 'form-login')}>
                <div className={cx('header')}>
                    <img src="https://townhub.kwst.net/images/logo3.png" alt="logo" />
                    <h3>Chào mừng bạn đến với hệ thống đăng ký</h3>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-12')}>
                        <label htmlFor="firstname">Mã xác nhận(đã được gửi vào email)</label>
                        <input
                            name="firstname"
                            id="firstname"
                            // value={formik.values.firstname}
                            // onChange={formik.handleChange}
                            type="text"
                        />

                        {/* {formik.errors.firstname && <p className={cx('alert-message')}>{formik.errors.firstname}</p>} */}
                    </div>
                </div>

                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-3', 'm-3', 'c-3')}>
                        <Button large type="submit">
                            Xác nhận
                        </Button>
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-8', 'm-12', 'c-12')}>
                        <span>
                            Bạn đã có tài khoản?
                            <NavLink to="/signin" className={cx('link-signin')}>
                                Đăng nhập
                            </NavLink>
                        </span>
                    </div>
                    <div className={cx('form-group', 'col', 'l-4', 'm-12', 'c-12')}>
                        <NavLink to="/signin" className={cx('forgot-link')}>
                            Quên mật khẩu
                        </NavLink>
                    </div>
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
            </form>
        </div>
    );
}

export default VerifyMail;
