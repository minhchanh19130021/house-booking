import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './CardPayment.module.scss';

const cx = classNames.bind(styles);

function CardPayment() {
    return (
    <div className={cx('_bdo76v7')}>
        <div style={{marginBottom: 64}}>
            <div className={cx('c1yo0219' , 'dir' , 'dir-ltr')}>
                <div /*style="--gp-section-max-width:1120px;"*/>
                    <div data-plugin-in-point-id="QUICKPAY_ERROR_MESSAGE" data-section-id="QUICKPAY_ERROR_MESSAGE">
                        <div tabIndex="-1" id="quick-pay-v2-error-message-container"></div>
                    </div>
                </div>
            </div>
            <div className={cx('c1yo0219' , 'dir' , 'dir-ltr')}>
                <div /*style="--gp-section-max-width:1120px;"*/>
                    <div data-plugin-in-point-id="TITLE_TRIP_SUMMARY" data-section-id="TITLE_TRIP_SUMMARY"
                         style={{paddingBottom: 24}}>
                        <section>
                            <div className={cx('tu9uqg8' , 'dir' , 'dir-ltr')}><h2 tabIndex="-1" className={cx('_14i3z6h')} elementtiming="LCP-target">
                                Chuyến đi của bạn</h2></div>
                        </section>
                    </div>
                </div>
            </div>
            <div className={cx('c1yo0219' , 'dir' , 'dir-ltr')}>
                <div /*style="--gp-section-max-width:1120px;"*/>
                    <div data-plugin-in-point-id="DATE_PICKER" data-section-id="DATE_PICKER" style={{paddingBottom: 24}}>
                        <div>
                            <div>
                                <div className={cx('_b7b6bk')}>
                                    <div className={cx('_1qyi2pa')}>
                                        <div className={cx('_pgfqnw')}><h3 tabIndex="-1" className={cx('_14i3z6h')} elementtiming="LCP-target">
                                            Ngày</h3></div>
                                        <div className={cx('_jbk4n3')}>Ngày 22 - Ngày 27 tháng 11</div>
                                    </div>
                                    <div className={cx('_fz3zdn')}>
                                        <button data-testid="checkout_platform.DATE_PICKER.edit" aria-label="Chỉnh sửa ngày"
                                                type="button" className={cx('_15rpys7s')}>Chỉnh sửa
                                        </button>
                                    </div>
                                </div>
                                <div className={cx('_88xxct')}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('c1yo0219' , 'dir' , 'dir-ltr')}>
                <div /*style="--gp-section-max-width:1120px;"*/>
                    <div data-plugin-in-point-id="GUEST_PICKER" data-section-id="GUEST_PICKER"
                         style={{paddingBottom: 24}}>
                        <div>
                            <div>
                                <div className={cx('_b7b6bk')}>
                                    <div className={cx('_1qyi2pa')}>
                                        <div className={cx('_pgfqnw')}><h3 tabIndex="-1" className={cx('_14i3z6h')} elementtiming="LCP-target">
                                            Khách</h3></div>
                                        <div className={cx('_jbk4n3')}>1 khách</div>
                                    </div>
                                    <div className={cx('_fz3zdn')}>
                                        <button data-testid="checkout_platform.GUEST_PICKER.edit"
                                                aria-label="Chỉnh sửa thông tin khách" type="button" className={cx('_15rpys7s')}>Chỉnh
                                            sửa
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <div className={cx('_88xxct')}>
                                        <div className={cx('_cne99n')}></div>
                                    </div>
                                </div>
                                <div className={cx('_cne99n')}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('c1yo0219' , 'dir' , 'dir-ltr')}>
                <div /*style="--gp-section-max-width:1120px;"*/>
                    <div /*style="margin-top: 8px; --gp-section-top-margin:8;"*/ style={{marginTop: 8}}>
                        <div className={cx('_npr0qi')} /*style="border-top-color: rgb(221, 221, 221);"*/ style={{borderTopColor: 'rgb(221, 221, 221)'}}></div>
                        <div data-plugin-in-point-id="PAYMENT_OPTIONS" data-section-id="PAYMENT_OPTIONS"
                             /*style="padding-top: 32px; padding-bottom: 24px;"*/ style={{paddingTop: 32,paddingBottom: 24}}>
                            <div>
                                <div>
                                    <div className={cx('_88xxct')}>
                                        <section>
                                            <div data-testid="payment-option-dropdown-selector">
                                                <div className={cx('_pawvzww')}>
                                                    <div className={cx('_vysn8h0')}>
                                                        <div className={cx('_uh6ul55')}><h2 tabIndex="-1" elementtiming="LCP-target"
                                                                                  className={cx('_14i3z6h')}>Thanh toán bằng</h2>
                                                        </div>
                                                        <div className={cx('_1nc6ity')}><span className={cx('_huz4f0')}><span role="img"
                                                                                                          aria-label="Thẻ Visa"><img
                                                                src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_visa.0adea522bb26bd90821a8fade4911913.svg"
                                                                alt="Thẻ Visa" height="9"
                                                                aria-hidden="true"/></span></span><span className={cx('_huz4f0')}><span
                                                                role="img" aria-label="Thẻ American Express"><img
                                                                src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_amex.84088b520ca1b3384cb71398095627da.svg"
                                                                alt="Thẻ American Express" height="9"
                                                                aria-hidden="true"/></span></span><span className={cx('_huz4f0')}><span
                                                                role="img" aria-label="Thẻ Mastercard"><img
                                                                src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_mastercard.f18379cf1f27d22abd9e9cf44085d149.svg"
                                                                alt="Thẻ Mastercard" height="9"
                                                                aria-hidden="true"/></span></span><span className={cx('_huz4f0')}><span
                                                                role="img" aria-label="Tìm hiểu thẻ"><img
                                                                src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_discover.7f05c82f07d62a0f8a69d54dbcd7c8be.svg"
                                                                alt="Tìm hiểu thẻ" height="9"
                                                                aria-hidden="true"/></span></span><span className={cx('_huz4f0')}><span
                                                                role="img" aria-label="PayPal"><img
                                                                src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_paypal.faa3042fa2daf6b4a9822cc4b43e8609.svg"
                                                                alt="PayPal" height="9"
                                                                aria-hidden="true"/></span></span><span className={cx('_huz4f0')}><span
                                                                role="img" aria-label="Google Pay"><img
                                                                src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_googlepay.3f786bc031b59575d24f504dfb859da0.svg"
                                                                alt="Google Pay" height="9"
                                                                aria-hidden="true"/></span></span></div>
                                                    </div>
                                                </div>
                                                <div className={cx('_17ctt5')}>
                                                    <div className={cx('_1xkps6z')}>
                                                        <div className={cx('_uh6ul55')}><h2 tabIndex="-1" elementtiming="LCP-target"
                                                                                  className={cx('_14i3z6h')}>Thanh toán bằng</h2>
                                                        </div>
                                                        <div><span className={cx('_huz4f0')}><span role="img"
                                                                                         aria-label="Thẻ Visa"><img
                                                                src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_visa.0adea522bb26bd90821a8fade4911913.svg"
                                                                alt="Thẻ Visa" height="9"
                                                                aria-hidden="true"/></span></span><span className={cx('_huz4f0')}><span
                                                                role="img" aria-label="Thẻ American Express"><img
                                                                src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_amex.84088b520ca1b3384cb71398095627da.svg"
                                                                alt="Thẻ American Express" height="9"
                                                                aria-hidden="true"/></span></span><span className={cx('_huz4f0')}><span
                                                                role="img" aria-label="Thẻ Mastercard"><img
                                                                src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_mastercard.f18379cf1f27d22abd9e9cf44085d149.svg"
                                                                alt="Thẻ Mastercard" height="9"
                                                                aria-hidden="true"/></span></span><span className={cx('_huz4f0')}><span
                                                                role="img" aria-label="Tìm hiểu thẻ"><img
                                                                src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_discover.7f05c82f07d62a0f8a69d54dbcd7c8be.svg"
                                                                alt="Tìm hiểu thẻ" height="9"
                                                                aria-hidden="true"/></span></span><span className={cx('_huz4f0')}><span
                                                                role="img" aria-label="PayPal"><img
                                                                src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_paypal.faa3042fa2daf6b4a9822cc4b43e8609.svg"
                                                                alt="PayPal" height="9"
                                                                aria-hidden="true"/></span></span><span className={cx('_huz4f0')}><span
                                                                role="img" aria-label="Google Pay"><img
                                                                src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_googlepay.3f786bc031b59575d24f504dfb859da0.svg"
                                                                alt="Google Pay" height="9"
                                                                aria-hidden="true"/></span></span></div>
                                                    </div>
                                                </div>
                                                <span className={cx('a8jt5op' , 'dir' , 'dir-ltr')} id="payment_option_selector_described_by">Chọn hoặc thêm phương thức thanh toán mới</span>
                                                <div>
                                                    <div className={cx('_fu49hrz')}>
                                                        <button id="dropdown-selector-payment_option_selector-button"
                                                                type="button"
                                                                aria-describedby="payment_option_selector_described_by"
                                                                aria-expanded="false" aria-haspopup="listbox"
                                                                aria-invalid="false" className={cx('_wz0818y')}>
                                                            <div aria-disabled="false"
                                                                 id="dropdown-selector-payment_option_selector-input"
                                                                 tabIndex="-1" className={cx('_1wcpnjd')}>
                                                                <div className={cx('_hgs47m')}>
                                                                    <div className={cx('_ni9axhe')}>
                                                                        <div>
                                                                            <div className={cx('_18z8fput')}>
                                                                                <svg viewBox="0 0 32 32"
                                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                                     aria-label="Thẻ tín dụng" role="img"
                                                                                     focusable="false"
                                                                                     /*style="display: block; height: 33px; width: 33px; fill: rgb(176, 176, 176);"*/ style={{display: 'block', height: 33, width: 33, fill: 'rgb(176, 176, 176)'}}>
                                                                                    <path d="M29 5a2 2 0 0 1 1.995 1.85L31 7v18a2 2 0 0 1-1.85 1.995L29 27H3a2 2 0 0 1-1.995-1.85L1 25V7a2 2 0 0 1 1.85-1.995L3 5zm0 6H3v14h26zm-3 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7-14H3v2h26z"></path>
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className={cx('_10ejfg4u')}>
                                                                        <div><span
                                                                                dir="ltr">Thẻ tín dụng hoặc thẻ ghi nợ</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </button>
                                                        <input name="payment_option_selector" type="hidden"
                                                               defaultValue="CREDIT_CARD"/><span className={cx('_qcdbez')}><div
                                                           className={cx('_nncr1bm')}><div className={cx('_ni9axhe')}><div className={cx('_wn4bip')}
                                                                                                        style={{transform: 'rotate(0deg)'}}><svg
                                                            viewBox="0 0 18 18" role="presentation" aria-hidden="true"
                                                            focusable="false"
                                                            /*style="height: 16px; width: 16px; display: block; fill: rgb(72, 72, 72);"*/ style={{display: 'block', height: 16, width: 33, fill: 'rgb(72, 72, 72)'}}><path
                                                            d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z"
                                                            fillRule="evenodd"></path></svg></div></div></div></span></div>
                                                    <div className={cx('_e296pg')}></div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <div className={cx('_4l12l8')}>
                                        <div className={cx('_88xxct')}>
                                            <div className={cx('_64pbdv')}>
                                                <div className={cx('_clw8y6')}>
                                                    <iframe className={cx('_e296pg')} name="payment-iframe" id="payment-iframe"
                                                            width="100%" height="114" frameBorder="0" scrolling="no"
                                                            seamless=""
                                                            src="https://iframes.airbnbpayments.com/3b2d37b3518f41ce3d98618e2e7cd9f0cfda1452/iframe_v2.html?country=VN&amp;origin=https%3A%2F%2Fwww.airbnb.com.vn&amp;is_cvv_only=false&amp;cvv_friction=undefined"
                                                            title="Biểu mẫu nhập thẻ thanh toán"></iframe>
                                                </div>
                                            </div>
                                            <div className={cx('_v0ipn8')}>
                                                <div className={cx('_1jj61m9')}><label className={cx('_1yw7hpv')} htmlFor="zipCode">
                                                    <div className={cx('_1jn0ze9')}>
                                                        <div className={cx('_11hx67x')}>Mã bưu chính</div>
                                                    </div>
                                                    <div dir="ltr">
                                                        <div className={cx('_js9i23')}><input name="zipCode" errormessage=""
                                                                                   className={cx('_c5rhl5')} id="zipCode"
                                                                                    autoComplete="off" type="text"
                                                                                    aria-describedby="" defaultValue=""/></div>
                                                    </div>
                                                </label></div>
                                            </div>
                                            <div className={cx('_14yb6ke')} aria-disabled="false" role="button" tabIndex="0"><label
                                                    htmlFor="billing_country_selector" className={cx('_13kgb0p')}>
                                                <div className={cx('_zhftk97')}>
                                                    <div className={cx('_11hx67x')}>Quốc gia/khu vực</div>
                                                </div>
                                                <div className={cx('_1ekxhnk')} id="billing_country_selector" aria-disabled="false">
                                                    Việt Nam
                                                </div>
                                            </label>
                                                <div className={cx('_lmil0')}>
                                                    <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true"
                                                         focusable="false"
                                                         style={{height: 16, width: 16, display: 'block', fill: 'rgb(72, 72, 72)'}}>
                                                        <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z"
                                                              fillRule="evenodd"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('c1yo0219' , 'dir' , 'dir-ltr')}>
                <div /*style="--gp-section-max-width:1120px;"*/>
                    <div data-plugin-in-point-id="COUPON" data-section-id="COUPON" style={{paddingBottom: 24}}>
                        <div>
                            <div className={cx('_4gelgl')}>
                                <button type="button" className={cx('_15rpys7s')}>Nhập mã giảm giá</button>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('c1yo0219' , 'dir' , 'dir-ltr')}>
                <div /*style="--gp-section-max-width:1120px;"*/>
                    <div style={{marginTop: 8}}>
                        <div className={cx('_npr0qi')} style={{borderTopColor: 'rgb(221, 221, 221)'}}></div>
                        <div data-plugin-in-point-id="TITLE_ADDITIONAL_REQUIREMENT"
                             data-section-id="TITLE_ADDITIONAL_REQUIREMENT"
                             style={{paddingTop: 32, paddingBottom: 24}}>
                            <section>
                                <div className={cx('tu9uqg8' , 'dir' , 'dir-ltr')}><h2 tabIndex="-1" className={cx('_14i3z6h')}
                                                                     elementtiming="LCP-target">Bắt buộc cho chuyến đi của
                                    bạn</h2></div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('c1yo0219' , 'dir' , 'dir-ltr')}>
                <div /*style="--gp-section-max-width:1120px;"*/>
                    <div data-plugin-in-point-id="PHONE_VERIFICATION" data-section-id="PHONE_VERIFICATION"
                         style={{paddingBottom: 24}}>
                        <div className={cx('_b7b6bk')}>
                            <div className={cx('_1qyi2pa')}>
                                <div className={cx('_m4gvkxh')}>
                                    <div className={cx('_5kaapu')}>Số điện thoại</div>
                                </div>
                                <div className={cx('_o7c33ig')}>Thêm và xác nhận số điện thoại của bạn để nhận thông tin cập nhật về
                                    chuyến đi.
                                </div>
                            </div>
                            <div className={cx('_fz3zdn')}>
                                <button data-testid="checkout_platform.PHONE_VERIFICATION.add" type="button"
                                        className={cx('_1ju7xj0j')}>Thêm
                                </button>
                            </div>
                        </div>
                        <div className={cx('_cne99n')}></div>
                    </div>
                </div>
            </div>
            <div className={cx('c1yo0219' , 'dir' , 'dir-ltr')}>
                <div /*style="--gp-section-max-width:1120px;"*/>
                    <div style={{marginTop: 8}}>
                        <div className={cx('_npr0qi')} /*style="border-top-color: rgb(221, 221, 221);"*/></div>
                        <div data-plugin-in-point-id="CANCELLATION_POLICY" data-section-id="CANCELLATION_POLICY"
                             style={{paddingTop: 32, paddingBottom: 24}}>
                            <div className={cx('_4gelgl')}>
                                <div className={cx('_ymq6as')}>
                                    <div className={cx('_pgfqnw')}>Chính sách hủy</div>
                                </div>
                                <div className={cx('_1mw6f03')}></div>
                                <strong id="CANCELLATION_POLICY-title"></strong><span><span className={cx('ll4r2nl' , 'dir' , 'dir-ltr')}>Đặt phòng/đặt chỗ này không được hoàn tiền.</span> </span>
                                <button type="button" className={cx('_15rpys7s')}>Tìm hiểu thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('c1yo0219' , 'dir' , 'dir-ltr')}>
                <div /*style="--gp-section-max-width:1120px;"*/>
                    <div /*style="margin-top: 8px; --gp-section-top-margin:8;"*/ style={{marginTop: 8}}>
                        <div className={cx('_npr0qi')} style={{borderTopColor: 'rgb(221, 221, 221)'}}></div>
                        <div data-plugin-in-point-id="TERMS_AND_CONDITIONS" data-section-id="TERMS_AND_CONDITIONS"
                             /*style="padding-top: 32px;"*/ style={{marginTop: 32}}>
                            <div className={cx('_n6ouu8')}>Bằng việc chọn nút bên dưới, tôi đồng ý với <span className={cx('_1hyxfz6')}
                                                                                                   role="button"
                                                                                                   tabIndex="0">Nội quy nhà của Chủ nhà</span>,
                                <span className={cx('_1hyxfz6')} role="button"
                                      tabIndex="0">Chính sách đặt lại và hoàn tiền</span>, và đồng ý rằng 
                                có thể <span className={cx('_1hyxfz6')} role="button" tabIndex="0">tính phí vào phương thức thanh toán của tôi</span>
                                nếu tôi phải chịu trách nhiệm về thiệt hại.
                            </div>
                            <div className={cx('_cne99n')}></div>
                            <div className={cx('_cne99n')}></div>
                            <div className={cx('_cne99n')}></div>
                            <div className={cx('_cne99n')}></div>
                            <div className={cx('_cne99n')}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('c1yo0219' , 'dir' , 'dir-ltr')}>
                <div /*style="--gp-section-max-width:1120px;"*/>
                    <div data-plugin-in-point-id="CONFIRM_AND_PAY" data-section-id="CONFIRM_AND_PAY"
                         style={{paddingTop: 24, paddingBottom: 24}}>
                        <div className={cx('_88xxct')}>
                            <div>
                                <div data-testid="submit-button">
                                    <button type="button" className={cx('_6901pxv')} data-veloute="checkout-flow-submit-button"><span
                                            className={cx('tjxdvlu' , 'dir' , 'dir-ltr')}><span className={cx('t12u7nq4' , 'dir' , 'dir-ltr')}
                                                                              style={{backgroundPosition: 'calc((100 - var(--mouse-x, 0)) * 1%) calc((100 - var(--mouse-y, 0)) * 1%)'}}></span></span><span
                                            className={cx('c4wd1yj' , 'dir' , 'dir-ltr')}><span className={cx('_14d5b3i')}><span className={cx('_3hmsj')}>Xác nhận và thanh toán</span></span> </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <link rel="prefetch" crossOrigin="anonymous"
                              href="https://a0.muscache.com/pictures/b1751353-5028-411b-92ea-45a1a958348c.json"/>
                        <div className={cx('_88xxct')}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default CardPayment;
