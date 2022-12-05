import classNames from 'classnames/bind';
import styles from '../SignUpOwner.module.scss';

const cx = classNames.bind(styles);
function ImageInfo({ children }) {
    return (
        <div className={cx('basic')}>
            <div className={cx('row')}>
                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                    <h3 className={cx('title')}>Hình ảnh cụ thể</h3>
                </div>
                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                    <label htmlFor="img-1">Ảnh 1</label>
                    <input name="img-1" id="img-1" type="file" />
                    <span className={cx('alert-message')}></span>
                </div>
                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                    <label htmlFor="img-2">Ảnh 2</label>
                    <input name="img-2" id="img-2" type="file" />
                    <span className={cx('alert-message')}></span>
                </div>
                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                    <label htmlFor="img-3">Ảnh 3</label>
                    <input name="img-3" id="img-3" type="file" />
                    <span className={cx('alert-message')}></span>
                </div>
                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                    <label htmlFor="img-4">Ảnh 4</label>
                    <input name="img-4" id="img-4" type="file" />
                    <span className={cx('alert-message')}></span>
                </div>
                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                    <label htmlFor="img-5">Ảnh 5</label>
                    <input name="img-5" id="img-5" type="file" />
                    <span className={cx('alert-message')}></span>
                </div>

                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>{children}</div>
            </div>
        </div>
    );
}

export default ImageInfo;
