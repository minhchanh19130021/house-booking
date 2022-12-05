import classNames from 'classnames/bind';
import styles from '../SignUpOwner.module.scss';

const cx = classNames.bind(styles);
function Convenient({ children }) {
    return (
        <div className={cx('basic')}>
            <div className={cx('row')}>
                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                    <h3 className={cx('title')}>Tiện nghi</h3>
                </div>
                <div className={cx('form-convenient', 'col', 'l-4', 'm-6', 'c-6')}>
                    <input name="air-conditioner" id="air-conditioner" type="checkbox" />
                    <label htmlFor="air-conditioner">Máy lạnh</label>
                </div>
                <div className={cx('form-convenient', 'col', 'l-4', 'm-6', 'c-6')}>
                    <input name="parking-free" id="parking-free" type="checkbox" />
                    <label htmlFor="parking-free">Chỗ để xe miễn phí</label>
                </div>
                <div className={cx('form-convenient', 'col', 'l-4', 'm-6', 'c-6')}>
                    <input name="clean" id="clean" type="checkbox" />
                    <label htmlFor="clean">Vệ sinh phòng</label>
                </div>
                <div className={cx('form-convenient', 'col', 'l-4', 'm-6', 'c-6')}>
                    <input name="Wi-fi" id="Wi-fi" type="checkbox" />
                    <label htmlFor="Wi-fi">Wi-fi</label>
                </div>
                <div className={cx('form-convenient', 'col', 'l-4', 'm-6', 'c-6')}>
                    <input name="pool" id="pool" type="checkbox" />
                    <label htmlFor="pool">Bể bơi</label>
                </div>
                <div className={cx('form-convenient', 'col', 'l-4', 'm-6', 'c-6')}>
                    <input name="hot-tub" id="hot-tub" type="checkbox" />
                    <label htmlFor="hot-tub">Bồn tắm nước nóng</label>
                </div>
                <div className={cx('form-convenient', 'col', 'l-4', 'm-6', 'c-6')}>
                    <input name="washing-machine" id="washing-machine" type="checkbox" />
                    <label htmlFor="washing-machine">Máy giặt</label>
                </div>
                <div className={cx('form-convenient', 'col', 'l-4', 'm-6', 'c-6')}>
                    <input name="oven-mitts" id="oven-mitts" type="checkbox" />
                    <label htmlFor="oven-mitts">Lò nướng</label>
                </div>
                <div className={cx('form-convenient', 'col', 'l-4', 'm-6', 'c-6')}>
                    <input name="TV" id="TV" type="checkbox" />
                    <label htmlFor="TV">TV</label>
                </div>
                <div className={cx('form-convenient', 'col', 'l-4', 'm-6', 'c-6')}>
                    <input name="clothes-dryer" id="clothes-dryer" type="checkbox" />
                    <label htmlFor="clothes-dryer">Máy sấy quần áo</label>
                </div>

                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>{children}</div>
            </div>
        </div>
    );
}

export default Convenient;
