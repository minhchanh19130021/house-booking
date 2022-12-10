import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './SelectPaymentOptions.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);



function SelectPaymentOptions({card, paypal, googlepay}) {
   
    const [isActive1, setIsActive1] = useState(true);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    
   
    

    const hau = e => {
        if(e.target.id === "dropdown-selector-payment_option_selector-option-CREDIT_CARD"){
            setIsActive1(true)
            setIsActive2(false)
            setIsActive3(false);
        }
        else if (e.target.id === "dropdown-selector-payment_option_selector-option-BRAINTREE_PAYPAL"){
            setIsActive1(false)
            setIsActive2(true)
            setIsActive3(false);
        }
        else{
            setIsActive1(false)
            setIsActive2(false)
            setIsActive3(true);
        }
        
    };

    return (
            <ul
                id="dropdown-selector-payment_option_selector-options"
                aria-activedescendant="dropdown-selector-payment_option_selector-option-CREDIT_CARD"
                role="listbox"
                tabIndex="0"
                className={cx('_i3uuixy')}
                style={{opacity: 1, top: 4, transition: 'opacity 200ms ease-out 2s, top 200ms ease-out 0s'}}
                
            >
                <ul className={cx('_1gyjybc')} role="group" aria-label="Thêm hình thức thanh toán">
                    <li
                        role="option"
                        aria-selected="true"
                        aria-disabled="false"
                        id="dropdown-selector-payment_option_selector-option-CREDIT_CARD"
                        tabIndex="-1"
                        className={cx(isActive1 ? '_16kbejea' : '_1wcpnjd')}
                        onMouseEnter={hau}
                        method="CREDIT_CARD"
                        onClick={card}

                    >
                        <div className={cx('_hgs47m')}>
                            <div className={cx('_ni9axhe')}>
                                <div>
                                    <div className={cx('_18z8fput')}>
                                        <svg
                                            viewBox="0 0 32 32"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-label="Thẻ tín dụng"
                                            role="img"
                                            focusable="false"
                                            style={{display: 'block', height: 33, width: 33, fill: 'rgb(176, 176, 176)'}}
                                        >   
                                            <path d="M29 5a2 2 0 0 1 1.995 1.85L31 7v18a2 2 0 0 1-1.85 1.995L29 27H3a2 2 0 0 1-1.995-1.85L1 25V7a2 2 0 0 1 1.85-1.995L3 5zm0 6H3v14h26zm-3 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7-14H3v2h26z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('_10ejfg4u')}>
                                <div>
                                    <span dir="ltr">Thẻ tín dụng hoặc thẻ ghi nợ</span>
                                </div>
                            </div>
                            <div className={cx('_ni9axhe')}>
                                <span className={cx('_1s9o8so5')}>
                                    <div className={cx('_nncr1bm')}>
                                        <div className={cx('_ni9axhe')}>
                                            <svg
                                                viewBox="0 0 52 52"
                                                fill="currentColor"
                                                fillOpacity="0"
                                                stroke="#484848"
                                                strokeWidth="3"
                                                focusable="false"
                                                aria-label="Đã chọn"
                                                role="img"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                style={{height: 48, width: 48, display: 'block', overflow: 'visible'}}
                                            >
                                                <path d="m19.1 25.2 4.7 6.2 12.1-11.2"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </li>
                    <li
                        role="option"
                        aria-selected="false"
                        aria-disabled="false"
                        id="dropdown-selector-payment_option_selector-option-BRAINTREE_PAYPAL"
                        tabIndex="-1"
                        className={cx(isActive2 ? '_16kbejea' : '_1wcpnjd')}
                        onMouseEnter={hau}
                        method="PAYPAL"
                        onClick={paypal}

                    >
                        <div className={cx('_hgs47m')}>
                            <div className={cx('_ni9axhe')}>
                                <div>
                                    <div className={cx('_18z8fput')}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 44 32"
                                            aria-label="PayPal"
                                            role="img"
                                            focusable="false"
                                            style={{display: 'block', height: 33, width: 33}}
                                        >
                                            <g fill="none" fillRule="evenodd">
                                                <path
                                                    fill="#0079C1"
                                                    fillRule="nonzero"
                                                    d="M35.994 12a.2.2 0 0 1 .197-.175h1.12a.2.2 0 0 1 .197.238l-.985 6.3a.344.344 0 0 1-.332.287h-.997a.2.2 0 0 1-.197-.237L35.994 12zm-1.366 2.1a.2.2 0 0 1 .197.238l-.628 4.025a.344.344 0 0 1-.332.287h-1.047a.2.2 0 0 1-.196-.237l.049-.326s-.566.675-1.6.675c-.603 0-1.108-.175-1.465-.6-.381-.462-.541-1.112-.43-1.812.209-1.388 1.304-2.363 2.584-2.363.554 0 1.12.126 1.366.488l.086.125.05-.325a.2.2 0 0 1 .197-.175H34.627zm-1.625 2.287c.05-.325-.025-.625-.197-.837-.172-.213-.443-.325-.775-.325-.665 0-1.194.463-1.293 1.138-.049.325.013.625.185.825.172.212.443.312.776.312.664 0 1.193-.45 1.304-1.125v.012zm-5.612-4.575c.812 0 1.415.213 1.76.626.308.374.418.912.308 1.587-.247 1.55-1.157 2.338-2.757 2.338h-.764a.344.344 0 0 0-.332.287l-.283 1.788a.23.23 0 0 1-.234.2h-1.243a.2.2 0 0 1-.197-.238l.973-6.3a.344.344 0 0 1 .332-.287h2.437zm.27 2.3c.05-.312.013-.537-.123-.687-.209-.25-.627-.25-1.058-.25h-.172a.2.2 0 0 0-.197.175L25.852 15h.37c.64 0 1.304 0 1.44-.887z"
                                                ></path>
                                                <path
                                                    fill="#00457C"
                                                    fillRule="nonzero"
                                                    d="M23.538 14.1c.16 0 .259.188.16.325L19.822 20.1a.356.356 0 0 1-.27.15h-1.17c-.16 0-.258-.188-.16-.325l1.207-1.725-1.28-3.825a.204.204 0 0 1 .197-.275h1.144c.148 0 .283.1.32.238l.677 2.312 1.613-2.4c.061-.1.172-.15.282-.15h1.17-.012zm-6.153 0a.2.2 0 0 1 .196.238l-.627 4.025a.344.344 0 0 1-.332.287h-1.047a.2.2 0 0 1-.196-.237l.049-.326s-.567.675-1.6.675c-.603 0-1.108-.175-1.465-.6-.381-.462-.541-1.112-.43-1.812.209-1.388 1.304-2.363 2.584-2.363.554 0 1.12.126 1.366.488l.086.125.05-.325a.2.2 0 0 1 .196-.175h1.17zm-1.625 2.287c.05-.325-.025-.625-.197-.837-.172-.213-.443-.325-.775-.325-.665 0-1.194.463-1.293 1.138-.049.325.013.625.185.825.172.212.443.312.775.312.665 0 1.194-.45 1.305-1.125v.012zm-5.612-4.575c.812 0 1.415.213 1.76.626.307.374.418.912.307 1.587-.246 1.55-1.156 2.338-2.757 2.338h-.763a.344.344 0 0 0-.332.287l-.258 1.7a.344.344 0 0 1-.333.287H6.615a.2.2 0 0 1-.197-.237l.973-6.3a.344.344 0 0 1 .332-.287h2.425zm.283 2.3c.049-.312.012-.537-.123-.687-.21-.25-.628-.25-1.059-.25h-.172a.2.2 0 0 0-.197.175L8.622 15h.369c.64 0 1.304 0 1.44-.887z"
                                                ></path>
                                                <path
                                                    fill="#B0B0B0"
                                                    d="M2.036 1C1.468 1 1 1.466 1 2.05v27.9c0 .584.468 1.05 1.036 1.05h39.928c.568 0 1.036-.466 1.036-1.05V2.05C43 1.466 42.532 1 41.964 1H2.036zM0 2.05C0 .922.907 0 2.036 0h39.928C43.093 0 44 .922 44 2.05v27.9c0 1.128-.907 2.05-2.036 2.05H2.036A2.043 2.043 0 0 1 0 29.95V2.05z"
                                                ></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('_10ejfg4u')}>
                                <div>PayPal</div>
                            </div>
                            <div className={cx('_ni9axhe')}>
                                <span className={cx('_6h56b0p')}>
                                    <div className={cx('_nncr1bm')}>
                                        <div className={cx('_ni9axhe')}>
                                            <svg
                                                viewBox="0 0 52 52"
                                                fill="currentColor"
                                                fillOpacity="0"
                                                stroke="#484848"
                                                strokeWidth="3"
                                                focusable="false"
                                                aria-label="Đã chọn"
                                                role="img"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                style={{height: 48, width: 48, display: 'block', overflow: 'visible'}}
                                            >
                                                <path d="m19.1 25.2 4.7 6.2 12.1-11.2"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </li>
                    <li
                        role="option"
                        aria-selected="false"
                        aria-disabled="false"
                        id="dropdown-selector-payment_option_selector-option-ANDROID_PAY"
                        tabIndex="-1"
                        className={cx(isActive3 ? '_16kbejea' : '_1wcpnjd')}
                        onMouseEnter={hau}
                        method="GOOGLE_PAY"
                        onClick={googlepay}
                    >
                        <div className={cx('_hgs47m')}>
                            <div className={cx('_ni9axhe')}>
                                <div>
                                    <div className={cx('_18z8fput')}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 44 32"
                                            aria-label="Google Pay"
                                            role="img"
                                            focusable="false"
                                            style={{display: 'block', height: 33, width: 33}}
                                        >
                                            <g fill="none" fillRule="evenodd">
                                                <path
                                                    fill="#3C4043"
                                                    fillRule="nonzero"
                                                    d="M21.204 15.576v4.548h-1.421V8.896h3.77a3.352 3.352 0 0 1 2.435.976 3.275 3.275 0 0 1 .16 4.584l-.16.162c-.662.635-1.474.958-2.436.958h-2.348zm0-5.301v3.922h2.383a1.845 1.845 0 0 0 1.404-.582 1.996 1.996 0 0 0-.044-2.785 1.924 1.924 0 0 0-1.36-.555h-2.383zm9.083 1.916c1.05 0 1.88.286 2.49.85.609.565.909 1.353.909 2.347v4.736h-1.36V19.06h-.062c-.59.877-1.368 1.316-2.348 1.316-.83 0-1.535-.25-2.092-.752a2.39 2.39 0 0 1-.838-1.88c0-.797.3-1.424.891-1.899.592-.474 1.386-.707 2.375-.707.847 0 1.536.161 2.083.465v-.33c0-.493-.212-.959-.582-1.281a2.049 2.049 0 0 0-1.369-.529c-.794 0-1.42.34-1.88 1.021l-1.253-.797c.67-.994 1.686-1.495 3.036-1.495zm-1.836 5.578c0 .377.177.726.468.94.318.251.706.386 1.103.377.6 0 1.174-.242 1.598-.672.468-.448.706-.976.706-1.585-.441-.358-1.059-.537-1.853-.528-.574 0-1.06.143-1.448.42-.38.278-.574.628-.574 1.048z"
                                                ></path>
                                                <path
                                                    fill="#3C4043"
                                                    d="M41.489 12.441L36.74 23.5 35.275 23.5 37.04 19.632 33.924 12.441 35.469 12.441 37.72 17.957 37.746 17.957 39.944 12.441z"
                                                ></path>
                                                <path
                                                    fill="#4285F4"
                                                    d="M15.458 14.59c0-.438-.036-.877-.106-1.307H9.358v2.48h3.434a2.988 2.988 0 0 1-1.271 1.962v1.611h2.047c1.201-1.119 1.89-2.775 1.89-4.745z"
                                                ></path>
                                                <path
                                                    fill="#34A853"
                                                    d="M9.358 20.895c1.712 0 3.16-.574 4.21-1.558l-2.048-1.612c-.573.394-1.306.618-2.162.618-1.66 0-3.063-1.138-3.567-2.66h-2.11v1.666a6.34 6.34 0 0 0 5.677 3.546z"
                                                ></path>
                                                <path
                                                    fill="#FBBC04"
                                                    d="M5.792 15.683a3.943 3.943 0 0 1 0-2.471v-1.657h-2.11a6.474 6.474 0 0 0 0 5.785l2.11-1.657z"
                                                ></path>
                                                <path
                                                    fill="#EA4335"
                                                    d="M9.358 10.552a3.394 3.394 0 0 1 2.436.967l1.818-1.844A6.087 6.087 0 0 0 9.358 8c-2.401 0-4.6 1.38-5.676 3.555l2.11 1.666c.503-1.531 1.906-2.669 3.566-2.669z"
                                                ></path>
                                                <path
                                                    fill="#B0B0B0"
                                                    d="M2.036 1C1.468 1 1 1.466 1 2.05v27.9c0 .584.468 1.05 1.036 1.05h39.928c.568 0 1.036-.466 1.036-1.05V2.05C43 1.466 42.532 1 41.964 1H2.036zM0 2.05C0 .922.907 0 2.036 0h39.928C43.093 0 44 .922 44 2.05v27.9c0 1.128-.907 2.05-2.036 2.05H2.036A2.043 2.043 0 0 1 0 29.95V2.05z"
                                                ></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('_10ejfg4u')}>
                                <div>Google Pay</div>
                            </div>
                            <div className={cx('_ni9axhe')}>
                                <span className={cx('_6h56b0p')}>
                                    <div className={cx('_nncr1bm')}>
                                        <div className={cx('_ni9axhe')}>
                                            <svg
                                                viewBox="0 0 52 52"
                                                fill="currentColor"
                                                fillOpacity="0"
                                                stroke="#484848"
                                                strokeWidth="3"
                                                focusable="false"
                                                aria-label="Đã chọn"
                                                role="img"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                style={{height: 48, width: 48, display: 'block', overflow: 'visible'}}
                                            >
                                                <path d="m19.1 25.2 4.7 6.2 12.1-11.2"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </ul>

    );
}

export default SelectPaymentOptions;
