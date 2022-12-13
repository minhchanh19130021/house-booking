import classNames from 'classnames/bind';
import styles from './Review.module.scss';
import { useState, useEffect } from 'react';
import Button from '~/components/Button';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Review() {
    const user = useSelector((state) => state.authentication.login.currentUser);
    const [step, setStep] = useState(1);
    const [rateStar, setRateStar] = useState(-1);
    const [extraSpecial, setExtraSpecial] = useState([]);
    const [rateClean, setRateClean] = useState(-1);
    const [rateCommunication, setRateCommunication] = useState(-1);
    const [rateLocation, setRateLocation] = useState(-1);
    const [rateAccurate, setRateAccurate] = useState(-1);
    const [publicReview, setPublicReview] = useState('');
    const [feel, setFeel] = useState('');
    const [location, setLocation] = useState('');
    const [host, setHost] = useState('');
    const [accurate, setAccurate] = useState('');
    const [privateNote, setPrivateNote] = useState('');
    const { oid } = useParams();
    return (
        <div className={cx('grid', 'wide')}>
            <div className={cx('container')}>
                <div className={cx('container__header')}>
                    <div className={cx('header__name')}>
                        <NavLink to="/">
                            <img src="https://freesvg.org/img/logo-casa.png" alt="logo-img" />
                        </NavLink>
                        <span>Bước {step}</span>
                    </div>
                    <div className={cx('header__progress-line')}>
                        <div
                            className={cx(
                                'header__progress-line--active',
                                step === 1
                                    ? 'value-10'
                                    : step === 2
                                    ? 'value-20'
                                    : step === 3
                                    ? 'value-30'
                                    : step === 4
                                    ? 'value-40'
                                    : step === 5
                                    ? 'value-50'
                                    : step === 6
                                    ? 'value-60'
                                    : step === 7
                                    ? 'value-70'
                                    : step === 8
                                    ? 'value-80'
                                    : step === 9
                                    ? 'value-90'
                                    : null,
                            )}
                        ></div>
                    </div>
                </div>
                <div className={cx('center')}>
                    {step === 1 && (
                        <div className={cx('container__review')}>
                            <div className={cx('review__value')}>
                                <h1 className={cx('title')}>Bạn cảm thấy nơi ở như thế nào</h1>
                                <h2 className={cx('title')}>Hãy đánh giá trải nghiệm của bạn tại nơi ở</h2>
                                <div className={cx('review__value-star')}>
                                    <p className={cx('review__value-name')}>
                                        {rateStar === 4
                                            ? 'Xuất Sắc'
                                            : rateStar === 3
                                            ? 'Tốt'
                                            : rateStar === 2
                                            ? 'Tạm Ổn'
                                            : rateStar === 1
                                            ? 'Tệ'
                                            : rateStar === 0
                                            ? 'Rất Rệ'
                                            : 'Hạng'}
                                    </p>
                                    {Array.from({ length: 5 }, (e, i) => {
                                        return (
                                            <i
                                                className={cx('fa-star', i <= rateStar ? 'fa-solid' : 'fa-regular')}
                                                onMouseEnter={() => setRateStar(i)}
                                                onMouseLeave={() => {
                                                    setRateStar(i);
                                                }}
                                                key={i}
                                            ></i>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                    {step === 2 && (
                        <div className={cx('container__extra-special')}>
                            <h1 className={cx('title')}>Ở đây có gì đặc biệt không</h1>
                            <h2 className={cx('title')}>Chọn điều mà bạn thích nhất</h2>
                            <div className={cx('extra-special')}>
                                <div
                                    className={cx('extra-special--grid')}
                                    onClick={() =>
                                        extraSpecial.includes('hospitality')
                                            ? setExtraSpecial(extraSpecial.filter((e) => e !== 'hospitality'))
                                            : setExtraSpecial((e) => [...e, 'hospitality'])
                                    }
                                >
                                    <div
                                        className={cx(
                                            'extra-special--rounded',
                                            extraSpecial.includes('hospitality') ? 'active' : null,
                                        )}
                                    >
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8PpjEC0kBY-k3b3tlHWOC2gGdFCxXsTWOYg&usqp=CAU"></img>
                                    </div>
                                    <p>Chủ nhà hiếu khách</p>
                                </div>
                                <div
                                    className={cx('extra-special--grid')}
                                    onClick={() =>
                                        extraSpecial.includes('communication')
                                            ? setExtraSpecial(extraSpecial.filter((e) => e !== 'communication'))
                                            : setExtraSpecial((e) => [...e, 'communication'])
                                    }
                                >
                                    <div
                                        className={cx(
                                            'extra-special--rounded',
                                            extraSpecial.includes('communication') ? 'active' : null,
                                        )}
                                    >
                                        <img src="https://i.pinimg.com/originals/8a/26/2e/8a262eec1c2a9b26e522590b5a483c8d.png"></img>
                                    </div>
                                    <p>Phản hồi nhanh</p>
                                </div>
                                <div
                                    className={cx('extra-special--grid')}
                                    onClick={() =>
                                        extraSpecial.includes('furniture')
                                            ? setExtraSpecial(extraSpecial.filter((e) => e !== 'furniture'))
                                            : setExtraSpecial((e) => [...e, 'furniture'])
                                    }
                                >
                                    <div
                                        className={cx(
                                            'extra-special--rounded',
                                            extraSpecial.includes('furniture') ? 'active' : null,
                                        )}
                                    >
                                        <img src="https://cdn2.iconfinder.com/data/icons/furniture-home-living-flat-colors/64/living_room-512.png"></img>
                                    </div>
                                    <p>Nội thất ấn tượng</p>
                                </div>
                                <div
                                    className={cx('extra-special--grid')}
                                    onClick={() =>
                                        extraSpecial.includes('cleanliness')
                                            ? setExtraSpecial(extraSpecial.filter((e) => e !== 'cleanliness'))
                                            : setExtraSpecial((e) => [...e, 'cleanliness'])
                                    }
                                >
                                    <div
                                        className={cx(
                                            'extra-special--rounded',
                                            extraSpecial.includes('cleanliness') ? 'active' : null,
                                        )}
                                    >
                                        <img src="https://png.monster/wp-content/uploads/2022/01/png.monster-463-370x370.png"></img>
                                    </div>
                                    <p>Cực kì sạch sẽ</p>
                                </div>
                                <div
                                    className={cx('extra-special--grid')}
                                    onClick={() =>
                                        extraSpecial.includes('location')
                                            ? setExtraSpecial(extraSpecial.filter((e) => e !== 'location'))
                                            : setExtraSpecial((e) => [...e, 'location'])
                                    }
                                >
                                    <div
                                        className={cx(
                                            'extra-special--rounded',
                                            extraSpecial.includes('location') ? 'active' : null,
                                        )}
                                    >
                                        <img src="https://cdn-icons-png.flaticon.com/512/854/854878.png"></img>
                                    </div>
                                    <p>Vị trí dễ tìm kiếm</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className={cx('container__description')}>
                            <h1 className={cx('title')}>Miêu tả chuyến đi của bạn</h1>
                            <h2 className={cx('title')}>Giúp chủ nhà biết bạn cảm thấy thết nào</h2>
                            <h3 className={cx('title')}>Nơi ở so với mong đợi của bạn như thế nào</h3>
                            <div className={cx('description')} htmlFor="desc-1">
                                <div className={cx('desc')} onClick={() => setFeel('excellent')}>
                                    <input
                                        type="radio"
                                        id="desc-1"
                                        name="desc"
                                        checked={feel === 'excellent' ? true : false}
                                        onChange={() => {}}
                                    />
                                    <label className={cx('label')} htmlFor="desc-1">
                                        Hơn cả kỳ vọng của tôi
                                    </label>
                                </div>
                            </div>
                            <div className={cx('description')}>
                                <div className={cx('desc')} onClick={() => setFeel('good')}>
                                    <input
                                        type="radio"
                                        id="desc-2"
                                        name="desc"
                                        checked={feel === 'good' ? true : false}
                                        onChange={() => {}}
                                    />
                                    <label className={cx('label')} htmlFor="desc-2">
                                        Hơn một chút mong đợi
                                    </label>
                                </div>
                            </div>
                            <div className={cx('description')}>
                                <div className={cx('desc')} onClick={() => setFeel('acceptable')}>
                                    <input
                                        type="radio"
                                        id="desc-3"
                                        name="desc"
                                        checked={feel === 'acceptable' ? true : false}
                                        onChange={() => {}}
                                    />
                                    <label className={cx('label')} htmlFor="desc-3">
                                        Giống như tôi mong đợi
                                    </label>
                                </div>
                            </div>
                            <div className={cx('description')}>
                                <div className={cx('desc')} onClick={() => setFeel('bad')}>
                                    <input
                                        type="radio"
                                        id="desc-4"
                                        name="desc"
                                        checked={feel === 'bad' ? true : false}
                                        onChange={() => {}}
                                    />
                                    <label className={cx('label')} htmlFor="desc-4">
                                        Không giống tôi muốn
                                    </label>
                                </div>
                            </div>
                            <div className={cx('description')}>
                                <div className={cx('desc')} onClick={() => setFeel('terrible')}>
                                    <input
                                        type="radio"
                                        id="desc-5"
                                        name="desc"
                                        checked={feel === 'terrible' ? true : false}
                                        onChange={() => {}}
                                    />
                                    <label className={cx('label')} htmlFor="desc-5">
                                        Rất tệ so với những gì tôi chờ
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}
                    {step === 4 && (
                        <div className={cx('container__rate')}>
                            <h1 className={cx('title')}>Hãy cho biết về trải nghiệm của bạn tại nơi ở này</h1>
                            <h2 className={cx('title')}>Những đánh giá này sẽ được đăng lên cho mọi người</h2>
                            <div className={cx('rate')}>
                                <p>Sạch sẽ</p>
                                {Array.from({ length: 5 }, (e, i) => {
                                    return (
                                        <i
                                            className={cx('fa-star', i <= rateClean ? 'fa-solid' : 'fa-regular')}
                                            onMouseEnter={() => setRateClean(i)}
                                            onMouseLeave={() => setRateClean(i)}
                                            key={i}
                                        ></i>
                                    );
                                })}
                            </div>
                            <div className={cx('rate')}>
                                <p>Liên lạc</p>
                                {Array.from({ length: 5 }, (e, i) => {
                                    return (
                                        <i
                                            className={cx(
                                                'fa-star',
                                                i <= rateCommunication ? 'fa-solid' : 'fa-regular',
                                            )}
                                            onMouseEnter={() => setRateCommunication(i)}
                                            onMouseLeave={() => setRateCommunication(i)}
                                            key={i}
                                        ></i>
                                    );
                                })}
                            </div>
                            <div className={cx('rate')}>
                                <p>Vị trí</p>
                                {Array.from({ length: 5 }, (e, i) => {
                                    return (
                                        <i
                                            className={cx('fa-star', i <= rateLocation ? 'fa-solid' : 'fa-regular')}
                                            onMouseEnter={() => setRateLocation(i)}
                                            onMouseLeave={() => setRateLocation(i)}
                                            key={i}
                                        ></i>
                                    );
                                })}
                            </div>
                            <div className={cx('rate')}>
                                <p>Chính xác</p>
                                {Array.from({ length: 5 }, (e, i) => {
                                    return (
                                        <i
                                            className={cx('fa-star', i <= rateAccurate ? 'fa-solid' : 'fa-regular')}
                                            onMouseEnter={() => setRateAccurate(i)}
                                            onMouseLeave={() => setRateAccurate(i)}
                                            key={i}
                                        ></i>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    {step === 5 && (
                        <div className={cx('container__note')}>
                            <h1 className={cx('title')}>Viết đánh giá công khai</h1>
                            <h2 className={cx('title')}>
                                Nói với những du khách tương lai về những gì họ có thể mong đợi ở nơi này
                            </h2>
                            <textarea
                                rows="5"
                                cols="70"
                                onChange={(e) => setPublicReview(e.currentTarget.value)}
                            ></textarea>
                        </div>
                    )}
                    {step === 6 && (
                        <div className={cx('container__evaluate-host')}>
                            <h1 className={cx('title')}>Bạn cảm thấy chủ nhà như thế nào</h1>
                            <div className={cx('option')}>
                                <div className={cx('desc')} onClick={() => setHost('excellent')}>
                                    <input
                                        type="radio"
                                        id="desc-feel-1"
                                        name="desc-feel"
                                        checked={host === 'excellent' ? true : false}
                                        onChange={() => {}}
                                    />
                                    <label className={cx('label')} htmlFor="desc-feel-1">
                                        Cực kì thân thiện
                                    </label>
                                </div>
                            </div>
                            <div className={cx('option')}>
                                <div className={cx('desc')} onClick={() => setHost('good')}>
                                    <input
                                        type="radio"
                                        id="desc-feel-2"
                                        name="desc-feel"
                                        checked={host === 'good' ? true : false}
                                        onChange={() => {}}
                                    />
                                    <label className={cx('label')} htmlFor="desc-feel-2">
                                        Rất thân thiện
                                    </label>
                                </div>
                            </div>
                            <div className={cx('option')}>
                                <div className={cx('desc')} onClick={() => setHost('acceptable')}>
                                    <input
                                        type="radio"
                                        id="desc-feel-3"
                                        name="desc-feel"
                                        checked={host === 'acceptable' ? true : false}
                                        onChange={() => {}}
                                    />
                                    <label className={cx('label')} htmlFor="desc-feel-3">
                                        Thân thiện
                                    </label>
                                </div>
                            </div>
                            <div className={cx('option')}>
                                <div className={cx('desc')} onClick={() => setHost('bad')}>
                                    <input
                                        type="radio"
                                        id="desc-feel-4"
                                        name="desc-feel"
                                        checked={host === 'bad' ? true : false}
                                        onChange={() => {}}
                                    />
                                    <label className={cx('label')} htmlFor="desc-feel-4">
                                        Không thân thiện
                                    </label>
                                </div>
                            </div>
                            <div className={cx('option')}>
                                <div className={cx('desc')} onClick={() => setFeel('terrible')}>
                                    <input
                                        type="radio"
                                        id="desc-feel-4"
                                        name="desc-feel"
                                        checked={host === 'terrible' ? true : false}
                                        onChange={() => {}}
                                    />
                                    <label className={cx('label')} htmlFor="desc-feel-4">
                                        Không hoàn toàn thân thiện
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}
                    {step === 7 && (
                        <div className={cx('container__location')}>
                            <h1 className={cx('title')}>Kiểm tra vị trí</h1>
                            <h2 className={cx('title')}>
                                Đây có phải là địa chỉ chính xác của nhà/phòng cho thuê mà bạn đã ở không?
                            </h2>
                            <div className={cx('option')}>
                                <div className={cx('desc')} onClick={() => setLocation('good')}>
                                    <input
                                        type="radio"
                                        id="desc-location-1"
                                        name="desc-location"
                                        checked={location === 'good' ? true : false}
                                        onChange={() => {}}
                                    />
                                    <label className={cx('label')} htmlFor="desc-location-1">
                                        Địa chỉ chính xác, rõ ràng
                                    </label>
                                </div>
                            </div>
                            <div className={cx('option')}>
                                <div className={cx('desc')} onClick={() => setLocation('acceptable')}>
                                    <input
                                        type="radio"
                                        id="desc-location-2"
                                        name="desc-location"
                                        checked={location === 'acceptable' ? true : false}
                                        onChange={() => {}}
                                    />
                                    <label className={cx('label')} htmlFor="desc-location-2">
                                        Địa chỉ vẫn chưa rõ ràng
                                    </label>
                                </div>
                            </div>
                            <div className={cx('option')}>
                                <div className={cx('desc')} onClick={() => setLocation('terrible')}>
                                    <input
                                        type="radio"
                                        id="desc-location-3"
                                        name="desc-location"
                                        checked={location === 'terrible' ? true : false}
                                        onChange={() => {}}
                                    />
                                    <label className={cx('label')} htmlFor="desc-location-3">
                                        Địa chỉ không đúng
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}
                    {step === 8 && (
                        <div className={cx('container__accurate')}>
                            <h1 className={cx('title')}>Nơi bạn ở có giống với miêu tả không</h1>
                            <div className={cx('option')}>
                                <div className={cx('desc')} onClick={() => setAccurate('excellent')}>
                                    <input
                                        type="radio"
                                        id="desc-accurate-1"
                                        name="desc-accurate"
                                        checked={accurate === 'excellent' ? true : false}
                                        onChange={() => {}}
                                    />
                                    <label className={cx('label')} htmlFor="desc-accurate-1">
                                        Cực kì chính xác
                                    </label>
                                </div>
                            </div>
                            <div className={cx('option')}>
                                <div className={cx('desc')} onClick={() => setAccurate('good')}>
                                    <input
                                        type="radio"
                                        id="desc-accurate-2"
                                        name="desc-accurate"
                                        checked={accurate === 'good' ? true : false}
                                        onChange={() => {}}
                                    />
                                    <label className={cx('label')} htmlFor="desc-accurate-2">
                                        Hầu hết chính xác
                                    </label>
                                </div>
                            </div>
                            <div className={cx('option')}>
                                <div className={cx('desc')} onClick={() => setAccurate('bad')}>
                                    <input
                                        type="radio"
                                        id="desc-accurate-3"
                                        name="desc-accurate"
                                        checked={accurate === 'bad' ? true : false}
                                        onChange={() => {}}
                                    />
                                    <label className={cx('label')} htmlFor="desc-accurate-3">
                                        Vẫn còn sai sót
                                    </label>
                                </div>
                            </div>
                            <div className={cx('option')}>
                                <div className={cx('desc')} onClick={() => setAccurate('terrible')}>
                                    <input
                                        type="radio"
                                        id="desc-accurate-4"
                                        name="desc-accurate"
                                        checked={accurate === 'terrible' ? true : false}
                                        onChange={() => {}}
                                    />
                                    <label className={cx('label')} htmlFor="desc-accurate-4">
                                        Cực kì sai sót
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}
                    {step === 9 && (
                        <div className={cx('container__note')}>
                            <h1 className={cx('title')}>Thêm ghi chú riêng cho chủ nhà</h1>
                            <h2 className={cx('title')}>Đưa ra đề xuất hoặc nói lời cảm ơn với chủ nhà</h2>
                            <textarea
                                rows="5"
                                cols="70"
                                onChange={(e) => setPrivateNote(e.currentTarget.value)}
                            ></textarea>
                        </div>
                    )}

                    <div className={cx('container__button')}>
                        <div
                            className={cx('button__left', 'button')}
                            onClick={() => {
                                setStep(step === 1 ? step : step - 1);
                            }}
                        >
                            <i className="fa-solid fa-chevron-left"></i>Quay lại
                        </div>
                        <Button
                            className={cx(
                                'button__next',
                                'button',
                                (step === 1 && rateStar === -1) ||
                                    (step === 3 && feel == '') ||
                                    (step === 4 && rateClean === -1) ||
                                    (step === 4 && rateCommunication === -1) ||
                                    (step === 4 && rateLocation === -1) ||
                                    (step === 4 && rateAccurate === -1) ||
                                    (step === 5 && publicReview == '')
                                    ? 'no-drop'
                                    : null,
                            )}
                            onClick={() => {
                                if (
                                    (step === 1 && rateStar === -1) ||
                                    (step === 3 && feel == '') ||
                                    (step === 4 && rateClean === -1) ||
                                    (step === 4 && rateCommunication === -1) ||
                                    (step === 4 && rateLocation === -1) ||
                                    (step === 4 && rateAccurate === -1) ||
                                    (step === 5 && publicReview == '')
                                ) {
                                    return;
                                } else {
                                    if (step === 9) {
                                        let review = {};
                                        let createDate = new Date().toISOString();

                                        review.create_date = createDate;
                                        review.oid = oid;
                                        review.private_note = privateNote;
                                        review.public_review = publicReview;
                                        review.update_date = null;
                                        review.extra_special = extraSpecial;
                                        review.description = {
                                            accurate: accurate,
                                            feel: feel,
                                            host: host,
                                            location: location,
                                        };
                                        review.rate = {
                                            cleanliness: rateClean,
                                            communication: rateCommunication,
                                            location: rateLocation,
                                            accurate: rateAccurate,
                                            experience: rateStar,
                                        };

                                        fetch(`http://localhost:8080/api/v2/review/add`, {
                                            method: 'PUT',
                                            headers: {
                                                'Content-type': 'application/json; charset=UTF-8',
                                                token: `Bearer ${user?.accessToken}`,
                                            },
                                            body: JSON.stringify(review),
                                        })
                                            .then((response) => response.json())
                                            .then((response) => {
                                                if (response.success == true) {
                                                    window.location.href = '/history-booking';
                                                } else {
                                                    alert('error');
                                                }
                                            })
                                            .catch((err) => {
                                                console.log(err);
                                            });
                                    } else {
                                        setStep(step + 1);
                                    }
                                }
                            }}
                        >
                            {step === 9 ? 'Kết thúc' : 'Tiếp tục'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;
