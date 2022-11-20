import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Pagination() {
    return (
        <div className={cx('contain__pagination')}>
            <div className={cx('pagination')}>
                <Button small to="" className={cx('pagination__button-prev', 'pagination__button')}>
                    prev
                </Button>
                <a href="1" className={cx('pagination__button', 'active')}>
                    1
                </a>
                <a href="2" className={cx('pagination__button')}>
                    2
                </a>
                <a href="2" className={cx('pagination__button')}>
                    ...
                </a>
                <a href="7" className={cx('pagination__button')}>
                    7
                </a>
                <Button small to="" className={cx('pagination__button-next', 'pagination__button')}>
                    next
                </Button>
            </div>
        </div>
    );
}

export default Pagination;
