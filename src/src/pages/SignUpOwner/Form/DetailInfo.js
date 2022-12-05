import classNames from 'classnames/bind';
import styles from '../SignUpOwner.module.scss';

const cx = classNames.bind(styles);

function DetailInfo({ children }) {
    return (
        <div className={cx('basic')}>
            <div className={cx('row')}>
                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                    <h3 className={cx('title')}>Thông tin chi tiết</h3>
                </div>
                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                    <label htmlFor="size-house">Kích thước (mét vuông)</label>
                    <input name="size-house" id="size-house" type="text" />
                    <span className={cx('alert-message')}></span>
                </div>
                <div className={cx('form-group', 'col', 'l-4', 'm-4', 'c-12')}>
                    <label>Sức chứa</label>
                    <select>
                        <option value="1 người lớn">1 người lớn</option>
                        <option value="2 người lớn">2 người lớn</option>
                        <option value="3 người lớn">3 người lớn</option>
                        <option value="4 người lớn">4 người lớn</option>
                        <option value="5 người lớn">5 người lớn</option>
                    </select>
                </div>
                <div className={cx('form-group', 'col', 'l-4', 'm-4', 'c-12')}>
                    <label>Sức chứa</label>
                    <select>
                        <option value="1 trẻ em">1 trẻ em</option>
                        <option value="2 trẻ em">2 trẻ em</option>
                        <option value="3 trẻ em">3 trẻ em</option>
                    </select>
                </div>
                <div className={cx('form-group', 'col', 'l-4', 'm-4', 'c-12')}>
                    <label>Sức chứa</label>
                    <select>
                        <option value="1 thú cưng">1 thú cưng</option>
                        <option value="2 thú cưng">2 thú cưng</option>
                    </select>
                </div>
                <div className={cx('form-group', 'col', 'l-4', 'm-4', 'c-12')}>
                    <label>Phòng ngủ</label>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2 </option>
                    </select>
                </div>

                <div className={cx('form-group', 'col', 'l-4', 'm-4', 'c-12')}>
                    <label>Phòng tắm</label>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2 </option>
                    </select>
                </div>
                <div className={cx('form-group', 'col', 'l-4', 'm-4', 'c-12')}>
                    <label htmlFor="unit-price">Giá mỗi đêm (VNĐ)</label>
                    <input name="unit-price" id="unit-price" type="text" />
                    <span className={cx('alert-message')}></span>
                </div>

                <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-6')}>
                    <label>Ưu đãi lần đầu</label>
                    <select>
                        <option value="giảm 10% ">giảm 10%</option>
                        <option value="giảm 20%">giảm 20% </option>
                        <option value="giảm 30%">giảm 30%</option>
                        <option value="giảm 40%">giảm 40% </option>
                        <option value="giảm 50%">giảm 50% </option>
                        <option value="Không giảm tiền cọc">Không có</option>
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

                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>{children}</div>
            </div>
        </div>
    );
}

export default DetailInfo;
