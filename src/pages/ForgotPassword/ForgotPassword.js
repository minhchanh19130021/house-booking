import { useState } from 'react';
import ForgotCode from './ForgotForm/ForgotCode';
import ForgotInfo from './ForgotForm/ForgotInfo';
import ForgotNewPassword from './ForgotForm/ForgotNewPassword';
import classNames from 'classnames/bind';
import styles from './ForgotPassword.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function ForgotPassword() {
    const [step, setStep] = useState(1);

    const handleStep = () => {
        if (step === 1) {
            return (
                <ForgotInfo>
                    <Button
                        large
                        type="button"
                        onClick={() => {
                            setStep((step) => step + 1);
                        }}
                    >
                        Tiếp Theo
                    </Button>
                </ForgotInfo>
            );
        } else if (step === 2) {
            return (
                <ForgotCode>
                    <Button
                        large
                        type="button"
                        onClick={() => {
                            setStep((step) => step + 1);
                        }}
                    >
                        Tiếp Theo
                    </Button>
                </ForgotCode>
            );
        } else {
            return (
                <ForgotNewPassword>
                    <Button
                        large
                        type="button"
                        onClick={() => {
                            if (step === 3) {
                                alert('FORM SUBMITTED');
                                console.log(step);
                            } else {
                                setStep((step) => step + 1);
                            }
                        }}
                    >
                        Xác Nhận
                    </Button>
                </ForgotNewPassword>
            );
        }
    };

    return <div className={cx('wrapper')}>{handleStep()}</div>;
}

export default ForgotPassword;
