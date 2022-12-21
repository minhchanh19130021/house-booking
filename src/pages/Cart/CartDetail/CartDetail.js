import classNames from 'classnames/bind';
import styles from './CartDetail.module.scss';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../../context/SearchContext';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '~/config/firebase';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Cart(props) {
    const navigate = useNavigate();
    const user = useSelector((state) => state.authentication.login.currentUser);
    const [linkImg, setLinkImg] = useState(
        'https://preview.redd.it/zcgs03lgoy351.png?width=288&format=png&auto=webp&s=d9bf4b46713d7fdbf11b82a8e364ceee79724a9c',
    );
    let getImageFromFirebase = () => {
        getDownloadURL(ref(storage, `house/${props.folder_image}/${props.avatar}`))
            .then((url) => {
                setLinkImg(url);
            })
            .catch((error) => {});
    };
    getImageFromFirebase();
    const data = props.data;
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const checkIn = new Date(data?.check_in);
    const checkout = new Date(data?.checkout);
    checkIn.setDate(checkIn.getDate() - 1);
    checkout.setDate(checkout.getDate() - 1);
    const countDays = Math.round(Math.abs((checkIn - checkout) / oneDay));
    const days = countDays ? countDays : 0;
    const [choose, setChoose] = useState(false);
    const price =
        data?.home[0]?.price && data?.home[0]?.discount && days
            ? data?.home[0]?.price - data?.home[0]?.price * data?.home[0]?.discount * days
            : 0;
    const currentDate = new Date();
    const isBooked = data.is_booked;
    const isActive =
        isBooked == true
            ? true
            : checkIn.getFullYear() < currentDate.getFullYear()
            ? true
            : checkIn.getMonth() < currentDate.getMonth()
            ? true
            : checkIn.getDate() < currentDate.getDate()
            ? true
            : false;

    const [goToCheckout, setGoToCheckout] = useState(true);
    const { dispatch } = useContext(SearchContext);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        baby: 0,
        pet: 0,
    });
    const [home, setHome] = useState(data?.home[0]?._id);
    const [payPoint, setPayPoint] = useState(100);
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
    const folder_image = props?.folder_image ? props?.folder_image : '';
    const avatar = props?.avatar ? props?.avatar : '';
    const bonusPoint = user?.bonus_point;

    useEffect(() => {
        setOptions({
            adult: data?.number_visitor?.adult,
            children: data?.number_visitor?.children,
            baby: data?.number_visitor?.baby,
        });
        setDates([
            {
                startDate: checkIn,
                endDate: checkout,
                key: 'selection',
            },
        ]);
    }, []);
    function handleCheckout(e) {
        e.preventDefault();
        if (!isActive) {
            dispatch({
                type: 'NEW_SEARCH',
                payload: { home, dates, options, payPoint, bonusPoint, folder_image, avatar },
            });

            navigate(
                '/payment/' +
                    data?.home[0]?._id +
                    '&numberOfAdults=' +
                    data?.number_visitor?.adult +
                    '&numberOfChildren=' +
                    data?.number_visitor?.children +
                    '&numberOfInfants=' +
                    data?.number_visitor?.baby +
                    '&checkin=' +
                    checkIn +
                    '&checkout=' +
                    checkout,
                { state: { home, dates, options } },
            );
        }
    }
    function handleDelete() {
        props.setIsDisplayFromDelete(true);
        props.setIdToDelete(data._id);
    }
    function handleChooseId(e) {
        e.preventDefault();
        if (!isActive) {
            setChoose(!choose);
            if (choose) {
                props.setTotalPrice(props.totalPrice - price);
                props.setNumberCartDetailChosen(props.numberCartDetailChosen - 1);
            } else {
                props.setTotalPrice(props.totalPrice + price);
                props.setNumberCartDetailChosen(props.numberCartDetailChosen + 1);
            }
        }
    }
    return (
        <div className={cx('container')}>
            <div className={cx('container_cart')}>
                <div className={cx('top')}>
                    <div className={cx('information-home')}>
                        <img src={linkImg} />
                        <div className={cx('information')}>
                            <p>{data?.home[0]?.name}</p>
                            <span className={cx('star')}>
                                <i className={cx('fa-solid fa-star')}></i>
                            </span>
                            {Array.from({ length: data?.home[0]?.rate }, (e, i) => {
                                return (
                                    <span key={i} className={cx('star')}>
                                        <i className={cx('fa-solid fa-star')}></i>
                                    </span>
                                );
                            })}
                            <span
                                className={cx('location-name')}
                            >{`${data?.home[0]?.address?.city} ${data?.home[0]?.address?.district} ${data?.home[0]?.address?.number}`}</span>
                            <div className={cx('rate')}>
                                <span className={cx('point')}>{`${
                                    data?.home_detail[0]?.rates?.experience === undefined
                                        ? 0
                                        : data?.home_detail[0]?.rates?.experience
                                }/5`}</span>
                                <span className={cx('idea')}>
                                    {data?.home_detail[0]?.rates?.experience == 5
                                        ? 'Trên cả tuyệt vời'
                                        : data?.home_detail[0]?.rates?.experience > 4
                                        ? 'Tuyệt vời'
                                        : data?.home_detail[0]?.rates?.experience > 3
                                        ? 'Đáng để thử'
                                        : data?.home_detail[0]?.rates?.experience > 2
                                        ? 'Chưa được tốt'
                                        : 'Chưa được đánh giá cao'}
                                </span>
                                <span className={cx('number')}>{data?.home[0]?.number_review} nhận xét</span>
                            </div>
                            <span className={cx('text')}>{data?.home_detail[0]?.description}</span>
                        </div>
                    </div>
                    <div className={cx('delete')} onClick={handleDelete}>
                        <svg
                            width="1em"
                            height="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            data-component="ProductCardBin"
                            className="SvgIconstyled__SvgIconStyled-sc-1i6f60b-0 fEUEEv"
                        >
                            <path d="M14.28 2a1.5 1.5 0 0 1 1.373.898l.05.128L16.36 5h4.14a.5.5 0 1 1 0 1H19v13.5a2.5 2.5 0 0 1-2.336 2.495L16.5 22h-9a2.5 2.5 0 0 1-2.495-2.336L5 19.5V6H3.5a.5.5 0 0 1 0-1h4.139l.659-1.974a1.5 1.5 0 0 1 1.286-1.02L9.72 2h4.558zM18 6H6v13.5a1.5 1.5 0 0 0 1.356 1.493L7.5 21h9a1.5 1.5 0 0 0 1.493-1.356L18 19.5V6zm-6 2a.5.5 0 0 1 .5.5v10a.5.5 0 1 1-1 0v-10A.5.5 0 0 1 12 8zM8.5 8a.5.5 0 0 1 .5.5v10a.5.5 0 1 1-1 0v-10a.5.5 0 0 1 .5-.5zm7 0a.5.5 0 0 1 .5.5v10a.5.5 0 1 1-1 0v-10a.5.5 0 0 1 .5-.5zm-1.22-5H9.72a.5.5 0 0 0-.437.259l-.037.083L8.693 5h6.613l-.552-1.658a.5.5 0 0 0-.384-.334L14.28 3z"></path>
                        </svg>
                    </div>
                </div>
                <label
                    htmlFor={data._id}
                    className={cx(
                        'bottom',
                        // choose ? 'active' : null,
                        choose ? null : 'active-border-top',
                        isActive ? 'active' : null,
                        isActive ? 'none-click' : null,
                        !isActive ? null : 'active-border-top-2',
                    )}
                >
                    <div className={cx('bottom', isActive ? 'none-click' : null)} onClick={handleChooseId}>
                        <div className={cx('book')}>
                            <div className={cx()}>
                                {/* <input
                                    type="checkbox"
                                    id={data._id}
                                    checked={choose ? true : false}
                                    onChange={handleChooseId}
                                    className={cx(isActive ? 'none-click' : null)}
                                /> */}
                                <span className={cx('book-info')}>
                                    {`${data?.number_visitor?.adult} người lớn ${data?.number_visitor?.children} trẻ em ${data?.number_visitor?.baby} em bé ${data?.number_visitor?.pet} thú cưng`}
                                </span>
                            </div>
                            <p className={cx('date', isActive ? 'none-click' : null)}>{`${data?.check_in
                                ?.substring(0, 10)
                                ?.split('-')
                                ?.reverse()
                                ?.join('/')
                                ?.replace('/', ' ngày ')
                                ?.replace('/', ' tháng ')
                                ?.replace('/', ' năm ')} - ${data?.checkout
                                ?.substring(0, 10)
                                ?.split('-')
                                ?.reverse()
                                ?.join('/')
                                ?.replace('/', ' ngày ')
                                ?.replace('/', ' tháng ')
                                ?.replace('/', ' năm ')}`}</p>
                            {isActive ? (
                                <div className={cx('notify-none-active', isActive ? 'none-click' : null)}>
                                    {isBooked ? (
                                        <span>Nơi ở này, trong ngày này đã được người khác đặt</span>
                                    ) : (
                                        <span>Đã qua ngày check in, quý khách không thể đặt phòng</span>
                                    )}
                                </div>
                            ) : null}
                        </div>
                        <div>
                            <p className={cx('price', isActive ? 'none-click' : null)}>
                                {data?.home[0]?.price}
                                {`${Array.from(data?.home[0]?.price ? JSON.stringify(price) : '')
                                    .reverse()
                                    .map((e, i) => (i % 3 === 0 && i !== 0 ? `${e}.` : e))
                                    .reverse()
                                    .join('')} ₫`}
                            </p>
                            <button className={cx('checkout', isActive ? 'none-click' : null)} onClick={handleCheckout}>
                                Đến thanh toán
                            </button>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    );
}

export default Cart;
