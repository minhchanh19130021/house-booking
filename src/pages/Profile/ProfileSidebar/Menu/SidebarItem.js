import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function SidebarItem({ title, to, icon }) {
    return (
        <NavLink className={(nav) => cx('sidebar-item', { active: nav.isActive })} to={to}>
            <div className={cx('icon')}> {icon}</div>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

export default SidebarItem;
