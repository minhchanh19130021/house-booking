import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardHouse from '~/components/CardHouse';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
    const { location } = useParams();
    const [resultSearch, setResultSearch] = useState();
    const keySearch = location.split('=')[1];

    useEffect(() => {
        fetch(`http://localhost:8080/api/v2/search-by-location`, {
            method: 'POST',
            body: JSON.stringify({
                key: location.split('=')[1],
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((response) => {
                setResultSearch(response);
            })
            .catch((err) => console.log(err));
    }, [location]);
    return (
        <div className="grid wide">
            <div className="row">
                <div className="col l-12 m-12 c-12">
                    {resultSearch?.data.length <= 0 && (
                        <p>
                            Không tìm thấy kết quả cho từ khóa: <strong>{keySearch}</strong>
                        </p>
                    )}
                    {resultSearch?.data.length > 0 && (
                        <p>
                            Kết quả tìm kiếm cho: <strong>{keySearch}</strong>
                        </p>
                    )}
                </div>
            </div>
            <div className="row">
                {resultSearch?.data?.map((e, i) => {
                    return (
                        <div key={i} className={cx('col', 'l-3', 'm-4', 'c-12')}>
                            <CardHouse
                                folder_image={e.folder_image}
                                avatar={e.avatar}
                                idHouse={e._id}
                                to={`/detail/${e.slug}`}
                                status={e.status ? 'open' : 'close'}
                                numberReview={e.number_review}
                                title={e.name}
                                location={`${e.address.city} ${e.address.district} ${e.address.village}`}
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
        </div>
    );
}

export default Search;
