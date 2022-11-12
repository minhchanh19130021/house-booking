import classNames from 'classnames/bind';

import styles from '../SignUpOwner.module.scss';

const cx = classNames.bind(styles);
function Policy({ children }) {
    return (
        <div className={cx('grid','wide')}>
            <div className={cx('row')}>
                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                    <h3 className={cx('title')}>Chính sách</h3>
                    {/* <input name="name" type="text" />
                    <span className={cx('alert-message')}></span> */}
                </div>
                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                    <p>
                        Để giúp Airbnb hoạt động trơn tru và trang trải chi phí dịch vụ như hỗ trợ khách hàng 24/7,
                        chúng tôi sẽ tính phí dịch vụ khi đặt phòng được xác nhận. Có 2 phương thức tính phí khác nhau
                        cho các chỗ ở: một khoản phí phân chia và một khoản phí chỉ dành cho Chủ nhà.
                    </p>
                    <h3>Chia mức phí</h3>
                    <p>Cấu trúc phí này là phổ biến nhất và được chia giữa Chủ nhà và khách.</p>
                    <h3>Phí chủ nhà</h3>
                    <p>
                        Hầu hết các Chủ nhà đều trả phí 3%, nhưng một số người trả nhiều hơn, bao gồm: Chủ nhà Airbnb
                        Plus Chủ nhà có nhà/phòng cho thuê ở Ý Đón tiếp khách với chính sách hủy Cực kỳ khắt khe Phí này
                        được tính từ tổng phụ tiền đặt phòng (giá theo đêm + phí vệ sinh + phí khách bổ sung, nếu có -
                        bao gồm phí và thuế của Airbnb) và được tự động khấu trừ vào khoản chi trả cho Chủ nhà.
                    </p>
                    <h3>Phí dành cho khách</h3>
                    <p>
                        Hầu hết các khoản phí dịch vụ dành cho khách đều dưới 14 USD của tổng phụ tiền đặt phòng (giá
                        theo đêm + phí vệ sinh + phí khách bổ sung, nếu có - bao gồm phí và thuế của Airbnb). Phí này
                        thay đổi dựa trên nhiều yếu tố khác nhau và được hiển thị trong quá trình trả phòng trước khi
                        bạn đặt phòng để biết những gì đang chờ đón bạn.
                    </p>
                    <h3>2. Phí chỉ dành cho chủ nhà</h3>
                    <p>
                        Với cấu trúc này, toàn bộ phí được khấu trừ vào khoản chi trả cho Chủ nhà. Mức giá thường là
                        14-16%, mặc dù các Chủ nhà và Chủ nhà Airbnb Plus có chính sách hủy Cực kỳ khắt khe có thể trả
                        nhiều hơn. Phí này là bắt buộc đối với các nhà/phòng cho thuê dịch vụ lưu trú truyền thống -
                        chẳng hạn như khách sạn, căn hộ dịch vụ, v.v., cũng như các chủ nhà sử dụng phần mềm (trừ khi
                        hầu hết nhà/phòng cho thuê của họ ở Hoa Kỳ, Canada, Bahamas, Mexico, Argentina, Đài Loan hoặc
                        Uruguay). Tất cả Chủ nhà có kết nối API sẽ được đăng ký với Phí chỉ dành cho chủ nhà và sẽ không
                        thể chọn không tham gia.
                    </p>
                    <h3>Thuế GTGT</h3>
                    <p>
                        Tùy thuộc vào luật pháp của khu vực pháp lý có liên quan, thuế GTGT có thể được tính ngoài các
                        khoản phí trên. Phí dịch vụ bao gồm thuế GTGT nếu có. Chúng tôi có quyền thay đổi phí dịch vụ
                        của mình bất kỳ lúc nào và sẽ thông báo trước cho bạn về bất kỳ thay đổi phí nào trước khi chúng
                        có hiệu lực. Bất kỳ thay đổi nào về phí sẽ không ảnh hưởng đến các đặt phòng được thực hiện
                        trước ngày thay đổi phí có hiệu lực.
                    </p>
                </div>
                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>{children}</div>
            </div>
        </div>
    );
}

export default Policy;
