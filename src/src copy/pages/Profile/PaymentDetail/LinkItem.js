import classNames from 'classnames/bind';
import styles from './PaymentDetail.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function LinkItem({ logo, name, owner, branch }) {
    return (
        <div className={cx('link-item', 'col', 'l-12', 'm-12', 'c-12')}>
            <img src={logo} alt="logo-link" className={cx('logo-link')} />
            <div className={cx('info-link')}>
                <p className={cx('name-link')}>{name}</p>
                <p className={cx('name-owner')}>
                    Họ Và Tên: <strong>{owner}</strong>
                </p>
                <p className={cx('name-branch')}>
                    Chi nhánh: <strong>{branch}</strong>
                </p>
            </div>

            <button className={cx('btn-remove')} type="button">Xóa</button>
            <Button outline type="button">
                Thiết lập mặc định
            </Button>
        </div>
    );
}

export default LinkItem;
