import classNames from 'classnames/bind';
import styles from './Filter.module.scss';
import { useState, useEffect, useRef } from 'react';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Filter() {
    const [isExpandFacilities, setExpandFacilities] = useState(false);
    const [numberBedroom, setNumberBedroom] = useState(0);
    const [numberBed, setNumberBed] = useState(0);
    const [numberBathroom, setNumberBathroom] = useState(0);
    const [searchName, setSearchName] = useState('');
    const [fromPrice, setFromPrice] = useState(0);
    const [toPrice, setToPrice] = useState(0);
    const [selectCity, setSelectCity] = useState('all');
    const facilitiesBasicCompact = ['Wi-Fi', 'Bếp', 'TV', 'Máy giặt'];
    const facilitiesBasicExpand = ['Máy sấy tóc', 'Bàn Là', 'Điều hòa nhiệt độ', 'Máy sấy quần áo'];
    const facilitiesFeature = ['Bể Bơi', 'Cũi', 'Đỗ Xe Miễn Phí', 'Bộ Sạc Điện'];
    const facilitiesSafe = ['Máy Báo Khói', 'Máy Báo Khí CO'];
    const checkRateStar = useRef([]);
    // do react auto render mỗi khi có change nên mới tạo nhiều ref riêng
    // cần tối ưu lại chỗ này (useMemo?, useCallBack?)
    const checkFacilityBasicCompact = useRef([]);
    const checkFacilityBasicExpand = useRef([]);
    const checkFacilityFeature = useRef([]);
    const checkFacilitySafe = useRef([]);

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
        checkFacilityBasicCompact.current.map((e) => (e.checked = false));
        checkFacilityBasicExpand.current.map((e) => (e.checked = false));
        checkFacilityFeature.current.map((e) => (e.checked = false));
        checkFacilitySafe.current.map((e) => (e.checked = false));
    }

    return (
        <form>
            <div className={cx('filter')}>
                <span className={cx('filter__icon')}>
                    <i className="fa-solid fa-bookmark"></i>
                </span>
                <input
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
                <select className={cx('filter__input')} value={selectCity} onChange={setSelectCity}>
                    <option value="all">Tất cả thành phố</option>
                    <option value="da-lat">Đà Lạt</option>
                    <option value="binh-duong">Bình Dương</option>
                    <option value="hcm">Thành phố Hồ Chí Minh</option>
                    <option value="phu-quoc">Phú Quốc</option>
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
                                    name={index + '-star'}
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
                            type={'number'}
                            className={cx('price__input')}
                            value={toPrice || ''}
                            onChange={(e) => setFromPrice(e.currentTarget.value)}
                            placeholder="0 Đ"
                        ></input>
                    </p>
                    <p className={cx('price__dash')}>-</p>
                    <p>
                        <input
                            type={'number'}
                            className={cx('price__input')}
                            value={fromPrice || ''}
                            onChange={(e) => setToPrice(e.currentTarget.value)}
                            placeholder="5.000.000 Đ"
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
                    </div>
                </div>
            </div>
            <div className={cx('filter')}>
                <div className={cx('filter__facility')}>
                    <p className={cx('filter__name')}>Tiện nghi</p>
                    <p className={cx('facility__type')}>Đồ dùng thiết yếu</p>
                    {/* 
                            *
                            *
                            * 
                            * 
                            * 
                            tiện nghi lấy trong database rồi render ra màn hình 
                            ở dưới chỉ là để làm frontend 
                            *
                            *
                            * 
                            * 
                            * 
                            */}
                    <div className={cx('filter__facility-grid')}>
                        {facilitiesBasicCompact.map((e, i) => {
                            return (
                                <p className={cx('filter__facility-choose')} key={i}>
                                    <input
                                        ref={(el) => (checkFacilityBasicCompact.current[i] = el)}
                                        type={'checkbox'}
                                        name={e}
                                        value={e}
                                        id={e}
                                    ></input>
                                    <label htmlFor={e}>{e}</label>
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
                        <div className={cx('filter__facility-grid')}>
                            {facilitiesBasicExpand.map((e, i) => {
                                return (
                                    <p className={cx('filter__facility-choose')} key={i}>
                                        <input
                                            ref={(el) => (checkFacilityBasicExpand.current[i] = el)}
                                            type={'checkbox'}
                                            name={e}
                                            value={e}
                                            id={e}
                                        ></input>
                                        <label htmlFor={e}>{e}</label>
                                    </p>
                                );
                            })}
                        </div>
                        <p className={cx('facility__type')}>Đặc điểm</p>
                        <div className={cx('filter__facility-grid')}>
                            {facilitiesFeature.map((e, i) => {
                                return (
                                    <p className={cx('filter__facility-choose')} key={i}>
                                        <input
                                            ref={(el) => (checkFacilityFeature.current[i] = el)}
                                            type={'checkbox'}
                                            name={e}
                                            value={e}
                                            id={e}
                                        ></input>
                                        <label htmlFor={e}>{e}</label>
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
                                            name={e}
                                            value={e}
                                            id={e}
                                        ></input>
                                        <label htmlFor={e}>{e}</label>
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
