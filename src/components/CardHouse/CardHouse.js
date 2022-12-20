import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
import styles from './CardHouse.module.scss';
import SVG from 'react-inlinesvg';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '~/config/firebase';
import { useState } from 'react';

const cx = classNames.bind(styles);

function CardHouse({ avatar, idHouse, numberReview, rate, title, location, desc, facilities, price, status, to }) {
    const [linkImg, setLinkImg] = useState(
        'https://preview.redd.it/zcgs03lgoy351.png?width=288&format=png&auto=webp&s=d9bf4b46713d7fdbf11b82a8e364ceee79724a9c',
    );
    let getImageFromFirebase = (_id) => {
        getDownloadURL(ref(storage, `house/${_id}/${avatar}`))
            .then((url) => {
                setLinkImg(url);
            })
            .catch((error) => {});
    };
    getImageFromFirebase(idHouse);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('thumbnail')}>
                <NavLink to={to}>
                    <img src={linkImg} alt="thumbnail" />
                </NavLink>
                <div className={cx('thumbnail-content')}>
                    {/* <div className={cx('border-status')}>
                        <Button
                            className={cx(`${status}`)}
                            leftIcon={
                                status === 'open' ? (
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
                                            d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                                        />
                                    </svg>
                                ) : (
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
                                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                                        />
                                    </svg>
                                )
                            }
                        >
                            {status === 'open' ? 'Đang mở' : 'Đã đóng cửa'}
                        </Button>
                    </div> */}
                    <div className={cx('rate')}>
                        <button>{rate}</button>
                        <div className={cx('star-rate')}>
                            <div className={cx('stars')}>
                                {Array.from({ length: rate }, (e, i) => {
                                    return (
                                        <svg
                                            key={i}
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
                                    );
                                })}
                            </div>
                            <span className={cx('number_review')}>{numberReview} nhận xét</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('info')}>
                <div className={cx('header')}>
                    <NavLink className={cx('name')} to={to}>
                        {title}
                    </NavLink>
                    <NavLink to="#" className={cx('location')}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                        </svg>

                        <span> {location}</span>
                    </NavLink>
                </div>
                <div className={cx('body')}>
                    <span>{desc}</span>
                    <div className={cx('facilities')}>
                        <p>Tiện nghi: </p>
                        {facilities.map((e, i) => {
                            const mySVG = e?.icon
                                ?.replace(
                                    "style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor', }}",
                                    '',
                                )
                                ?.replace('\\', '');
                            return (
                                <div key={i} className={cx('items')} title={e.name}>
                                    <SVG src={mySVG} />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={cx('footer')}>
                    <span>
                        {Array.from(JSON.stringify(price))
                            .reverse()
                            .map((e, i) => (i % 3 === 0 && i !== 0 ? e + '.' : e))
                            .reverse()
                            .join('')}{' '}
                        VNĐ / đêm
                    </span>
                    {/* <div className={cx('function')}>
                        <NavLink to="">
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
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                            </svg>
                        </NavLink>
                        <NavLink to="">
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
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                />
                            </svg>
                        </NavLink>
                        <NavLink to="">
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
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                                />
                            </svg>
                        </NavLink>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default CardHouse;
