import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Pagination(props) {
    return (
        <div className={cx('contain__pagination')}>
            <div className={cx('pagination')}>
                <Button
                    small
                    to=""
                    href={
                        Number(props.currentPagination) - 1 < 1
                            ? ''
                            : `${Number(props.currentPagination) - 1}${props.queryString}`
                    }
                    className={cx('pagination__button-prev', 'pagination__button')}
                >
                    prev
                </Button>

                {Number(props.currentPagination) - 1 < 1 ? null : (
                    <a
                        href={`${Number(props.currentPagination) - 1}${props.queryString}`}
                        className={cx('pagination__button')}
                    >
                        {Number(props.currentPagination) - 1}
                    </a>
                )}
                <a
                    href={`${props.currentPagination}${props.queryString}`}
                    className={cx('pagination__button', 'active')}
                >
                    {props.currentPagination}
                </a>
                {Number(props.currentPagination) + 1 > props.totalPagination ? null : (
                    <a
                        href={`${Number(props.currentPagination) + 1}${props.queryString}`}
                        className={cx('pagination__button')}
                    >
                        {Number(props.currentPagination) + 1}
                    </a>
                )}
                <Button
                    small
                    to=""
                    href={
                        Number(props.currentPagination) + 1 > props.totalPagination
                            ? ''
                            : `${Number(props.currentPagination) + 1}${props.queryString}`
                    }
                    className={cx('pagination__button-next', 'pagination__button')}
                >
                    next
                </Button>
            </div>
        </div>
    );
}

export default Pagination;
