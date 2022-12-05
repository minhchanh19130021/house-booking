import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import Button from '~/components/Button';
import ProfileSidebar from '../ProfileSidebar';
import styles from './HistoryBooking.module.scss';
import HistoryItem from './HistoryItem';

const cx = classNames.bind(styles);
function HistoryBooking() {
    return (
        <div className="grid wide">
            <div className="row">
                <div className="col l-3 m-12 c-12">
                    <ProfileSidebar />
                </div>
                <div className="col l-8 m-12 c-12">
                    <h2>Lịch sử đặt nhà</h2>
                    <div className={cx('list-history')}>
                        <HistoryItem 
                        avatar="https://townhub.kwst.net/images/avatar/3.jpg"
                        nameHost="Andy Smith"
                        nameHouse=" Premium Plaza Hotel"
                        member="5"
                        date="02.03.2019 - 10.03.2019"
                        payment="Ví momo"
                        total="2.563.356"
                        thanks="Rất hân hạnh được phục vụ bạn trong suốt những năm qua. Chúng tôi hy vọng sẽ tiếp tục mối quan hệ này trong năm tới với sự tôn trọng và kính trọng. Chúc bạn một năm mới hạnh phúc và viên mãn."
                        />
                        <HistoryItem 
                        avatar="https://townhub.kwst.net/images/avatar/2.jpg"
                        nameHost="Adam Forser"
                        nameHouse="Luxary Resaturant"
                        member="8"
                        date="10.03.2019"
                        payment="Ví momo"
                        total="2.243.356"
                        thanks="Chúng tôi chân thành cảm ơn về những đánh giá cao sự tin tưởng và niềm tin mà bạn dành cho chúng tôi trong năm vừa qua. Chúc bạn tiếp tục thành công trên chặn đường sắp tới!"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HistoryBooking;
