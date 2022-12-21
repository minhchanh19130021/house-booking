import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';
import Button from '~/components/Button';
import { NavLink } from 'react-router-dom';

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
                    Trước
                </Button>

                {Number(props.currentPagination) - 1 < 1 ? null : (
                    <NavLink
                        to={`/ListHouse/location/Phu%20Quoc/${Number(props.currentPagination) - 1}?${
                            props.queryString
                        }`}
                        className={cx('pagination__button')}
                    >
                        {Number(props.currentPagination) - 1}
                    </NavLink>
                )}
                <NavLink
                    to={`/ListHouse/location/Phu%20Quoc/${Number(props.currentPagination)}?${props.queryString}`}
                    className={cx('pagination__button', 'active')}
                >
                    {props.currentPagination}
                </NavLink>
                {Number(props.currentPagination) + 1 > props.totalPagination ? null : (
                    <NavLink
                        to={`/ListHouse/location/Phu%20Quoc/${Number(props.currentPagination) + 1}?${
                            props.queryString
                        }`}
                        className={cx('pagination__button')}
                    >
                        {Number(props.currentPagination) + 1}
                    </NavLink>
                )}
                <Button
                    small
                    to=""
                    href={
                        Number(props.currentPagination) + 1 > props.totalPagination
                            ? ''
                            : `${Number(props.currentPagination) + 1}?${props.queryString}`
                    }
                    className={cx('pagination__button-next', 'pagination__button')}
                >
                    Tiếp
                </Button>
            </div>
        </div>
    );
}

export default Pagination;
