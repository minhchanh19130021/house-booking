import classNames from 'classnames/bind';
import styles from '../SignUpOwner.module.scss';

const cx = classNames.bind(styles);

function OwnerInfo({ children }) {
    return (
        <div className={cx('basic')}>
            <div className={cx('row')}>
                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                    <h3 className={cx('title')}>Thông tin chủ nhà</h3>
                </div>
                <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-12')}>
                    <label htmlFor="firstname-owner">Họ</label>
                    <input name="firstname-owner" id="firstname-owner" type="text" />
                    <span className={cx('alert-message')}></span>
                </div>
                <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-12')}>
                    <label htmlFor="lastname-owwner">Tên</label>
                    <input name="lastname-owwner" id="lastname-owwner" type="text" />
                    <span className={cx('alert-message')}></span>
                </div>
                <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-12')}>
                    <label htmlFor="birthday-owner">Ngày sinh</label>
                    <input name="birthday-owner" id="birthday-owner" type="date" />
                    <span className={cx('alert-message')}></span>
                </div>
                <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-12')}>
                    <label>Giới tính</label>
                    <select>
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ </option>
                    </select>
                </div>
                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                    <label htmlFor="email-owner">Địa chỉ email</label>
                    <input name="email-owner" id="email-owner" type="email" />
                    <span className={cx('alert-message')}></span>
                </div>
                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                    <label htmlFor="phone-owner">Số điện thoại</label>
                    <input name="phone-owner" id="phone-owner" type="phone" />
                    <span className={cx('alert-message')}></span>
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
                    <label htmlFor="address-owner">Địa chỉ cụ thể(số nhà, đường, hẻm)</label>
                    <textarea name="address-owner" id="address-owner" type="text"></textarea>
                    <span className={cx('alert-message')}></span>
                </div>
                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                    <label>Hình thức thanh toán mong muốn</label>
                    <select>
                        <option value="Online">Online</option>
                        <option value="Paypal">Paypal</option>
                    </select>
                </div>
                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>{children}</div>
            </div>
        </div>
    );
}

export default OwnerInfo;
