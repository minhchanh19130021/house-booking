import classNames from 'classnames/bind';
import styles from './ListHouse.module.scss';
import CardHouse from '~/components/CardHouse';
import { useState, useEffect, useRef } from 'react';
import Button from '~/components/Button';
import Filter from './Filter/Filter';
import Pagination from './Pagination';

const cx = classNames.bind(styles);

function ListHouse() {
    const [isExpandFilter, setExpandFilter] = useState(false);
    const [isMobile, setMobile] = useState(window.innerWidth < 850 ? true : false);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 850) {
                setMobile(true);
            } else {
                setMobile(false);
                setExpandFilter(false);
            }
        });
    });

    return (
        <div className={cx('grid', 'wide')}>
            <div className={cx('contain__button-expandFilter')}>
                <Button
                    small
                    leftIcon={<i className="fa-solid fa-up-right-and-down-left-from-center"></i>}
                    className={cx('button-expandFilter')}
                    onClick={() => setExpandFilter(!isExpandFilter)}
                >
                    Bộ lọc
                </Button>
            </div>
            <div className={cx('container')}>
                <div
                    className={cx(
                        'contain__filter',
                        !isMobile ? 'displayContain' : isMobile && isExpandFilter ? 'displayContain' : 'hiddenContain',
                    )}
                >
                    <Filter></Filter>
                </div>
                <div
                    className={cx(
                        'contain__listHouse',
                        !isMobile ? 'displayContain' : isMobile && isExpandFilter ? 'hiddenContain' : 'displayContain',
                    )}
                >
                    <div className={cx('listHouse', 'row')}>
                        {Array.from({ length: 12 }, (e, i) => {
                            return (
                                <div key={i} className={cx('col', 'l-4', 'm-6', 'c-12')}>
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
                                        ]}
                                        price={234.245}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <Pagination></Pagination>
                </div>
            </div>
        </div>
    );
}

export default ListHouse;
