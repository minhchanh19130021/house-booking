import classNames from 'classnames/bind';
import styles from '.Tab.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Tab() {
    const [visible, setVisible] = useState(1);
    const toggleTab = (index) => {
        setVisible(index);
    };
    return (
        <div className={cx('convenient')}>
            <div className={cx('tabs')}>
                <div className={cx({ 'tab-item': true, active: visible === 1 })} onClick={() => toggleTab(1)}>
                    Điều Hòa
                </div>
                <div className={cx({ 'tab-item': true, active: visible === 2 })} onClick={() => toggleTab(2)}>
                    Lò Vi Sóng
                </div>
                <div className={cx({ 'tab-item': true, active: visible === 3 })} onClick={() => toggleTab(3)}>
                    Hồ Bơi
                </div>
            </div>
            <div className={cx('tab-content')}>
                <div className={cx({ row: true, 'tab-pane': true, active: visible === 1 })}>
                    <div className={cx('col', 'l-3', 'm-4', 'c-12')}></div>
                </div>
            </div>
        </div>
    );
}

export default Tab;
