import classNames from 'classnames/bind';
import styles from './PaymentDetail.module.scss';
import ProfileSidebar from '../ProfileSidebar';
import Button from '~/components/Button';
import { useState } from 'react';
import LinkItem from './LinkItem';

const cx = classNames.bind(styles);

function PaymentDetail() {
    const [modalLink, setModalLink] = useState(false);

    const handleModalLink = () => {
        return setModalLink((modalLink) => !modalLink);
    };
    return (
        <div className="grid wide">
            <div className="row">
                <div className="col l-3 m-12 c-12">
                    <ProfileSidebar />
                </div>
                <form className="col l-8 m-12 c-12" action="#" method="post">
                    <h2>Thông tin thanh toán</h2>
                    <div className={cx('profile-form', 'row')}>
                        <div className="col l-12 m-12 c-12">
                            <LinkItem
                                logo="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-BIDV-Ori.png"
                                name="BIDV - NH DAU TU & PHAT TRIEN VIET NAMBIDV - NH DAU TU & PHAT TRIEN VIET NAMBIDV - NH DAU TU & PHAT TRIEN VIET NAM"
                                owner="Le Minh Chanh"
                                branch="CN Sai Gon (BIDV)"
                            />
                        </div>
                        <div className="col l-12 m-12 c-12">
                            <LinkItem
                                logo="http://danhbaict.vn/uploads/business/logo/business1619171978-logo%20170x125-01.jpg"
                                name="BIDV - NH DAU TU & PHAT TRIEN VIET NAM"
                                owner="Le Minh Chanh"
                                branch="CN Sai Gon (BIDV)"
                            />
                        </div>
                        <div className="col l-12 m-12 c-12">
                            <LinkItem
                                logo="https://lh4.googleusercontent.com/Sy-e9JlANwvBGDXpqJl9Soz11wBIjUV9GpQLbuc2DjuP2Y2W0tfQbh4S-APj5nzG-HqfX9KgjUtiN-IbqQnVoJPT6bIQLGWD5D44UXn6GryrxCF2dksqzpTB7j5dM_52YXyO6qm6"
                                name="BIDV - NH DAU TU & PHAT TRIEN VIET NAM"
                                owner="Le Minh Chanh"
                                branch="CN Sai Gon (BIDV)"
                            />
                        </div>

                        <div className={cx('profile-input', 'col', 'l-12', 'm-12', 'c-12')}>
                            <Button large onClick={handleModalLink} type="button">
                                Thêm phương thức thanh toán
                            </Button>
                        </div>
                        <div className={cx('profile-input', 'col', 'l-12')}>
                            {modalLink && (
                                <div className={cx('profile-form', 'row')}>
                                    <div className={cx('profile-input', 'col', 'l-6', 'm-12', 'c-12')}>
                                        <label htmlFor="fullname">Họ và tên (đầy đủ, viết in hoa không dấu)</label>
                                        <input id="fullname" name="fullname" type="text" />
                                        <span className={cx('alert-message')}></span>
                                    </div>
                                    <div className={cx('profile-input', 'col', 'l-6', 'm-12', 'c-12')}>
                                        <label htmlFor="cmnd">CMND/CCCD</label>
                                        <input id="cmnd" name="cmnd" type="text" />
                                        <span className={cx('alert-message')}></span>
                                    </div>
                                    <div className={cx('profile-input', 'col', 'l-6', 'm-12', 'c-12')}>
                                        <label>Tên ngân hàng</label>
                                        <select>
                                            <option value="bidv">BIDV</option>
                                            <option value="sa">SACOMBANK</option>
                                            <option value="vp">VP BANK</option>
                                        </select>
                                    </div>
                                    <div className={cx('profile-input', 'col', 'l-6', 'm-12', 'c-12')}>
                                        <label>Tên chi nhánh ngân hàng</label>
                                        <select>
                                            <option value="q9">Quận 9</option>
                                            <option value="la">Long An</option>
                                            <option value="bd">Bình Dương</option>
                                        </select>
                                    </div>
                                    <div className={cx('profile-input', 'col', 'l-12', 'm-12', 'c-12')}>
                                        <label htmlFor="number-card">Số tài khoản</label>
                                        <input id="number-card" name="avatar" type="text" />
                                        <span className={cx('alert-message')}></span>
                                    </div>
                                    <div className={cx('profile-input', 'col', 'l-12', 'm-12', 'c-12')}>
                                        <Button
                                            large
                                            type="button"
                                            onClick={handleModalLink}
                                            className={cx('submit-info')}
                                        >
                                            Hoàn thành
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PaymentDetail;
