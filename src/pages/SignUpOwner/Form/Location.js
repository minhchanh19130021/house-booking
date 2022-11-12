import classNames from 'classnames/bind';
import styles from '../SignUpOwner.module.scss';

const cx = classNames.bind(styles);

function Location({ children }) {
    return (
        <div className={cx('basic')}>
            <div className={cx('row')}>
                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                    <h3 className={cx('title')}>Vị trí</h3>
                </div>
                <div className={cx('form-group', 'col', 'l-4', 'm-6', 'c-6')}>
                    <label>Tỉnh/Thành Phố</label>
                    <select>
                        <option value="Thủ Đức">Thủ Đức</option>
                        <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                    </select>
                </div>
                <div className={cx('form-group', 'col', 'l-4', 'm-6', 'c-6')}>
                    <label>Huyện</label>
                    <select>
                        <option value="Thủ Đức">Thủ Đức</option>
                        <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                    </select>
                </div>
                <div className={cx('form-group', 'col', 'l-4', 'm-6', 'c-6')}>
                    <label>Xã</label>
                    <select>
                        <option value="Thủ Đức">Thủ Đức</option>
                        <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                    </select>
                </div>
                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                    <label htmlFor="address-house">Địa chỉ cụ thể(tên nhà, tầng, căn hộ)</label>
                    <textarea name="address-house" id="address-house" type="text"></textarea>
                    <span className={cx('alert-message')}></span>
                </div>

                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>{children}</div>
            </div>
        </div>
    );
}

export default Location;
