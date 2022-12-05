import classNames from 'classnames/bind';
import styles from './EvaluateItem.module.scss';

const cx = classNames.bind(styles);
function InfoEvaluate({ title, value, rate }) {
    return (
        <div className={cx('modal-body__item')}>
            <p>{title}</p>
            <progress value={value} max="100"></progress>
            <span>{rate}</span>
        </div>
    );
}

export default InfoEvaluate;
