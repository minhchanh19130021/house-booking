import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './ConfirmSuccess.module.scss';

const cx = classNames.bind(styles);
function ConfirmSuccess() {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate('/signin');
    }, 10000);
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://cdn-icons-png.flaticon.com/512/1161/1161751.png"
                alt="success"
                className={cx('status-img')}
            />
            <h3>Tài khoản của bạn đã được kích hoạt</h3>
            <p>Cảm ơn bạn đã tin tưởng và sử dụng dịch vụ đặt nhà online</p>
            <p>Sau 10 giây hệ thống sẽ chuyển về trang chủ</p>
        </div>
    );
}

export default ConfirmSuccess;
