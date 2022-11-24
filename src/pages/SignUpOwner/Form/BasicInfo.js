import classNames from 'classnames/bind';
import styles from '../SignUpOwner.module.scss';

const cx = classNames.bind(styles);

function BasicInfo({ children }) {
    return (
        <div className={cx('basic')}>
            <div className={cx('row')}>
                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                    <h3 className={cx('title')}>Thông tin cơ bản</h3>
                </div>
                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                    <label htmlFor="name-house">Tên chỗ cho thuê</label>
                    <input name="name-house" id="name-house" type="text" />
                    <span className={cx('alert-message')}></span>
                </div>
                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                    <label>Loại cho thuê</label>
                    <select>
                        <option value="Nhà nghỉ">Nhà nghỉ</option>
                        <option value="Khách sạn">Khách sạn </option>
                        <option value="Căn hộ">Căn hộ </option>
                    </select>
                </div>
                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                    <label htmlFor="description-house">Mô tả nhà của bạn</label>
                    <textarea name="description-house" id="description-house" type="text"></textarea>
                    <span className={cx('alert-message')}></span>
                </div>
                <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-6')}>
                    <label>Chính sách hủy</label>
                    <select>
                        <option value="Hoàn 10% ">Hoàn 10% </option>
                        <option value="Hoàn 20%">Hoàn 20% </option>
                        <option value="Hoàn 30%">Hoàn 30%</option>
                        <option value="Hoàn 40%">Hoàn 40% </option>
                        <option value="Hoàn 50%">Hoàn 50% </option>
                        <option value="Hoàn 100%">Hoàn 100%</option>
                        <option value="Không hoàn tiền cọc">Không hoàn tiền cọc</option>
                    </select>
                </div>
                <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-6')}>
                    <label>Số ngày hủy tối đa</label>
                    <select>
                        <option value="Khách sạn">Sau 3 ngày </option>
                        <option value="Khách sạn">Sau 5 ngày </option>
                        <option value="Khách sạn">Sau 7 ngày </option>
                        <option value="Khách sạn">Sau 10 ngày </option>
                        <option value="Khách sạn">Sau 30 ngày </option>
                    </select>
                </div>
                <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-6')}>
                    <label htmlFor="time-receive">Thời gian nhận phòng</label>
                    <input name="time-receive" id="time-receive" type="time" />
                </div>
                <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-6')}>
                    <label htmlFor="time-return">Thời gian trả phòng</label>
                    <input name="time-return" id="time-return" type="time" />
                </div>
                <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-6')}>
                    <label>Số ngày thuê tối thiểu</label>
                    <select>
                        <option value="Khách sạn"> 3 ngày </option>
                        <option value="Khách sạn"> 5 ngày </option>
                        <option value="Khách sạn"> 7 ngày </option>
                        <option value="Khách sạn"> 10 ngày </option>
                        <option value="Khách sạn"> 30 ngày </option>
                    </select>
                </div>
                <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-6')}>
                    <label>Số ngày hủy tối đa</label>
                    <select>
                        <option value="Khách sạn"> 3 ngày </option>
                        <option value="Khách sạn"> 5 ngày </option>
                        <option value="Khách sạn"> 7 ngày </option>
                        <option value="Khách sạn"> 10 ngày </option>
                        <option value="Khách sạn"> 30 ngày </option>
                    </select>
                </div>
                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>{children}</div>
            </div>
        </div>
    );
}

export default BasicInfo;
