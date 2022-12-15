import Button from '~/components/Button';
import { motion } from 'framer-motion';
import classNames from 'classnames/bind';
import styles from './HeaderSearch.module.scss';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
function HeaderSearch() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            txtSearch: '',
        },
        onSubmit: (values) => {
            console.log(values);
            navigate(`/search/location=${values.txtSearch}`);
        },
    });

    return (
        <motion.div animate={{}} className={cx('modal-search')}>
            <div className="grid wide">
                <form className={cx('form', 'row')} onSubmit={formik.handleSubmit}>
                    {/* <div className={cx('form-group', 'col', 'l-4', 'm-6', 'c-12')}>
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
                    </div> */}
                    <div className={cx('form-group', 'col', 'l-4', 'm-6', 'c-12')}>
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
                        <input
                            placeholder="Vị trí"
                            type="text"
                            name="txtSearch"
                            id="txtSearch"
                            value={formik.values.txtSearch}
                            onChange={formik.handleChange}
                        />
                    </div>

                    {/* <div className={cx('col', 'l-2', 'm-6', 'c-12')}> */}
                    <Button
                        type="submit"
                        large
                        className={cx('col', 'l-2', 'm-6', 'c-12', 'btn-search')}
                        // rightIcon={
                        //     <svg
                        //         xmlns="http://www.w3.org/2000/svg"
                        //         fill="none"
                        //         viewBox="0 0 24 24"
                        //         strokeWidth={1.5}
                        //         stroke="currentColor"
                        //         className="w-6 h-6"
                        //     >
                        //         <path
                        //             strokeLinecap="round"
                        //             strokeLinejoin="round"
                        //             d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        //         />
                        //     </svg>
                        // }
                    >
                        Tìm kiếm
                    </Button>
                    {/* </div> */}
                </form>
            </div>
        </motion.div>
    );
}

export default HeaderSearch;
