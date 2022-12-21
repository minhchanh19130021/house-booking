import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { useState, useEffect } from 'react';
import CartDetail from './CartDetail';
import { useSelector } from 'react-redux';
const cx = classNames.bind(styles);

function Cart() {
    const [cartDetail, setCartDetail] = useState([]);
    const [isDisplayFromDelete, setIsDisplayFromDelete] = useState(false);
    const [idToDelete, setIdToDelete] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalCartDetail, setTotalCartDetail] = useState(0);
    const [numberCartDetailChosen, setNumberCartDetailChosen] = useState(0);
    const user = useSelector((state) => state.authentication.login.currentUser);

    useEffect(() => {
        fetch(`http://localhost:8080/api/v2/cart/get`, {
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
                    setCartDetail(response.data);
                    setTotalCartDetail(response?.data?.length);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function handleRefuseDelete() {
        setIsDisplayFromDelete(false);
        setIdToDelete('');
    }

    function handleConfirmDelete() {
        let cartToDelete = {};
        cartToDelete._id = idToDelete;
        fetch(`http://localhost:8080/api/v2/cart/delete`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                token: `Bearer ${user?.accessToken}`,
            },
            body: JSON.stringify(cartToDelete),
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.success === true) {
                    setCartDetail(cartDetail.filter((e) => e?._id != idToDelete));
                    setIsDisplayFromDelete(false);
                    setIdToDelete('');
                    setTotalCartDetail(cartDetail?.length);
                    setNumberCartDetailChosen(numberCartDetailChosen - 1);
                } else {
                    alert('error!!! try again');
                    setIsDisplayFromDelete(false);
                    setIdToDelete('');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <div className={cx('container')}>
            <div className={cx('container_cart', isDisplayFromDelete ? 'background-white-light' : null)}>
                <div className={cx('container__title')}>Xe đẩy hàng của quý khách ({totalCartDetail})</div>
                {/* <div className={cx('checkout')}>
                    <div className={cx('contain__price')}>
                        <span className={cx('price__title')}>Tổng giá</span>
                        <span className={cx('price__value')}>
                            {`${Array.from(JSON.stringify(totalPrice))
                                .reverse()
                                .map((e, i) => (i % 3 === 0 && i !== 0 ? `${e}.` : e))
                                .reverse()
                                .join('')}`}
                            ₫
                        </span>
                    </div>
                    <div className={cx('tax')}>{numberCartDetailChosen} món hàng, bao gồm thuế và phí</div>
                    <button>Tiếp theo</button>
                </div> */}
                <div className={cx('content')}>
                    <div className={cx('cart')}>
                        {cartDetail.map((e, i) => {
                            return (
                                <CartDetail
                                    folder_image={e?.home[0]?.folder_image}
                                    avatar={e?.home[0]?.avatar}
                                    key={i}
                                    data={e}
                                    setIsDisplayFromDelete={setIsDisplayFromDelete}
                                    setIdToDelete={setIdToDelete}
                                    setTotalPrice={setTotalPrice}
                                    totalPrice={totalPrice}
                                    setNumberCartDetailChosen={setNumberCartDetailChosen}
                                    numberCartDetailChosen={numberCartDetailChosen}
                                ></CartDetail>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={cx('form_delete', isDisplayFromDelete ? 'active' : null)}>
                <p>Quý khách có chắc chắn là muốn loại bỏ cái này khỏi xe đẩy hàng không?</p>
                <div className={cx('contain__button')}>
                    <button className={cx('button', 'refuse__button')} onClick={handleRefuseDelete}>
                        Không, quay lại
                    </button>
                    <button className={cx('button', 'confirm__button')} onClick={handleConfirmDelete}>
                        Có, loại bỏ nó
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
