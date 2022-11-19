import classNames from 'classnames/bind';
import styles from './Title.module.scss';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);
function Title({ title, to }) {
    return (
        <div className={cx('c1yo0219 dir dir-ltr')}>
            <div>
                <div className={cx('_le6wlg')}>
                    <div className={cx('plmw1e5 mq5rv0q dir dir-ltr')}>
                        <div data-plugin-in-point-id="DESKTOP_TITLE" data-section-id="DESKTOP_TITLE">
                            <section>
                                <div className={cx('_1nobabx')}>
                                    <div className={cx('_1b5xz5')}>
                                        <NavLink to={to} className={cx('_1qi0sj8')}>
                                        <span className={cx('_e296pg')}>
                                                <svg
                                                    className={cx('svgpg')}
                                                    viewBox="0 0 32 32"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    aria-label="Quay lại"
                                                    role="img"
                                                    focusable="false"
                                                >
                                                    <g fill="none">
                                                        <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                        </NavLink>
                                    </div>
                                    <div className={cx('_1ut2f7b')}>
                                        <h1 className={cx('_14i3z6h')} elementtiming="LCP-target">
                                            {title}
                                        </h1>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Title;
