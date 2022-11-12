import Button from '~/components/Button';
import { motion } from 'framer-motion';
import classNames from 'classnames/bind';
import styles from './HeaderSearch.module.scss';
import Select from 'react-select';

const cx = classNames.bind(styles);
function HeaderSearch() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted pink',
            color: state.isSelected ? '#fff' : 'var(--primary)',
            paddingRight: `0px !important`,
            width: `100%`,
            display: 'flex',
        }),
        control: () => ({
            // none of react-select's styles are passed to <Control />
            width: `256px`,
            display: 'flex',
            color: '#fff',
            backgroundColor: `#526598`,
            height: `50px`,
            marginRight: `10px`,
            cursor: 'pointer',
            borderRadius: '4px',
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
            const color = '#fff';

            return { ...provided, opacity, transition, color };
        },
        
        placeholder: (provided) => ({
            ...provided,
            color: '#fff',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: '#fff',
        }),
    };

    return (
        <motion.div animate={{ y: 80 }} className={cx('modal-search')}>
            <div className={cx('form')}>
                <div className={cx('form-group')}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                    <input placeholder="Bạn cần tìm gì?" type="text" />
                </div>
                <div className={cx('form-group')}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                    <input placeholder="Vị trí" type="text" />
                </div>
                <Select
                    isMulti
                    options={options}
                    styles={customStyles}
                    placeholder={`Tiện nghi`}
                    // className={cx('select-form')}
                />

                <Button
                    large
                    rightIcon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    }
                >
                    Tìm kiếm
                </Button>
            </div>
        </motion.div>
    );
}

export default HeaderSearch;
