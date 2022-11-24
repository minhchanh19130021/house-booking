import classNames from 'classnames/bind';

import ProfileHostSidebar from '../ProfileHostSidebar';
import styles from './Statistical.module.scss';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { useState } from 'react';
import { UserData } from './UserData';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const cx = classNames.bind(styles);
function Statistical() {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: 'Users Gained',
                data: UserData.map((data) => data.userGain),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: 'rgb(255, 159, 64)',
                borderWidth: 1,
            },
        ],
    });

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
                                <h1 className={cx('number')}>1054</h1>
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
                                <h1 className={cx('number')}>1054</h1>
                                <p className={cx('title')}>Tổng nhận xét</p>
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
                                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                                />
                            </svg>
                        </div>
                        <div className={cx('col', 'l-12', 'item')}>
                            <div className={cx('info')}>
                                <h1 className={cx('number')}>1054</h1>
                                <p className={cx('title')}>Tổng số lượng đặt</p>
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
                            <div className={cx('tabs-pane')}>
                                <input type="date" className={cx('choose-time')} />
                                <input type="date" className={cx('choose-time')} />
                                <Bar data={userData} />;
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className={cx('tabs-pane', 'row')}>
                                <div className="col l-6">
                                    <input type="date" className={cx('choose-time')} />
                                    <input type="date" className={cx('choose-time')} />
                                    <Pie style={{ width: 300 }} data={userData} />;
                                </div>
                                <div className="col l-6">
                                    <input type="date" className={cx('choose-time')} />
                                    <input type="date" className={cx('choose-time')} />
                                    <Pie style={{ width: 300 }} data={userData} />;
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default Statistical;
