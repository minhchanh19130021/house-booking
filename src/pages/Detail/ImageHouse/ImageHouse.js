import classNames from 'classnames/bind';
import styles from './ImageHouse.module.scss';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function ImageHouse(props) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        cssEase: 'linear',
    };
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 1023) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        });
    }, []);
    return (
        <>
            {isMobile && (
                <div>
                    <Slider {...settings}>
                        <div>
                            <img
                                src={props.images[0] ? props.images[0] : props.imageNotFound}
                                alt="img-house"
                                className={cx('thumbnail-slide')}
                            />
                        </div>
                        <div>
                            <img
                                src={props.images[1] ? props.images[1] : props.imageNotFound}
                                className={cx('thumbnail-slide')}
                                alt="img-house"
                            />
                        </div>
                        <div>
                            <img
                                src={props.images[2] ? props.images[2] : props.imageNotFound}
                                className={cx('thumbnail-slide')}
                                alt="img-house"
                            />
                        </div>
                        <div>
                            <img
                                src={props.images[3] ? props.images[3] : props.imageNotFound}
                                className={cx('thumbnail-slide')}
                                alt="img-house"
                            />
                        </div>
                        <div>
                            <img
                                src={props.images[4] ? props.images[4] : props.imageNotFound}
                                className={cx('thumbnail-slide')}
                                alt="img-house"
                            />
                        </div>
                    </Slider>
                </div>
            )}
            {!isMobile && (
                <div className={cx('row', 'img-section')}>
                    <div className={cx('col', 'l-6', 'm-12', 'c-12')}>
                        <img
                            src={props.images[0] ? props.images[0] : props.imageNotFound}
                            alt="img-house"
                            className={cx('thumbnail-bg')}
                        />
                    </div>
                    <div className={cx('col', 'l-6')}>
                        <div className={cx('row')}>
                            <div className={cx('col', 'l-6', 'm-0', 'c-0')}>
                                <img
                                    src={props.images[1] ? props.images[1] : props.imageNotFound}
                                    className={cx('thumbnail')}
                                    alt="img-house"
                                />
                            </div>
                            <div className={cx('col', 'l-6', 'm-0', 'c-0')}>
                                <img
                                    src={props.images[2] ? props.images[2] : props.imageNotFound}
                                    className={cx('thumbnail')}
                                    alt="img-house"
                                />
                            </div>
                            <div className={cx('col', 'l-6', 'm-0', 'c-0')}>
                                <img
                                    src={props.images[3] ? props.images[3] : props.imageNotFound}
                                    className={cx('thumbnail')}
                                    alt="img-house"
                                />
                            </div>
                            <div className={cx('col', 'l-6', 'm-0', 'c-0')}>
                                <img
                                    src={props.images[4] ? props.images[4] : props.imageNotFound}
                                    className={cx('thumbnail')}
                                    alt="img-house"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ImageHouse;
