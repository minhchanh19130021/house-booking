import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './ConfirmFail.module.scss';

const cx = classNames.bind(styles);
function ConfirmFail() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://cdn-icons-png.flaticon.com/512/190/190406.png"
                alt="success"
                className={cx('status-img')}
            />
            <h3>Tài khoản chưa được kích hoạt. Vui lòng kiểm tra lại email</h3>
            <Button large to="/home">
                Trang Chủ
            </Button>
        </div>
    );
}

export default ConfirmFail;
