import classNames from 'classnames/bind';
import styles from './DescriptionHouse.module.scss';

const cx = classNames.bind(styles);
function DescriptionHouse(props) {
    return <p>{props.dataFromParent?.detail[0].description}</p>;
}

export default DescriptionHouse;
