import classNames from 'classnames/bind';
import styles from './ModalDate.module.scss';
import { DateRange } from 'react-date-range';
import { useContext, useState } from 'react';
import { SearchContext } from '../../../context/SearchContext';

import { date } from 'yup';

const cx = classNames.bind(styles);
function ModalDate({ children }) {
    const { home, dates, options, totalPrice } = useContext(SearchContext);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const [newDate, setNewDates] = useState([
        {
            startDate: dates[0].startDate,
            endDate: dates[0].endDate,
            key: 'selection',
        },
    ]);
    const { dispatch } = useContext(SearchContext);

    const onChange = (ranges) => {
        if (ranges[0].startDate.toDateString() !== ranges[0].endDate.toDateString()) {
            dates[0].startDate = ranges[0].startDate;
            dates[0].endDate = ranges[0].endDate;
            dispatch({ type: 'NEW_SEARCH', payload: { home, dates, options, totalPrice } });
        }
    };

    const handleOnChange = (ranges) => {
        onChange(ranges);
        setNewDates(ranges);
        console.log(ranges[0].startDate.toDateString());
        console.log(ranges[0].endDate.toDateString());
    };

    return (
        <div className={cx('modal-evaluate')}>
            {children}
            <h2>Địa điểm: sadfkasldfjasldf</h2>
            <h2>
                Ngày nhận phòng: {newDate[0].startDate.getDate()} | Ngày trả phòng: {newDate[0].endDate.getDate()}
            </h2>
            <div>clink hau</div>
            <div style={{ textAlign: 'center' }}>
                {/* <button onClick={() => handleVisibleModal()}/> */}
                <DateRange
                    editableDateInputs={true}
                    onChange={(item) => handleOnChange([item.selection])}
                    // onChange = {handleOnChange}
                    moveRangeOnFirstSelection={false}
                    ranges={newDate}
                    className="date"
                    minDate={new Date()}
                />
            </div>
        </div>
    );
}

export default ModalDate;
