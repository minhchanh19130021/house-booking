import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import ProfileSidebar from '../ProfileSidebar';
import styles from './HistoryBooking.module.scss';
import HistoryItem from './HistoryItem';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
function HistoryBooking() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.authentication.login.currentUser);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/v2/history-booking`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                token: `Bearer ${user?.accessToken}`,
            },
            body: JSON.stringify({ uid: user?._id ? user?._id : null }),
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.success === true) {
                    setHistory(response.data);
                } else if (response === 'Bạn chưa có mã token') {
                    navigate('/signin');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className="grid wide">
            <div className="row">
                <div className="col l-3 m-12 c-12">
                    <ProfileSidebar />
                </div>
                <div className="col l-8 m-12 c-12">
                    <h2>Lịch sử đặt nhà</h2>
                    <div className={cx('list-history')}>
                        {history.map((e, i) => {
                            let number_visitor = e?.order_detail[0]?.number_visitor;
                            console.log(e);
                            return (
                                <HistoryItem
                                    uid={e?.user[0]?._id}
                                    key={i}
                                    avatar={e?.user[0]?.avatar}
                                    nameHost={`${e?.user[0]?.firstname} ${e?.user[0]?.lastname}`}
                                    nameHouse={e?.home[0]?.name}
                                    member={`${number_visitor?.adults ? number_visitor.adults : 0} người lớn - ${
                                        number_visitor?.child ? number_visitor.child : 0
                                    } trẻ em - ${number_visitor?.baby ? number_visitor.baby : 0} em bé - ${
                                        number_visitor?.pet ? number_visitor.pet : 0
                                    } thú cưng`}
                                    date={`
                                        ${
                                            e?.order_detail[0]?.checkin
                                                ? e?.order_detail[0]?.checkin
                                                      ?.substring(0, 10)
                                                      ?.split('-')
                                                      ?.reverse()
                                                      ?.join('/')
                                                : 'không xác định'
                                        }
                                         - 
                                        ${
                                            e?.order_detail[0]?.checkout
                                                ? e?.order_detail[0]?.checkout
                                                      ?.substring(0, 10)
                                                      ?.split('-')
                                                      ?.reverse()
                                                      ?.join('/')
                                                : 'không xác định'
                                        }`}
                                    voucher={e?.voucher}
                                    payment={e?.order_detail[0]?.payment_method}
                                    total={e?.total_price}
                                    is_review={e?.is_review}
                                    oid={e._id}
                                    thanks="Rất hân hạnh được phục vụ bạn trong suốt những năm qua. Chúng tôi hy vọng sẽ tiếp tục mối quan hệ này trong năm tới với sự tôn trọng và kính trọng. Chúc bạn một năm mới hạnh phúc và viên mãn."
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HistoryBooking;
