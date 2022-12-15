import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
    const { location } = useParams();
    console.log(location);
    useEffect(() => {
        fetch(`http://localhost:8080/api/v2/search-by-location`, {
            method: 'POST',
            body: JSON.stringify({
                txtSearch: location.split('=')[1],
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
            })
            .catch((err) => console.log(err));
    }, [location]);
    return <div className={cx('wrapper')}>tìm kiếm</div>;
}

export default Search;
