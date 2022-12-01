import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Button from '~/components/Button';
import CardBest from '~/components/CardBest';
import CardHouse from '~/components/CardHouse';
import { useState } from 'react';
import CardNew from '~/components/CardNew';
import SearchHome from './SearchHome';

const cx = classNames.bind(styles);

function Home() {
    const [visible, setVisible] = useState(1);
    const toggleTab = (index) => {
        setVisible(index);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('bg-banner', 'grid')}>
                <div className={cx('overlay')}></div>
                <img src="https://townhub.kwst.net/images/bg/hero/1.jpg" alt="home-banner" className={cx('grid')} />
                {/* <SearchHome /> */}
            </div>
            <div className={cx('location-best', 'grid', 'wide')}>
                <div className={cx('location-best__title')}>
                    <h1>Khám Phá Địa Điểm Tốt Nhất</h1>
                    <div className={cx('divide')}></div>
                    <p>
                        lorem ipsum dolor sit amet, consectetulorem ipsum dolor sit amet, consectetur adip lorem ipsum
                        dolor sit amet lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet lorem
                        ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet lorem ipsum dolor sit amet,
                        consectetur adip lorem ipsum dolor sit amet r adip lorem ipsum dolor sit amet{' '}
                    </p>
                </div>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-4', 'm-6', 'c-12')}>
                        <CardBest
                            bg="https://a.cdn-hotels.com/gdcs/production154/d1245/0a3c326f-cedf-4cf9-ada2-71f7517d0a09.jpg?impolicy=fcrop&w=800&h=533&q=medium"
                            title="Đà Lạt"
                            desc="lorem ipsum dolor sit amet, consectetur lorem ipsum dolor slorem ipsum dolor sit amet,
                                    consectetur lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur lorem
                                    ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit
                                    ametlorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit ametit amet"
                        />
                    </div>
                    <div className={cx('col', 'l-4', 'm-6', 'c-12')}>
                        <CardBest
                            bg="https://www.vtr.org.vn/FileManager/Anh%20web%202022/Thang%206/1120/Trai%20nghiem%20thanh%20pho%20bien%20Vung%20Tau%20(2).jpg"
                            title="Vũng Tàu"
                            desc="lorem ipsum dolor sit amet, consectetur lorem ipsum dolor slorem ipsum dolor sit amet,
                                    consectetur lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur lorem
                                    ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit
                                    ametlorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit ametit amet"
                        />
                    </div>
                    <div className={cx('col', 'l-4', 'm-6', 'c-12')}>
                        <CardBest
                            bg="https://ik.imagekit.io/tvlk/blog/2022/01/dia-diem-du-lich-sapa-27.jpg"
                            title="Sapa"
                            desc="lorem ipsum dolor sit amet, consectetur lorem ipsum dolor slorem ipsum dolor sit amet,
                                    consectetur lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur lorem
                                    ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit
                                    ametlorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit ametit amet"
                        />
                    </div>
                    <div className={cx('col', 'l-4', 'm-6', 'c-12')}>
                        <CardBest
                            bg="http://xaviahotel.com/vnt_upload/news/11_2017/nha-trang_1.jpg"
                            title="Nha Trang"
                            desc="lorem ipsum dolor sit amet, consectetur lorem ipsum dolor slorem ipsum dolor sit amet,
                                    consectetur lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur lorem
                                    ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit
                                    ametlorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit ametit amet"
                        />
                    </div>
                    <div className={cx('col', 'l-8', 'm-12', 'c-12')}>
                        <CardBest
                            bg="http://xaviahotel.com/vnt_upload/news/11_2017/nha-trang_1.jpg"
                            title="Nha Trang"
                            desc="lorem ipsum dolor sit amet, consectetur lorem ipsum dolor slorem ipsum dolor sit amet,
                                    consectetur lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur lorem
                                    ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit
                                    ametlorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit ametit amet"
                        />
                    </div>
                </div>
                <div className={cx('see-more')}>
                    <Button
                        primary
                        rightIcon={
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
                                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        }
                    >
                        Xem tất cả
                    </Button>
                </div>
            </div>

            <div className={cx('popular')}>
                <div className={cx('popular-title')}>
                    <h1>Tiện Nghi Phổ Biến</h1>
                    <div className={cx('divide')}></div>
                    {/* <p>
                        Proin dapibus nisl ornare diam varius tempus. Aenean a quam luctus, finibus tellus ut, convallis
                        eros sollicitudin turpis.Proin dapibus nisl ornare diam varius tempus. Aenean a quam luctus,
                        finibus tellus ut, convallis eros sollicitudin turpis.Proin dapibus nisl ornare diam varius
                        tempus. Aenean a quam luctus, finibus tellus ut, convallis eros sollicitudin turpis.Proin
                        dapibus nisl ornare diam varius tempus. Aenean a quam luctus, finibus tellus ut, convallis eros
                        sollicitudin turpis.
                    </p> */}
                </div>
                <div className={cx('convenient')}>
                    <div className={cx('tabs')}>
                        <div className={cx({ 'tab-item': true, active: visible === 1 })} onClick={() => toggleTab(1)}>
                            Điều Hòa
                        </div>
                        <div className={cx({ 'tab-item': true, active: visible === 2 })} onClick={() => toggleTab(2)}>
                            Lò Vi Sóng
                        </div>
                        <div className={cx({ 'tab-item': true, active: visible === 3 })} onClick={() => toggleTab(3)}>
                            Hồ Bơi
                        </div>
                    </div>
                    {visible === 1 && (
                        <div className={cx('tab-content', 'grid', 'wide')}>
                            <div
                                className={cx({
                                    row: true,
                                    'tab-pane': true,
                                    active: visible === 1,
                                })}
                            >
                                {/* <div className={cx('col', 'l-4', 'm-6', 'c-12')}>
                                    <CardHouse
                                        to="/detail"
                                        img="https://townhub.kwst.net/images/all/28.jpg"
                                        status="close"
                                        title="Đà lạt"
                                        location={'27th Brooklyn New York, USA'}
                                        desc="Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodalesSed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.."
                                        rate={4.7}
                                        facilities={[
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                                key="1"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                                />
                                            </svg>,
                                            // <svg
                                            //     xmlns="http://www.w3.org/2000/svg"
                                            //     fill="none"
                                            //     viewBox="0 0 24 24"
                                            //     strokeWidth={1.5}
                                            //     stroke="currentColor"
                                            //     className="w-6 h-6"
                                            // >
                                            //     <path
                                            //         strokeLinecap="round"
                                            //         strokeLinejoin="round"
                                            //         d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                                            //     />
                                            // </svg>,
                                            // <svg
                                            //     xmlns="http://www.w3.org/2000/svg"
                                            //     fill="none"
                                            //     viewBox="0 0 24 24"
                                            //     strokeWidth={1.5}
                                            //     stroke="currentColor"
                                            //     className="w-6 h-6"
                                            // >
                                            //     <path
                                            //         strokeLinecap="round"
                                            //         strokeLinejoin="round"
                                            //         d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                                            //     />
                                            // </svg>,
                                        ]}
                                        price={234.245}
                                    />
                                </div> */}
                            </div>
                        </div>
                    )}

                    {visible === 2 && (
                        <div className={cx('tab-content', 'grid', 'wide')}>
                            <div
                                className={cx({
                                    row: true,
                                    'tab-pane': true,
                                    active: visible === 2,
                                })}
                            >
                                {/* <div className={cx('col', 'l-4', 'm-6', 'c-12')}>
                                    <CardHouse
                                        to="/detail"
                                        img="https://townhub.kwst.net/images/all/28.jpg"
                                        status="close"
                                        title="Đà lạt"
                                        location={'27th Brooklyn New York, USA'}
                                        desc="Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodalesSed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.."
                                        rate={4.7}
                                        facilities={[
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                                key="1"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                                />
                                            </svg>,
                                            // <svg
                                            //     xmlns="http://www.w3.org/2000/svg"
                                            //     fill="none"
                                            //     viewBox="0 0 24 24"
                                            //     strokeWidth={1.5}
                                            //     stroke="currentColor"
                                            //     className="w-6 h-6"
                                            // >
                                            //     <path
                                            //         strokeLinecap="round"
                                            //         strokeLinejoin="round"
                                            //         d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                                            //     />
                                            // </svg>,
                                            // <svg
                                            //     xmlns="http://www.w3.org/2000/svg"
                                            //     fill="none"
                                            //     viewBox="0 0 24 24"
                                            //     strokeWidth={1.5}
                                            //     stroke="currentColor"
                                            //     className="w-6 h-6"
                                            // >
                                            //     <path
                                            //         strokeLinecap="round"
                                            //         strokeLinejoin="round"
                                            //         d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                                            //     />
                                            // </svg>,
                                        ]}
                                        price={234.245}
                                    />
                                </div>
                                <div className={cx('col', 'l-4', 'm-6', 'c-12')}>
                                    <CardHouse
                                        to="/detail"
                                        img="https://townhub.kwst.net/images/all/28.jpg"
                                        status="close"
                                        title="Đà lạt"
                                        location={'27th Brooklyn New York, USA'}
                                        desc="Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodalesSed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.."
                                        rate={4.7}
                                        facilities={[
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                                key="1"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                                />
                                            </svg>,
                                            // <svg
                                            //     xmlns="http://www.w3.org/2000/svg"
                                            //     fill="none"
                                            //     viewBox="0 0 24 24"
                                            //     strokeWidth={1.5}
                                            //     stroke="currentColor"
                                            //     className="w-6 h-6"
                                            // >
                                            //     <path
                                            //         strokeLinecap="round"
                                            //         strokeLinejoin="round"
                                            //         d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                                            //     />
                                            // </svg>,
                                            // <svg
                                            //     xmlns="http://www.w3.org/2000/svg"
                                            //     fill="none"
                                            //     viewBox="0 0 24 24"
                                            //     strokeWidth={1.5}
                                            //     stroke="currentColor"
                                            //     className="w-6 h-6"
                                            // >
                                            //     <path
                                            //         strokeLinecap="round"
                                            //         strokeLinejoin="round"
                                            //         d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                                            //     />
                                            // </svg>,
                                        ]}
                                        price={234.245}
                                    />
                                </div> */}
                            </div>
                        </div>
                    )}

                    {visible === 3 && (
                        <div className={cx('tab-content', 'grid', 'wide')}>
                            <div
                                className={cx({
                                    row: true,
                                    'tab-pane': true,
                                    active: visible === 3,
                                })}
                            >
                                {/* <div className={cx('col', 'l-4', 'm-6', 'c-12')}>
                                    <CardHouse
                                        to="/detail"
                                        img="https://townhub.kwst.net/images/all/28.jpg"
                                        status="close"
                                        title="Đà lạt"
                                        location={'27th Brooklyn New York, USA'}
                                        desc="Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodalesSed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.."
                                        rate={4.7}
                                        facilities={[
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                                key="1"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                                />
                                            </svg>,
                                            // <svg
                                            //     xmlns="http://www.w3.org/2000/svg"
                                            //     fill="none"
                                            //     viewBox="0 0 24 24"
                                            //     strokeWidth={1.5}
                                            //     stroke="currentColor"
                                            //     className="w-6 h-6"
                                            // >
                                            //     <path
                                            //         strokeLinecap="round"
                                            //         strokeLinejoin="round"
                                            //         d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                                            //     />
                                            // </svg>,
                                            // <svg
                                            //     xmlns="http://www.w3.org/2000/svg"
                                            //     fill="none"
                                            //     viewBox="0 0 24 24"
                                            //     strokeWidth={1.5}
                                            //     stroke="currentColor"
                                            //     className="w-6 h-6"
                                            // >
                                            //     <path
                                            //         strokeLinecap="round"
                                            //         strokeLinejoin="round"
                                            //         d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                                            //     />
                                            // </svg>,
                                        ]}
                                        price={234.245}
                                    />
                                </div>
                                <div className={cx('col', 'l-4', 'm-6', 'c-12')}>
                                    <CardHouse
                                        to="/detail"
                                        img="https://townhub.kwst.net/images/all/28.jpg"
                                        status="close"
                                        title="Đà lạt"
                                        location={'27th Brooklyn New York, USA'}
                                        desc="Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodalesSed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.."
                                        rate={4.7}
                                        facilities={[
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                                key="1"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                                />
                                            </svg>,
                                            // <svg
                                            //     xmlns="http://www.w3.org/2000/svg"
                                            //     fill="none"
                                            //     viewBox="0 0 24 24"
                                            //     strokeWidth={1.5}
                                            //     stroke="currentColor"
                                            //     className="w-6 h-6"
                                            // >
                                            //     <path
                                            //         strokeLinecap="round"
                                            //         strokeLinejoin="round"
                                            //         d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                                            //     />
                                            // </svg>,
                                            // <svg
                                            //     xmlns="http://www.w3.org/2000/svg"
                                            //     fill="none"
                                            //     viewBox="0 0 24 24"
                                            //     strokeWidth={1.5}
                                            //     stroke="currentColor"
                                            //     className="w-6 h-6"
                                            // >
                                            //     <path
                                            //         strokeLinecap="round"
                                            //         strokeLinejoin="round"
                                            //         d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                                            //     />
                                            // </svg>,
                                        ]}
                                        price={234.245}
                                    />
                                </div>
                                <div className={cx('col', 'l-4', 'm-6', 'c-12')}>
                                    <CardHouse
                                        to="/detail"
                                        img="https://townhub.kwst.net/images/all/28.jpg"
                                        status="close"
                                        title="Đà lạt"
                                        location={'27th Brooklyn New York, USA'}
                                        desc="Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodalesSed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.."
                                        rate={4.7}
                                        facilities={[
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                                key="1"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                                />
                                            </svg>,
                                            // <svg
                                            //     xmlns="http://www.w3.org/2000/svg"
                                            //     fill="none"
                                            //     viewBox="0 0 24 24"
                                            //     strokeWidth={1.5}
                                            //     stroke="currentColor"
                                            //     className="w-6 h-6"
                                            // >
                                            //     <path
                                            //         strokeLinecap="round"
                                            //         strokeLinejoin="round"
                                            //         d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                                            //     />
                                            // </svg>,
                                            // <svg
                                            //     xmlns="http://www.w3.org/2000/svg"
                                            //     fill="none"
                                            //     viewBox="0 0 24 24"
                                            //     strokeWidth={1.5}
                                            //     stroke="currentColor"
                                            //     className="w-6 h-6"
                                            // >
                                            //     <path
                                            //         strokeLinecap="round"
                                            //         strokeLinejoin="round"
                                            //         d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                                            //     />
                                            // </svg>,
                                        ]}
                                        price={234.245}
                                    />
                                </div> */}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* <div className={cx('ads')}>
                <div className={cx('banner-ads')}>
                    <img src="https://townhub.kwst.net/images/bg/11.jpg" alt="ads-banner" />
                    <div className={cx('content-ads')}>
                        <p>Aliquam erat volutpat interdum</p>
                        <h3>
                            Get ready to start your exciting journey. Our agency will lead you through the amazing
                            digital world
                        </h3>
                    </div>
                </div>
            </div> */}

            <div className={cx('location-new', 'grid')}>
                <div className={cx('row')}>
                    <div className={cx('col')}>
                        <CardNew />
                    </div>
                    <div className={cx('col')}>
                        <CardNew />
                    </div>
                    <div className={cx('col')}>
                        <CardNew />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
