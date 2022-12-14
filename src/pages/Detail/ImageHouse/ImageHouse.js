import classNames from 'classnames/bind';
import styles from './ImageHouse.module.scss';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function ImageHouse() {
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
            console.log(window.innerWidth);
        });
    }, []);
    return (
        <>
            {isMobile && (
                <div>
                    <Slider {...settings}>
                        <div>
                            <img
                                src="https://a0.muscache.com/im/pictures/6d4b8668-20d2-4c45-8de6-4378d7bf9239.jpg?im_w=1200"
                                alt="img-house"
                                className={cx('thumbnail-slide')}
                            />
                        </div>
                        <div>
                            <img
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-39183737/original/a3522d92-e3fc-4c47-aae1-036d94388db3.jpeg?im_w=720"
                                className={cx('thumbnail-slide')}
                                alt="img-house"
                            />
                        </div>
                        <div>
                            <img
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-39183737/original/a3522d92-e3fc-4c47-aae1-036d94388db3.jpeg?im_w=720"
                                className={cx('thumbnail-slide')}
                                alt="img-house"
                            />
                        </div>
                        <div>
                            <img
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-39183737/original/d1f702fb-f791-481a-acfb-629af80d9094.jpeg?im_w=720"
                                className={cx('thumbnail-slide')}
                                alt="img-house"
                            />
                        </div>
                        <div>
                            <img
                                src="https://a0.muscache.com/im/pictures/3d9eecd2-1069-4d00-86e0-9edaed09553b.jpg?im_w=720"
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
                        src="https://a0.muscache.com/im/pictures/6d4b8668-20d2-4c45-8de6-4378d7bf9239.jpg?im_w=1200"
                        alt="img-house"
                        className={cx('thumbnail-bg')}
                    />
                </div>
                <div className={cx('col', 'l-6')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-6', 'm-0', 'c-0')}>
                            <img
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-39183737/original/a3522d92-e3fc-4c47-aae1-036d94388db3.jpeg?im_w=720"
                                className={cx('thumbnail')}
                                alt="img-house"
                            />
                        </div>
                        <div className={cx('col', 'l-6', 'm-0', 'c-0')}>
                            <img
                                src="https://a0.muscache.com/im/pictures/48be31be-e1d2-46c9-8e1b-f0cad8c8c36b.jpg?im_w=720"
                                className={cx('thumbnail')}
                                alt="img-house"
                            />
                        </div>
                        <div className={cx('col', 'l-6', 'm-0', 'c-0')}>
                            <img
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-39183737/original/d1f702fb-f791-481a-acfb-629af80d9094.jpeg?im_w=720"
                                className={cx('thumbnail')}
                                alt="img-house"
                            />
                        </div>
                        <div className={cx('col', 'l-6', 'm-0', 'c-0')}>
                            <img
                                src="https://a0.muscache.com/im/pictures/3d9eecd2-1069-4d00-86e0-9edaed09553b.jpg?im_w=720"
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
