import classNames from 'classnames/bind';
import styles from './PaymentSuccess.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useState, useEffect } from 'react';
import { SearchContext } from '../../context/SearchContext';
import useFetch from '../../hooks/useFetch';
import { format } from 'date-fns';
import { date } from 'yup';
const cx = classNames.bind(styles);
function PaymentSuccess() {
    const user = useSelector((state) => state.authentication.login.currentUser);
    const { home, dates, options, payPoint, bonusPoint} = useContext(SearchContext);
    const [userInfor, setUserInfor] = useState([]);
    const [isGoToCheckout, setIsGoToCheckOut] = useState(false);
    const { data, loading, error } = useFetch(`http://localhost:8080/api/homes/find/` + home);
    const uid = user?._id;
    const { dispatch } = useContext(SearchContext);
    const [address, setAddress] = useState({});
    const [listVoucher, setListVoucher] = useState([]);
    
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }
    const days = dayDifference(dates[0].endDate, dates[0].startDate);
    const homePrice = data.price * days;
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'VND',
    });

    function pricePoint() {
        return payPoint * 1000;
    }

    function total() {
        if (payPoint > 0) {
            return homePrice + 350000 + 100000 - pricePoint();
        } else {
            return homePrice + 350000 + 100000;
        }
    }

    useEffect(() => {
        if (user?._id) {
            fetch(`http://localhost:8080/api/v1/user/get`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    token: `Bearer ${user?.accessToken}`,
                },
                body: JSON.stringify({ uid: user?._id }),
            })
                .then((response) => response.json())
                .then((response) => {
                    if (response.success) {
                       setUserInfor(response.data[0])
                       setAddress(response.data[0].address)
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    (async () => {
        await fetch('http://localhost:8080/api/v1/newBooking', {
            method: 'POST',
            body: JSON.stringify({
                hid: home,
                uid: uid,
                total_price: total(),
                payment_method: 'PayPal',
                checkin: dates[0].startDate,
                checkout: dates[0].endDate,
                number_visitor: {
                    adults: options.adult,
                    child: options.children,
                    baby: options.baby,
                    pet: options.pet,
                },
                voucher: listVoucher,
                price: data.price,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).catch((err) => {
            console.log(err);
        });

    })();

    (async () => {
        if (payPoint > 0) {
            await fetch(`http://localhost:8080/api/v1/user/updateBonusPoint`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    _id: user._id,
                    bonus_point: 0,
                }),
            })
                .then((response) => response.json())
                .then((response) => {
                    if (response.success == true) {
                        console.log('Thay đổi thành công');
                    } else {
                        console.log('Thay đổi không thành công');
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            await fetch(`http://localhost:8080/api/v1/user/updateBonusPoint`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    _id: user._id,
                    bonus_point:  Math.floor(total() / 100000)+Number.parseInt(bonusPoint),
                }),
            })
                .then((response) => response.json())
                .then((response) => {
                    if (response.success == true) {
                        console.log('Thay đổi thành công1');
                    } else {
                        console.log('Thay đổi không thành công1');
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    })();

    const creatDate = new Date().toUTCString();

    return (
        <div>
            <table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%" style={{ maxWidth: 600 }}>
                <tbody>
                    <tr>
                        <td align="center" valign="top" style={{ fontSize: 0, padding: 35 }} bgcolor="#2e3f6e">
                            <div
                                style={{
                                    display: 'inline-block',
                                    maxWidth: '50%',
                                    minWidth: 100,
                                    verticalAlign: 'top',
                                    width: '100%',
                                }}
                            >
                                <table
                                    align="left"
                                    border="0"
                                    cellPadding="0"
                                    cellSpacing="0"
                                    width="100%"
                                    style={{ maxWidth: 300 }}
                                >
                                    <tbody>
                                        <tr>
                                            <td
                                                align="left"
                                                valign="top"
                                                style={{
                                                    fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                    fontSize: 36,
                                                    fontWeight: 800,
                                                    lineHeight: '48px',
                                                }}
                                                className={cx('mobile-center')}
                                            >
                                                <h1
                                                    style={{
                                                        fontSize: 36,
                                                        fontWeight: 800,
                                                        margin: 0,
                                                        color: '#ffffff',
                                                    }}
                                                >
                                                    <span style={{ color: '#3eaafd' }}>Town</span>Hub
                                                    <span style={{ color: '#3eaafd' }}></span>
                                                </h1>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div
                                style={{
                                    display: 'inline-block',
                                    maxWidth: '50%',
                                    minWidth: 100,
                                    verticalAlign: 'top',
                                    width: '100%',
                                }}
                                className={cx('mobile-hide')}
                            >
                                fontFamily
                                <table
                                    align="left"
                                    border="0"
                                    cellPadding="0"
                                    cellSpacing="0"
                                    width="100%"
                                    style={{ maxWidth: 300 }}
                                >
                                    <tbody>
                                        <tr>
                                            <td
                                                align="right"
                                                valign="top"
                                                style={{
                                                    fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                    fontSize: 48,
                                                    fontWeight: 400,
                                                    lineHeight: '48px',
                                                }}
                                            >
                                                <table cellSpacing="0" cellPadding="0" border="0" align="right">
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                style={{
                                                                    fontFamily:
                                                                        'Open Sans, Helvetica, Arial, sans-serif',
                                                                    fontSize: 18,
                                                                    fontWeight: 400,
                                                                }}
                                                            >
                                                                <p
                                                                    style={{
                                                                        fontSize: 18,
                                                                        fontWeight: 400,
                                                                        margin: 0,
                                                                        color: '#ffffff',
                                                                    }}
                                                                >
                                                                    <a
                                                                        href="#"
                                                                        target="_blank"
                                                                        style={{
                                                                            color: '#ffffff',
                                                                            textDecoration: 'none',
                                                                        }}
                                                                    >
                                                                        &nbsp;
                                                                    </a>
                                                                </p>
                                                            </td>
                                                            <td
                                                                style={{
                                                                    fontFamily:
                                                                        'Open Sans, Helvetica, Arial, sans-serif',
                                                                    fontSize: 18,
                                                                    fontWeight: 400,
                                                                    lineHeight: 24,
                                                                }}
                                                            >
                                                                <a
                                                                    href="/"
                                                                    target="_blank"
                                                                    style={{ color: '#ffffff', textDecoration: 'none' }}
                                                                >
                                                                    <img
                                                                        src="https://cdn.iconscout.com/icon/premium/png-256-thumb/digital-city-2635775-2183076.png"
                                                                        width="49"
                                                                        height="45"
                                                                        style={{ display: 'block', border: 0 }}
                                                                    />
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td
                            align="center"
                            style={{ padding: '35px 35px 20px 35px', backgroundColor: '#ffffff' }}
                            bgcolor="#ffffff"
                        >
                            <table
                                align="center"
                                border="0"
                                cellPadding="0"
                                cellSpacing="0"
                                width="100%"
                                style={{ maxWidth: 600 }}
                            >
                                <tbody>
                                    <tr>
                                        <td
                                            align="center"
                                            style={{
                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                fontSize: 16,
                                                fontWeight: 400,
                                                lineHeight: '24px',
                                                paddingTop: 25,
                                            }}
                                        >
                                            <img
                                                src="https://www.pngkey.com/png/full/785-7855876_check-mark-icon-blue.png"
                                                width="125"
                                                height="120"
                                                style={{ display: 'block', border: 0 }}
                                            />
                                            <br />
                                            <h2
                                                style={{
                                                    fontSize: 30,
                                                    fontWeight: 800,
                                                    lineHeight: '36px',
                                                    color: '#333333',
                                                    margin: 0,
                                                }}
                                            >
                                                Thanh toán thành công! 
                                            </h2>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            align="left"
                                            style={{
                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                fontSize: 16,
                                                fontWeight: 400,
                                                lineHeight: '24px',
                                                paddingTop: 10,
                                            }}
                                        >
                                            <p
                                                style={{
                                                    fontSize: 16,
                                                    fontWeight: 400,
                                                    lineHeight: '24px',
                                                    color: '#777777',
                                                }}
                                            >
                                                Quý khách đặt phòng thành công thông qua Website đặt phòng trực tiến
                                                TownHub.
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left" style={{ paddingTop: 20 }}>
                                            <table cellSpacing="0" cellPadding="0" border="0" width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td
                                                            width="75%"
                                                            align="left"
                                                            bgcolor="#eeeeee"
                                                            style={{
                                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                                fontSize: 16,
                                                                fontWeight: 800,
                                                                lineHeight: '24px',
                                                                padding: 10,
                                                            }}
                                                        >
                                                            Xác nhận đặt phòng # 
                                                        </td>
                                                        <td
                                                            width="25%"
                                                            align="left"
                                                            bgcolor="#eeeeee"
                                                            style={{
                                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                                fontSize: 16,
                                                                fontWeight: 800,
                                                                lineHeight: '24px',
                                                                padding: 10,
                                                            }}
                                                        >
                                                            {/* {orderId} */}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            width="75%"
                                                            align="left"
                                                            style={{
                                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                                fontSize: 16,
                                                                fontWeight: 400,
                                                                lineHeight: '24px',
                                                                padding: '15px 10px 5px 10px',
                                                            }}
                                                        >
                                                            {data.name} ({days})
                                                        </td>
                                                        <td
                                                            width="25%"
                                                            align="left"
                                                            style={{
                                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                                fontSize: 16,
                                                                fontWeight: 400,
                                                                lineHeight: '24px',
                                                                padding: '15px 10px 5px 10px',
                                                            }}
                                                        >
                                                            {formatter.format(homePrice)}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            width="75%"
                                                            align="left"
                                                            style={{
                                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                                fontSize: 16,
                                                                fontWeight: 400,
                                                                lineHeight: '24px',
                                                                padding: '5px 10px',
                                                            }}
                                                        >
                                                            Phí phục vụ
                                                        </td>
                                                        <td
                                                            width="25%"
                                                            align="left"
                                                            style={{
                                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                                fontSize: 16,
                                                                fontWeight: 400,
                                                                lineHeight: '24px',
                                                                padding: '5px 10px',
                                                            }}
                                                        >
                                                            {formatter.format(350000)}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            width="75%"
                                                            align="left"
                                                            style={{
                                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                                fontSize: 16,
                                                                fontWeight: 400,
                                                                lineHeight: '24px',
                                                                padding: '5px 10px',
                                                            }}
                                                        >
                                                            Phí vệ sinh
                                                        </td>
                                                        <td
                                                            width="25%"
                                                            align="left"
                                                            style={{
                                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                                fontSize: 16,
                                                                fontWeight: 400,
                                                                lineHeight: '24px',
                                                                padding: '5px 10px',
                                                            }}
                                                        >
                                                            {formatter.format(100000)}
                                                        </td>
                                                    </tr>
                                                    {payPoint > 0 && (
                                                        <tr>
                                                            <td
                                                                width="75%"
                                                                align="left"
                                                                style={{
                                                                    fontFamily:
                                                                        'Open Sans, Helvetica, Arial, sans-serif',
                                                                    fontSize: 16,
                                                                    fontWeight: 400,
                                                                    lineHeight: '24px',
                                                                    padding: '5px 10px',
                                                                }}
                                                            >
                                                                Số điểm tích lũy đã dùng
                                                            </td>
                                                            <td
                                                                width="25%"
                                                                align="left"
                                                                style={{
                                                                    fontFamily:
                                                                        'Open Sans, Helvetica, Arial, sans-serif',
                                                                    fontSize: 16,
                                                                    fontWeight: 400,
                                                                    lineHeight: '24px',
                                                                    padding: '5px 10px',
                                                                }}
                                                            >
                                                                -{formatter.format(pricePoint())}
                                                            </td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left" style={{ paddingTop: 20 }}>
                                            <table cellSpacing="0" cellPadding="0" border="0" width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td
                                                            width="75%"
                                                            align="left"
                                                            style={{
                                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                                fontSize: 16,
                                                                fontWeight: 800,
                                                                lineHeight: '24px',
                                                                padding: 10,
                                                                borderTop: '3px solid #eeeeee',
                                                                borderBottom: '3px solid #eeeeee',
                                                            }}
                                                        >
                                                            Tổng cộng
                                                        </td>
                                                        <td
                                                            width="25%"
                                                            align="left"
                                                            style={{
                                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                                fontSize: 16,
                                                                fontWeight: 800,
                                                                lineHeight: '24px',
                                                                padding: 10,
                                                                borderTop: '3px solid #eeeeee',
                                                                borderBottom: '3px solid #eeeeee',
                                                            }}
                                                        >
                                                            {formatter.format(total())}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td
                            align="center"
                            height="100%"
                            valign="top"
                            width="100%"
                            style={{ padding: '0px 35px 35px 35px', backgroundColor: '#ffffff' }}
                            bgcolor="#ffffff"
                        >
                            <table
                                align="center"
                                border="0"
                                cellPadding="0"
                                cellSpacing="0"
                                width="100%"
                                style={{ maxWidth: 660 }}
                            >
                                <tbody>
                                    <tr>
                                        <td align="center" valign="top" style={{ fontSize: 0 }}>
                                            <div
                                                style={{
                                                    display: 'inline-block',
                                                    maxWidth: '50%',
                                                    minWidth: 240,
                                                    verticalAlign: 'top',
                                                    width: '100%',
                                                }}
                                            >
                                                <table
                                                    align="left"
                                                    border="0"
                                                    cellPadding="0"
                                                    cellSpacing="0"
                                                    width="100%"
                                                    style={{ maxWidth: 300 }}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                align="left"
                                                                valign="top"
                                                                style={{
                                                                    fontFamily:
                                                                        'Open Sans, Helvetica, Arial, sans-serif',
                                                                    fontSize: 16,
                                                                    fontWeight: 400,
                                                                    lineHeight: 24,
                                                                }}
                                                            >
                                                                <p style={{ fontWeight: 800 }}>Thông tin khách hàng</p>
                                                                <p>
                                                                    {userInfor.firstname} {userInfor.lastname}
                                                                    <br />
                                                                    {address.specifically} 
                                                        
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div
                                                style={{
                                                    display: 'inline-block',
                                                    maxWidth: '50%',
                                                    minWidth: 240,
                                                    verticalAlign: 'top',
                                                    width: '100%',
                                                }}
                                            >
                                                <table
                                                    align="left"
                                                    border="0"
                                                    cellPadding="0"
                                                    cellSpacing="0"
                                                    width="100%"
                                                    style={{ maxWidth: 300 }}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                align="left"
                                                                valign="top"
                                                                style={{
                                                                    fontFamily:
                                                                        'Open Sans, Helvetica, Arial, sans-serif',
                                                                    fontSize: 16,
                                                                    fontWeight: 400,
                                                                    lineHeight: 24,
                                                                }}
                                                            >
                                                                <p style={{ fontWeight: 800 }}>Ngày giao dịch</p>
                                                                <p>{creatDate}</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PaymentSuccess;
