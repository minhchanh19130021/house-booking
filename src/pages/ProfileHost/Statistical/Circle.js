import classNames from 'classnames/bind';
import ProfileHostSidebar from '../ProfileHostSidebar';
import styles from './Statistical.module.scss';
import Chart from 'chart.js/auto';
import { Bar, Pie } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useSelector } from 'react-redux';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    )

const cx = classNames.bind(styles);
function Circle() {
    const [openCircle, setOpenCircle] = useState();
    const [circleLoadMonth, setCircleLoadMonth] = useState();
    const [circle_month_data, setCircle_month_data] = useState();

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/orderByHomeCategoriesOneWeek`, {
            method: 'POST',
            body: JSON.stringify({
                idUser: '638ee48ab1ea3871b675269e',
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((response) => {
                setCircle_month_data(response.data);
                setCircleLoadMonth({
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
    const handleSelectCircleChange = (e) => {
        if (e.target.value === 'mot tuan') {
        } else if (e.target.value === 'mot thang') {
        } else if (e.target.value === 'ba thang') {
        } else if (e.target.value === 'mot nam') {
        }
    };
    return (
        <>
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
                <div className="col l-12">
                    {/* <Pie data={circleLoadMonth} /> */}
                </div>
            </div>
        </>
    );
}

export default Circle;
