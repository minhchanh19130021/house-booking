import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './HostManage.module.scss';

const cx = classNames.bind(styles);
function HostItem({ img, name, locate, children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('row')}>
                <div className={cx('left', 'col', 'l-7')}>
                    <img src={img} alt="avatar" className={cx('avatar')} />
                    <div className={cx('info')}>
                        <NavLink className={cx('name')}>{name}</NavLink>
                        <NavLink className={cx('locate')}>{locate}</NavLink>
                    </div>
                </div>
                <div className={cx('col', 'l-5')}>{children}</div>
            </div>
        </div>
    );
}

export default HostItem;
