import classNames from 'classnames/bind';
import { useLocation, NavLink } from 'react-router-dom';
import styles from './CardSummaryPay.module.scss';
import useFetch from "../../hooks/useFetch";
import { SearchContext } from '../../context/SearchContext';
import { useContext, useState } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '~/config/firebase';
import ImageHouse from '~/pages/Detail/ImageHouse';

const cx = classNames.bind(styles);

function CardSummaryPay() {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const { data, loading, error } = useFetch(`http://localhost:8800/api/homes/find/636ce065825a1cd1940641a2`);
    const { dates, options } = useContext(SearchContext);
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
      const timeDiff = Math.abs(date2.getTime() - date1.getTime());
      const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
      return diffDays;
    }

    function totalPrice() {
        return data.price * days + 50 + 10;
    }

    const days = dayDifference(dates[0].endDate, dates[0].startDate);

    function priceStay() {
        return data.price * days;
    }

    const [linkImg, setLinkImg] = useState(
        'https://preview.redd.it/zcgs03lgoy351.png?width=288&format=png&auto=webp&s=d9bf4b46713d7fdbf11b82a8e364ceee79724a9c',
    );
    let getImageFromFirebase = (_id) => {
        getDownloadURL(ref(storage, `house/${_id}/avatar.jpg`))
            .then((url) => {
                setLinkImg(url);
            })
            .catch((error) => {});
    };
    getImageFromFirebase('636ce065825a1cd1940641a2');
  
    
      
    return (
       
            <div className={cx('_ai1he2')}>
                <div className={cx('_mubbvpq')}>
                    <div className={cx('_7efq7j' , 'bt88')} /*style="margin-bottom: 88px;"*/>
                        <div className={cx('c1yo0219 dir dir-ltr')}>
                            <div /*style="--gp-section-max-width:1120px;"*/ className={cx('maxw')}>
                                <div
                                    data-plugin-in-point-id="LISTING_CARD"
                                    data-section-id="LISTING_CARD"
                                    /*style="padding-bottom: 24px;"*/ className={cx('pb24')}
                                >
                                    <div className={cx('_13ty2nn')}>
                                        <div className={cx('_1r6rda2')}>
                                            <div
                                                className={cx('_1h6n1zu' , 'inber')}
                                                /*style="display: inline-block; vertical-align: bottom; height: 100%; width: 100%; min-height: 1px;"*/
                                            >
                                                <img
                                                    className={cx('_9ofhsl' , 'ofit')}
                                                    aria-hidden="true"
                                                    alt=""
                                                    elementtiming="LCP-target"
                                                    src={linkImg}
                                                    data-original-uri="https://a0.muscache.com/im/pictures/miso/Hosting-709029553824546972/original/e3dcc7a5-6a07-47ba-95b2-911dcc48d1e7.jpeg?aki_policy=large"
                                                    /*style="object-fit: cover; vertical-align: bottom;"*/
                                                />
                                                <div
                                                    className={cx('_15p4g025' , 'bimg')}
                                                    /*style='background-image: url("https://a0.muscache.com/im/pictures/miso/Hosting-709029553824546972/original/e3dcc7a5-6a07-47ba-95b2-911dcc48d1e7.jpeg?aki_policy=large"); background-size: cover;'*/
                                                ></div>
                                            </div>
                                        </div>
                                        <div className={cx('_ul6qeb')}>
                                            <div>
                                                <div className={cx('_1fza94o')}>Phòng riêng tại nhà</div>
                                                <div id="LISTING_CARD-title" className={cx('_bp4bbx')}>
                                                    {data.name}
                                                </div>
                                            </div>
                                            <div className={cx('_1l43ux5')}>
                                                <div className={cx('_1nh4eon')}>
                                                    <div className={cx('_1apusbw')}>
                                                        <span className={cx('_154iz1b2')}>
                                                            <span className={cx('a8jt5op' , 'dir' , 'dir-ltr')}>
                                                                Xếp hạng 5,00/5; 1 đánh giá
                                                            </span>
                                                            <span className={cx('_1lzlk52')}>
                                                                <svg
                                                                    viewBox="0 0 32 32"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    aria-hidden="true"
                                                                    role="presentation"
                                                                    focusable="false"
                                                                    className={cx('dishei')}
                                                                    /*style="display: block; height: 10px; width: 10px; fill: currentcolor;"*/
                                                                >
                                                                    <path
                                                                        d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                                                                        fillRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                            </span>
                                                            <span className={cx('_2a6au1i')} aria-hidden="true">
                                                                {data.rate}
                                                            </span>
                                                            <span className={cx('_a7a5sx')} aria-hidden="true">
                                                                &nbsp;(1 đánh giá)
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className={cx('_17ctt5')}>
                                                        <span className={cx('_154iz1b2')}>
                                                            <span className={cx('a8jt5op' , 'dir' , 'dir-ltr')}>
                                                                Xếp hạng 5,00/5; 1 đánh giá
                                                            </span>
                                                            <span className={cx('_1lzlk52')}>
                                                                <svg
                                                                    viewBox="0 0 32 32"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    aria-hidden="true"
                                                                    role="presentation"
                                                                    focusable="false"
                                                                    className={cx('dishei')}
                                                                    /*style="display: block; height: 10px; width: 10px; fill: currentcolor;"*/
                                                                >
                                                                    <path
                                                                        d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                                                                        fillRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                            </span>
                                                            <span className={cx('_2a6au1i')} aria-hidden="true">
                                                                5,00
                                                            </span>
                                                            <span className={cx('_a7a5sx')} aria-hidden="true">
                                                                &nbsp;(1)
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className={cx('_5kaapu')}>
                                                    <span className={cx('_a7a5sx')}>•</span>
                                                    <span className={cx('_15nqexk')}>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 16 16"
                                                            aria-hidden="true"
                                                            role="presentation"
                                                            focusable="false"
                                                            className={cx('dishei12')}
                                                            /*style="display: block; height: 12px; width: 12px; fill: currentcolor;"*/
                                                        >
                                                            <path d="M8.498 7.593l3.1-1.74c.5-.278.99-.552 1.474-.82a.833.833 0 0 0 .428-.729v-2.97A.833.833 0 0 0 12.667.5H3.333a.833.833 0 0 0-.833.833v2.97c0 .303.164.582.428.729l3 1.675 1.575.886c.348.195.647.195.995-.001zM8 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"></path>
                                                        </svg>
                                                    </span>
                                                    <div className={cx('_ujvj6y')}>Chủ nhà siêu cấp</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('c1yo0219 dir dir-ltr')}>
                            <div /*style="--gp-section-max-width:1120px;"*/ className={cx('maxw')}>
                                <div  className={cx('_npr0qi', 'bortc')} /*style="border-top-color: rgb(221, 221, 221);"*/></div>
                                <div
                                    data-plugin-in-point-id="AIRCOVER_P4_BANNER"
                                    data-section-id="AIRCOVER_P4_BANNER"
                                    /*style="padding-top: 24px; padding-bottom: 24px;"*/
                                    className={cx('padtb24')}
                                >
                                    <div
                                        className={cx('_1r2d8bf')}
                                        role="img"
                                        aria-label="Đặt phòng của bạn được bảo vệ bởi AirCover"
                                    >
                                        Đặt phòng của bạn được bảo vệ bởi &nbsp;
                                        <div className={cx('_1p752y2')}>
                                            <img
                                                className={cx('_hx27jd')}
                                                src="https://a0.muscache.com/pictures/aircover/aircover-logo/original/56683a2f-f11b-43f6-8af7-a1b3861b2c85.svg"
                                                alt=" AirCover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('c1yo0219 dir dir-ltr')}>
                            <div className={cx('maxw')} /*style="--gp-section-max-width:1120px;"*/>
                                <div className={cx('_npr0qi' , 'bortc')} /*style="border-top-color: rgb(221, 221, 221);"*/></div>
                                <div
                                    data-plugin-in-point-id="PRICE_DETAIL_TITLE"
                                    data-section-id="PRICE_DETAIL_TITLE"
                                    className={cx('padtb24')} 
                                    /*style="padding-top: 24px; padding-bottom: 24px;"*/
                                >
                                    <section>
                                        <div className={cx('tu9uqg8 dir dir-ltr')}>
                                            <h2 tabIndex="-1" className={cx('_14i3z6h')} elementtiming="LCP-target">
                                                Chi tiết giá
                                            </h2>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div className={cx('c1yo0219 dir dir-ltr')}>
                            <div className={cx('maxw')}  /*style="--gp-section-max-width:1120px;"*/>
                                <div data-plugin-in-point-id="PRICE_DETAIL" data-section-id="PRICE_DETAIL">
                                    <div id="FMP-target">
                                        <div className={cx('_88xxct')}>
                                            <div>
                                                <div>
                                                    <div>
                                                        <div className={cx('_dmn8hc')}>
                                                            <div className={cx('_10d7v0r')}>
                                                                <button type="button" className={cx('_101nvu7m')}>
                                                                    <div className={cx('_12hv04d')}>
                                                                    {formatter.format(data.price)} x {days}&nbsp;đêm&nbsp;
                                                                    </div>
                                                                </button>
                                                            </div>
                                                            <div data-testid="price-item-ACCOMMODATION" className={cx('_t65zql')}>
                                                                <span>{formatter.format(priceStay())}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={cx('_64pbdv')}>
                                                        <div className={cx('_dmn8hc')}>
                                                            <div className={cx('_10d7v0r')}>
                                                                <button type="button" className={cx('_101nvu7m')}>
                                                                    <div className={cx('_12hv04d')}>Phí vệ sinh</div>
                                                                </button>
                                                            </div>
                                                            <div data-testid="price-item-CLEANING_FEE" className={cx('_t65zql')}>
                                                                <span> {formatter.format(10)}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={cx('_64pbdv')}>
                                                        <div className={cx('_dmn8hc')}>
                                                            <div className={cx('_10d7v0r')}>
                                                                <button type="button" className={cx('_101nvu7m')}>
                                                                    <div className={cx('_12hv04d')}>Phí dịch vụ</div>
                                                                </button>
                                                            </div>
                                                            <div
                                                                data-testid="price-item-AIRBNB_GUEST_FEE"
                                                                className={cx('_t65zql')}
                                                            >
                                                                <span> {formatter.format(50)}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={cx('_jbgt15')}></div>
                                                    <div className={cx('_dmn8hc')}>
                                                        <div className={cx('_1x5uynhu')}>
                                                            Tổng
                                                            <button
                                                                id="MowebCurrencyPicker_trigger"
                                                                aria-label="Loại tiền tệ hiện tại: (VND). Thay đổi loại tiền tệ thanh toán"
                                                                type="button"
                                                                className={cx('_15rpys7s')}
                                                            >
                                                                (VND)
                                                            </button>
                                                        </div>
                                                        <div data-testid="price-item-total" className={cx('_j1143kl')}>
                                                            <span>{formatter.format(totalPrice())}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    );
}

export default CardSummaryPay;
