import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './SearchHome.module.scss';
import Select from 'react-select';
const cx = classNames.bind(styles);

function SearchHome() {
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
        }),
        control: () => ({
            width: `100%`,
            display: 'flex',
            color: 'var(--primary)',
            backgroundColor: `tranparent`,
            height: `60px`,
            marginRight: `10px`,
            cursor: 'pointer',
            borderRadius: '4px',
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
            const color = 'var(--primary)';

            return { ...provided, opacity, transition, color };
        },
        placeholder: (provided) => ({
            ...provided,
            color: 'var(--primary)',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: 'var(--primary)',
        }),
    };

    return (
        <div className={cx('banner')}>
            <div className={cx('banner-title')}>
                <h1>TÌM TỔ ẤM VỚI AGODA HOMES</h1>
                <p>Rộng rãi hơn, chân thực hơn, nhiều lý do để đi du lịch hơn.</p>
            </div>
            <div className={cx('border')}>
                <div className={cx('bg-form')}>
                    <form action="#" method="post" className={cx('search-form', 'row')}>
                        <div className={cx('form-control', 'col', 'l-3', 'm-12', 'c-12')}>
                            <label htmlFor="search">
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
                                        d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                                    />
                                </svg>
                            </label>
                            <input placeholder="Bạn cần tìm gì?" name="search" />
                        </div>
                        <div className={cx('form-control', 'col', 'l-3', 'm-12', 'c-12')}>
                            <label htmlFor="location">
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
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                    />
                                </svg>
                            </label>
                            <input placeholder="Vị trí" name="location" />
                        </div>
                        <div className={cx('col', 'l-3', 'm-12', 'c-12')}>
                            <Select
                                options={options}
                                styles={customStyles}
                                placeholder={`Tiện nghi`}
                                className={cx('select-form')}
                            />
                        </div>
                        <div className={cx('col', 'l-3', 'm-12', 'c-12')}>
                            <Button className={cx('btn-search')}>Tìm kiếm</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SearchHome;
