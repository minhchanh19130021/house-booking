import classNames from 'classnames/bind';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './HistoryBooking.module.scss';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '~/config/firebase';
import { useSelector } from 'react-redux';
const cx = classNames.bind(styles);

function HistoryItem({
    uid,
    avatar,
    nameHost,
    nameHouse,
    member,
    date,
    payment,
    total,
    thanks,
    voucher,
    is_review,
    oid,
}) {
    const urlAvatar = useSelector((state) => state.avatar.avatar.url);
    const user = useSelector((state) => state.authentication.login.currentUser);
    const [review, setReview] = useState({});
    const [isGetReview, setIsGetReview] = useState(false);

    function getReview(e) {
        e.preventDefault();
        if (!isGetReview) {
            if (!(review == {})) {
                fetch(`http://localhost:8080/api/v2/review/get?oid=${oid}`, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        token: `Bearer ${user?.accessToken}`,
                    },
                })
                    .then((response) => response.json())
                    .then((response) => {
                        if (response.success === true) {
                            setReview(response.data ? response.data[0] : {});
                            setIsGetReview(!isGetReview);
                        } else {
                            alert('không tìm thấy data');
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                        alert('không tìm thấy data');
                    });
            } else {
                setIsGetReview(!isGetReview);
            }
        } else {
            setIsGetReview(!isGetReview);
        }
    }
    return (
        <div className={cx('history-item', 'row')}>
            <div className="col l-1 m-1 c-12">
                <NavLink to="#">
                    <img src={urlAvatar} className={cx('avatar')} alt="avatar-host" />
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
                    <strong>Số thành viên:</strong> {member}
                </p>
                <p className={cx('date-booking', 'text')}>
                    <strong>Ngày đặt:</strong> {date}
                </p>
                <p className={cx('payment-booking', 'text')}>
                    <strong>Hình thức thanh toán:</strong> {payment}
                </p>
                {voucher?.length !== 0 ? (
                    <div className={cx('text', 'container__voucher')}>
                        {voucher.map((e, i) => {
                            return (
                                <div className={cx('voucher')} key={i}>
                                    <p>{e?.name}</p>
                                    <p className={cx('value')}>{e?.discount}</p>
                                </div>
                            );
                        })}
                    </div>
                ) : null}

                <p className={cx('total-booking', 'text')}>
                    <strong>Tổng số tiền: </strong>

                    {Array.from(total ? JSON.stringify(total) : '')
                        .reverse()
                        .map((e, i) => (i % 3 === 0 && i !== 0 ? `${e}.` : e))
                        .reverse()
                        .join('')}
                    <span> VNĐ</span>
                </p>
                <div className={cx('function')}>
                    <div className={cx('fuction-btn')}>
                        {is_review ? (
                            <Button onClick={getReview}>Xem đánh giá</Button>
                        ) : (
                            <Button href={`/review/${oid}`}>Đánh giá</Button>
                        )}
                        <Button>Liên hệ chủ nhà</Button>
                    </div>
                </div>
                <div className={cx('container__review', isGetReview ? 'container__review--active' : null)}>
                    <div className={cx('review')}>
                        <p className={cx('date')}>
                            Ngày: {review?.create_date?.substring(0, 10)?.split('-')?.reverse()?.join('/')}
                        </p>
                        <p className={cx('comment')}>Bình luận: {review?.public_review}</p>
                        <p className={cx('experience')}>
                            Đánh giá: {review?.rate?.experience ? review?.rate?.experience + ' sao' : 'không xác định'}
                        </p>
                        <p className={cx('')}></p>
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
