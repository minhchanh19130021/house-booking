import classNames from 'classnames/bind';
import styles from './ListHouse.module.scss';
import CardHouse from '~/components/CardHouse';
import { useState, useEffect } from 'react';
import Button from '~/components/Button';
import Filter from './Filter/Filter';
import Pagination from './Pagination';
import { useParams } from 'react-router-dom';
const cx = classNames.bind(styles);

function ListHouse() {
    const [isExpandFilter, setExpandFilter] = useState(false);
    const [listHouse, setListHouse] = useState([]);
    const [isFetch, setFetch] = useState(false);
    const [totalPagination, setTotalPagination] = useState(0);
    const [isMobile, setMobile] = useState(window.innerWidth < 850 ? true : false);
    const [queryString, setQueryString] = useState(window.location.search);
    const { slug } = useParams();
    const params = Object.fromEntries(new URLSearchParams(queryString));
    const body = JSON.stringify(params);
    //detect url change when pagination or submit form to upload data in use effect
    let url = window.location.href;
    let currentPagination = window.location.pathname.split('/').pop();
    // get list house from params on url
    useEffect(() => {
        window.scrollTo(0, 0);
        if (body === '{}') {
            fetch(`http://localhost:8080/api/v2/houses/city/${slug}/${currentPagination}`, {
                method: 'GET',
            })
                .then((response) => response.json())
                .then((response) => {
                    if (response.success === true) {
                        console.log(response);
                        setListHouse(response.data);
                        setTotalPagination(response.pagination);
                        setFetch(true);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            fetch(`http://localhost:8080/api/v2/filter?pagination=${currentPagination}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: body,
            })
                .then((response) => response.json())
                .then((response) => {
                    console.log(response);
                    setListHouse(response.data);
                    setTotalPagination(response.pagination);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [url]);

    // handle responsive
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 850) {
                setMobile(true);
            } else {
                setMobile(false);
                setExpandFilter(false);
            }
        });
    });

    return (
        <div className={cx('grid', 'wide')}>
            <div className={cx('contain__button-expandFilter')}>
                <Button
                    small
                    leftIcon={<i className="fa-solid fa-up-right-and-down-left-from-center"></i>}
                    className={cx('button-expandFilter')}
                    onClick={() => setExpandFilter(!isExpandFilter)}
                >
                    Bộ lọc
                </Button>
            </div>
            <div className={cx('container')}>
                <div
                    className={cx(
                        'contain__filter',
                        !isMobile ? 'displayContain' : isMobile && isExpandFilter ? 'displayContain' : 'hiddenContain',
                    )}
                >
                    <Filter
                        currentPagination={currentPagination}
                        setListHouse={setListHouse}
                        setTotalPagination={setTotalPagination}
                        setQueryString={setQueryString}
                    ></Filter>
                </div>
                <div
                    className={cx(
                        'contain__listHouse',
                        !isMobile ? 'displayContain' : isMobile && isExpandFilter ? 'hiddenContain' : 'displayContain',
                    )}
                >
                    <div className={cx('listHouse', 'row')}>
                        {listHouse.map((e, i) => {
                            return (
                                <div key={i} className={cx('col', 'l-4', 'm-6', 'c-12')}>
                                    <CardHouse
                                        avatar={e.avatar}
                                        idHouse={e._id}
                                        to="/detail"
                                        status={e.status ? 'open' : 'close'}
                                        numberReview={e.number_review}
                                        title={e.name}
                                        location={`${e.address.city} ${e.address.district} ${e.address.number}`}
                                        desc={e.introduce}
                                        rate={e.rate}
                                        facilities={e.outstanding_facilities.map((e, i) => {
                                            return e;
                                        })}
                                        price={e.price}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    {listHouse.length === 0 && isFetch ? <h1>Không có kết quả</h1> : null}
                    {listHouse.length !== 0 && isFetch ? (
                        <Pagination
                            totalPagination={totalPagination}
                            currentPagination={currentPagination}
                            queryString={queryString}
                        ></Pagination>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default ListHouse;
