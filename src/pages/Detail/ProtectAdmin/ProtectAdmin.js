import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './ProtectAdmin.module.scss';

const cx = classNames.bind(styles);
function ProtectAdmin() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img
                    src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
                    alt="protect-img"
                />
            </div>
            <p>
                Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp Chủ nhà hủy, thông tin nhà/phòng cho thuê không
                chính xác và những vấn đề khác như sự cố trong quá trình nhận phòng.
            </p>
            <Button className={cx('protect-more')}>Tìm hiểu thêm</Button>
        </div>
    );
}

export default ProtectAdmin;
