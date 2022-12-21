import classNames from 'classnames/bind';
import CardPayment from '~/components/CardPayment';
import CardSummaryPay from '~/components/CardSummaryPay';
import Title from '~/components/Title';
import styles from './Payment.module.scss';
import { useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const cx = classNames.bind(styles);
function Payment() {
    
    const user = useSelector((state) => state.authentication.login.currentUser);
    const [userInfor, setUserInfor] = useState([]);
    useEffect(() => {
        if (user?._id) {
            fetch(`http://localhost:8080/api/v1/user/get`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    token: `Bearer ${user?.accessToken}`,
                },
                body: JSON.stringify({ uid: user?._id }),
            })
                .then((response) => response.json())
                .then((response) => {
                    if (response.success) {
                        setUserInfor(response.data[0]);
                        
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    return (
        <div>
            <Title title="Xác nhận và thanh toán" to="/detail" />
            <div className={cx('_12nksyy')}>
                <CardPayment userInfor={userInfor}/>
                <CardSummaryPay userInfor={userInfor}/>
            </div>
        </div>
    );
}

export default Payment;
