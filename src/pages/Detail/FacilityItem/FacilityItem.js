import classNames from 'classnames/bind';
import styles from './FacilityItem.module.scss';

const cx = classNames.bind(styles);
function FacilityItem({ title, children }) {
    return (
        <div className={cx('facilities-item', 'col', 'l-6', 'm-12', 'c-12')}>
            {children}
            <span>{title}</span>
        </div>
    );
}

export default FacilityItem;
