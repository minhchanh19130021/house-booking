import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
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
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
function SignUpOwner() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.authentication.login.currentUser);
    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/isLogin`, {
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
                    navigate('/');
                } else if (response === 'Bạn chưa có mã token') {
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
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
