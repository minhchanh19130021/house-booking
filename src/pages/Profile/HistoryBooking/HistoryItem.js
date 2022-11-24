import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './HistoryBooking.module.scss';
const cx = classNames.bind(styles);

function HistoryItem({ avatar, nameHost, nameHouse, member, date, payment, total, thanks }) {
    return (
        <div className={cx('history-item', 'row')}>
            <div className="col l-1 m-1 c-12">
                <NavLink to="#">
                    <img src={avatar} className={cx('avatar')} alt="avatar-host" />
                </NavLink>
            </div>
            <div className="col l-11 l-11 c-12">
                <div className={cx('function')}>
                    <p to="#" className={cx('name-host', 'text')}>
                        <strong>{nameHost}</strong>
                    </p>
                    <div className={cx('fuction-btn')}>
                        <Button outline>Đã thanh toán</Button>
                        <Button>Xem nhà</Button>
                    </div>
                </div>
                <NavLink to="#" className={cx('name-house', 'text')}>
                    <strong>Tên nhà:</strong> {nameHouse}
                </NavLink>
                <p className={cx('number-member', 'text')}>
                    <strong>Số thành viên:</strong> {member} thành viên
                </p>
                <p className={cx('date-booking', 'text')}>
                    <strong>Ngày đặt:</strong> {date}
                </p>
                <p className={cx('payment-booking', 'text')}>
                    <strong>Hình thức thanh toán:</strong> {payment}
                </p>
                <p className={cx('total-booking', 'text')}>
                    <strong>Tổng số tiền: </strong>
                    {total} VNĐ
                </p>
                <div className={cx('function')}>
                    <div className={cx('fuction-btn')}>
                        <Button>Xem đánh giá</Button>
                        <Button>Liên hệ chủ nhà</Button>
                    </div>
                </div>
                <p className={cx('thanks', 'text')}>
                    <strong>Lời cảm ơn: </strong>
                    {thanks}
                </p>
            </div>
        </div>
    );
}

export default HistoryItem;
