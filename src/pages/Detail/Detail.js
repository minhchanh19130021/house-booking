import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/components/Button';
import BookingForm from './BookingForm';
import DescriptionHouse from './DescriptionHouse';
import styles from './Detail.module.scss';
import Evaluate from './Evaluate';
import ModalEvaluate from './Evaluate/ModalEvaluate';
import FacilityItem from './FacilityItem';
import HighLightItem from './HighLightItem';
import Host from './Host';
import ImageHouse from './ImageHouse';
import ProtectAdmin from './ProtectAdmin';
import TitleHeader from './TitleHeader';

const cx = classNames.bind(styles);

function Detail() {
    const [visibleModal, setVisibleModal] = useState();

    const handleVisibleModal = () => {
        setVisibleModal((visibleModal) => !visibleModal);
    };
    return (
        <div className={cx('wrapper', 'grid', 'wide')}>
            <div className={cx('row', 'header')}>
                <TitleHeader />
                <div className={cx('action')}>
                    <Button
                        leftIcon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M11.47 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22V16.5a.75.75 0 01-1.5 0V4.81L8.03 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zM3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        }
                    >
                        Chia sẻ
                    </Button>
                    <Button
                        leftIcon={
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
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                        }
                    >
                        Thích
                    </Button>
                </div>
            </div>
            <ImageHouse />
            <div className={cx('info', 'row')}>
                <div className={cx('col', 'l-8', 'm-12', 'c-12')}>
                    <div className={cx('info-title')}>
                        <h3>Toàn bộ biệt thự. Chủ nhà House Of Reservations</h3>
                        <div className={cx('info-facilities')}>
                            <span>2 khách</span>
                            <span>2 phòng ngủ</span>
                            <span>2 giường</span>
                            <span>1 phòng tắm</span>
                        </div>
                    </div>
                    <div className={cx('highlights')}>
                        <HighLightItem
                            title="Tự nhận phòng"
                            desc="Bạn có thể gặp nhân viên trực cửa để nhận phòng."
                            svg={
                                <svg
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                    style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}
                                >
                                    <path d="m24.3334 1.66675c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323-.00065 24.666 3.00065.00075v2h-26.66665v-2l3-.00075v-24.666c0-1.05436681.81587301-1.91816558 1.850737-1.99451429l.149263-.00548571zm-4.00065 2h-12.666l-.00075 24.66625 12.66675-.00025zm4.00065 0h-2.00065v24.666l2.00025.00025zm-7.0001 11.00002c.7363778 0 1.33333.5969522 1.33333 1.33333s-.5969522 1.33333-1.33333 1.33333-1.33333-.5969522-1.33333-1.33333.5969522-1.33333 1.33333-1.33333z" />
                                </svg>
                            }
                        />
                        <HighLightItem
                            title="Hủy miễn phí trước 8 thg 11."
                            desc=""
                            svg={
                                <svg
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                    style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}
                                >
                                    <path d="m11.6667 0-.00095 1.666h8.667l.00055-1.666h2l-.00055 1.666 6.00065.00063c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323v15.91907c0 .4715696-.1664445.9258658-.4669028 1.2844692l-.1188904.1298308-8.7476886 8.7476953c-.3334303.3332526-.7723097.5367561-1.2381975.5778649l-.1758207.0077398h-12.91915c-2.68874373 0-4.88181754-2.1223321-4.99538046-4.7831124l-.00461954-.2168876v-21.66668c0-1.05436021.81587582-1.91815587 1.85073739-1.99450431l.14926261-.00548569 5.999-.00063.00095-1.666zm16.66605 11.666h-24.666v13.6673c0 1.5976581 1.24893332 2.9036593 2.82372864 2.9949072l.17627136.0050928 10.999-.0003.00095-5.6664c0-2.6887355 2.122362-4.8818171 4.7832071-4.9953804l.2168929-.0046196 5.66595-.0006zm-.081 8-5.58495.0006c-1.5977285 0-2.9037573 1.2489454-2.9950071 2.8237299l-.0050929.1762701-.00095 5.5864zm-18.586-16-5.999.00062v5.99938h24.666l.00065-5.99938-6.00065-.00062.00055 1.66733h-2l-.00055-1.66733h-8.667l.00095 1.66733h-2z" />
                                </svg>
                            }
                        />
                    </div>
                    <div className={cx('protect')}>
                        <ProtectAdmin />
                    </div>
                    <div className={cx('desc')}>
                        <DescriptionHouse />
                    </div>
                    <div className={cx('facilities')}>
                        <h3 className={cx('facilities-title')}>Nơi này có những gì cho bạn</h3>
                        <div className={cx('facilities-list', 'row')}>
                            <FacilityItem
                                icon={
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
                                            d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                                        />
                                    </svg>
                                }
                                title={`Wifi`}
                            />
                            <FacilityItem
                                icon={
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
                                            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                                        />
                                    </svg>
                                }
                                title={`Chỗ đỗ xe miễn phí tại nơi ở`}
                            />
                            <FacilityItem
                                icon={
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
                                            d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                                        />
                                    </svg>
                                }
                                title={`Cửa ra vào có khóa vân tay`}
                            />
                            <FacilityItem
                                icon={
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
                                            d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                                        />
                                    </svg>
                                }
                                title={`Hỗ trợ sửa chữa 24/7`}
                            />
                        </div>
                        {/* <div className={cx('facilities-more')}>Hiển thị tất cả tiện nghi</div> */}
                    </div>
                </div>
                <div className={cx('col', 'l-4', 'm-12', 'c-12')}>
                    <BookingForm />
                </div>
            </div>

            <div className={cx('host')}>
                <Host />
                <div className={cx('evaluate')}>
                    <Evaluate>
                        <Button outline large onClick={handleVisibleModal}>
                            Hiển thị tất 497 đánh giá
                        </Button>
                    </Evaluate>
                </div>
                {visibleModal && <div className={cx('overlay')} onClick={handleVisibleModal}></div>}

                {visibleModal && (
                    <ModalEvaluate>
                        <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                                display: 'block',
                                fill: 'none',
                                height: '16px',
                                width: '16px',
                                stroke: 'currentcolor',
                                strokeWidth: 3,
                                overflow: 'visible',
                            }}
                            onClick={handleVisibleModal}
                        >
                            <path d="m6 6 20 20" />
                            <path d="m26 6-20 20" />
                        </svg>
                    </ModalEvaluate>
                )}
            </div>
        </div>
    );
}

export default Detail;
