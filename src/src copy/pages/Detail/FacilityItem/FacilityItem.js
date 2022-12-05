import classNames from 'classnames/bind';
import styles from './FacilityItem.module.scss';

const cx = classNames.bind(styles);
function FacilityItem({ icon, title }) {
    return (
        <div className={cx('facilities-item', 'col', 'l-6', 'm-12', 'c-12')}>
            {icon}
            <span>{title}</span>
        </div>
    );
}

export default FacilityItem;
