import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '~/components/Button';
import BookingForm from './BookingForm';
import DescriptionHouse from './DescriptionHouse';
import styles from './Detail.module.scss';
import Evaluate from './Evaluate';
import ModalEvaluate from './Evaluate/ModalEvaluate';
import FacilityItem from './FacilityItem';
import HighLightItem from './HighLightItem';
import Host from './Host';
import ImageHouse from './ImageHouse';
import ProtectAdmin from './ProtectAdmin';
import SVG from 'react-inlinesvg';
import TitleHeader from './TitleHeader';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '~/config/firebase';

const cx = classNames.bind(styles);

function Detail() {
    const [visibleModal, setVisibleModal] = useState();
    const { slug } = useParams();
    const [dataDetail, setDataDetail] = useState();
    const [dataReview, setDataReview] = useState();
    const [linkImg, setLinkImg] = useState([]);
    const imageNotFound =
        'https://preview.redd.it/zcgs03lgoy351.png?width=288&format=png&auto=webp&s=d9bf4b46713d7fdbf11b82a8e364ceee79724a9c';

    const handleVisibleModal = () => {
        setVisibleModal((visibleModal) => !visibleModal);
    };

    function getImageFromFirebase(uid, images, indexImage) {
        getDownloadURL(ref(storage, `house/${uid}/${images[indexImage]}`))
            .then((url) => {
                setLinkImg((oldUrl) => [...oldUrl, url]);
                if (images.length !== indexImage) {
                    getImageFromFirebase(uid, images, (indexImage += 1));
                }
            })
            .catch((error) => {
                setLinkImg((oldUrl) => [...oldUrl, imageNotFound]);
                if (images.length !== indexImage) {
                    getImageFromFirebase(uid, images, (indexImage += 1));
                }
            });
    }

    useEffect(() => {
        fetch(`http://localhost:8080/api/v2/detail`, {
            method: 'POST',
            body: JSON.stringify({
                slugHome: slug,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((response) => {
                setDataDetail(response.data[0]);
                let images = response.data[0]?.detail[0]?.image;
                images.unshift(response.data[0].avatar);
                getImageFromFirebase(response.data[0]?._id, images, 0);
                console.log(response.data[0]);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:8080/api/v2/review`, {
            method: 'POST',
            body: JSON.stringify({
                idHome: dataDetail?._id,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((response) => {
                setDataReview(response?.data);
            })
            .catch((err) => console.log(err));
    }, [dataDetail?._id]);
    return (
        <div className={cx('wrapper', 'grid', 'wide')}>
            <div className={cx('row', 'header')}>
                <TitleHeader dataFromParent={dataDetail} />
                <div className={cx('action')}>
                    <Button
                        leftIcon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M11.47 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22V16.5a.75.75 0 01-1.5 0V4.81L8.03 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zM3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        }
                    >
                        Chia sẻ
                    </Button>
                    <Button
                        leftIcon={
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
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                        }
                    >
                        Thích
                    </Button>
                </div>
            </div>
            <ImageHouse images={linkImg} notFoundImages={imageNotFound} />
            <div className={cx('info', 'row')}>
                <div className={cx('col', 'l-8', 'm-12', 'c-12')}>
                    <h3 className={cx('introduce')}>{dataDetail?.introduce}</h3>
                    <div className={cx('info-title')}>
                        <div className={cx('info-facilities')}>
                            <span>{dataDetail?.detail[0].maximum_number_visitor?.adult_children} người lớn</span>
                            <span>{dataDetail?.detail[0].maximum_number_visitor?.baby} em bé</span>
                            <span>{dataDetail?.detail[0].maximum_number_visitor?.pet} thú cưng</span>

                            <span>{dataDetail?.detail[0].number_bedroom} phòng ngủ</span>
                            <span>{dataDetail?.detail[0].number_bed} giường</span>
                            <span>{dataDetail?.detail[0].number_bathroom} phòng tắm</span>
                        </div>
                    </div>
                    <div className={cx('highlights')}>
                        <div className="row">
                            <div className="col l-6 m-12 c-12">
                                <HighLightItem
                                    title={`Số ngày đặt tối thiểu ${dataDetail?.detail[0]?.minimum_night} ngày`}
                                    // desc="Bạn có thể gặp nhân viên trực cửa để nhận phòng."
                                    svg={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                            style={{ display: 'block', height: '24px', width: '24px' }}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                            />
                                        </svg>
                                    }
                                />
                            </div>
                            <div className="col l-6 m-12 c-12">
                                <HighLightItem
                                    title={`Số ngày đặt tối đa ${dataDetail?.detail[0]?.maximum_night} ngày`}
                                    // desc="Bạn có thể gặp nhân viên trực cửa để nhận phòng."
                                    svg={
                                        <svg
                                            viewBox="0 0 32 32"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            role="presentation"
                                            focusable="false"
                                            style={{
                                                display: 'block',
                                                height: '24px',
                                                width: '24px',
                                                fill: 'currentcolor',
                                            }}
                                        >
                                            <path d="m11.6667 0-.00095 1.666h8.667l.00055-1.666h2l-.00055 1.666 6.00065.00063c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323v15.91907c0 .4715696-.1664445.9258658-.4669028 1.2844692l-.1188904.1298308-8.7476886 8.7476953c-.3334303.3332526-.7723097.5367561-1.2381975.5778649l-.1758207.0077398h-12.91915c-2.68874373 0-4.88181754-2.1223321-4.99538046-4.7831124l-.00461954-.2168876v-21.66668c0-1.05436021.81587582-1.91815587 1.85073739-1.99450431l.14926261-.00548569 5.999-.00063.00095-1.666zm16.66605 11.666h-24.666v13.6673c0 1.5976581 1.24893332 2.9036593 2.82372864 2.9949072l.17627136.0050928 10.999-.0003.00095-5.6664c0-2.6887355 2.122362-4.8818171 4.7832071-4.9953804l.2168929-.0046196 5.66595-.0006zm-.081 8-5.58495.0006c-1.5977285 0-2.9037573 1.2489454-2.9950071 2.8237299l-.0050929.1762701-.00095 5.5864zm-18.586-16-5.999.00062v5.99938h24.666l.00065-5.99938-6.00065-.00062.00055 1.66733h-2l-.00055-1.66733h-8.667l.00095 1.66733h-2z" />
                                        </svg>
                                    }
                                />
                            </div>

                            <div className="col l-6 m-12 c-12">
                                <HighLightItem
                                    title={`Nhận phòng ${dataDetail?.detail[0]?.check_in}`}
                                    // desc="Bạn có thể gặp nhân viên trực cửa để nhận phòng."
                                    svg={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                            style={{ display: 'block', height: '24px', width: '24px' }}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                                            />
                                        </svg>
                                    }
                                />
                            </div>
                            <div className="col l-6 m-12 c-12">
                                <HighLightItem
                                    title={`Trả phòng ${dataDetail?.detail[0]?.check_in}`}
                                    // desc="Bạn có thể gặp nhân viên trực cửa để nhận phòng."
                                    svg={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                            style={{ display: 'block', height: '24px', width: '24px' }}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z"
                                            />
                                        </svg>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx('protect')}>
                        <ProtectAdmin />
                    </div>
                    <div className={cx('desc')}>
                        <DescriptionHouse dataFromParent={dataDetail} />
                    </div>
                    <div className={cx('facilities')}>
                        <h3 className={cx('facilities-title')}>Nơi này có những gì cho bạn</h3>
                        <div className={cx('facilities-list', 'row')}>
                            {dataDetail?.facilities.map((e, i) => {
                                const mySVG = e?.icon
                                    ?.replace(
                                        "style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor', }}",
                                        '',
                                    )
                                    ?.replace('block', '')
                                    ?.replace('""', '')
                                    ?.replace('"currentcolor",', '')
                                    ?.replace(',', '')
                                    ?.replace('}}', '')
                                    ?.replace('\\', '')
                                    ?.replace('width: 24, ', '')
                                    ?.replace('height: 24, ', '');
                                return (
                                    <FacilityItem key={i} title={e?.name}>
                                        <SVG src={mySVG} />
                                    </FacilityItem>
                                );
                            })}
                        </div>
                        {/* <div className={cx('facilities-more')}>Hiển thị tất cả tiện nghi</div> */}
                    </div>
                </div>
                <div className={cx('col', 'l-4', 'm-12', 'c-12')}>
                    <BookingForm dataFromParent={dataDetail} />
                </div>
            </div>

            <div className={cx('host')}>
                <Host dataFromParent={dataDetail} />
                <div className={cx('evaluate')}>
                    <Evaluate
                        dataReviews={dataReview}
                        totalReview={dataDetail?.number_review}
                        rates={dataDetail?.detail[0]?.rates}
                    ></Evaluate>
                    {/* <Button outline large onClick={handleVisibleModal}>
                        Hiển thị tất cả {dataDetail?.number_review ? dataDetail?.number_review : ''} đánh giá
                    </Button> */}
                </div>
                {visibleModal && <div className={cx('overlay')} onClick={handleVisibleModal}></div>}

                {visibleModal && (
                    <ModalEvaluate
                        dataReviews={dataReview}
                        totalReview={dataDetail?.number_review}
                        rates={dataDetail?.detail[0]?.rates}
                    >
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
                            onClick={handleVisibleModal}
                        >
                            <path d="m6 6 20 20" />
                            <path d="m26 6-20 20" />
                        </svg>
                    </ModalEvaluate>
                )}
            </div>
            <div className="regulation">
                <h3 className={cx('facilities-title')}>Những điều cần biết</h3>
                <div className="">
                    {dataDetail?.detail[0]['regulations']?.addition.map((e, index) => (
                        <div className="col l-4 m-6 c-12" key={index}>
                            <p className={cx('regulation-name')}>{e}</p>
                        </div>
                    ))}
                    {dataDetail?.regulations_available?.map((e, index) => (
                        <div className="col l-4 m-6 c-12" key={index}>
                            {/* <span className={cx('regulation-icon')}>
                                <SVG
                                    src={e?.icon
                                        ?.replace(
                                            "style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor', }}",
                                            '',
                                        )
                                        ?.replace('\\', '')}
                                />
                            </span> */}
                            <p className={cx('regulation-name')}>{e?.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Detail;
