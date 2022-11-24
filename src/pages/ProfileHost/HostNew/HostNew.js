import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/components/Button';
import BasicInfo from '~/pages/SignUpOwner/Form/BasicInfo';
import Convenient from '~/pages/SignUpOwner/Form/Convenient';
import DetailInfo from '~/pages/SignUpOwner/Form/DetailInfo';
import ImageInfo from '~/pages/SignUpOwner/Form/ImageInfo';
import Location from '~/pages/SignUpOwner/Form/Location';
import OwnerInfo from '~/pages/SignUpOwner/Form/OwnerInfo';
import Policy from '~/pages/SignUpOwner/Form/Policy';
import ProfileHostSidebar from '../ProfileHostSidebar';
import styles from './HostNew.module.scss';

const cx = classNames.bind(styles);

function HostNew() {
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
    return (
        <div className="grid wide">
            <div className="row">
                <div className="col l-3 m-12 c-12">
                    <ProfileHostSidebar />
                </div>
                <div className="col l-8 m-12 c-12">
                    <h2>Thêm nhà mới</h2>
                    <div className={cx('profile-form', 'row')}>{handleStep()}</div>
                </div>
            </div>
        </div>
    );
}

export default HostNew;
