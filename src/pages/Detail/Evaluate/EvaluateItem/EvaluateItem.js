import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './EvaluateItem.module.scss';

const cx = classNames.bind(styles);

function EvaluateItem({ avatar, name, time, content }) {
    return (
        <div className={cx('evaluates-item')}>
            <div className={cx('evaluates-item__header')}>
                <NavLink to="#" className={cx('avatar')}>
                    <img src={avatar} alt="avatar-user" />
                </NavLink>
                <div className={cx('info')}>
                    <p className={cx('name')}>{name}</p>
                    <p className={cx('time')}>{time}</p>
                </div>
            </div>
            <div className={cx('evaluates-item__content')}>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default EvaluateItem;
