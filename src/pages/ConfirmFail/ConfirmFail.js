import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './ConfirmFail.module.scss';

const cx = classNames.bind(styles);
function ConfirmFail() {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate('/');
    }, 10000);
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://cdn-icons-png.flaticon.com/512/7390/7390085.png"
                alt="success"
                className={cx('status-img')}
            />
            <h3>Tài khoản chưa được kích hoạt</h3>
            <p>Vui lòng kiểm tra lại đường dẫn đã gửi vào email của bạn.</p>
            <p>Sau 10 giây hệ thống sẽ chuyển về trang chủ</p>
        </div>
    );
}

export default ConfirmFail;
