import config from '~/config';
import Contact from '~/pages/Contact';
import Detail from '~/pages/Detail';
import ForgotPassword from '~/pages/ForgotPassword';
import NewPassword from '~/pages/ForgotPassword/NewPassword';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import EmailNofication from '~/pages/Profile/EmailNofication';
import HistoryBooking from '~/pages/Profile/HistoryBooking';
import PaymentDetail from '~/pages/Profile/PaymentDetail';
import PersonalDetail from '~/pages/Profile/PersonalDetail';
import Preference from '~/pages/Profile/Preference';
import Security from '~/pages/Profile/Security';
import HouseList from '~/pages/ProfileHost/HouseList';
import ProfileHost from '~/pages/ProfileHost/ProfileHost';
import RentHistory from '~/pages/ProfileHost/RentHistory';
import Statistical from '~/pages/ProfileHost/Statistical';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import SignUpOwner from '~/pages/SignUpOwner';
import ListHouse from '~/pages/ListHouse';
import HostManage from '~/pages/ProfileHost/HostManage';
import HostNew from '~/pages/ProfileHost/HostNew';
import HostRenting from '~/pages/ProfileHost/HostRenting';
import ConfirmSuccess, { ConfirmFail } from '~/pages/ConfirmSuccess';
import Review from '~/pages/Review';
import Payment from '~/pages/Payment';
import PaymentSuccess from '~/pages/PaymentSuccess';
import PageNotFound from '~/pages/PageNotFound';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.detail, component: Detail },
    { path: config.routes.signup, component: SignUp },
    { path: config.routes.signin, component: SignIn },
    { path: config.routes.forgot_password, component: ForgotPassword },
    { path: config.routes.new_password, component: NewPassword },

    { path: config.routes.signup_owner, component: SignUpOwner },
    { path: config.routes.listHouse, component: ListHouse },
    { path: config.routes.payment, component: Payment },
    { path: config.routes.payment_success, component: PaymentSuccess },
    // profile page
    { path: config.routes.profile, component: Profile },
    { path: config.routes.email_nofication, component: EmailNofication },
    { path: config.routes.payment_detail, component: PaymentDetail },
    { path: config.routes.personal_detail, component: PersonalDetail },
    { path: config.routes.preference, component: Preference },
    { path: config.routes.security, component: Security },
    { path: config.routes.history_booking, component: HistoryBooking },
    { path: config.routes.confirm_success, component: ConfirmSuccess },
    { path: config.routes.confirm_fail, component: ConfirmFail },

    // profile host
    { path: config.routes.profile_host, component: ProfileHost },
    { path: config.routes.statistical, component: Statistical },
    { path: config.routes.house_list, component: HouseList },
    { path: config.routes.rent_history, component: RentHistory },
    { path: config.routes.host_manage, component: HostManage },
    { path: config.routes.host_new, component: HostNew },
    { path: config.routes.host_renting, component: HostRenting },
    // { path: config.routes.review, component: Review },

    // // 404
    // { path: config.routes.not_found, component: PageNotFound },
    { path: config.routes.search, component: Search },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
