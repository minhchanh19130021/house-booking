import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/components/Button';
import styles from './BookingForm.module.scss';
import { motion } from 'framer-motion';

const cx = classNames.bind(styles);
function BookingForm() {
    const [visibleGuestInfo, setVisibleGuestInfo] = useState(false);

    const hanldeVisibleGuestInfo = () => {
        setVisibleGuestInfo((visibleGuestInfo) => !visibleGuestInfo);
    };
    return (
        <>
            <form className={cx('booking-form')}>
                <div className={cx('booking-form__header')}>
                    <div className={cx('price')}>
                        <p className={cx('old')}>2.234.434 VNĐ / đêm</p>
                        <p className={cx('new')}>2.234.434 VNĐ / đêm</p>
                    </div>
                    <div className={cx('star')}>
                        <p className={cx('rate')}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            4.52
                        </p>
                        <p className={cx('number')}>61 đánh giá</p>
                    </div>
                </div>
                <div className={cx('booking-form__body')}>
                    <div className={cx('time', 'row', 'no-gutters')}>
                        <div className={cx('receive', 'col', 'l-6')}>
                            <label htmlFor="receive">Nhận phòng</label>
                            <input type="date" name="receive" id="receive" />
                        </div>
                        <div className={cx('return', 'col', 'l-6')}>
                            <label htmlFor="return">Trả phòng</label>
                            <input type="date" name="return" id="return" />
                        </div>
                    </div>
                    <div className={cx('guest')}>
                        <div className={cx('guest-title')}>
                            <label onClick={hanldeVisibleGuestInfo}>Khách</label>
                            <label onClick={hanldeVisibleGuestInfo}>2 khách</label>
                        {visibleGuestInfo && (
                            <motion.div animate={{ }} className={cx('guest-info')}>
                                <div className={cx('guest-info__item')}>
                                    <div className={cx('guest-info__item-title')}>
                                        <p>Người lớn</p>
                                        <span>Từ 13 tuổi trở lên</span>
                                    </div>
                                    <div className={cx('guest-info__item-select')}>
                                        <div className={cx('select-increment')}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                            </svg>
                                        </div>
                                        <p className={cx('current-number')}>1</p>
                                        <div className={cx('select-decrement')}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('guest-info__item')}>
                                    <div className={cx('guest-info__item-title')}>
                                        <p>Trẻ em</p>
                                        <span>Độ tuổi 2 - 12</span>
                                    </div>
                                    <div className={cx('guest-info__item-select')}>
                                        <div className={cx('select-increment')}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                            </svg>
                                        </div>
                                        <p className={cx('current-number')}>1</p>
                                        <div className={cx('select-decrement')}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('guest-info__item')}>
                                    <div className={cx('guest-info__item-title')}>
                                        <p>Em bé</p>
                                        <span>Dưới 2 tuổi</span>
                                    </div>
                                    <div className={cx('guest-info__item-select')}>
                                        <div className={cx('select-increment')}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                            </svg>
                                        </div>
                                        <p className={cx('current-number')}>1</p>
                                        <div className={cx('select-decrement')}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('guest-info__item')}>
                                    <div className={cx('guest-info__item-title')}>
                                        <p>Thú cưng</p>
                                        <span></span>
                                    </div>
                                    <div className={cx('guest-info__item-select')}>
                                        <div className={cx('select-increment')}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                            </svg>
                                        </div>
                                        <p className={cx('current-number')}>1</p>
                                        <div className={cx('select-decrement')}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    onClick={hanldeVisibleGuestInfo}
                                    className={cx('close-guest-info')}
                                    outline
                                    type="button"
                                >
                                    Đóng
                                </Button>
                            </motion.div>
                        )}
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={cx('guest-title-icon')}
                            onClick={hanldeVisibleGuestInfo}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <Button type="submit" className={cx('btn-booking')}>
                        Đặt Phòng
                    </Button>
                    <div className={cx('price-detail')}>
                        <div className={cx('price-item')}>
                            <p className={cx('price-item__title')}>Phí dịch vụ</p>
                            <p className={cx('price-item__value')}>2.667.213 VNĐ</p>
                        </div>
                        <div className={cx('price-item')}>
                            <p className={cx('price-item__title')}>Tiền phòng</p>
                            <p className={cx('price-item__value')}>2.667.213 VNĐ</p>
                        </div>
                    </div>
                    <div className={cx('price-total')}>
                        <p className={cx('price-total__title')}>Tổng trước thuế</p>
                        <p className={cx('price-total__value')}>2.667.213 VNĐ</p>
                    </div>
                </div>
            </form>

            <Button
                className={cx('btn-report')}
                leftIcon={
                    <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{ display: 'block', height: '16px', width: '16px', fill: 'currentcolor' }}
                    >
                        <path d="M28 6H17V4a2 2 0 0 0-2-2H3v28h2V18h10v2a2 2 0 0 0 2 2h11l.115-.006a1 1 0 0 0 .847-1.269L27.039 14l1.923-6.724A1 1 0 0 0 28 6z" />
                    </svg>
                }
            >
                Báo cáo nhà/phòng cho thuê này
            </Button>
        </>
    );
}

export default BookingForm;
