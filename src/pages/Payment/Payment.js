import classNames from 'classnames/bind';
import CardPayment from '~/components/CardPayment';
import CardSummaryPay from '~/components/CardSummaryPay';
import Title from '~/components/Title';
import styles from './Payment.module.scss';

const cx = classNames.bind(styles);
function Payment() {
    return (
        <div>
            <Title
            title="Xác nhận và thanh toán"
            to="/detail"
            />
            
            <div className={cx('_12nksyy')}>
                <CardPayment/>
                <CardSummaryPay/>
            </div>
            
        </div>
        
    );
}

export default Payment;
