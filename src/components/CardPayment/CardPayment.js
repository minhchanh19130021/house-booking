import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './CardPayment.module.scss';
import { useEffect, useContext, useState } from 'react';
import SelectPaymentOptions from '~/components/SelectPaymentOptions';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { format } from 'date-fns';
import useFetch from '../../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import ModalDate from '~/pages/Payment/ModalDate';
import { motion } from 'framer-motion';
import ModalCustomer from '~/pages/Payment/ModalCustomer';
const cx = classNames.bind(styles);

function CardPayment(props) {
    const user = useSelector((state) => state.authentication.login.currentUser);
    const { dispatch } = useContext(SearchContext);
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const { home, dates, options, payPoint } = useContext(SearchContext);
    const [slideNumber, setSlideNumber] = useState(0);
    const [visible, setVisible] = useState(0);
    const [methodPay, setMethodPay] = useState('PAYPAL');

    const setMethodCreditCard = () => {
        setMethodPay('CREDIT_CARD');
        setVisible(0);
    };

    const setMethodPayPal = () => {
        setMethodPay('PAYPAL');
        setVisible(0);
    };

    const setMethodGooglePay = () => {
        setMethodPay('GOOGLE_PAY');
        setVisible(0);
    };

    const selectorPayment = () => {
        if (visible === 0) {
            setVisible(1);
        } else {
            setVisible(0);
        }
    };

    const styleRotate = () => {
        var styleRotate;
        if (visible === 0) {
            return (styleRotate = { transform: 'rotate(180deg)' });
        } else {
            return (styleRotate = { transform: 'rotate(0deg)' });
        }
    };

    //

    const { data, loading, error } = useFetch(`http://localhost:8080/api/homes/find/` + home);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'VND',
    });

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }

    const days = dayDifference(dates[0].endDate, dates[0].startDate);

    function priceStay() {
        var num = data?.price * days * 0.00004;
        return Number.parseFloat(num.toFixed(2));
    }

    function pricePoint() {
        var num;
        // var point = localStorage.getItem("payPoint");
        if (payPoint > 0) {
            num = 1000 * payPoint * 0.00004;
        } else {
            num = 0;
        }
        return Number.parseFloat(num.toFixed(2));
    }

    function totalPrice() {
        var num = priceStay() + 350000 * 0.00004 + 100000 * 0.00004 - pricePoint();
        return Number.parseFloat(num.toFixed(2));
    }

    const urlPay =
        'http://localhost:8080/pay/636ce065825a1cd1940641a2/' +
        data?.name +
        ' x ' +
        days +
        '/' +
        priceStay() +
        '/' +
        totalPrice() +
        '/' +
        pricePoint() +
        '/' +
        data?.introduce;
    // chỉnh sửa

    const [visibleModalDate, setvisibleModalDate] = useState();
    const [visibleModalCustomer, setvisibleModalCusmtomer] = useState();

    const handlevisibleModalDate = () => {
        setvisibleModalDate((visibleModalDate) => !visibleModalDate);
    };

    const handlevisibleModalCustomer = () => {
        setvisibleModalCusmtomer((visibleModalCustomer) => !visibleModalCustomer);
    };



    return (
        <div className={cx('_bdo76v7')}>
            <div style={{ marginBottom: 64 }}>
                <div className={cx('c1yo0219', 'dir', 'dir-ltr')}>
                    <div /*style="--gp-section-max-width:1120px;"*/>
                        <div data-plugin-in-point-id="QUICKPAY_ERROR_MESSAGE" data-section-id="QUICKPAY_ERROR_MESSAGE">
                            <div tabIndex="-1" id="quick-pay-v2-error-message-container"></div>
                        </div>
                    </div>
                </div>
                <div className={cx('c1yo0219', 'dir', 'dir-ltr')}>
                    <div /*style="--gp-section-max-width:1120px;"*/>
                        <div
                            data-plugin-in-point-id="TITLE_TRIP_SUMMARY"
                            data-section-id="TITLE_TRIP_SUMMARY"
                            style={{ paddingBottom: 24 }}
                        >
                            <section>
                                <div className={cx('tu9uqg8', 'dir', 'dir-ltr')}>
                                    <h2 tabIndex="-1" className={cx('_14i3z6h')} elementtiming="LCP-target">
                                        Chuyến đi của bạn
                                    </h2>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <div className={cx('c1yo0219', 'dir', 'dir-ltr')}>
                    <div /*style="--gp-section-max-width:1120px;"*/>
                        <div
                            data-plugin-in-point-id="DATE_PICKER"
                            data-section-id="DATE_PICKER"
                            style={{ paddingBottom: 24 }}
                        >
                            <div>
                                <div>
                                    <div className={cx('_b7b6bk')}>
                                        <div className={cx('_1qyi2pa')}>
                                            <div className={cx('_pgfqnw')}>
                                                <h3 tabIndex="-1" className={cx('_14i3z6h')} elementtiming="LCP-target">
                                                    Ngày
                                                </h3>
                                            </div>
                                            <div className={cx('_jbk4n3')}>{`${format(
                                                dates[0].startDate,
                                                'dd/MM/yyyy',
                                            )} đến ${format(dates[0].endDate, 'dd/MM/yyyy')}`}</div>
                                        </div>
                                        <div className={cx('_fz3zdn')}>
                                            <button
                                                data-testid="checkout_platform.DATE_PICKER.edit"
                                                aria-label="Chỉnh sửa ngày"
                                                type="button"
                                                className={cx('_15rpys7s', '_fu49hrz')}
                                                onClick={() => handlevisibleModalDate()}
                                            >
                                                Chỉnh sửa
                                            </button>
                                        </div>
                                    </div>
                                    <div className={cx('_88xxct')}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('c1yo0219', 'dir', 'dir-ltr')}>
                    <div /*style="--gp-section-max-width:1120px;"*/>
                        <div
                            data-plugin-in-point-id="GUEST_PICKER"
                            data-section-id="GUEST_PICKER"
                            style={{ paddingBottom: 24 }}
                        >
                            <div>
                                <div>
                                    <div className={cx('_b7b6bk')}>
                                        <div className={cx('_1qyi2pa')}>
                                            <div className={cx('_pgfqnw')}>
                                                <h3 tabIndex="-1" className={cx('_14i3z6h')} elementtiming="LCP-target">
                                                    Khách
                                                </h3>
                                            </div>
                                            <div
                                                className={cx('_jbk4n3')}
                                            >{`${options.adult} Người lớn · ${options.children} Trẻ em · ${options.baby} em bé · ${options.pet} thú cưng`}</div>
                                        </div>
                                        <div className={cx('_fz3zdn')}>
                                            <button
                                                data-testid="checkout_platform.GUEST_PICKER.edit"
                                                aria-label="Chỉnh sửa thông tin khách"
                                                type="button"
                                                className={cx('_15rpys7s', '_fu49hrz')}
                                                onClick={() => handlevisibleModalCustomer()}
                                            >
                                                Chỉnh sửa
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={cx('_88xxct')}>
                                            <div className={cx('_cne99n')}></div>
                                        </div>
                                    </div>
                                    <div className={cx('_cne99n')}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('c1yo0219', 'dir', 'dir-ltr')}>
                    <div /*style="--gp-section-max-width:1120px;"*/>
                        <div /*style="margin-top: 8px; --gp-section-top-margin:8;"*/ style={{ marginTop: 8 }}>
                            <div
                                className={cx('_npr0qi')}
                                /*style="border-top-color: rgb(221, 221, 221);"*/ style={{
                                    borderTopColor: 'rgb(221, 221, 221)',
                                }}
                            ></div>
                            <div
                                data-plugin-in-point-id="PAYMENT_OPTIONS"
                                data-section-id="PAYMENT_OPTIONS"
                                /*style="padding-top: 32px; padding-bottom: 24px;"*/ style={{
                                    paddingTop: 32,
                                    paddingBottom: 24,
                                }}
                            >
                                <div>
                                    <div>
                                        <div className={cx('_88xxct')}>
                                            <section>
                                                <div data-testid="payment-option-dropdown-selector">
                                                    <div className={cx('_pawvzww')}>
                                                        <div className={cx('_vysn8h0')}>
                                                            <div className={cx('_uh6ul55')}>
                                                                <h2
                                                                    tabIndex="-1"
                                                                    elementtiming="LCP-target"
                                                                    className={cx('_14i3z6h')}
                                                                >
                                                                    Thanh toán bằng
                                                                </h2>
                                                            </div>
                                                            <div className={cx('_1nc6ity')}>
                                                                <span className={cx('_huz4f0')}>
                                                                    <span role="img" aria-label="Thẻ Visa">
                                                                        <img
                                                                            src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_visa.0adea522bb26bd90821a8fade4911913.svg"
                                                                            alt="Thẻ Visa"
                                                                            height="9"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </span>
                                                                </span>
                                                                <span className={cx('_huz4f0')}>
                                                                    <span role="img" aria-label="Thẻ American Express">
                                                                        <img
                                                                            src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_amex.84088b520ca1b3384cb71398095627da.svg"
                                                                            alt="Thẻ American Express"
                                                                            height="9"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </span>
                                                                </span>
                                                                <span className={cx('_huz4f0')}>
                                                                    <span role="img" aria-label="Thẻ Mastercard">
                                                                        <img
                                                                            src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_mastercard.f18379cf1f27d22abd9e9cf44085d149.svg"
                                                                            alt="Thẻ Mastercard"
                                                                            height="9"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </span>
                                                                </span>
                                                                <span className={cx('_huz4f0')}>
                                                                    <span role="img" aria-label="Tìm hiểu thẻ">
                                                                        <img
                                                                            src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_discover.7f05c82f07d62a0f8a69d54dbcd7c8be.svg"
                                                                            alt="Tìm hiểu thẻ"
                                                                            height="9"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </span>
                                                                </span>
                                                                <span className={cx('_huz4f0')}>
                                                                    <span role="img" aria-label="PayPal">
                                                                        <img
                                                                            src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_paypal.faa3042fa2daf6b4a9822cc4b43e8609.svg"
                                                                            alt="PayPal"
                                                                            height="9"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </span>
                                                                </span>
                                                                <span className={cx('_huz4f0')}>
                                                                    <span role="img" aria-label="Google Pay">
                                                                        <img
                                                                            src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_googlepay.3f786bc031b59575d24f504dfb859da0.svg"
                                                                            alt="Google Pay"
                                                                            height="9"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={cx('_17ctt5')}>
                                                        <div className={cx('_1xkps6z')}>
                                                            <div className={cx('_uh6ul55')}>
                                                                <h2
                                                                    tabIndex="-1"
                                                                    elementtiming="LCP-target"
                                                                    className={cx('_14i3z6h')}
                                                                >
                                                                    Thanh toán bằng
                                                                </h2>
                                                            </div>
                                                            <div>
                                                                <span className={cx('_huz4f0')}>
                                                                    <span role="img" aria-label="Thẻ Visa">
                                                                        <img
                                                                            src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_visa.0adea522bb26bd90821a8fade4911913.svg"
                                                                            alt="Thẻ Visa"
                                                                            height="9"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </span>
                                                                </span>
                                                                <span className={cx('_huz4f0')}>
                                                                    <span role="img" aria-label="Thẻ American Express">
                                                                        <img
                                                                            src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_amex.84088b520ca1b3384cb71398095627da.svg"
                                                                            alt="Thẻ American Express"
                                                                            height="9"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </span>
                                                                </span>
                                                                <span className={cx('_huz4f0')}>
                                                                    <span role="img" aria-label="Thẻ Mastercard">
                                                                        <img
                                                                            src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_mastercard.f18379cf1f27d22abd9e9cf44085d149.svg"
                                                                            alt="Thẻ Mastercard"
                                                                            height="9"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </span>
                                                                </span>
                                                                <span className={cx('_huz4f0')}>
                                                                    <span role="img" aria-label="Tìm hiểu thẻ">
                                                                        <img
                                                                            src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_discover.7f05c82f07d62a0f8a69d54dbcd7c8be.svg"
                                                                            alt="Tìm hiểu thẻ"
                                                                            height="9"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </span>
                                                                </span>
                                                                <span className={cx('_huz4f0')}>
                                                                    <span role="img" aria-label="PayPal">
                                                                        <img
                                                                            src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_paypal.faa3042fa2daf6b4a9822cc4b43e8609.svg"
                                                                            alt="PayPal"
                                                                            height="9"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </span>
                                                                </span>
                                                                <span className={cx('_huz4f0')}>
                                                                    <span role="img" aria-label="Google Pay">
                                                                        <img
                                                                            src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_googlepay.3f786bc031b59575d24f504dfb859da0.svg"
                                                                            alt="Google Pay"
                                                                            height="9"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span
                                                        className={cx('a8jt5op', 'dir', 'dir-ltr')}
                                                        id="payment_option_selector_described_by"
                                                    >
                                                        Chọn hoặc thêm phương thức thanh toán mới
                                                    </span>
                                                    <div>
                                                        <div
                                                            className={cx('_fu49hrz')}
                                                            onClick={() => selectorPayment()}
                                                        >
                                                            <button
                                                                id="dropdown-selector-payment_option_selector-button"
                                                                type="button"
                                                                aria-describedby="payment_option_selector_described_by"
                                                                aria-expanded="false"
                                                                aria-haspopup="listbox"
                                                                aria-invalid="false"
                                                                className={cx('_wz0818y')}
                                                            >
                                                                <div
                                                                    aria-disabled="false"
                                                                    id="dropdown-selector-payment_option_selector-input"
                                                                    tabIndex="-1"
                                                                    className={cx('_1wcpnjd')}
                                                                >
                                                                    <div className={cx('_hgs47m')}>
                                                                        <div className={cx('_ni9axhe')}>
                                                                            <div>
                                                                                <div className={cx('_18z8fput')}>
                                                                                    {methodPay === 'CREDIT_CARD' && (
                                                                                        <svg
                                                                                            viewBox="0 0 32 32"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            aria-label="Thẻ tín dụng"
                                                                                            role="img"
                                                                                            focusable="false"
                                                                                            /*style="display: block; height: 33px; width: 33px; fill: rgb(176, 176, 176);"*/ style={{
                                                                                                display: 'block',
                                                                                                height: 33,
                                                                                                width: 33,
                                                                                                fill: 'rgb(176, 176, 176)',
                                                                                            }}
                                                                                        >
                                                                                            <path d="M29 5a2 2 0 0 1 1.995 1.85L31 7v18a2 2 0 0 1-1.85 1.995L29 27H3a2 2 0 0 1-1.995-1.85L1 25V7a2 2 0 0 1 1.85-1.995L3 5zm0 6H3v14h26zm-3 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7-14H3v2h26z"></path>
                                                                                        </svg>
                                                                                    )}
                                                                                    {methodPay === 'PAYPAL' && (
                                                                                        <svg
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            viewBox="0 0 44 32"
                                                                                            aria-label="PayPal"
                                                                                            role="img"
                                                                                            focusable="false"
                                                                                            style={{
                                                                                                display: 'block',
                                                                                                height: 33,
                                                                                                width: 33,
                                                                                            }}
                                                                                        >
                                                                                            <g
                                                                                                fill="none"
                                                                                                fillRule="evenodd"
                                                                                            >
                                                                                                <path
                                                                                                    fill="#0079C1"
                                                                                                    fillRule="nonzero"
                                                                                                    d="M35.994 12a.2.2 0 0 1 .197-.175h1.12a.2.2 0 0 1 .197.238l-.985 6.3a.344.344 0 0 1-.332.287h-.997a.2.2 0 0 1-.197-.237L35.994 12zm-1.366 2.1a.2.2 0 0 1 .197.238l-.628 4.025a.344.344 0 0 1-.332.287h-1.047a.2.2 0 0 1-.196-.237l.049-.326s-.566.675-1.6.675c-.603 0-1.108-.175-1.465-.6-.381-.462-.541-1.112-.43-1.812.209-1.388 1.304-2.363 2.584-2.363.554 0 1.12.126 1.366.488l.086.125.05-.325a.2.2 0 0 1 .197-.175H34.627zm-1.625 2.287c.05-.325-.025-.625-.197-.837-.172-.213-.443-.325-.775-.325-.665 0-1.194.463-1.293 1.138-.049.325.013.625.185.825.172.212.443.312.776.312.664 0 1.193-.45 1.304-1.125v.012zm-5.612-4.575c.812 0 1.415.213 1.76.626.308.374.418.912.308 1.587-.247 1.55-1.157 2.338-2.757 2.338h-.764a.344.344 0 0 0-.332.287l-.283 1.788a.23.23 0 0 1-.234.2h-1.243a.2.2 0 0 1-.197-.238l.973-6.3a.344.344 0 0 1 .332-.287h2.437zm.27 2.3c.05-.312.013-.537-.123-.687-.209-.25-.627-.25-1.058-.25h-.172a.2.2 0 0 0-.197.175L25.852 15h.37c.64 0 1.304 0 1.44-.887z"
                                                                                                ></path>
                                                                                                <path
                                                                                                    fill="#00457C"
                                                                                                    fillRule="nonzero"
                                                                                                    d="M23.538 14.1c.16 0 .259.188.16.325L19.822 20.1a.356.356 0 0 1-.27.15h-1.17c-.16 0-.258-.188-.16-.325l1.207-1.725-1.28-3.825a.204.204 0 0 1 .197-.275h1.144c.148 0 .283.1.32.238l.677 2.312 1.613-2.4c.061-.1.172-.15.282-.15h1.17-.012zm-6.153 0a.2.2 0 0 1 .196.238l-.627 4.025a.344.344 0 0 1-.332.287h-1.047a.2.2 0 0 1-.196-.237l.049-.326s-.567.675-1.6.675c-.603 0-1.108-.175-1.465-.6-.381-.462-.541-1.112-.43-1.812.209-1.388 1.304-2.363 2.584-2.363.554 0 1.12.126 1.366.488l.086.125.05-.325a.2.2 0 0 1 .196-.175h1.17zm-1.625 2.287c.05-.325-.025-.625-.197-.837-.172-.213-.443-.325-.775-.325-.665 0-1.194.463-1.293 1.138-.049.325.013.625.185.825.172.212.443.312.775.312.665 0 1.194-.45 1.305-1.125v.012zm-5.612-4.575c.812 0 1.415.213 1.76.626.307.374.418.912.307 1.587-.246 1.55-1.156 2.338-2.757 2.338h-.763a.344.344 0 0 0-.332.287l-.258 1.7a.344.344 0 0 1-.333.287H6.615a.2.2 0 0 1-.197-.237l.973-6.3a.344.344 0 0 1 .332-.287h2.425zm.283 2.3c.049-.312.012-.537-.123-.687-.21-.25-.628-.25-1.059-.25h-.172a.2.2 0 0 0-.197.175L8.622 15h.369c.64 0 1.304 0 1.44-.887z"
                                                                                                ></path>
                                                                                                <path
                                                                                                    fill="#B0B0B0"
                                                                                                    d="M2.036 1C1.468 1 1 1.466 1 2.05v27.9c0 .584.468 1.05 1.036 1.05h39.928c.568 0 1.036-.466 1.036-1.05V2.05C43 1.466 42.532 1 41.964 1H2.036zM0 2.05C0 .922.907 0 2.036 0h39.928C43.093 0 44 .922 44 2.05v27.9c0 1.128-.907 2.05-2.036 2.05H2.036A2.043 2.043 0 0 1 0 29.95V2.05z"
                                                                                                ></path>
                                                                                            </g>
                                                                                        </svg>
                                                                                    )}
                                                                                    {methodPay === 'GOOGLE_PAY' && (
                                                                                        <svg
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            viewBox="0 0 44 32"
                                                                                            aria-label="Google Pay"
                                                                                            role="img"
                                                                                            focusable="false"
                                                                                            style={{
                                                                                                display: 'block',
                                                                                                height: 33,
                                                                                                width: 33,
                                                                                            }}
                                                                                        >
                                                                                            <g
                                                                                                fill="none"
                                                                                                fillRule="evenodd"
                                                                                            >
                                                                                                <path
                                                                                                    fill="#3C4043"
                                                                                                    fillRule="nonzero"
                                                                                                    d="M21.204 15.576v4.548h-1.421V8.896h3.77a3.352 3.352 0 0 1 2.435.976 3.275 3.275 0 0 1 .16 4.584l-.16.162c-.662.635-1.474.958-2.436.958h-2.348zm0-5.301v3.922h2.383a1.845 1.845 0 0 0 1.404-.582 1.996 1.996 0 0 0-.044-2.785 1.924 1.924 0 0 0-1.36-.555h-2.383zm9.083 1.916c1.05 0 1.88.286 2.49.85.609.565.909 1.353.909 2.347v4.736h-1.36V19.06h-.062c-.59.877-1.368 1.316-2.348 1.316-.83 0-1.535-.25-2.092-.752a2.39 2.39 0 0 1-.838-1.88c0-.797.3-1.424.891-1.899.592-.474 1.386-.707 2.375-.707.847 0 1.536.161 2.083.465v-.33c0-.493-.212-.959-.582-1.281a2.049 2.049 0 0 0-1.369-.529c-.794 0-1.42.34-1.88 1.021l-1.253-.797c.67-.994 1.686-1.495 3.036-1.495zm-1.836 5.578c0 .377.177.726.468.94.318.251.706.386 1.103.377.6 0 1.174-.242 1.598-.672.468-.448.706-.976.706-1.585-.441-.358-1.059-.537-1.853-.528-.574 0-1.06.143-1.448.42-.38.278-.574.628-.574 1.048z"
                                                                                                ></path>
                                                                                                <path
                                                                                                    fill="#3C4043"
                                                                                                    d="M41.489 12.441L36.74 23.5 35.275 23.5 37.04 19.632 33.924 12.441 35.469 12.441 37.72 17.957 37.746 17.957 39.944 12.441z"
                                                                                                ></path>
                                                                                                <path
                                                                                                    fill="#4285F4"
                                                                                                    d="M15.458 14.59c0-.438-.036-.877-.106-1.307H9.358v2.48h3.434a2.988 2.988 0 0 1-1.271 1.962v1.611h2.047c1.201-1.119 1.89-2.775 1.89-4.745z"
                                                                                                ></path>
                                                                                                <path
                                                                                                    fill="#34A853"
                                                                                                    d="M9.358 20.895c1.712 0 3.16-.574 4.21-1.558l-2.048-1.612c-.573.394-1.306.618-2.162.618-1.66 0-3.063-1.138-3.567-2.66h-2.11v1.666a6.34 6.34 0 0 0 5.677 3.546z"
                                                                                                ></path>
                                                                                                <path
                                                                                                    fill="#FBBC04"
                                                                                                    d="M5.792 15.683a3.943 3.943 0 0 1 0-2.471v-1.657h-2.11a6.474 6.474 0 0 0 0 5.785l2.11-1.657z"
                                                                                                ></path>
                                                                                                <path
                                                                                                    fill="#EA4335"
                                                                                                    d="M9.358 10.552a3.394 3.394 0 0 1 2.436.967l1.818-1.844A6.087 6.087 0 0 0 9.358 8c-2.401 0-4.6 1.38-5.676 3.555l2.11 1.666c.503-1.531 1.906-2.669 3.566-2.669z"
                                                                                                ></path>
                                                                                                <path
                                                                                                    fill="#B0B0B0"
                                                                                                    d="M2.036 1C1.468 1 1 1.466 1 2.05v27.9c0 .584.468 1.05 1.036 1.05h39.928c.568 0 1.036-.466 1.036-1.05V2.05C43 1.466 42.532 1 41.964 1H2.036zM0 2.05C0 .922.907 0 2.036 0h39.928C43.093 0 44 .922 44 2.05v27.9c0 1.128-.907 2.05-2.036 2.05H2.036A2.043 2.043 0 0 1 0 29.95V2.05z"
                                                                                                ></path>
                                                                                            </g>
                                                                                        </svg>
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className={cx('_10ejfg4u')}>
                                                                            <div>
                                                                                {methodPay === 'CREDIT_CARD' && (
                                                                                    <span dir="ltr">
                                                                                        Thẻ tín dụng hoặc thẻ ghi nợ
                                                                                    </span>
                                                                                )}
                                                                                {methodPay === 'PAYPAL' && (
                                                                                    <span dir="ltr">PayPal</span>
                                                                                )}
                                                                                {methodPay === 'GOOGLE_PAY' && (
                                                                                    <span dir="ltr">Google Pay</span>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                            <input
                                                                name="payment_option_selector"
                                                                type="hidden"
                                                                defaultValue="CREDIT_CARD"
                                                            />
                                                            <span className={cx('_qcdbez')}>
                                                                <div className={cx('_nncr1bm')}>
                                                                    <div className={cx('_ni9axhe')}>
                                                                        <div
                                                                            className={cx('_wn4bip')}
                                                                            style={styleRotate()}
                                                                        >
                                                                            <svg
                                                                                viewBox="0 0 18 18"
                                                                                role="presentation"
                                                                                aria-hidden="true"
                                                                                focusable="false"
                                                                                /*style="height: 16px; width: 16px; display: block; fill: rgb(72, 72, 72);"*/ style={{
                                                                                    display: 'block',
                                                                                    height: 16,
                                                                                    width: 33,
                                                                                    fill: 'rgb(72, 72, 72)',
                                                                                }}
                                                                            >
                                                                                <path
                                                                                    d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z"
                                                                                    fillRule="evenodd"
                                                                                ></path>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                        <div className={cx('_e296pg')}>
                                                            {visible == 1 && (
                                                                <SelectPaymentOptions
                                                                    card={setMethodCreditCard}
                                                                    paypal={setMethodPayPal}
                                                                    googlepay={setMethodGooglePay}
                                                                />
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                        <div className={cx('_4l12l8')}>
                                            <div className={cx('_88xxct')}>
                                                {/* <div className={cx('_64pbdv')}>
                                                    <div className={cx('_clw8y6')}>
                                                        <iframe
                                                            className={cx('_e296pg')}
                                                            name="payment-iframe"
                                                            id="payment-iframe"
                                                            width="100%"
                                                            height="114"
                                                            frameBorder="0"
                                                            scrolling="no"
                                                            seamless=""
                                                            src="https://iframes.airbnbpayments.com/3b2d37b3518f41ce3d98618e2e7cd9f0cfda1452/iframe_v2.html?country=VN&amp;origin=https%3A%2F%2Fwww.airbnb.com.vn&amp;is_cvv_only=false&amp;cvv_friction=undefined"
                                                            title="Biểu mẫu nhập thẻ thanh toán"
                                                        ></iframe>
                                                    </div>
                                                </div> */}
                                                {/* <div className={cx('_v0ipn8')}>
                                                    <div className={cx('_1jj61m9')}>
                                                        <label className={cx('_1yw7hpv')} htmlFor="zipCode">
                                                            <div className={cx('_1jn0ze9')}>
                                                                <div className={cx('_11hx67x')}>Mã bưu chính</div>
                                                            </div>
                                                            <div dir="ltr">
                                                                <div className={cx('_js9i23')}>
                                                                    <input
                                                                        name="zipCode"
                                                                        errormessage=""
                                                                        className={cx('_c5rhl5')}
                                                                        id="zipCode"
                                                                        autoComplete="off"
                                                                        type="text"
                                                                        aria-describedby=""
                                                                        defaultValue=""
                                                                    />
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div> */}
                                                {/* <div
                                                    className={cx('_14yb6ke')}
                                                    aria-disabled="false"
                                                    role="button"
                                                    tabIndex="0"
                                                >
                                                    <label
                                                        htmlFor="billing_country_selector"
                                                        className={cx('_13kgb0p')}
                                                    >
                                                        <div className={cx('_zhftk97')}>
                                                            <div className={cx('_11hx67x')}>Quốc gia/khu vực</div>
                                                        </div>
                                                        <div
                                                            className={cx('_1ekxhnk')}
                                                            id="billing_country_selector"
                                                            aria-disabled="false"
                                                        >
                                                            Việt Nam
                                                        </div>
                                                    </label>
                                                    <div className={cx('_lmil0')}>
                                                        <svg
                                                            viewBox="0 0 18 18"
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            style={{
                                                                height: 16,
                                                                width: 16,
                                                                display: 'block',
                                                                fill: 'rgb(72, 72, 72)',
                                                            }}
                                                        >
                                                            <path
                                                                d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z"
                                                                fillRule="evenodd"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('c1yo0219', 'dir', 'dir-ltr')}>
                    <div /*style="--gp-section-max-width:1120px;"*/>
                        <div data-plugin-in-point-id="COUPON" data-section-id="COUPON" style={{ paddingBottom: 24 }}>
                            <div>
                                <div className={cx('_4gelgl')}>
                                    <button type="button" className={cx('_15rpys7s')}>
                                        Nhập mã giảm giá
                                    </button>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('c1yo0219', 'dir', 'dir-ltr')}>
                    <div /*style="--gp-section-max-width:1120px;"*/>
                        <div style={{ marginTop: 8 }}>
                            <div className={cx('_npr0qi')} style={{ borderTopColor: 'rgb(221, 221, 221)' }}></div>
                            <div
                                data-plugin-in-point-id="TITLE_ADDITIONAL_REQUIREMENT"
                                data-section-id="TITLE_ADDITIONAL_REQUIREMENT"
                                style={{ paddingTop: 32, paddingBottom: 24 }}
                            >
                                <section>
                                    <div className={cx('tu9uqg8', 'dir', 'dir-ltr')}>
                                        <h2 tabIndex="-1" className={cx('_14i3z6h')} elementtiming="LCP-target">
                                            Bắt buộc cho chuyến đi của bạn
                                        </h2>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('c1yo0219', 'dir', 'dir-ltr')}>
                    <div /*style="--gp-section-max-width:1120px;"*/>
                        <div
                            data-plugin-in-point-id="PHONE_VERIFICATION"
                            data-section-id="PHONE_VERIFICATION"
                            style={{ paddingBottom: 24 }}
                        >
                            <div className={cx('_b7b6bk')}>
                                <div className={cx('_1qyi2pa')}>
                                    <div className={cx('_m4gvkxh')}>
                                        <div className={cx('_5kaapu')}>Số điện thoại</div>
                                    </div>
                                    <div className={cx('_o7c33ig')}>
                                        Thêm và xác nhận số điện thoại của bạn để nhận thông tin cập nhật về chuyến đi.
                                    </div>
                                </div>
                                <div className={cx('_fz3zdn')}>
                                    <button
                                        data-testid="checkout_platform.PHONE_VERIFICATION.add"
                                        type="button"
                                        className={cx('_1ju7xj0j')}
                                    >
                                        Thêm
                                    </button>
                                </div>
                            </div>
                            <div className={cx('_cne99n')}></div>
                        </div>
                    </div>
                </div>
                <div className={cx('c1yo0219', 'dir', 'dir-ltr')}>
                    <div /*style="--gp-section-max-width:1120px;"*/>
                        <div style={{ marginTop: 8 }}>
                            <div className={cx('_npr0qi')} /*style="border-top-color: rgb(221, 221, 221);"*/></div>
                            <div
                                data-plugin-in-point-id="CANCELLATION_POLICY"
                                data-section-id="CANCELLATION_POLICY"
                                style={{ paddingTop: 32, paddingBottom: 24 }}
                            >
                                <div className={cx('_4gelgl')}>
                                    <div className={cx('_ymq6as')}>
                                        <div className={cx('_pgfqnw')}>Chính sách hủy</div>
                                    </div>
                                    <div className={cx('_1mw6f03')}></div>
                                    <strong id="CANCELLATION_POLICY-title"></strong>
                                    <span>
                                        <span className={cx('ll4r2nl', 'dir', 'dir-ltr')}>
                                            Đặt phòng/đặt chỗ này không được hoàn tiền.
                                        </span>{' '}
                                    </span>
                                    <button type="button" className={cx('_15rpys7s')}>
                                        Tìm hiểu thêm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('c1yo0219', 'dir', 'dir-ltr')}>
                    <div /*style="--gp-section-max-width:1120px;"*/>
                        <div /*style="margin-top: 8px; --gp-section-top-margin:8;"*/ style={{ marginTop: 8 }}>
                            <div className={cx('_npr0qi')} style={{ borderTopColor: 'rgb(221, 221, 221)' }}></div>
                            <div
                                data-plugin-in-point-id="TERMS_AND_CONDITIONS"
                                data-section-id="TERMS_AND_CONDITIONS"
                                /*style="padding-top: 32px;"*/ style={{ marginTop: 32 }}
                            >
                                <div className={cx('_n6ouu8')}>
                                    Bằng việc chọn nút bên dưới, tôi đồng ý với{' '}
                                    <span className={cx('_1hyxfz6')} role="button" tabIndex="0">
                                        Nội quy nhà của Chủ nhà
                                    </span>
                                    ,
                                    <span className={cx('_1hyxfz6')} role="button" tabIndex="0">
                                        Chính sách đặt lại và hoàn tiền
                                    </span>
                                    , và đồng ý rằng có thể{' '}
                                    <span className={cx('_1hyxfz6')} role="button" tabIndex="0">
                                        tính phí vào phương thức thanh toán của tôi
                                    </span>
                                    nếu tôi phải chịu trách nhiệm về thiệt hại.
                                </div>
                                <div className={cx('_cne99n')}></div>
                                <div className={cx('_cne99n')}></div>
                                <div className={cx('_cne99n')}></div>
                                <div className={cx('_cne99n')}></div>
                                <div className={cx('_cne99n')}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('c1yo0219', 'dir', 'dir-ltr')}>
                    <div /*style="--gp-section-max-width:1120px;"*/>
                        <div
                            data-plugin-in-point-id="CONFIRM_AND_PAY"
                            data-section-id="CONFIRM_AND_PAY"
                            style={{ paddingTop: 24, paddingBottom: 24 }}
                        >
                            <div className={cx('_88xxct')}>
                                <div>
                                    <div data-testid="submit-button">
                                        {/* <button
                                            type="button"
                                            className={cx('_6901pxv')}
                                            data-veloute="checkout-flow-submit-button"
                                        >
                                            <span className={cx('tjxdvlu', 'dir', 'dir-ltr')}>
                                                <span
                                                    className={cx('t12u7nq4', 'dir', 'dir-ltr')}
                                                    style={{
                                                        backgroundPosition:
                                                            'calc((100 - var(--mouse-x, 0)) * 1%) calc((100 - var(--mouse-y, 0)) * 1%)',
                                                    }}
                                                ></span>
                                            </span>
                                            <span className={cx('c4wd1yj', 'dir', 'dir-ltr')}>
                                                <span className={cx('_14d5b3i')}></span>{' '}
                                            </span>
                                        </button> */}
                                        {user?.status && user !== null ? (
                                            <form action={urlPay} method="post">
                                                <span className={cx('tjxdvlu', 'dir', 'dir-ltr')}>
                                                    <span
                                                        className={cx('t12u7nq4', 'dir', 'dir-ltr')}
                                                        style={{
                                                            backgroundPosition:
                                                                'calc((100 - var(--mouse-x, 0)) * 1%) calc((100 - var(--mouse-y, 0)) * 1%)',
                                                        }}
                                                    ></span>
                                                </span>
                                                <input
                                                    className={cx('btnpay')}
                                                    type="submit"
                                                    value="Xác nhận và thanh toán"
                                                />
                                            </form>
                                        ) : (
                                            <form action="/signin/pay/" method="get">
                                                <span className={cx('tjxdvlu', 'dir', 'dir-ltr')}>
                                                    <span
                                                        className={cx('t12u7nq4', 'dir', 'dir-ltr')}
                                                        style={{
                                                            backgroundPosition:
                                                                'calc((100 - var(--mouse-x, 0)) * 1%) calc((100 - var(--mouse-y, 0)) * 1%)',
                                                        }}
                                                    ></span>
                                                </span>
                                                <input
                                                    className={cx('btnpay')}
                                                    type="submit"
                                                    value="Xác nhận và thanh toán"
                                                />
                                            </form>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <link
                                rel="prefetch"
                                crossOrigin="anonymous"
                                href="https://a0.muscache.com/pictures/b1751353-5028-411b-92ea-45a1a958348c.json"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {visibleModalDate && <div className={cx('overlay')} onClick={handlevisibleModalDate}></div>}
            {visibleModalCustomer && <div className={cx('overlay')} onClick={handlevisibleModalCustomer}></div>}
            {visibleModalDate && (
                <ModalDate>
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
                        onClick={handlevisibleModalDate}
                    >
                        <path d="m6 6 20 20" />
                        <path d="m26 6-20 20" />
                    </svg>
                </ModalDate>
            )}
            {visibleModalCustomer && (
                <ModalCustomer>
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
                        onClick={handlevisibleModalCustomer}
                    >
                        <path d="m6 6 20 20" />
                        <path d="m26 6-20 20" />
                    </svg>
                </ModalCustomer>
            )}
            <a className={cx('_fu49hrz')} href="/payment/success">
                paysuccess
            </a>
        </div>
    );
}

export default CardPayment;
