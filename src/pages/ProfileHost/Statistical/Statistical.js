import classNames from 'classnames/bind';
import ProfileHostSidebar from '../ProfileHostSidebar';
import styles from './Statistical.module.scss';
import Chart from 'chart.js/auto';
import { Bar, Pie } from 'react-chartjs-2';
import { useEffect, useRef, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useSelector } from 'react-redux';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const cx = classNames.bind(styles);
function Statistical() {
    const [turnover, setTurnOver] = useState();
    const [quantity, setQuantity] = useState();
    const [statistical, setStatistical] = useState([]);
    const [statisticalMonth, setStatisticalMonth] = useState([]);

    var babel_date = [];
    var babel_date_price = [];
    const babel_month = [];
    const babel_month_price = [];
    const [timeStart, setTimeStart] = useState('1999-09-29');
    const [timeEnd, setTimeEnd] = useState('2022-12-29');
    const user = useSelector((state) => state.authentication.login.currentUser);
    const [option, setOption] = useState();
    const [openModal, setOpenModal] = useState(false);
    const [userData, setUserData] = useState({
        labels: babel_date,
        datasets: [
            {
                label: 'Doanh Thu',
                data: babel_date_price,
                backgroundColor: [
                    'rgb(232, 243, 214)',
                    'rgb(252, 249, 190)',
                    'rgb(255, 220, 169)',
                    'rgb(250, 171, 120)',
                    'rgb(127, 183, 126)',
                    'rgb(177, 215, 180)',
                    'rgb(247, 246, 220)',
                    'rgb(255, 192, 144)',
                ],
                borderColor: 'rgb(255, 159, 64)',
                borderWidth: 1,
            },
        ],
    });

    openModal ? disableBodyScroll(document) : enableBodyScroll(document);
    const handleChangeTimeStart = (e) => {
        setTimeStart(e.target.value);
    };
    const handleChangeTimeEnd = (e) => {
        setTimeEnd(e.target.value);
    };

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/orderByIdUser`, {
            method: 'POST',
            body: JSON.stringify({
                idUser: user?._id,
                start: new Date(timeStart),
                end: new Date(timeEnd),
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((response) => {
                const sum = response.data.reduce((order, i) => order + i.total_price, 0);
                const sumConvert = sum.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
                setTurnOver(sumConvert);
                setQuantity(response.data.length);
            });
    }, []);

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/orderByIdUserAndDate`, {
            method: 'POST',
            body: JSON.stringify({
                idUser: user?._id,
                start: new Date(timeStart),
                end: new Date(timeEnd),
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((response) => {
                setStatistical(response.data);
                setUserData({
                    labels: response.data.map((label) => label._id.date + '/' + label._id.month + '/' + label._id.year),
                    datasets: [
                        {
                            label: 'Doanh Thu',
                            data: response.data.map((e) => e.total_cost_month),
                            backgroundColor: [
                                'rgb(232, 243, 214)',
                                'rgb(252, 249, 190)',
                                'rgb(255, 220, 169)',
                                'rgb(250, 171, 120)',
                                'rgb(127, 183, 126)',
                                'rgb(177, 215, 180)',
                                'rgb(247, 246, 220)',
                                'rgb(255, 192, 144)',
                            ],
                            borderColor: 'rgb(255, 159, 64)',
                            borderWidth: 1,
                        },
                    ],
                });
            });
    }, [timeStart, timeEnd]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/orderByIdUserAndMonth`, {
            method: 'POST',
            body: JSON.stringify({
                idUser: user?._id,
                start: Date.parse(timeStart),
                end: Date.parse(timeEnd),
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((response) => {
                setStatisticalMonth(response.data);
            });
    }, [timeStart, timeEnd]);

    if (statistical.length > 0) {
        statistical.map((e) => {
            babel_date.push(e._id.date + '/' + e._id.month + '/' + e._id.year);
            return babel_date;
        });
    }
    if (statistical.length > 0) {
        statistical.map((e) => {
            babel_date_price.push(e.total_cost_month);
            return babel_date_price;
        });
    }

    if (statisticalMonth.length > 0) {
        statisticalMonth.map((e) => {
            babel_month.push(e._id.month + '/' + e._id.year);
            return babel_month;
        });
    }
    if (statisticalMonth.length > 0) {
        statisticalMonth.map((e) => {
            babel_month_price.push(e.total_cost_month);
            return babel_month_price;
        });
    }
    const sumStatistical = babel_date_price.reduce((sum, e) => sum + e, 0);

    const handleChangeDate = (e) => {
        setOption(e.target.value);
        if (e.target.value === 'ngay') {
            setUserData({
                labels: babel_date,
                datasets: [
                    {
                        label: 'Doanh Thu',
                        data: babel_date_price,
                        backgroundColor: [
                            'rgb(232, 243, 214)',
                            'rgb(252, 249, 190)',
                            'rgb(255, 220, 169)',
                            'rgb(250, 171, 120)',
                            'rgb(127, 183, 126)',
                            'rgb(177, 215, 180)',
                            'rgb(247, 246, 220)',
                            'rgb(255, 192, 144)',
                        ],
                        borderColor: 'rgb(255, 159, 64)',
                        borderWidth: 1,
                    },
                ],
            });
        } else {
            setUserData({
                labels: babel_month,
                datasets: [
                    {
                        label: 'Doanh Thu',
                        data: babel_month_price,
                        backgroundColor: [
                            'rgb(232, 243, 214)',
                            'rgb(252, 249, 190)',
                            'rgb(255, 220, 169)',
                            'rgb(250, 171, 120)',
                            'rgb(127, 183, 126)',
                            'rgb(177, 215, 180)',
                            'rgb(247, 246, 220)',
                            'rgb(255, 192, 144)',
                        ],
                        borderColor: 'rgb(255, 159, 64)',
                        borderWidth: 1,
                    },
                ],
            });
        }
    };

    // circle
    const [circleDataOneWeek, setCircleDataOneWeek] = useState();
    const [circleDataOneMonth, setCircleDataOneMonth] = useState();
    const [circleDataThreeMonth, setCircleDataThreeMonth] = useState();
    const [sumStatisticalCircle, setSumStatisticalCircle] = useState();

    const [circleDataOneYear, setCircleDataOneYear] = useState();

    const [circleLoad, setCircleLoad] = useState();
    const [openCircle, setOpenCircle] = useState();

    openCircle ? disableBodyScroll(document) : enableBodyScroll(document);
    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/orderByHomeCategoriesOneWeek`, {
            method: 'POST',
            body: JSON.stringify({
                idUser: user?._id,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((response) => {
                setCircleDataOneWeek(response.data);
                const sum = response.data.reduce((sum, data) => sum + data.total_cost_month, 0);
                setSumStatisticalCircle(sum);
                setCircleLoad({
                    labels: response.data.map((label) => label._id.type),
                    datasets: [
                        {
                            label: 'Doanh Thu',
                            data: response.data.map((e) => e.total_cost_month),
                            backgroundColor: [
                                'rgb(232, 243, 214)',
                                'rgb(252, 249, 190)',
                                'rgb(255, 220, 169)',
                                'rgb(250, 171, 120)',
                                'rgb(127, 183, 126)',
                                'rgb(177, 215, 180)',
                                'rgb(247, 246, 220)',
                                'rgb(255, 192, 144)',
                            ],
                            borderColor: 'rgb(255, 159, 64)',
                            borderWidth: 1,
                        },
                    ],
                });
            });
    }, []);

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/orderByHomeCategoriesOneMonth`, {
            method: 'POST',
            body: JSON.stringify({
                idUser: user?._id,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((response) => {
                setCircleDataOneMonth(response.data);
            });
    }, []);

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/orderByHomeCategoriesThreeMonth`, {
            method: 'POST',
            body: JSON.stringify({
                idUser: user?._id,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((response) => {
                setCircleDataThreeMonth(response.data);
            });
    }, []);

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/orderByHomeCategoriesOneYear`, {
            method: 'POST',
            body: JSON.stringify({
                idUser: user?._id,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((response) => {
                setCircleDataOneYear(response.data);
            });
    }, []);

    // handle data cirle one weeek
    const circleOneWeekLabels = [];
    const circleOneWeekPrice = [];
    if (circleDataOneWeek?.length > 0) {
        circleDataOneWeek?.map((e) => {
            circleOneWeekLabels.push(e._id.type);
            return circleOneWeekLabels;
        });
    }
    if (circleDataOneWeek?.length > 0) {
        circleDataOneWeek?.map((e) => {
            circleOneWeekPrice.push(e.total_cost_month);
            return circleOneWeekPrice;
        });
    }
    // handle data cirle one month
    const circleOneMonthLabels = [];
    const circleOneMonthPrice = [];
    if (circleDataOneWeek?.length > 0) {
        circleDataOneWeek?.map((e) => {
            circleOneMonthLabels.push(e._id.type);
            return circleOneMonthLabels;
        });
    }
    if (circleDataOneMonth?.length > 0) {
        circleDataOneMonth?.map((e) => {
            circleOneMonthPrice.push(e.total_cost_month);
            return circleOneMonthPrice;
        });
    }

    // handle data cirle three month
    const circleThreeMonthLabels = [];
    const circleThreeMonthPrice = [];
    if (circleDataThreeMonth?.length > 0) {
        circleDataThreeMonth?.map((e) => {
            circleThreeMonthLabels.push(e._id.type);
            return circleThreeMonthLabels;
        });
    }
    if (circleDataThreeMonth?.length > 0) {
        circleDataThreeMonth?.map((e) => {
            circleThreeMonthPrice.push(e.total_cost_month);
            return circleThreeMonthPrice;
        });
    }

    // handle data cirle one year
    const circleOneYearLabels = [];
    const circleOneYearPrice = [];
    if (circleDataOneYear?.length > 0) {
        circleDataOneYear?.map((e) => {
            circleOneYearLabels.push(e._id.type);
            return circleOneYearLabels;
        });
    }
    if (circleDataOneYear?.length > 0) {
        circleDataOneYear?.map((e) => {
            circleOneYearPrice.push(e.total_cost_month);
            return circleOneYearPrice;
        });
    }
    const handleSelectCircleChange = (e) => {
        if (e.target.value === 'mot tuan') {
            const sum = circleOneWeekPrice.reduce((sum, e) => sum + e, 0);
            setSumStatisticalCircle(sum);
            setCircleLoad({
                labels: circleOneWeekLabels,
                datasets: [
                    {
                        label: 'Doanh Thu',
                        data: circleOneWeekPrice,
                        backgroundColor: [
                            'rgb(232, 243, 214)',
                            'rgb(252, 249, 190)',
                            'rgb(255, 220, 169)',
                            'rgb(250, 171, 120)',
                            'rgb(127, 183, 126)',
                            'rgb(177, 215, 180)',
                            'rgb(247, 246, 220)',
                            'rgb(255, 192, 144)',
                        ],
                        borderColor: 'rgb(255, 159, 64)',
                        borderWidth: 1,
                    },
                ],
            });
        } else if (e.target.value === 'mot thang') {
            const sum = circleOneMonthPrice.reduce((sum, e) => sum + e, 0);
            setSumStatisticalCircle(sum);
            setCircleLoad({
                labels: circleOneMonthLabels,
                datasets: [
                    {
                        label: 'Doanh Thu',
                        data: circleOneMonthPrice,
                        backgroundColor: [
                            'rgb(232, 243, 214)',
                            'rgb(252, 249, 190)',
                            'rgb(255, 220, 169)',
                            'rgb(250, 171, 120)',
                            'rgb(127, 183, 126)',
                            'rgb(177, 215, 180)',
                            'rgb(247, 246, 220)',
                            'rgb(255, 192, 144)',
                        ],
                        borderColor: 'rgb(255, 159, 64)',
                        borderWidth: 1,
                    },
                ],
            });
        } else if (e.target.value === 'ba thang') {
            const sum = circleThreeMonthPrice.reduce((sum, e) => sum + e, 0);
            setSumStatisticalCircle(sum);
            setCircleLoad({
                labels: circleThreeMonthLabels,
                datasets: [
                    {
                        label: 'Doanh Thu',
                        data: circleThreeMonthPrice,
                        backgroundColor: [
                            'rgb(232, 243, 214)',
                            'rgb(252, 249, 190)',
                            'rgb(255, 220, 169)',
                            'rgb(250, 171, 120)',
                            'rgb(127, 183, 126)',
                            'rgb(177, 215, 180)',
                            'rgb(247, 246, 220)',
                            'rgb(255, 192, 144)',
                        ],
                        borderColor: 'rgb(255, 159, 64)',
                        borderWidth: 1,
                    },
                ],
            });
        } else if (e.target.value === 'mot nam') {
            const sum = circleOneYearPrice.reduce((sum, e) => sum + e, 0);
            setSumStatisticalCircle(sum);
            setCircleLoad({
                labels: circleOneYearLabels,
                datasets: [
                    {
                        label: 'Doanh Thu',
                        data: circleOneYearPrice,
                        backgroundColor: [
                            'rgb(232, 243, 214)',
                            'rgb(252, 249, 190)',
                            'rgb(255, 220, 169)',
                            'rgb(250, 171, 120)',
                            'rgb(127, 183, 126)',
                            'rgb(177, 215, 180)',
                            'rgb(247, 246, 220)',
                            'rgb(255, 192, 144)',
                        ],
                        borderColor: 'rgb(255, 159, 64)',
                        borderWidth: 1,
                    },
                ],
            });
        }
    };
    return (
        <div className="grid wide">
            <div className="row">
                <div className="col l-3 m-12 c-12">
                    <ProfileHostSidebar />
                </div>
                <div className="col l-8 m-12 c-12">
                    <h2>Thống kê</h2>
                    <div className={cx('ngangon', '')}>
                        <div className={cx('col', 'l-12', 'item')}>
                            <div className={cx('info')}>
                                <h1 className={cx('number')}>{turnover}</h1>
                                <p className={cx('title')}>Tổng doanh thu</p>
                            </div>
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
                                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>

                        <div className={cx('col', 'l-12', 'item')}>
                            <div className={cx('info')}>
                                <h1 className={cx('number')}>{quantity}</h1>
                                <p className={cx('title')}>Tổng số đã cho thuê</p>
                            </div>
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
                                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                                />
                            </svg>
                        </div>
                    </div>
                    <Tabs>
                        <TabList>
                            <Tab>Biểu đồ cột</Tab>
                            <Tab>Biểu đồ tròn</Tab>
                        </TabList>

                        <TabPanel>
                            {openModal && (
                                <div className={cx('modal-wrapper')}>
                                    <div className={cx('modal-overlay')} onClick={() => setOpenModal(false)}></div>

                                    <div className={cx('modal')}>
                                        <div className={cx('row')}>
                                            <div className={cx('col', 'l-8')}>
                                                <input
                                                    type="date"
                                                    name="timeStart"
                                                    value={timeStart}
                                                    onChange={handleChangeTimeStart}
                                                    className={cx('choose-time')}
                                                />
                                                <input
                                                    type="date"
                                                    name="timeEnd"
                                                    value={timeEnd}
                                                    onChange={handleChangeTimeEnd}
                                                    className={cx('choose-time')}
                                                />
                                                <select className={cx('choose-time')} onChange={handleChangeDate}>
                                                    <option value="ngay">Lọc Theo Ngày</option>
                                                    <option value="thang">Lọc Theo Tháng</option>
                                                </select>
                                            </div>
                                            <div className="col l-4">
                                                <button
                                                    className={cx('btn-closoe')}
                                                    onClick={() => setOpenModal(false)}
                                                >
                                                    Đóng
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col l-12" onClick={() => setOpenModal(true)}>
                                            <Bar data={userData} />
                                        </div>
                                        <h3>
                                            Tổng doanh thu:
                                            {sumStatistical.toLocaleString('it-IT', {
                                                style: 'currency',
                                                currency: 'VND',
                                            })}
                                        </h3>
                                    </div>
                                </div>
                            )}

                            <div className={cx('row')}>
                                <input
                                    type="date"
                                    name="timeStart"
                                    value={timeStart}
                                    onChange={handleChangeTimeStart}
                                    className={cx('choose-time')}
                                />
                                <input
                                    type="date"
                                    name="timeEnd"
                                    value={timeEnd}
                                    onChange={handleChangeTimeEnd}
                                    className={cx('choose-time')}
                                />
                                <select className={cx('choose-time')} onChange={handleChangeDate}>
                                    <option value="ngay">Lọc Theo Ngày</option>
                                    <option value="thang">Lọc Theo Tháng</option>
                                </select>
                            </div>
                            <div className="grid" onClick={() => setOpenModal(true)}>
                                <Bar data={userData} />
                            </div>
                            <h3>
                                Tổng doanh thu:
                                {sumStatistical.toLocaleString('it-IT', {
                                    style: 'currency',
                                    currency: 'VND',
                                })}
                            </h3>
                        </TabPanel>
                        <TabPanel>
                            <div className="row">
                                <div className="col l-12">
                                    <select className={cx('choose-time')} onChange={handleSelectCircleChange}>
                                        <option value="mot tuan">Thống kê 1 tuần</option>
                                        <option value="mot thang">Thống kê 1 tháng</option>
                                        <option value="ba thang">Thống kê 3 tháng</option>
                                        <option value="mot nam">Thống kê 1 năm</option>
                                    </select>
                                </div>
                            </div>
                            <div className={cx('tabs-pane', 'row')} onClick={() => setOpenCircle(true)}>
                                <div className={cx('circle-modify')}>
                                    <Pie data={circleLoad} />
                                </div>
                            </div>
                            <h3>
                                Tổng doanh thu:
                                {sumStatisticalCircle?.toLocaleString('it-IT', {
                                    style: 'currency',
                                    currency: 'VND',
                                })}
                            </h3>
                            {openCircle && (
                                <div className={cx('modal-wrapper')}>
                                    <div className={cx('modal-overlay')} onClick={() => setOpenCircle(false)}></div>

                                    <div className={cx('modal')}>
                                        <div className="row">
                                            <div className="col l-8 m-12 c-12">
                                                <select
                                                    className={cx('choose-time')}
                                                    onChange={handleSelectCircleChange}
                                                >
                                                    <option value="mot tuan">Thống kê 1 tuần</option>
                                                    <option value="mot thang">Thống kê 1 tháng</option>
                                                    <option value="ba thang">Thống kê 3 tháng</option>
                                                    <option value="mot nam">Thống kê 1 năm</option>
                                                </select>
                                            </div>
                                            <div className="col l-4 m-12 c-12">
                                                <button
                                                    className={cx('btn-closoe')}
                                                    onClick={() => setOpenCircle(false)}
                                                >
                                                    Đóng
                                                </button>
                                            </div>
                                        </div>
                                        <div className={cx('row')} onClick={() => setOpenCircle(true)}>
                                            <div className={cx('circle-chart')}>
                                                <Pie data={circleLoad} />
                                            </div>
                                        </div>
                                        <h3>
                                            Tổng doanh thu:
                                            {sumStatisticalCircle.toLocaleString('it-IT', {
                                                style: 'currency',
                                                currency: 'VND',
                                            })}
                                        </h3>
                                    </div>
                                </div>
                            )}
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default Statistical;
