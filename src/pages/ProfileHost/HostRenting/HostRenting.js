import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { HistoryItem } from '~/pages/Profile/HistoryBooking';
import HostItem from '../HostManage/HostItem';
import ProfileHostSidebar from '../ProfileHostSidebar';
import styles from './HostRenting.module.scss';

const cx = classNames.bind(styles);
function HostRenting() {
    return (
        <div className="grid wide">
            <div className="row">
                <div className="col l-3 m-12 c-12">
                    <ProfileHostSidebar />
                </div>
                <div className="col l-8 m-12 c-12">
                    <h2>Danh sách nhà cho thuê</h2>
                    <div className={cx('list-host', 'row')}>
                        <div className={cx('col', 'l-12')}>
                            <HistoryItem
                                avatar="https://townhub.kwst.net/images/avatar/3.jpg"
                                nameHost="Andy Smith"
                                nameHouse=" Premium Plaza Hotel"
                                member="5"
                                date="02.03.2019 - 10.03.2019"
                                payment="Ví momo"
                                total="2.563.356"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HostRenting;
