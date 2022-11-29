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
    const [isMobile, setMobile] = useState(window.innerWidth < 850 ? true : false);
    const { slug, pagination } = useParams();

    // get list house from params on url
    useEffect(() => {
        fetch(`http://localhost:8080/api/v2/houses/city/${slug}/${pagination}`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                if (response.success === true) {
                    setListHouse(response.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

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
                    <Filter setListHouse={setListHouse}></Filter>
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
                                        to="/detail"
                                        img="https://townhub.kwst.net/images/all/28.jpg"
                                        status="close"
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
                    <Pagination></Pagination>
                </div>
            </div>
        </div>
    );
}

export default ListHouse;
