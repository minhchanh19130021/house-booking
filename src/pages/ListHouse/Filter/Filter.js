import classNames from 'classnames/bind';
import styles from './Filter.module.scss';
import { useState, useEffect, useRef } from 'react';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Filter(props) {
    const [isExpandFacilities, setExpandFacilities] = useState(false);
    const [numberBedroom, setNumberBedroom] = useState(0);
    const [numberBed, setNumberBed] = useState(0);
    const [numberBathroom, setNumberBathroom] = useState(0);
    const [searchName, setSearchName] = useState('');
    const [fromPrice, setFromPrice] = useState(0);
    const [toPrice, setToPrice] = useState(0);
    const [selectCity, setSelectCity] = useState('all');
    const [facilitiesLaundry, setFacilitiesLaundry] = useState([]);
    const [facilitiesSafe, setFacilitiesSafe] = useState([]);
    const [facilitiesFeature, setFacilitiesFeature] = useState([]);
    const [facilitiesKitchen, setFacilitiesKitchen] = useState([]);
    const [facilitiesBath, setFacilitiesBath] = useState([]);
    const checkRateStar = useRef([]);
    // do react auto render mỗi khi có change nên mới tạo nhiều ref riêng
    // cần tối ưu lại chỗ này (useMemo?, useCallBack?)
    const checkFacilityLaundry = useRef([]);
    const checkFacilityFeature = useRef([]);
    const checkFacilitySafe = useRef([]);
    const checkFacilityKitchen = useRef([]);
    const checkFacilityBath = useRef([]);

    function activeResetFilter() {
        setNumberBedroom(0);
        setNumberBed(0);
        setNumberBathroom(0);
        setFromPrice(0);
        setToPrice(0);
        setSearchName('');
        setSelectCity('all');
        checkRateStar.current.map((e) => (e.checked = false));
        // do react auto render mỗi khi có change nên mới tạo nhiều ref riêng
        // cần tối ưu lại chỗ này (useMemo?, useCallBack?)
        checkFacilityLaundry.current.map((e) => (e.checked = false));
        checkFacilityFeature.current.map((e) => (e.checked = false));
        checkFacilitySafe.current.map((e) => (e.checked = false));
        checkFacilityKitchen.current.map((e) => (e.checked = false));
        checkFacilityBath.current.map((e) => (e.checked = false));
    }

    useEffect(() => {
        fetch(`http://localhost:8080/api/v2/facilities`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                response.data.forEach((element) => {
                    if (element.type === 'laundry') {
                        setFacilitiesLaundry((e) => [...e, element]);
                    } else if (element.type === 'feature') {
                        setFacilitiesFeature((e) => [...e, element]);
                    } else if (element.type === 'safe') {
                        setFacilitiesSafe((e) => [...e, element]);
                    } else if (element.type === 'kitchen') {
                        setFacilitiesKitchen((e) => [...e, element]);
                    } else if (element.type === 'bath') {
                        setFacilitiesBath((e) => [...e, element]);
                    }
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        // append key - value
        data.append('numberBedroom', numberBedroom);
        data.append('numberBathroom', numberBathroom);
        data.append('numberBed', numberBed);
        let body = Object.fromEntries(data);
        body.stars = data.getAll('stars');
        body.facilities = data.getAll('facilities');
        const queryString = new URLSearchParams(body).toString();
        window.location.href = `http://localhost:3000/ListHouse/city/Phu%20Quoc/1?${queryString}`;
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={cx('filter')}>
                <span className={cx('filter__icon')}>
                    <i className="fa-solid fa-bookmark"></i>
                </span>
                <input
                    name="name"
                    className={cx('filter__input')}
                    type={'text'}
                    value={searchName}
                    onChange={(e) => setSearchName(e.currentTarget.value)}
                    placeholder="what are you looking?"
                />
            </div>
            <div className={cx('filter')}>
                <span className={cx('filter__icon')}>
                    <i className="fa-solid fa-list"></i>
                </span>
                <select
                    className={cx('filter__input')}
                    name="city"
                    value={selectCity}
                    onChange={(e) => setSelectCity(e.target.value)}
                >
                    <option value="all">Tất cả thành phố</option>
                    <option value="da-lat">Đà Lạt</option>
                    <option value="binh-duong">Bình Dương</option>
                    <option value="hcm">Thành phố Hồ Chí Minh</option>
                    <option value="Phu Quoc">Phú Quốc</option>
                </select>
            </div>
            <div className={cx('filter')}>
                <p className={cx('filter__name')}>Xếp hạng sao</p>
                <ul className={cx('filter__star')}>
                    {Array.from({ length: 3 }, (element, index) => {
                        return (
                            <li className={cx('star')} key={index}>
                                <input
                                    type="checkbox"
                                    value={5 - index}
                                    name={'stars'}
                                    id={index + '-star'}
                                    ref={(el) => (checkRateStar.current[index] = el)}
                                />
                                <label htmlFor={index + '-star'}>
                                    {Array.from({ length: 5 - index }, (e, i) => (
                                        <i key={i} className="fa-solid fa-star"></i>
                                    ))}
                                </label>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={cx('filter')}>
                <div className={cx('filter__date')}></div>
            </div>
            <div className={cx('filter')}>
                <div className={cx('filter__price')}>
                    <span className={cx('price__icon')}>
                        <i className="fa-solid fa-hand-holding-dollar"></i>
                    </span>
                    <p className={cx('price__name')}>Giá</p>
                    <p>
                        <input
                            min={0}
                            type={'number'}
                            className={cx('price__input')}
                            value={fromPrice || ''}
                            onChange={(e) => setFromPrice(e.currentTarget.value)}
                            placeholder="0 Đ"
                            name="minPrice"
                        ></input>
                    </p>
                    <p className={cx('price__dash')}>-</p>
                    <p>
                        <input
                            min={0}
                            type={'number'}
                            className={cx('price__input')}
                            value={toPrice || ''}
                            onChange={(e) => setToPrice(e.currentTarget.value)}
                            placeholder="5.000.000 Đ"
                            name="maxPrice"
                        ></input>
                    </p>
                </div>
            </div>
            <div className={cx('filter')}>
                <div className={cx('filter__room')}>
                    <p className={cx('filter__room-name')}>Phòng ngủ</p>
                    <div className={cx('filter__room-number')}>
                        {Array.from({ length: 4 }, (e, i) => (
                            <Button
                                type="button"
                                key={i}
                                rounded
                                small
                                className={cx('number', numberBedroom === i ? 'active' : null)}
                                onClick={() => setNumberBedroom(i)}
                            >
                                {i === 0 ? 'Bất kì' : i}
                            </Button>
                        ))}
                    </div>
                    <p className={cx('filter__room-name')}>Giường</p>
                    <div className={cx('filter__room-number')}>
                        {Array.from({ length: 4 }, (e, i) => (
                            <Button
                                key={i}
                                type="button"
                                rounded
                                small
                                className={cx('number', numberBed === i ? 'active' : null)}
                                onClick={() => setNumberBed(i)}
                            >
                                {i === 0 ? 'Bất kì' : i}
                            </Button>
                        ))}
                    </div>
                    <p className={cx('filter__room-name')}>Phòng tắm</p>
                    <div className={cx('filter__room-number')}>
                        {Array.from({ length: 4 }, (e, i) => (
                            <Button
                                key={i}
                                type="button"
                                rounded
                                small
                                className={cx('number', numberBathroom === i ? 'active' : null)}
                                onClick={() => setNumberBathroom(i)}
                            >
                                {i === 0 ? 'Bất kì' : i}
                            </Button>
                        ))}
                        {/* <input type="hidden" name="numberBedroom" value={numberBedroom} />
                        <input type="hidden" name="numberBed" value={numberBed} />
                        <input type="hidden" name="numberBathroom" value={numberBathroom} />
                        <input type="hidden" name="" /> */}
                    </div>
                </div>
            </div>
            <div className={cx('filter')}>
                <div className={cx('filter__facility')}>
                    <p className={cx('filter__name')}>Tiện nghi</p>
                    <p className={cx('facility__type')}>Giặt ủi</p>
                    <div className={cx('filter__facility-grid')}>
                        {facilitiesLaundry.map((e, i) => {
                            return (
                                <p className={cx('filter__facility-choose')} key={i}>
                                    <input
                                        ref={(el) => (checkFacilityLaundry.current[i] = el)}
                                        type={'checkbox'}
                                        name={'facilities'}
                                        value={e._id}
                                        id={e.name}
                                    ></input>
                                    <label htmlFor={e.name}>{e.name}</label>
                                </p>
                            );
                        })}
                    </div>
                    <div
                        className={cx(
                            'filter__facility-full',
                            isExpandFacilities ? 'filter__facility-fullDisplay' : 'filter__facility-fullHidden',
                        )}
                    >
                        <p className={cx('facility__type')}>Đặc điểm</p>
                        <div className={cx('filter__facility-grid')}>
                            {facilitiesFeature.map((e, i) => {
                                return (
                                    <p className={cx('filter__facility-choose')} key={i}>
                                        <input
                                            ref={(el) => (checkFacilityFeature.current[i] = el)}
                                            type={'checkbox'}
                                            name={'facility'}
                                            value={e._id}
                                            id={e.name}
                                        ></input>
                                        <label htmlFor={e.name}>{e.name}</label>
                                    </p>
                                );
                            })}
                        </div>
                        <p className={cx('facility__type')}>Bếp</p>
                        <div className={cx('filter__facility-grid')}>
                            {facilitiesKitchen.map((e, i) => {
                                return (
                                    <p className={cx('filter__facility-choose')} key={i}>
                                        <input
                                            ref={(el) => (checkFacilityKitchen.current[i] = el)}
                                            type={'checkbox'}
                                            name={'facilities'}
                                            value={e._id}
                                            id={e.name}
                                        ></input>
                                        <label htmlFor={e.name}>{e.name}</label>
                                    </p>
                                );
                            })}
                        </div>
                        <p className={cx('facility__type')}>Phòng tắm</p>
                        <div className={cx('filter__facility-grid')}>
                            {facilitiesBath.map((e, i) => {
                                return (
                                    <p className={cx('filter__facility-choose')} key={i}>
                                        <input
                                            ref={(el) => (checkFacilityBath.current[i] = el)}
                                            type={'checkbox'}
                                            name={'facilities'}
                                            value={e._id}
                                            id={e.name}
                                        ></input>
                                        <label htmlFor={e.name}>{e.name}</label>
                                    </p>
                                );
                            })}
                        </div>
                        <p className={cx('facility__type')}>An toàn </p>
                        <div className={cx('filter__facility-grid')}>
                            {facilitiesSafe.map((e, i) => {
                                return (
                                    <p className={cx('filter__facility-choose')} key={i}>
                                        <input
                                            ref={(el) => (checkFacilitySafe.current[i] = el)}
                                            type={'checkbox'}
                                            name={'facilities'}
                                            value={e._id}
                                            id={e.name}
                                        ></input>
                                        <label htmlFor={e.name}>{e.name}</label>
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                    <p
                        className={cx('filter__facility-expand')}
                        onClick={() => setExpandFacilities(!isExpandFacilities)}
                    >
                        {isExpandFacilities ? 'Rút gọn' : 'Hiển thị thêm'}
                    </p>
                </div>
            </div>
            <div className={cx('filter')}>
                <Button
                    to=""
                    rounded
                    className={cx('filter__button')}
                    leftIcon={<i className="fa-solid fa-magnifying-glass"></i>}
                >
                    <span>Search</span>
                </Button>
            </div>
            <div className={cx('filter__reset')}>
                <p onClick={activeResetFilter}>
                    <span>
                        <i className="fa-solid fa-rotate-right"></i>
                    </span>
                    <span> Xóa lọc tìm kiếm</span>
                </p>
            </div>
        </form>
    );
}

export default Filter;
