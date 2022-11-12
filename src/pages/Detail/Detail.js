import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/components/Button';
import BookingForm from './BookingForm';
import styles from './Detail.module.scss';
import FacilityItem from './FacilityItem';

const cx = classNames.bind(styles);

function Detail() {
    return (
        <div className={cx('wrapper', 'grid', 'wide')}>
            <div className={cx('row', 'header')}>
                <div className={cx('title')}>
                    <h3 className={cx('name-house')}>Bungalow Bán Mở bằng tre + Instagram Hammock Net</h3>
                    <div className={cx('rate')}>
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
                        <span className={cx('number-star')}>4,57</span>
                        <span className={cx('number-rate')}>61 đánh giá</span>
                        <span className={cx('location')}>Uluwatu, Bali, Indonesia</span>
                    </div>
                </div>
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
                        Lưu
                    </Button>
                </div>
            </div>
            <div className={cx('row', 'img-section')}>
                <div className={cx('col', 'l-6', 'db')}>
                    <img
                        src="https://a0.muscache.com/im/pictures/6d4b8668-20d2-4c45-8de6-4378d7bf9239.jpg?im_w=1200"
                        alt="img-house"
                        className={cx('thumbnail-bg')}
                    />
                </div>
                <div className={cx('col', 'l-6')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-6', 'db')}>
                            <img
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-39183737/original/a3522d92-e3fc-4c47-aae1-036d94388db3.jpeg?im_w=720"
                                className={cx('thumbnail')}
                                alt="img-house"
                            />
                        </div>
                        <div className={cx('col', 'l-6')}>
                            <img
                                src="https://a0.muscache.com/im/pictures/48be31be-e1d2-46c9-8e1b-f0cad8c8c36b.jpg?im_w=720"
                                className={cx('thumbnail')}
                                alt="img-house"
                            />
                        </div>
                        <div className={cx('col', 'l-6')}>
                            <img
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-39183737/original/d1f702fb-f791-481a-acfb-629af80d9094.jpeg?im_w=720"
                                className={cx('thumbnail')}
                                alt="img-house"
                            />
                        </div>
                        <div className={cx('col', 'l-6')}>
                            <img
                                src="https://a0.muscache.com/im/pictures/3d9eecd2-1069-4d00-86e0-9edaed09553b.jpg?im_w=720"
                                className={cx('thumbnail')}
                                alt="img-house"
                            />
                        </div>
                    </div>
                </div>
            </div>

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
                        <div className={cx('highlight-item')}>
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
                            <div className={cx('highlight-desc')}>
                                <p>Tự nhận phòng</p>
                                <span>Bạn có thể gặp nhân viên trực cửa để nhận phòng.</span>
                            </div>
                        </div>
                        <div className={cx('highlight-item')}>
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
                            <div className={cx('highlight-desc')}>
                                <p>Hủy miễn phí trước 8 thg 11.</p>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('protect')}>
                        <div className={cx('logo')}>
                            <img
                                src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
                                alt="protect-img"
                            />
                        </div>
                        <p>
                            Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp Chủ nhà hủy, thông tin nhà/phòng cho
                            thuê không chính xác và những vấn đề khác như sự cố trong quá trình nhận phòng.
                        </p>
                        <Button className={cx('protect-more')}>Tìm hiểu thêm</Button>
                    </div>
                    <div className={cx('desc')}>
                        <p>
                            Một bungalow 2 tầng độc đáo nằm ở phía Nam Bali. Bungalow là một phần của một khu nghỉ dưỡng
                            nhỏ và có một nhà hàng bên trong và một hồ bơi vô cực khổng lồ. Đây sẽ là một trải nghiệm
                            độc đáo khi ngủ trong bungalow này. Chúng tôi có 4 loại bungalow này và bạn sẽ được đặt ngẫu
                            nhiên trong
                        </p>
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

            <div className={cx('owner')}>
                <div className={cx('owner-header')}>
                    <div className={cx('owner-header__right')}>
                        <img
                            src="https://a0.muscache.com/im/pictures/user/f7c841b6-f142-4f01-b598-17394d82e3b1.jpg?im_w=240"
                            alt="owner-header-avatar"
                        />
                    </div>
                    <div className={cx('owner-header__left')}>
                        <h3>Chủ nhà House Of Reservations</h3>
                        <p>Đã tham gia vào tháng 6 năm 2016</p>
                    </div>
                </div>
                <div className={cx('row',)}>
                    <div className={cx('owner-title', 'col', 'l-6')}>
                        <div className={cx('owner-title__item')}>
                            <svg
                                className={cx('owner-title__icon-star')}
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="presentation"
                                focusable="false"
                                style={{ display: 'block', height: '16px', width: '16px', fill: 'currentcolor' }}
                            >
                                <path
                                    d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                                    fillRule="evenodd"
                                />
                            </svg>
                            <span>2.681 đánh giá</span>
                        </div>
                        <div className={cx('owner-title__item')}>
                            <svg
                                className={cx('owner-title__icon-protect')}
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="presentation"
                                focusable="false"
                                style={{ display: 'block', height: '16px', width: '16px', fill: 'currentcolor' }}
                            >
                                <path d="M16 .798l.555.37C20.398 3.73 24.208 5 28 5h1v12.5C29 25.574 23.21 31 16 31S3 25.574 3 17.5V5h1c3.792 0 7.602-1.27 11.445-3.832L16 .798zm7 9.08l-9.5 9.501-4.5-4.5L6.879 17l6.621 6.621L25.121 12 23 9.879z" />
                            </svg>
                            <span>Đã xác minh danh tính</span>
                        </div>
                        <div className={cx('owner-desc')}>
                            <p>
                                House of Booking chuyên xử lý các yêu cầu đặt phòng cho du lịch. Chúng tôi có sẵn 18 giờ
                                mỗi ngày để trả lời các câu hỏi của bạn trong thời gian sớm nhất.
                            </p>
                            <p>
                                Chúng tôi liên lạc trực tiếp với người quản lý/chủ sở hữu địa điểm mà chúng tôi đang hỗ
                                trợ. Chúng tôi cũng sẽ sẵn sàng hỗ trợ qua Airbnb trong thời gian bạn ở để được trợ giúp
                                thêm.
                            </p>
                            <p>
                                Chúng tôi có nhân viên tại chỗ sẽ là chủ nhà địa phương của bạn. Sau khi đặt phòng của
                                bạn được xác nhận, bạn sẽ nhận được số điện thoại, vì vậy bạn có thể liên hệ trực tiếp
                                với họ.
                            </p>
                        </div>
                    </div>
                    <div className={cx('col', 'owner-feedback', 'l-6')}>
                        <p>Tỉ lệ phản hồi: 100%</p>
                        <p>Thời gian phản hồi: trong vòng một giờ</p>
                        <Button className={cx('btn-contact')} outline large>
                            Liên hệ với chủ nhà
                        </Button>
                        <div className={cx('owner-alert')}>
                            <svg
                                viewBox="0 0 48 48"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="presentation"
                                focusable="false"
                                style={{
                                    display: 'block',
                                    height: '24px',
                                    width: '24px',
                                    fill: 'rgb(227, 28, 95)',
                                    stroke: 'currentcolor',
                                }}
                            >
                                <g>
                                    <g stroke="none">
                                        <path
                                            d="m25 5 .5846837.00517475c4.2905015.07574932 8.8374917.98334075 13.644943 2.73687823l.7703733.28794702v27.3705076l-.0084766.1301365c-.0392237.2994207-.2122236.5656263-.4699074.7230756l-.1154775.0605995-11.4234694 5.0774159c.0623636-.7458456-.0433445-1.4943022-.3209346-2.2783707-.2495178-.7044496-.7667703-1.7805075-1.0418654-2.3950548-1.9094732-4.1561789-3.9589781-8.3688465-6.0912876-12.5211487l-.3317555-.6369277c-.4686141-.9115826-.8248653-1.6297768-1.3147672-2.2052384-.743401-.8737317-1.7668654-1.3549948-2.8821508-1.3549948-1.1154695 0-2.1391179.4816323-2.8828868 1.3557332-.6050254.7114646-1.0306408 1.6819288-1.6457867 2.8412431-.4956822.9653459-.9868615 1.9338929-1.47282629 2.9041739l.00159179-19.0721502.769087-.28647781c4.798406-1.75037189 9.3373349-2.65799308 13.6207364-2.73688762z"
                                            fillOpacity=".2"
                                        />
                                        <path d="m25 1c5.5985197 0 11.5175072 1.27473768 17.7548231 3.81642897.7027419.28641855 1.1783863.94329535 1.2386823 1.69066764l.0064946.16143432v28.73197667c0 1.8999458-1.0758761 3.6285379-2.7638433 4.4721215l-.2054644.0969363-15.0427818 6.6856808c-.4614217.2050763-1.8621146.3276624-2.7955525.3430957l-.192358.0016581.0009065-1.0005013c.6483674-.0069073 1.2843321-.1330366 1.8784107-.3747752.8327784-.3388673 1.5457548-.8939986 2.0790671-1.5885618l13.2600311-5.8942194c1.023196-.4547538 1.7028179-1.4383245 1.7751735-2.5449525l.0064111-.1964822v-28.73197667l-.6916987-.27704554c-5.7517231-2.26330416-11.1871718-3.39148539-16.3083013-3.39148539-5.1211255 0-10.5565697 1.12817946-16.3082877 3.39148006l-.6917123.27707479-.00030284 24.49382405c-.68067737 1.4079172-1.34834149 2.8151846-2.00083161 4.2173468l.00113445-28.71117085c0-.81311953.4922453-1.5453083 1.24525131-1.85215622 6.23725069-2.54166294 12.15623339-3.81639863 17.75474869-3.81639863z" />
                                    </g>
                                    <path
                                        d="m15.999908 41.6930234.6867258-.8851772c1.5957359-2.0328613 2.5919668-3.8873951 2.9612752-5.511912.2804314-1.2318637.2318527-2.5167089-.4804505-3.5591688-.6801015-.9952012-1.8642067-1.5894421-3.1673665-1.5894421-1.3033438 0-2.487633.5940563-3.1675505 1.5890729-.7099111 1.039137-.761802 2.3201055-.4810025 3.5580612.3689403 1.6247015 1.3653552 3.4796045 2.9616432 5.5133888l.6867258.8851772.6447715.7192179c1.1495113 1.2599236 2.1735278 2.122579 3.2227536 2.7149739.8151649.4602182 1.6400823.7413704 2.4521191.8358878.8812245.1033783 1.7585848-.0123685 2.559765-.3383795 1.6422905-.6682672 2.8186673-2.1775911 3.0700251-3.9387151.1205267-.8438258.0264975-1.6854363-.2876078-2.572644-.2495178-.7044496-.7667703-1.7805075-1.0418654-2.3950548-1.9094732-4.1561789-3.9589781-8.3688465-6.0912876-12.5211487-.6486357-1.2222643-1.0477537-2.1388241-1.6465227-2.8421661-.743401-.8737317-1.7668654-1.3549948-2.8821508-1.3549948-1.1154695 0-2.1391179.4816323-2.8828868 1.3557332-.6050254.7114646-1.0306408 1.6819288-1.6457867 2.8412431-2.1326775 4.1534098-4.1819984 8.3660775-6.09128759 12.5211487-.28227155.6306079-.79308369 1.6933742-1.04168139 2.3948702-.3141053.8872077-.40813448 1.7288182-.28760784 2.5731978.25117384 1.7609394 1.42736664 3.2700787 3.06965711 3.9385305.81939715.3333951 1.69418134.4397272 2.55958102.3385641.81295679-.0948866 1.63805829-.3760388 2.45248709-.8360724 1.0492258-.5922103 2.0732422-1.4550503 3.2227536-2.7149739z"
                                        fill="none"
                                        strokeWidth={2}
                                    />
                                </g>
                            </svg>
                            <p>
                                Để bảo vệ khoản thanh toán của bạn, tuyệt đối không chuyển tiền hoặc liên lạc bên ngoài
                                trang web hoặc ứng dụng Airbnb.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
