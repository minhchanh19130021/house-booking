import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide', '')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-3', 'm-6', 'c-12', 'footer-item')}>
                        <p className={cx('footer-item__title')}>Hỗ trợ</p>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Trung tâm trợ giúp
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            AirCover
                        </NavLink>

                        <NavLink to="" className={cx('footer-item__link')}>
                            Thông tin an toàn
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Hỗ trợ người khuyết tật
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Các tùy chọn hủy
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Báo cáo lo ngại của hàng xóm
                        </NavLink>
                    </div>
                    <div className={cx('col', 'l-3', 'm-6', 'c-12', 'footer-item')}>
                        <p className={cx('footer-item__title')}>Cộng đồng</p>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Airbnb.org: nhà ở cứu trợ
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Hỗ trợ dân tị nạn Afghanistan
                        </NavLink>

                        <NavLink to="" className={cx('footer-item__link')}>
                            Chống phân biệt đối xử
                        </NavLink>
                    </div>
                    <div className={cx('col', 'l-3', 'm-6', 'c-12', 'footer-item')}>
                        <p className={cx('footer-item__title')}>Đón tiếp khách</p>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Thử đón tiếp khách
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            AirCover cho Chủ nhà
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Xem tài nguyên đón tiếp khách
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Truy cập diễn đàn cộng đồng
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Đón tiếp khách có trách nhiệm
                        </NavLink>
                    </div>
                    <div className={cx('col', 'l-3', 'm-6', 'c-12', 'footer-item')}>
                        <p className={cx('footer-item__title')}>Airbnb</p>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Trang tin tức
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Tìm hiểu các tính năng mới
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Thư ngỏ từ các nhà sáng lập
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Cơ hội nghề nghiệp
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Nhà đầu tư
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
