import { NavLink } from 'react-router-dom';
import Button from '~/components/Button';

function Footer() {
    return (
        <div className="absolute w-full inset-x-0 bottom-0 h-40">
            <div className="w-full block bg-primary-light ">
                <div className="max-w-[1200px] min-w-[400px]  my-0 mx-auto text-[#fff] h-40 ">
                    <div className="flex items-center justify-between flex-wrap py-[50px] px-5 ">
                        <div className="right 2xl:max-w-6/12 md:max-w-full mb-2">
                            <h3 className="font-bold">
                                Đăng ký nhận
                                <span className="text-primary-button"> thông báo</span>
                            </h3>
                            <p>Để được thông báo về các địa điểm mới? Chỉ cần đăng ký</p>
                        </div>
                        <form action="/a" method="post" className="2xl:max-w-6/12">
                            <div className="relative">
                                <input
                                    placeholder="Nhập Email Của Bạn"
                                    className="outline-0  min-w-[400px] w-full h-[50px] pr-[120x] pl-[25px] text-[#333] rounded-full "
                                />

                                <div type="submit">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 block mail absolute top-3 right-6 text-primary-button z-10 cursor-pointer"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                        />
                                    </svg>
                                </div>
                                <p className="text-[#fff] font-medium mt-1 ml-3">Đang gửi....</p>
                            </div>
                        </form>
                    </div>
                    {/* <div className="divide border-t-4 w-screen"></div> */}
                    <div className="flex items-center flex-wrap my-0 px-5 mx-[-4px] justify-between h-40">
                        <div className="left  py-5  2xl:w-4/12 xl:w-4/12 lg:w-6/12 md:w-6/12 sm:w-full px-1">
                            <div className="">
                                <img src="https://townhub.kwst.net/images/logo.png" alt="logo-website" />
                            </div>
                            <p className=" py-5">
                                In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla
                                eu mi magna. Etiam suscipit commodo gravida.
                            </p>
                            <div>
                                <NavLink className="flex items-center rounded-full bg-[#ffffff1c] min-w-[250px] w-full text-xs font-medium mb-3  py-[11px] px-[15px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 mr-[7px] text-primary-button"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                        />
                                    </svg>
                                    <span className="text-[#ffffff82]">Mail:</span>
                                    <span className="ml-1">datphong24h@gmail.com</span>
                                </NavLink>
                                <NavLink className="flex items-center rounded-full bg-[#ffffff1c] min-w-[250px] w-full text-xs font-medium mb-3  py-[11px] px-[15px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 mr-[7px] text-primary-button"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                        />
                                    </svg>
                                    <span className="text-[#ffffff82]">Địa chỉ:</span>
                                    <span className="ml-1">Linh Trung, Tp.Thủ Đức</span>
                                </NavLink>
                                <NavLink className="flex items-center rounded-full bg-[#ffffff1c] min-w-[250px]  w-full text-xs font-medium mb-3  py-[11px] px-[15px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 mr-[7px] text-primary-button"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                        />
                                    </svg>

                                    <span className="text-[#ffffff82]">Điện thoại:</span>
                                    <span className="ml-1">0322 2222 22</span>
                                </NavLink>
                            </div>
                            <div className="flex items-center ">
                                <p className="font-medium mr-2">Tìm chúng tôi trên: </p>
                                <NavLink to="http://">
                                    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 fill-slate-400">
                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84" />
                                    </svg>
                                </NavLink>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="center  2xl:w-4/12 xl:w-4/12 lg:w-6/12 md:w-6/12 sm:w-full px-1">
                            <h3 className="font-bold text-xl mb-6 h-[45px]">Tin tức của chúng tôi</h3>
                            <div className="list h-[250px]">
                                <div className="flex items-center mb-2">
                                    <img
                                        className="w-[97px] h-auto object-cover object-center rounded-md"
                                        src="https://townhub.kwst.net/images/all/4.jpg"
                                        alt=""
                                    />
                                    <div className="px-5">
                                        <p className="pb-2 min-w-[221px]">Vivamus dapibus rutrum 21 Mar 09.05</p>
                                        <div className="flex items-center text-xs">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-4 h-4 mr-2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                                                />
                                            </svg>
                                            <span>21 Mar 09.05</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center mb-2">
                                    <img
                                        className="w-[97px] h-auto object-cover object-center rounded-md"
                                        src="https://townhub.kwst.net/images/all/4.jpg"
                                        alt=""
                                    />
                                    <div className="px-5">
                                        <p className="pb-2 min-w-[221px]">Vivamus dapibus rutrum 21 Mar 09.05</p>
                                        <div className="flex items-center text-xs">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-4 h-4 mr-2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                                                />
                                            </svg>
                                            <span>21 Mar 09.05</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center mb-2">
                                    <img
                                        className="w-[97px] h-auto object-cover object-center rounded-md"
                                        src="https://townhub.kwst.net/images/all/4.jpg"
                                        alt=""
                                    />
                                    <div className="px-5">
                                        <p className="pb-2 min-w-[221px]">Vivamus dapibus rutrum 21 Mar 09.05</p>
                                        <div className="flex items-center text-xs">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-4 h-4 mr-2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                                                />
                                            </svg>
                                            <span>21 Mar 09.05</span>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    className=""
                                    rightIcon={
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
                                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                            />
                                        </svg>
                                    }
                                >
                                    Xem tất cả
                                </Button>
                            </div>
                        </div>
                        <div className="right  2xl:w-4/12 xl:w-4/12 lg:w-6/12 md:w-6/12 sm:w-full px-1">
                            <h3 className="font-bold text-xl mb-6 h-[45px]">Fanpage của chúng tôi</h3>
                            <div className="divide border-r-2 h-[200px] border-[#4661a0]"></div>
                            <Button
                                className="mx-0"
                                rightIcon={
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
                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                        />
                                    </svg>
                                }
                            >
                                Theo dõi chúng tôi
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
