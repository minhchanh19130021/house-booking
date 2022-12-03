import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './ConfirmSuccess.module.scss';

const cx = classNames.bind(styles);
function ConfirmSuccess() {
    return (
        <div className={cx('wrapper')}>
            <img src="https://cdn-icons-png.flaticon.com/512/7518/7518748.png" alt="success" className={cx('status-img')}/>
            <h3>Tài khoản của bạn đã được kích hoạt</h3>
            <Button large to="/signin">
                Đăng nhập
            </Button>
        </div>
    );
}

export default ConfirmSuccess;
