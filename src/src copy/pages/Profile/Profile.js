import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import ProfileSidebar from './ProfileSidebar';

const cx = classNames.bind(styles);
function Profile({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <div className={cx('row')}>
                    <div className={cx('sidebar', 'col', 'l-6', 'm-12', 'c-12')}>
                        <ProfileSidebar />
                    </div>
                    <div className={cx('content', 'col', 'l-6', 'm-12', 'c-12')}>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
