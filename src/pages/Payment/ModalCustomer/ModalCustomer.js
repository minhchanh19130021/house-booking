import classNames from 'classnames/bind';
import styles from './ModalCustomer.module.scss';
import { DateRange } from 'react-date-range';
import { useContext, useState } from 'react';
import { SearchContext } from '../../../context/SearchContext';

import { date } from 'yup';
import { motion } from 'framer-motion';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function ModalDate({ children }) {
    const { home, dates, options } = useContext(SearchContext);
    const [newOptions, setNewOptions] = useState({
        adult: options.adult,
        children: options.children,
        baby: options.baby,
        pet: options.pet,
    });
    const { dispatch } = useContext(SearchContext);
    const handleOption = (name, operation) => {
        // options.adult = operation === 'i' ? newOptions[name] + 1 : newOptions[name] - 1;
        // options.children = operation === 'i' ? newOptions[name] + 1 : newOptions[name] - 1;
        // options.baby = operation === 'i' ? newOptions[name] + 1 : newOptions[name] - 1;
        // options.pet = operation === 'i' ? newOptions[name] + 1 : newOptions[name] - 1;
        switch (name) {
            case 'adult':
                options.adult =  (operation === 'i' ? newOptions.adult + 1 : newOptions.adult - 1);
                break;
            case 'children':
                options.children =  (operation === 'i' ? newOptions.children + 1 : newOptions.children - 1);
                break;
            case 'baby':
                options.baby = (operation === 'i' ? newOptions.baby + 1 : newOptions.baby - 1);
                break;
            case 'pet':
                options.pet =  (operation === 'i' ? newOptions.pet + 1 : newOptions.pet - 1);
                break;
            default:
            console.log("lỗi modalcustomer")
        }
        dispatch({ type: 'NEW_SEARCH', payload: { home, dates, options} });
        setNewOptions((prev) => {
            return {
                ...prev,
                [name]: operation === 'i' ? newOptions[name] + 1 : newOptions[name] - 1,
            };
        });
    };
    const [visibleGuestInfo, setVisibleGuestInfo] = useState(false);

    return (
        <div className={cx('modal-evaluate')}>
            {children}

            <motion.div animate={{}} className={cx('guest-info')}>
                <h3>Chọn số người</h3>
                <div className={cx('guest-info__item')}>
                    <div className={cx('guest-info__item-title')}>
                        <p>Người lớn</p>
                        <span>Từ 13 tuổi trở lên</span>
                    </div>
                    <div className={cx('guest-info__item-select')}>
                        <div
                            className={cx('select-increment')}
                            style={{ display: newOptions.adult <= 1 ? 'none' : 'block' }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                                onClick={() => handleOption('adult', 'd')}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                            </svg>
                        </div>
                        <p className={cx('current-number')}>{`${newOptions.adult}`}</p>
                        <div className={cx('select-decrement')}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                                onClick={() => handleOption('adult', 'i')}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={cx('guest-info__item')}>
                    <div className={cx('guest-info__item-title')}>
                        <p>Trẻ em</p>
                        <span>Độ tuổi 2 - 12</span>
                    </div>
                    <div className={cx('guest-info__item-select')}>
                        <div
                            className={cx('select-increment')}
                            style={{ display: newOptions.children <= 0 ? 'none' : 'block' }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                                disabled={newOptions.children <= 0}
                                onClick={() => handleOption('children', 'd')}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                            </svg>
                        </div>
                        <p className={cx('current-number')}>{`${newOptions.children}`}</p>
                        <div className={cx('select-decrement')}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                                onClick={() => handleOption('children', 'i')}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={cx('guest-info__item')}>
                    <div className={cx('guest-info__item-title')}>
                        <p>Em bé</p>
                        <span>Dưới 2 tuổi</span>
                    </div>
                    <div className={cx('guest-info__item-select')}>
                        <div
                            className={cx('select-increment')}
                            style={{ display: newOptions.baby <= 0 ? 'none' : 'block' }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                                disabled={newOptions.baby <= 0}
                                onClick={() => handleOption('baby', 'd')}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                            </svg>
                        </div>
                        <p className={cx('current-number')}>{`${newOptions.baby}`}</p>
                        <div className={cx('select-decrement')}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                                onClick={() => handleOption('baby', 'i')}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={cx('guest-info__item')}>
                    <div className={cx('guest-info__item-title')}>
                        <p>Thú cưng</p>
                        <span></span>
                    </div>
                    <div className={cx('guest-info__item-select')}>
                        <div
                            className={cx('select-increment')}
                            style={{ display: newOptions.pet <= 0 ? 'none' : 'block' }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                                disabled={newOptions.adult <= 0}
                                onClick={() => handleOption('pet', 'd')}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                            </svg>
                        </div>
                        <p className={cx('current-number')}>{`${newOptions.pet}`}</p>
                        <div className={cx('select-decrement')}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                                onClick={() => handleOption('pet', 'i')}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default ModalDate;
