import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/components/Button';
import BasicInfo from './Form/BasicInfo';
import Convenient from './Form/Convenient';
import DetailInfo from './Form/DetailInfo';
import FormSignUpOwner from './Form/FormSignUpOwner';
import ImageInfo from './Form/ImageInfo';
import Location from './Form/Location';
import OwnerInfo from './Form/OwnerInfo';
import Policy from './Form/Policy';
import styles from './SignUpOwner.module.scss';

const cx = classNames.bind(styles);
function SignUpOwner() {
    const [step, setStep] = useState(1);

    const handleStep = () => {
        if (step === 1) {
            return (
                <BasicInfo>
                    <Button
                        disabled
                        large
                        type="button"
                        onClick={() => {
                            setStep((step) => step - 1);
                        }}
                    >
                        Quay lại
                    </Button>
                    <Button
                        large
                        type="button"
                        onClick={() => {
                            setStep((step) => step + 1);
                        }}
                    >
                        Tiếp Theo
                    </Button>
                </BasicInfo>
            );
        } else if (step === 2) {
            return (
                <Location>
                    <Button
                        large
                        type="button"
                        onClick={() => {
                            setStep((step) => step - 1);
                        }}
                    >
                        Quay lại
                    </Button>
                    <Button
                        large
                        type="button"
                        onClick={() => {
                            setStep((step) => step + 1);
                        }}
                    >
                        Tiếp Theo
                    </Button>
                </Location>
            );
        } else if (step === 3) {
            return (
                <Convenient>
                    <Button
                        large
                        type="button"
                        onClick={() => {
                            setStep((step) => step - 1);
                        }}
                    >
                        Quay lại
                    </Button>
                    <Button
                        large
                        type="button"
                        onClick={() => {
                            setStep((step) => step + 1);
                        }}
                    >
                        Tiếp Theo
                    </Button>
                </Convenient>
            );
        } else if (step === 4) {
            return (
                <DetailInfo>
                    <Button
                        large
                        type="button"
                        onClick={() => {
                            setStep((step) => step - 1);
                        }}
                    >
                        Quay lại
                    </Button>
                    <Button
                        large
                        type="button"
                        onClick={() => {
                            setStep((step) => step + 1);
                        }}
                    >
                        Tiếp Theo
                    </Button>
                </DetailInfo>
            );
        } else if (step === 5) {
            return (
                <ImageInfo>
                    <Button
                        large
                        type="button"
                        onClick={() => {
                            setStep((step) => step - 1);
                        }}
                    >
                        Quay lại
                    </Button>
                    <Button
                        large
                        type="button"
                        onClick={() => {
                            setStep((step) => step + 1);
                        }}
                    >
                        Tiếp Theo
                    </Button>
                </ImageInfo>
            );
        } else if (step === 6) {
            return (
                <OwnerInfo>
                    <Button
                        large
                        type="button"
                        onClick={() => {
                            setStep((step) => step - 1);
                        }}
                    >
                        Quay lại
                    </Button>
                    <Button
                        large
                        type="button"
                        onClick={() => {
                            setStep((step) => step + 1);
                        }}
                    >
                        Tiếp Theo
                    </Button>
                </OwnerInfo>
            );
        } else {
            return (
                <Policy>
                    <Button
                        large
                        type="button"
                        onClick={() => {
                            setStep((step) => step - 1);
                        }}
                    >
                        Quay lại
                    </Button>
                    <Button
                        large
                        type="button"
                        onClick={() => {
                            if (step === 6) {
                                alert('FORM SUBMITTED');
                                console.log(step);
                            } else {
                                setStep((step) => step + 1);
                            }
                        }}
                    >
                        Tôi đồng ý với chính sách
                    </Button>
                </Policy>
            );
        }
    };

    return <FormSignUpOwner>{handleStep()}</FormSignUpOwner>;
}

export default SignUpOwner;
