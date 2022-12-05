import classNames from 'classnames/bind';
import styles from '../ForgotPassword.module.scss';

const cx = classNames.bind(styles);
function ForgotCode({ children }) {
    return (
        <div className={cx('wrapper')}>
            <form action="#" method="post" className={cx('', 'form-login')}>
                <div className={cx('header')}>
                    <img src="https://townhub.kwst.net/images/logo3.png" alt="logo" />
                    <h3>Vui lòng nhập mã xác minh để cập nhật mật khẩu mới</h3>
                </div>
                <div className={cx('body')}>
                    <div className={cx('form-group')}>
                        <label htmlFor="code-verify">Mã xác minh* (đã được gửi về email)</label>
                        <input name="code-verify" id="code-verify" type="text" />
                    </div>
                    {children}
                </div>
            </form>
        </div>
    );
}

export default ForgotCode;
