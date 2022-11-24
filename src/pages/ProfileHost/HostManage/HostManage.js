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
import HostItem from './HostItem';
import styles from './HostManage.module.scss';

const cx = classNames.bind(styles);
function HostManage() {
    const [modal, setModal] = useState(false);
    const [on, setOn] = useState(false);

    const [step, setStep] = useState(1);

    const toggleModal = () => {
        setModal(!modal);
    };
    const toggleStatus = () => {
        setOn(!on);
    };

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
                    <h2>Quản lý nhà</h2>

                    <div className={cx('profile-form', 'row')}>
                        <form className={cx('search-form', 'col', 'l-7', 'm-12', 'c-12')}>
                            <svg
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="presentation"
                                focusable="false"
                                style={{
                                    display: 'block',
                                    fill: 'none',
                                    height: '12px',
                                    width: '12px',
                                    stroke: 'currentcolor',
                                    strokeWidth: '5.33333',
                                    overflow: 'visible',
                                }}
                                className={cx('icon-search')}
                            >
                                <g fill="none">
                                    <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9" />
                                </g>
                            </svg>
                            <input
                                id="search"
                                name="search"
                                type="text"
                                placeholder="Tìm kiếm nhà của bạn"
                                className={cx('input-search')}
                            />
                            <span className={cx('alert-message')}></span>
                        </form>
                        <div className={cx('profile-input', 'col', 'l-5', 'm-12', 'c-12')}>
                            <Button to="/host-new" className={cx('btn-new')}>Thêm nhà mới</Button>
                        </div>
                    </div>
                    <div className={cx('list-host', 'row')}>
                        <div className={cx('col', 'l-12')}>
                            <HostItem
                                img="https://townhub.kwst.net/images/all/31.jpg"
                                name="Handmade Shop"
                                locate="W 85th St, New York, USA"
                            >
                                <Button small className={cx('btn-edit')} onClick={toggleModal}>
                                    Sửa
                                </Button>
                                <Button small className={cx('btn-remove')}>
                                    Xóa
                                </Button>
                                <Button small className={cx('btn-turn')} onClick={toggleStatus}>
                                    {on ? 'Bật' : 'Tắt'}
                                </Button>
                            </HostItem>
                            <HostItem
                                img="https://townhub.kwst.net/images/all/1.jpg"
                                name="Premium Fitness Gym"
                                locate="34-42 Montgomery St , NY, USA"
                            >
                                <Button small className={cx('btn-edit')} onClick={toggleModal}>
                                    Sửa
                                </Button>
                                <Button small className={cx('btn-remove')}>
                                    Xóa
                                </Button>
                                <Button small className={cx('btn-turn')} onClick={toggleStatus}>
                                    {on ? 'Bật' : 'Tắt'}
                                </Button>
                            </HostItem>

                            {modal && (
                                <div className={cx('modal')}>
                                    <div onClick={toggleModal} className={cx('overlay')}></div>
                                    <div className={cx('modal-content')}>
                                        <form method="post" action="#">
                                            {handleStep()}
                                        </form>
                                        <Button small className={cx('close-modal')} onClick={toggleModal}>
                                            THOÁT
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HostManage;
