import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './SignUp.module.scss';

const cx = classNames.bind(styles);
function SignUp() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('', 'form-login')}>
                <div className={cx('header')}>
                    <img src="https://townhub.kwst.net/images/logo3.png" alt="logo" />
                    <h3>Chào mừng bạn đến với hệ thống đăng ký</h3>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-12')}>
                        <label htmlFor="firstname">Họ</label>
                        <input name="firstname" id="firstname" type="text" />
                        <span className={cx('alert-message')}></span>
                    </div>
                    <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-12')}>
                        <label htmlFor="lastname">Tên*</label>
                        <input name="lastname" id="lastname" type="password" />
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-12')}>
                        <label htmlFor="username">Tên tài khoản</label>
                        <input name="username" id="username" type="text" />
                    </div>
                    <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-12')}>
                        <label htmlFor="birthday">Ngày sinh*</label>
                        <input name="birthday" id="birthday" type="date" />
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label>Giới tính</label>
                        <select>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ </option>
                            <option value="Khác">Khác </option>
                        </select>
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label htmlFor="email">Địa chỉ email</label>
                        <input name="email" id="email" type="email" />
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label htmlFor="password">Mật khẩu</label>
                        <input name="password" id="password" type="password" />
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label htmlFor="confirm-password">Nhập lại mật khẩu</label>
                        <input name="confirm-password" id="confirm-password" type="password" />
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-4', 'm-4', 'c-12')}>
                        <label>Tỉnh</label>
                        <select>
                            <option value="hcm">Long An</option>
                        </select>
                    </div>
                    <div className={cx('form-group', 'col', 'l-4', 'm-4', 'c-12')}>
                        <label>Huyện</label>
                        <select>
                            <option value="hcm">Đức Hòa</option>
                        </select>
                    </div>
                    <div className={cx('form-group', 'col', 'l-4', 'm-4', 'c-12')}>
                        <label>Xã</label>
                        <select>
                            <option value="hcm">Hòa Khánh Tây</option>
                        </select>
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label htmlFor="address">Địa chỉ cụ thể (bao gồm số nhà, đường, hẻm)</label>
                        <textarea name="address" id="address" type="text" />
                    </div>
                </div>

                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-3', 'm-3', 'c-3')}>
                        <Button large>Đăng Ký</Button>
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
            </div>
        </div>
    );
}

export default SignUp;
