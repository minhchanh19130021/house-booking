import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useContext, useState, useEffect } from 'react';
import Button from '~/components/Button';
import styles from './BookingForm.module.scss';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../../context/SearchContext';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
// import { data } from 'autoprefixer';
import useFetch from '../../../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { info } from 'autoprefixer';

const cx = classNames.bind(styles);
function BookingForm(props) {
    const user = useSelector((state) => state.authentication.login.currentUser);
    const [visibleGuestInfo, setVisibleGuestInfo] = useState(false);

    const hanldeVisibleGuestInfo = () => {
        setVisibleGuestInfo((visibleGuestInfo) => !visibleGuestInfo);
    };

    const { data, loading, error } = useFetch(`http://localhost:8080/api/homes/find/636ce065825a1cd1940641a2`);

    // const [home, setHome] = useState(props.dataFromParent?._id);

    const [visiblePayByPoint, setVisiblePayByPoint] = useState(false);
    // useEffect(() => {
    //     fetch(`http://localhost:8080/api/v1/user/get/638c56fe8693fbfdd908508b`, {
    //         method: 'GET',
    //     })
    //         .then((response) => response.json())
    //         .then((response) => {
    //             if (response.success === true) {
    //                 setUserInfor(response.data[0]);
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);
    const [payPoint, setPayPoint] = useState(0);
    const [warnVisiter, setWarnVisiter] = useState(false);

    const [goToCheckout, setGoToCheckout] = useState(true);
    const [openDate, setOpenDate] = useState(false);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: tomorrow,
            key: 'selection',
        },
    ]);
    const [openOptions, setOpenOptions] = useState(false);

    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        baby: 0,
        pet: 0,
    });

    const [isDisplayFromCart, setIsDisplayFromCart] = useState(false);

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            if(options.baby == props.dataFromParent?.detail[0]?.maximum_number_visitor?.baby-1 || options.adult+options.children == props.dataFromParent?.detail[0]?.maximum_number_visitor?.adult_children-1 || options.pet == props.dataFromParent?.detail[0]?.maximum_number_visitor?.pet-1){
                setWarnVisiter(true)
            }
            return {
                ...prev,
                [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
            };
        });
       

    };

    const { dispatch } = useContext(SearchContext);
    const navigate = useNavigate();

    const idh = props.dataFromParent?._id;

    const handleSearch = () => {
        var bonusPoint = props.userInfor?.bonus_point
        var home = props.dataFromParent?._id;
        dispatch({ type: 'NEW_SEARCH', payload: { home, dates, options, payPoint, bonusPoint } });
        navigate(
            '/payment/' +
                idh +
                '&numberOfAdults=' +
                options.adult +
                '&numberOfChildren=' +
                options.children +
                '&numberOfInfants=' +
                options.baby +
                '&checkin=' +
                dates[0].startDate +
                '&checkout=' +
                dates[0].endDate,
        );
    };

    const handleContinueWatch = (e) => {
        setIsDisplayFromCart(false);
    };

    const handleToCheckout = (e) => {
        navigate('/cart');
    };

    const handleAddToCart = (e) => {
        e.preventDefault();
        let cartDetailToAdd = {};
        const createDate = new Date().toISOString();
        cartDetailToAdd.create_date = createDate;
        cartDetailToAdd.hid = idh;
        cartDetailToAdd.number_visitor = {
            adult: options.adult,
            children: options.children,
            baby: options.baby,
            pet: options.pet,
        };
        cartDetailToAdd.check_in = dates[0].startDate;
        cartDetailToAdd.checkout = dates[0].endDate;
        cartDetailToAdd.uid = user?._id;
        cartDetailToAdd.is_booked = false;
       
           
      

        fetch(`http://localhost:8080/api/v2/cart/put`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', token: `Bearer ${user?.accessToken}` },
            body: JSON.stringify(cartDetailToAdd),
        })
            .then((response) => {
                if (response.status === 200) {
                    setIsDisplayFromCart(true);
                } else {
                    alert('Thêm vào giỏ hàng thất bại');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

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

    function allPrice() {
        return priceStay() + 350000 + 100000;
    }

    const days = dayDifference(dates[0].endDate, dates[0].startDate);

    function priceStay() {
        return props.dataFromParent?.price * days;
    }

    return (
        <>
            <form className={cx('booking-form')}>
                <div className={cx('booking-form__header')}>
                    <div className={cx('price')}>
                        <p className={cx('old')}>{formatter.format(props.dataFromParent?.price)} / đêm</p>
                        <p className={cx('new')}>
                            {formatter.format(
                                props.dataFromParent?.price -
                                    props.dataFromParent?.price * props.dataFromParent?.discount,
                            )}{' '}
                            / đêm 
                        </p>
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
                            {props.dataFromParent?.rate}
                        </p>
                        <p className={cx('number')}>{props.dataFromParent?.number_review} đánh giá</p>
                    </div>
                </div>
                <div className={cx('booking-form__body')}>
                    <div className={cx('guest')}>
                        <div className={cx('guest-title')}>
                            <label>
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" /> Ngày 
                            </label>
                            <div className="headerSearchItem">
                                <label onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(
                                    dates[0].startDate,
                                    'dd/MM/yyyy',
                                )} đến ${format(dates[0].endDate, 'dd/MM/yyyy')}`}</label>
                                {openDate && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) => setDates([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={dates}
                                        className="date"
                                        minDate={new Date()}
                                    />
                                )}
                            </div>
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
                    <div className={cx('guest')}>
                        <div className={cx('guest-title')}>
                            <label onClick={hanldeVisibleGuestInfo}>
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" /> Khách
                            </label>
                            <label onClick={hanldeVisibleGuestInfo} style={{ fontSize: 14 }}>
                            {`${options.adult+options.children} Khách · ${options.baby} Em bé  · ${options.pet} Thú cưng`}
                                {/* {`${props.dataFromParent?.detail[0]?.maximum_number_visitor?.adult_children} Người lớn · ${props.dataFromParent?.detail[0]?.maximum_number_visitor?.baby} Em bé  ·${props.dataFromParent?.detail[0]?.maximum_number_visitor?.pet} Thú cưng`} */}
                            </label>
                            {visibleGuestInfo && (
                                <motion.div animate={{}} className={cx('guest-info')}>
                                    
                                    <div className={cx('guest-info__item')}>
                                        <div className={cx('guest-info__item-title')}>
                                            <p>Người lớn</p>
                                            <span>Từ 13 tuổi trở lên</span>
                                        </div>
                                        <div className={cx('guest-info__item-select')}>
                                            <div
                                                className={cx('select-increment')}
                                                style={{ display: options.adult <= 1 ? 'none' : 'block' }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                    onClick={() => handleOption('adult', 'd')}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 12h-15"
                                                    />
                                                </svg>
                                            </div>
                                            <p className={cx('current-number')}>{`${options.adult}`}</p>
                                            <div className={cx('select-decrement')}
                                             style={{ display: options.adult + options.children == props.dataFromParent?.detail[0]?.maximum_number_visitor?.adult_children ? 'none' : 'block' }}
                                            
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                    onClick={() => handleOption('adult', 'i')}
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
                                            <div
                                                className={cx('select-increment')}
                                                style={{ display: options.children <= 0 ? 'none' : 'block' }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                    disabled={options.children <= 0}
                                                    onClick={() => handleOption('children', 'd')}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 12h-15"
                                                    />
                                                </svg>
                                            </div>
                                            <p className={cx('current-number')}>{`${options.children}`}</p>
                                            <div className={cx('select-decrement')}
                                             style={{ display: options.adult+options.children == props.dataFromParent?.detail[0]?.maximum_number_visitor?.adult_children ? 'none' : 'block' }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                    onClick={() => handleOption('children', 'i')}
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
                                            <div
                                                className={cx('select-increment')}
                                                style={{ display: options.baby <= 0 ? 'none' : 'block' }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                    disabled={options.baby <= 0}
                                                    onClick={() => handleOption('baby', 'd')}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 12h-15"
                                                    />
                                                </svg>
                                            </div>
                                            <p className={cx('current-number')}>{`${options.baby}`}</p>
                                            <div className={cx('select-decrement')}
                                             style={{ display: options.baby == props.dataFromParent?.detail[0]?.maximum_number_visitor?.baby ? 'none' : 'block' }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                    onClick={() => handleOption('baby', 'i')}
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
                                            <div
                                                className={cx('select-increment')}
                                                style={{ display: options.pet <= 0 ? 'none' : 'block' }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                    disabled={options.adult <= 0}
                                                    onClick={() => handleOption('pet', 'd')}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 12h-15"
                                                    />
                                                </svg>
                                            </div>
                                            <p className={cx('current-number')}>{`${options.pet}`}</p>
                                            <div className={cx('select-decrement')}
                                             style={{ display: options.pet == props.dataFromParent?.detail[0]?.maximum_number_visitor?.pet ? 'none' : 'block' }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                    onClick={() => handleOption('pet', 'i')}
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
                    <Button type="button" className={cx('btn-booking')} onClick={handleSearch}>
                        Đặt Phòng
                    </Button>
                    <Button type="button" className={cx('btn-cart')} onClick={handleAddToCart}>
                        Thêm vào giỏ hàng
                    </Button>
                    <div className={cx('price-detail')}>
                        <div className={cx('price-item')}>
                            <p className={cx('price-item__title')}>Tiền phòng ({days} đêm) </p>
                            <p className={cx('price-item__value')}>{formatter.format(priceStay())}</p>
                        </div>
                        <div className={cx('price-item')}>
                            <p className={cx('price-item__title')}>Phí dịch vụ</p>
                            <p className={cx('price-item__value')}>{formatter.format(350000)}</p>
                        </div>
                        <div className={cx('price-item')}>
                            <p className={cx('price-item__title')}>Phí vệ sinh</p>
                            <p className={cx('price-item__value')}>{formatter.format(100000)}</p>
                        </div>
                    </div>
                    <div className={cx('price-total')}>
                        <p className={cx('price-total__title')}>Tổng trước thuế</p>
                        <p className={cx('price-total__value')}>{formatter.format(allPrice())}</p>
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
            <div className={cx('contain__cart', isDisplayFromCart ? 'active' : null)}>
                <p>Thêm vào giỏ hàng thành công</p>
                <div className={cx('contain__button')}>
                    <button className={cx('button', 'refuse__button')} onClick={handleContinueWatch}>
                        Tiếp tục xem phòng
                    </button>
                    <button className={cx('button', 'confirm__button')} onClick={handleToCheckout}>
                        Kiểm tra giỏ hàng của bạn
                    </button>
                </div>
            </div>
        </>
    );
}

export default BookingForm;
