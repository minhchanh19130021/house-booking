import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import styles from './SignUpOwner.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { sub } from 'date-fns/fp';

const cx = classNames.bind(styles);
function SignUpOwner() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.authentication.login.currentUser);
    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/isLogin`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                token: `Bearer ${user?.accessToken}`,
            },
            body: JSON.stringify({ uid: user?._id ? user?._id : null }),
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.success === true) {
                    navigate('/');
                } else if (response === 'Bạn chưa có mã token') {
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [villages, setVillages] = useState();
    const [provincesu, setProvincesu] = useState([]);
    const [districtsu, setDistrictsu] = useState([]);
    const [villagesu, setVillagesu] = useState([]);
    const dispatch = useDispatch();

    const [data, setData] = useState({
        name: '',
        segmentation: '',
        introduce: '',
        description: '',
        // location
        city: '',
        district: '',
        village: '',
        specifically: '',
        facilities: [],
        //specification detail
        minDay: '',
        maxDay: '',
        adult: '',
        baby: '',
        pets: '',
        discount: '',
        living_rooms: '',
        bedrooms: '',
        bathrooms: '',
        price: '',
        checkin: '',
        checkout: '',
        //img
        images: [],
        //host
        firstname: '',
        lastname: '',
        username: '',
        birthday: '',
        gender: '',
        email: '',
        phone: '',
        payment_method: '',
    });
    const [currentStep, setCurrentStep] = useState(0);
    const markRequest = (formData) => {
        // console.log('Form Submited', formData);
    };
    const [statusRegister, setStatusRegister] = useState();
    const handleNextStep = (newData, final = false) => {
        setData((prev) => ({ ...prev, ...newData }));
        if (final) {
            markRequest(newData);

            (async () => {
                const response = await fetch('http://localhost:8080/api/v2/create-home', {
                    method: 'POST',
                    body: JSON.stringify({
                        firstname: newData.firstname,
                        lastname: newData.lastname,
                        username: newData.username,
                        birthday: newData.birthday,
                        gender: newData.gender,
                        email: newData.email,
                        phone: newData.phone,
                        address_u: {
                            city: newData.city,
                            district: newData.district,
                            village: newData.village,
                            specifically: newData.specifically,
                        },

                        name: newData.name,
                        price: newData.price,
                        address: {
                            city: newData.city,
                            district: newData.district,
                            village: newData.village,
                            specifically: newData.specifically,
                        },
                        introduce: newData.introduce,
                        segmentation: newData.segmentation,
                        discount: newData.discount,
                        outstanding_facilities: newData.outstanding_facilities,
                        slug: newData.name,

                        // detai;
                        description: newData.description,
                        minimum_night: Number(newData.minDay),
                        maximum_night: Number(newData.maxDay),
                        number_living_room: Number(newData.living_rooms),
                        number_bedroom: Number(newData.bedrooms),
                        number_bed: Number(newData.bedrooms),
                        number_bathroom: Number(newData.bathrooms),
                        check_in: newData.checkin,
                        check_out: newData.checkout,
                        facilities: newData.facilities,
                        adult: newData.adult,
                        baby: newData.baby,
                        pets: newData.pets,
                        regulationsAvailable: [
                            '6372541e03fbfda255a6af70',
                            '6372544503fbfda255a6af79',
                            '637f064a917c7fc7e34d938d',
                            '637f04b6917c7fc7e34d938c',
                        ],
                        images: newData.images,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {
                        setStatusRegister(data);
                        if (data.status === true) {
                            setTimeout(() => {
                                navigate('/');
                            }, 2000);
                        }

                        return data;
                    })
                    .catch((err) => console.log(err));
            })();
            return;
        }
        setCurrentStep((prev) => prev + 1);
    };

    const handlePrevStep = (newData) => {
        setData((prev) => ({ ...prev, ...newData }));
        setCurrentStep((prev) => prev - 1);
    };
    const stepOneValidationSchema = Yup.object({
        name: Yup.string().required('Vui lòng nhập trường này').min(8, 'Tên nhà phải có ít nhất 8 ký tự'),
        segmentation: Yup.string().required(),
        introduce: Yup.string().required('Vui lòng nhập trường này').min(30, 'Tên nhà phải có ít nhất 30 ký tự'),
        description: Yup.string().required('Vui lòng nhập trường này').min(50, 'Tên nhà phải có ít nhất 50 ký tự'),
    });
    const stepTwoValidationSchema = Yup.object({
        city: Yup.string().required(),
        district: Yup.string().required(),
        village: Yup.string().required(),
        specifically: Yup.string().required(),
    });
    const stepFourValidationSchema = Yup.object({
        minDay: Yup.string().required(),
        maxDay: Yup.string().required(),
        adult: Yup.string().required(),
        baby: Yup.string().required(),
        pets: Yup.string().required(),
        discount: Yup.string().required(),
        living_rooms: Yup.string().required(),
        bedrooms: Yup.string().required(),
        bathrooms: Yup.string().required(),
        price: Yup.string().required(),
        checkin: Yup.string().required(),
        checkout: Yup.string().required(),
    });
    const stepFiveValidationSchema = Yup.object({
        city: Yup.string().required(),
        district: Yup.string().required(),
        village: Yup.string().required(),
        specifically: Yup.string().required(),
    });
    const stepSixValidationSchema = Yup.object({
        firstname: Yup.string().required('Vui lòng nhập trường này'),
        lastname: Yup.string().required('Vui lòng nhập trường này'),
        username: Yup.string()
            .required('Vui lòng nhập trường này')
            .min(8, 'Tên đăng nhập ít nhất 8 ký tự')
            .max(20, 'Tên đăng nhập tối đa 20 ký tự'),
        birthday: Yup.date()
            .required('Vui lòng nhập trường này')
            .max(sub({ years: 18 }, new Date()), 'Chủ nhà phải trên 18 tuổi'),
        gender: Yup.string().required('Vui lòng nhập trường này'),
        email: Yup.string()
            .required('Vui lòng nhập trường này')
            .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email không hợp lệ'),
        phone: Yup.string()
            .required('Vui lòng nhập trường này')
            .matches(
                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                'Số điện thoại không hợp lệ',
            ),
    });
    useEffect(() => {
        axios
            .get(`https://provinces.open-api.vn/api/?depth=1`)
            .then((res) => {
                setProvinces(res.data);
                return res.data;
            })
            .catch((error) => {
                console.log(error);
                return;
            });
    }, []);
    const [allFacilities, setAllFacilities] = useState();
    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/v2/facilities`)
            .then((res) => {
                setAllFacilities(res.data.data);
                return res.data.data;
            })
            .catch((error) => {
                console.log(error);
                return;
            });
    }, []);
    const [imageAsFile01, setImageAsFile01] = useState('');
    const [imageAsFile02, setImageAsFile02] = useState('');
    const [imageAsFile03, setImageAsFile03] = useState('');
    const [imageAsFile04, setImageAsFile04] = useState('');
    const [imageAsFile05, setImageAsFile05] = useState('');

    const [imageAsUrl, setImageAsUrl] = useState('');
    const [imageChanged01, setImageChanged01] = useState(false);
    const [imageChanged02, setImageChanged02] = useState(false);
    const [imageChanged03, setImageChanged03] = useState(false);
    const [imageChanged04, setImageChanged04] = useState(false);
    const [imageChanged05, setImageChanged05] = useState(false);

    const [img01, setImg01] = useState();
    const [img02, setImg02] = useState();
    const [img03, setImg03] = useState();
    const [img04, setImg04] = useState();
    const [img05, setImg05] = useState();

    useEffect(() => {
        return () => {
            img01 && URL.revokeObjectURL(img01.preview);
        };
    }, [img01]);
    useEffect(() => {
        return () => {
            img02 && URL.revokeObjectURL(img02.preview);
        };
    }, [img02]);
    useEffect(() => {
        return () => {
            img03 && URL.revokeObjectURL(img03.preview);
        };
    }, [img03]);
    useEffect(() => {
        return () => {
            img04 && URL.revokeObjectURL(img04.preview);
        };
    }, [img04]);
    useEffect(() => {
        return () => {
            img05 && URL.revokeObjectURL(img05.preview);
        };
    }, [img05]);

    const handleImage01 = (e) => {
        const image = e.target.files[0];
        if (e.target.files && e.target.files[0]) {
            setImageAsUrl(URL.createObjectURL(e.target.files[0]));
            setImageAsFile01(image);
            setImageChanged01(true);
        }
        image.preview = URL.createObjectURL(image);
        setImg01(image);

        data.images.push(image.name);
    };
    const handleImage02 = (e) => {
        const image = e.target.files[0];
        if (e.target.files && e.target.files[0]) {
            setImageAsUrl(URL.createObjectURL(e.target.files[0]));
            setImageAsFile02(image);
            setImageChanged02(true);
        }
        image.preview = URL.createObjectURL(image);
        setImg02(image);
        data.images.push(image.name);
    };
    const handleImage03 = (e) => {
        const image = e.target.files[0];
        if (e.target.files && e.target.files[0]) {
            setImageAsUrl(URL.createObjectURL(e.target.files[0]));
            setImageAsFile03(image);
            setImageChanged03(true);
        }
        image.preview = URL.createObjectURL(image);
        setImg03(image);
        data.images.push(image.name);
    };
    const handleImage04 = (e) => {
        const image = e.target.files[0];
        if (e.target.files && e.target.files[0]) {
            setImageAsUrl(URL.createObjectURL(e.target.files[0]));
            setImageAsFile04(image);
            setImageChanged04(true);
        }
        image.preview = URL.createObjectURL(image);
        setImg04(image);
        data.images.push(image.name);
    };
    const handleImage05 = (e) => {
        const image = e.target.files[0];
        if (e.target.files && e.target.files[0]) {
            setImageAsUrl(URL.createObjectURL(e.target.files[0]));
            setImageAsFile05(image);
            setImageChanged05(true);
        }
        image.preview = URL.createObjectURL(image);
        setImg05(image);
        data.images.push(image.name);
    };

    const StepOne = (props) => {
        const handleSubmit = (values) => {
            props.next(values, false);
        };
        return (
            <Formik validationSchema={stepOneValidationSchema} initialValues={props.data} onSubmit={handleSubmit}>
                {() => (
                    <Form>
                        <div className={cx('basic')}>
                            <div className={cx('row')}>
                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <h3 className={cx('title')}>Thông tin cơ bản</h3>
                                </div>
                                <div className="col l-12 m-12 c-12">
                                    {statusRegister?.status === false && (
                                        <p className={cx('warning')}>{statusRegister?.msg}</p>
                                    )}
                                </div>
                                <div className="col l-12 m-12 c-12">
                                    {statusRegister?.status === true && (
                                        <p className={cx('success')}>{statusRegister?.msg}</p>
                                    )}
                                </div>
                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <label htmlFor="name">Tên chỗ cho thuê</label>
                                    <Field name="name" id="name-house" type="text" />
                                    <ErrorMessage name="name">
                                        {(msg) => <div className={cx('alert-message')}>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <label>Phân khúc</label>
                                    <Field name="segmentation" as="select">
                                        <option value="">--Chọn phân khúc--</option>
                                        <option value="bình dân">Bình dân</option>
                                        <option value="phổ thông">Phổ thông</option>
                                        <option value="cao cấp">Cao cấp </option>
                                    </Field>
                                    <ErrorMessage
                                        name="segmentation"
                                        render={(msg) => (
                                            <div className={cx('alert-message')}>{`Vui lòng nhập trường này`}</div>
                                        )}
                                    />
                                </div>
                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <label htmlFor="introduce">Giới thiệu nhà của bạn</label>
                                    <Field as="textarea" name="introduce" id="introduce" type="text"></Field>
                                    <ErrorMessage name="introduce">
                                        {(msg) => <div className={cx('alert-message')}>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <label htmlFor="description">Mô tả nhà của bạn</label>
                                    <Field as="textarea" name="description" id="description" type="text"></Field>
                                    <ErrorMessage name="description">
                                        {(msg) => <div className={cx('alert-message')}>{msg}</div>}
                                    </ErrorMessage>
                                </div>

                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <Button type="submit">Tiếp</Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        );
    };
    const StepTwo = (props) => {
        const handleSubmit = (values) => {
            props.next(values, false);
        };

        return (
            <Formik validationSchema={stepTwoValidationSchema} initialValues={props.data} onSubmit={handleSubmit}>
                {(values) => (
                    <Form>
                        <div className={cx('basic')}>
                            <div className={cx('row')}>
                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <h3 className={cx('title')}>Vị trí</h3>
                                </div>
                                <div className="col l-12 m-12 c-12">
                                    {statusRegister?.status === false && (
                                        <p className={cx('warning')}>{statusRegister?.msg}</p>
                                    )}
                                </div>
                                <div className="col l-12 m-12 c-12">
                                    {statusRegister?.status === true && (
                                        <p className={cx('success')}>{statusRegister?.msg}</p>
                                    )}
                                </div>
                                <div className={cx('form-group', 'col', 'l-4', 'm-12', 'c-12')}>
                                    <label>Tỉnh/Thành Phố</label>
                                    <Field
                                        name="city"
                                        as="select"
                                        onChange={async (e) => {
                                            props.data.city = e.target.value;
                                            const city = props.data.city.split('_')[0];

                                            axios
                                                .get(`https://provinces.open-api.vn/api/p/${city}?depth=2`)
                                                .then((res) => {
                                                    setDistricts(res.data.districts);
                                                })
                                                .catch((error) => {
                                                    console.log(error);
                                                    return;
                                                });
                                        }}
                                    >
                                        <option value="">--Chọn tỉnh--</option>
                                        {provinces?.map((province) => (
                                            <option
                                                key={province.code}
                                                value={province?.code + '_' + province?.name}
                                                id={province.code}
                                            >
                                                {province.name}
                                            </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage
                                        name="city"
                                        render={(msg) => (
                                            <div className={cx('alert-message')}>{`Vui lòng nhập trường này`}</div>
                                        )}
                                    />
                                </div>
                                <div className={cx('form-group', 'col', 'l-4', 'm-12', 'c-12')}>
                                    <label>Huyện</label>
                                    <Field
                                        name="district"
                                        as="select"
                                        onChange={(e) => {
                                            props.data.district = e.target.value;
                                            const district = props.data.district.split('_')[0];
                                            axios
                                                .get(`https://provinces.open-api.vn/api/d/${district}?depth=2`)
                                                .then((res) => {
                                                    setVillages(res.data.wards);
                                                })
                                                .catch((error) => {
                                                    console.log(error);
                                                    return;
                                                });
                                        }}
                                    >
                                        <option value="">--Chọn huyện--</option>

                                        {districts?.map((district) => (
                                            <option key={district.code} value={district?.code + '_' + district?.name}>
                                                {district.name}
                                            </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage
                                        name="district"
                                        render={(msg) => (
                                            <div className={cx('alert-message')}>{`Vui lòng nhập trường này`}</div>
                                        )}
                                    />
                                </div>
                                <div className={cx('form-group', 'col', 'l-4', 'm-12', 'c-12')}>
                                    <label>Xã</label>
                                    <Field name="village" as="select">
                                        <option value="">--Chọn xã--</option>

                                        {villages?.map((village) => (
                                            <option
                                                key={village?.code}
                                                value={village?.code + '_' + village?.name}
                                                id={village?.code}
                                            >
                                                {village?.name}
                                            </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage
                                        name="village"
                                        render={(msg) => (
                                            <div className={cx('alert-message')}>{`Vui lòng nhập trường này`}</div>
                                        )}
                                    />
                                </div>
                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <label htmlFor="specifically">Địa chỉ cụ thể(tên nhà, tầng, căn hộ)</label>
                                    <Field name="specifically" type="text"></Field>
                                    <ErrorMessage
                                        name="specifically"
                                        render={(msg) => (
                                            <div className={cx('alert-message')}>{`Vui lòng nhập trường này`}</div>
                                        )}
                                    />
                                </div>
                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <Button type="button" onClick={() => props.prev(values)}>
                                        Quay lại
                                    </Button>
                                    <Button type="submit">Tiếp</Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        );
    };
    const StepThree = (props) => {
        const handleSubmit = (values) => {
            props.next(values, false);
        };
        return (
            <Formik initialValues={props.data} onSubmit={handleSubmit}>
                {(values) => (
                    <Form>
                        <div className={cx('basic')}>
                            <div className={cx('row')}>
                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <h3 className={cx('title')}>Tiện nghi</h3>
                                </div>
                                <div className="col l-12 m-12 c-12">
                                    {statusRegister?.status === false && (
                                        <p className={cx('warning')}>{statusRegister?.msg}</p>
                                    )}
                                </div>
                                <div className="col l-12 m-12 c-12">
                                    {statusRegister?.status === true && (
                                        <p className={cx('success')}>{statusRegister?.msg}</p>
                                    )}
                                </div>
                                {allFacilities?.map((e) => (
                                    <div className={cx('form-convenient', 'col', 'l-4', 'm-6', 'c-6')} key={e._id}>
                                        <Field name="facilities" id={e._id} type="checkbox" value={e._id} />
                                        <label htmlFor={e._id}>{e.name}</label>
                                    </div>
                                ))}

                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <Button type="button" onClick={() => props.prev(values)}>
                                        Quay lại
                                    </Button>
                                    <Button type="submit">Tiếp</Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        );
    };
    const StepFour = (props) => {
        const handleSubmit = (values) => {
            props.next(values, false);
        };
        return (
            <Formik validationSchema={stepFourValidationSchema} initialValues={props.data} onSubmit={handleSubmit}>
                {(values) => (
                    <Form>
                        <div className={cx('basic')}>
                            <div className={cx('row')}>
                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <h3 className={cx('title')}>Thông tin chi tiết</h3>
                                </div>
                                <div className="col l-12 m-12 c-12">
                                    {statusRegister?.status === false && (
                                        <p className={cx('warning')}>{statusRegister?.msg}</p>
                                    )}
                                </div>
                                <div className="col l-12 m-12 c-12">
                                    {statusRegister?.status === true && (
                                        <p className={cx('success')}>{statusRegister?.msg}</p>
                                    )}
                                </div>
                                <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-12')}>
                                    <label>Số ngày thuê tối thiểu</label>
                                    <Field name="minDay" as="select">
                                        <option value="">--Chọn số ngày--</option>
                                        <option value="2">2 ngày</option>
                                        <option value="3">3 ngày</option>
                                    </Field>
                                    <ErrorMessage
                                        name="minDay"
                                        render={(msg) => (
                                            <div className={cx('alert-message')}>{`Vui lòng nhập trường này`}</div>
                                        )}
                                    />
                                </div>
                                <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-12')}>
                                    <label>Số ngày thuê tối đa</label>
                                    <Field name="maxDay" as="select">
                                        <option value="">--Chọn số ngày--</option>
                                        <option value="1">3 ngày</option>
                                        <option value="2">4 ngày</option>
                                        <option value="3">5 ngày</option>
                                        <option value="4">6 ngày</option>
                                        <option value="5">7 ngày</option>
                                        <option value="5">8 ngày</option>
                                        <option value="5">9 ngày</option>
                                        <option value="5">10 ngày</option>
                                    </Field>
                                    <ErrorMessage
                                        name="maxDay"
                                        render={(msg) => (
                                            <div className={cx('alert-message')}>{`Vui lòng nhập trường này`}</div>
                                        )}
                                    />
                                </div>

                                <div className={cx('form-group', 'col', 'l-4', 'm-4', 'c-12')}>
                                    <label>Sức chứa(người lớn)</label>
                                    <Field name="adult" as="select">
                                        <option value="">--Chọn số lượng--</option>
                                        <option value="1">1 người lớn</option>
                                        <option value="2">2 người lớn</option>
                                        <option value="3">3 người lớn</option>
                                        <option value="4">4 người lớn</option>
                                        <option value="5">5 người lớn</option>\<option value="4">6 người lớn</option>
                                        <option value="5">7 người lớn</option>
                                        <option value="5">8 người lớn</option>
                                        <option value="5">9 người lớn</option>
                                        <option value="5">10 người lớn</option>
                                    </Field>
                                    <ErrorMessage
                                        name="adult"
                                        render={(msg) => (
                                            <div className={cx('alert-message')}>{`Vui lòng nhập trường này`}</div>
                                        )}
                                    />
                                </div>
                                <div className={cx('form-group', 'col', 'l-4', 'm-4', 'c-12')}>
                                    <label>Sức chứa(em bé)</label>
                                    <Field name="baby" as="select">
                                        <option value="">--Chọn số lượng--</option>
                                        <option value="1">1 em bé</option>
                                        <option value="2">2 em bé</option>
                                        <option value="3">3 em bé</option>
                                    </Field>
                                    <ErrorMessage
                                        name="baby"
                                        render={(msg) => (
                                            <div className={cx('alert-message')}>{`Vui lòng nhập trường này`}</div>
                                        )}
                                    />
                                </div>
                                <div className={cx('form-group', 'col', 'l-4', 'm-4', 'c-12')}>
                                    <label>Sức chứa(thú cưng)</label>
                                    <Field name="pets" as="select">
                                        <option value="">--Chọn số lượng--</option>
                                        <option value="0">Không cho phép</option>
                                        <option value="1">1 thú cưng</option>
                                        <option value="2">2 thú cưng</option>
                                    </Field>
                                    <ErrorMessage
                                        name="pets"
                                        render={(msg) => (
                                            <div className={cx('alert-message')}>{`Vui lòng nhập trường này`}</div>
                                        )}
                                    />
                                </div>
                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <label>Giảm giá lần đầu</label>
                                    <Field name="discount" as="select">
                                        <option value="">--Chọn số lượng--</option>
                                        <option value="0.03">giảm 3%</option>
                                        <option value="0.05">giảm 5% </option>
                                        <option value="0.07">giảm 7%</option>
                                        <option value="0.09">giảm 9% </option>
                                        <option value="0.15">giảm 15% </option>
                                        <option value="0">Không có</option>
                                    </Field>
                                    <ErrorMessage
                                        name="discount"
                                        render={(msg) => (
                                            <div className={cx('alert-message')}>{`Vui lòng nhập trường này`}</div>
                                        )}
                                    />
                                </div>
                                <div className={cx('form-group', 'col', 'l-4', 'm-4', 'c-12')}>
                                    <label>Phòng khách</label>
                                    <Field name="living_rooms" as="select">
                                        <option value="">--Chọn số lượng--</option>
                                        <option value="1">1 phòng khách</option>
                                        <option value="2">2 phòng khách</option>
                                        <option value="3">3 phòng khách</option>
                                        <option value="4">4 phòng khách</option>
                                    </Field>
                                    <ErrorMessage
                                        name="living_rooms"
                                        render={(msg) => (
                                            <div className={cx('alert-message')}>{`Vui lòng nhập trường này`}</div>
                                        )}
                                    />
                                </div>
                                <div className={cx('form-group', 'col', 'l-4', 'm-4', 'c-12')}>
                                    <label>Phòng ngủ</label>
                                    <Field name="bedrooms" as="select">
                                        <option value="">--Chọn số lượng--</option>
                                        <option value="1">1 phòng ngủ</option>
                                        <option value="2">2 phòng ngủ</option>
                                        <option value="3">3 phòng ngủ</option>
                                        <option value="4">4 phòng ngủ</option>
                                        <option value="5">5 phòng ngủ</option>
                                        <option value="6">6 phòng ngủ</option>
                                    </Field>
                                    <ErrorMessage
                                        name="bedrooms"
                                        render={(msg) => (
                                            <div className={cx('alert-message')}>{`Vui lòng nhập trường này`}</div>
                                        )}
                                    />
                                </div>

                                <div className={cx('form-group', 'col', 'l-4', 'm-4', 'c-12')}>
                                    <label>Phòng tắm</label>
                                    <Field name="bathrooms" as="select">
                                        <option value="">--Chọn số lượng--</option>
                                        <option value="1">1 phòng tắm</option>
                                        <option value="2">2 phòng tắm</option>
                                        <option value="3">3 phòng tắm</option>
                                        <option value="4">4 phòng tắm</option>
                                        <option value="5">5 phòng tắm</option>
                                        <option value="6">6 phòng tắm</option>
                                    </Field>
                                    <ErrorMessage
                                        name="bathrooms"
                                        render={(msg) => (
                                            <div className={cx('alert-message')}>{`Vui lòng nhập trường này`}</div>
                                        )}
                                    />
                                </div>

                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <label htmlFor="price">Giá mỗi đêm (VNĐ)</label>
                                    <Field name="price" type="number" />
                                    <ErrorMessage
                                        name="price"
                                        render={(msg) => (
                                            <div className={cx('alert-message')}>{`Vui lòng nhập trường này`}</div>
                                        )}
                                    />
                                </div>
                                <div className={cx('form-group', 'col', 'l-6', 'm-12', 'c-12')}>
                                    <label>Thời gian nhận phòng</label>
                                    <Field name="checkin" type="time" />
                                    <ErrorMessage
                                        name="checkin"
                                        render={(msg) => (
                                            <div className={cx('alert-message')}>{`Vui lòng nhập trường này`}</div>
                                        )}
                                    />
                                </div>
                                <div className={cx('form-group', 'col', 'l-6', 'm-12', 'c-12')}>
                                    <label>Thời gian trả phòng</label>
                                    <Field name="checkout" type="time" />
                                    <ErrorMessage
                                        name="checkout"
                                        render={(msg) => (
                                            <div className={cx('alert-message')}>{`Vui lòng nhập trường này`}</div>
                                        )}
                                    />
                                </div>

                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <Button type="button" onClick={() => props.prev(values)}>
                                        Quay lại
                                    </Button>

                                    <Button type="submit">Tiếp</Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        );
    };
    const StepFive = (props) => {
        const handleSubmit = (values) => {
            props.next(values, false);
            const storage = getStorage();
            const storageRef01 = ref(storage, `house/${props.data.name}/${imageAsFile01.name}`);
            const storageRef02 = ref(storage, `house/${props.data.name}/${imageAsFile02.name}`);
            const storageRef03 = ref(storage, `house/${props.data.name}/${imageAsFile03.name}`);
            const storageRef04 = ref(storage, `house/${props.data.name}/${imageAsFile04.name}`);
            const storageRef05 = ref(storage, `house/${props.data.name}/${imageAsFile05.name}`);

            uploadBytesResumable(storageRef01, imageAsFile01);
            uploadBytesResumable(storageRef02, imageAsFile02);
            uploadBytesResumable(storageRef03, imageAsFile03);
            uploadBytesResumable(storageRef04, imageAsFile04);
            uploadBytesResumable(storageRef05, imageAsFile05);
        };
        return (
            <Formik initialValues={props.data} onSubmit={handleSubmit}>
                {(values) => (
                    <Form>
                        <div className={cx('basic')}>
                            <div className={cx('row')}>
                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <h3 className={cx('title')}>Hình ảnh cụ thể</h3>
                                </div>
                                <div className="col l-12 m-12 c-12">
                                    {statusRegister?.status === false && (
                                        <p className={cx('warning')}>{statusRegister?.msg}</p>
                                    )}
                                </div>
                                <div className="col l-12 m-12 c-12">
                                    {statusRegister?.status === true && (
                                        <p className={cx('success')}>{statusRegister?.msg}</p>
                                    )}
                                </div>
                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <label htmlFor="img-1">Ảnh 1</label>
                                    <input name="img-1" id="img-1" type="file" onChange={handleImage01} />
                                    <span className={cx('alert-message')}></span>
                                </div>
                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <label htmlFor="img-2">Ảnh 2</label>
                                    <input name="img-2" id="img-2" type="file" onChange={handleImage02} />
                                    <span className={cx('alert-message')}></span>
                                </div>
                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <label htmlFor="img-3">Ảnh 3</label>
                                    <input name="img-3" id="img-3" type="file" onChange={handleImage03} />
                                    <span className={cx('alert-message')}></span>
                                </div>
                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <label htmlFor="img-4">Ảnh 4</label>
                                    <input name="img-4" id="img-4" type="file" onChange={handleImage04} />
                                    <span className={cx('alert-message')}></span>
                                </div>
                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <label htmlFor="img-5">Ảnh 5</label>
                                    <input name="img-5" id="img-5" type="file" onChange={handleImage05} />
                                    <span className={cx('alert-message')}></span>
                                </div>
                                <div className={cx('stock-img', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <strong>Kho ảnh của bạn</strong>
                                    <div className="row">
                                        <div className="col l-4 m-4 c-4">
                                            {img01 && (
                                                <img className={cx('img-item')} src={img01.preview} alt="img01" />
                                            )}
                                        </div>
                                        <div className="col l-4 m-4 c-4">
                                            {img02 && (
                                                <img className={cx('img-item')} src={img02.preview} alt="img01" />
                                            )}
                                        </div>
                                        <div className="col l-4 m-4 c-4">
                                            {img03 && (
                                                <img className={cx('img-item')} src={img03.preview} alt="img01" />
                                            )}
                                        </div>
                                        <div className="col l-4 m-4 c-4">
                                            {img04 && (
                                                <img className={cx('img-item')} src={img04.preview} alt="img01" />
                                            )}
                                        </div>
                                        <div className="col l-4 m-4 c-4">
                                            {img05 && (
                                                <img className={cx('img-item')} src={img05.preview} alt="img01" />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <Button type="button" onClick={() => props.prev(values)}>
                                        Quay lại
                                    </Button>
                                    <Button type="submit">Tiếp</Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        );
    };
    const StepSix = (props) => {
        const handleSubmit = (values) => {
            props.next(values, true);
        };
        return (
            <Formik validationSchema={stepSixValidationSchema} initialValues={props.data} onSubmit={handleSubmit}>
                {(values, error) => (
                    <Form>
                        <div className={cx('basic')}>
                            <div className={cx('row')}>
                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <h3 className={cx('title')}>Thông tin chủ nhà</h3>
                                </div>
                                <div className="col l-12 m-12 c-12">
                                    {statusRegister?.status === false && (
                                        <p className={cx('warning')}>{statusRegister?.msg}</p>
                                    )}
                                </div>
                                <div className="col l-12 m-12 c-12">
                                    {statusRegister?.status === true && (
                                        <p className={cx('success')}>{statusRegister?.msg}</p>
                                    )}
                                </div>
                                <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-12')}>
                                    <label htmlFor="firstname">Họ</label>
                                    <Field name="firstname" id="firstname" type="text" />
                                    <ErrorMessage name="firstname">
                                        {(msg) => <div className={cx('alert-message')}>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-12')}>
                                    <label htmlFor="lastname">Tên</label>
                                    <Field name="lastname" id="lastname" type="text" />
                                    <ErrorMessage name="lastname">
                                        {(msg) => <div className={cx('alert-message')}>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className={cx('form-group', 'col', 'l-12', 'm-6', 'c-12')}>
                                    <label htmlFor="username">Tên đăng nhập</label>
                                    <Field name="username" id="username" type="text" />
                                    <ErrorMessage name="username">
                                        {(msg) => <div className={cx('alert-message')}>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className={cx('form-group', 'col', 'l-6', 'm-6', 'c-12')}>
                                    <label htmlFor="birthday">Ngày sinh</label>
                                    <Field
                                        name="birthday"
                                        id="birthday"
                                        type="date"
                                        max={new Date().toISOString().split('T')[0]}
                                    />
                                    <ErrorMessage name="birthday">
                                        {(msg) => <div className={cx('alert-message')}>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className={cx('form-group', 'col', 'l-6', 'm-12', 'c-12')}>
                                    <label>Giới tính</label>
                                    <Field name="gender" as="select">
                                        <option value="">--Chọn giới tính--</option>
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ </option>
                                    </Field>
                                    <ErrorMessage
                                        name="gender"
                                        render={(msg) => (
                                            <div className={cx('alert-message')}>{`Vui lòng nhập trường này`}</div>
                                        )}
                                    />
                                </div>
                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <label htmlFor="email">Địa chỉ email</label>
                                    <Field name="email" type="text" />
                                    <ErrorMessage name="email">
                                        {(msg) => <div className={cx('alert-message')}>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <label htmlFor="phone">Số điện thoại</label>
                                    <Field name="phone" type="number" />
                                    <ErrorMessage name="phone">
                                        {(msg) => <div className={cx('alert-message')}>{msg}</div>}
                                    </ErrorMessage>
                                </div>

                                {/* <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <label>Hình thức thanh toán mong muốn</label>
                                    <Field name="payment_method" as="select">
                                        <option value="">--Chọn hình thức--</option>
                                        <option value="Paypal">Paypal</option>
                                    </Field>
                                </div> */}
                                <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                                    <Button type="button" onClick={() => props.prev(values)}>
                                        Quay lại
                                    </Button>
                                    <Button type="submit">Tiếp</Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        );
    };

    const steps = [
        <StepOne next={handleNextStep} data={data} />,
        <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
        <StepThree next={handleNextStep} prev={handlePrevStep} data={data} />,
        <StepFour next={handleNextStep} prev={handlePrevStep} data={data} />,
        <StepFive next={handleNextStep} prev={handlePrevStep} data={data} />,
        <StepSix next={handleNextStep} prev={handlePrevStep} data={data} />,
    ];

    return <div className={cx('app')}>{steps[currentStep]}</div>;
}

export default SignUpOwner;
