import classNames from 'classnames/bind';
import styles from './HighLightItem.module.scss';

const cx = classNames.bind(styles);
function HighLightItem({ svg, title, desc }) {
    return (
        <div className={cx('highlight-item')}>
            {svg}
            <div className={cx('highlight-desc')}>
                <p>{title}</p>
                <span>{desc}</span>
            </div>
        </div>
    );
}

export default HighLightItem;
