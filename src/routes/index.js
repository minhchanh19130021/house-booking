import config from '~/config';
import Contact from '~/pages/Contact';
import Detail from '~/pages/Detail';
import ForgotPassword from '~/pages/ForgotPassword';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import EmailNofication from '~/pages/Profile/EmailNofication';
import HistoryBooking from '~/pages/Profile/HistoryBooking';
import PaymentDetail from '~/pages/Profile/PaymentDetail';
import PersonalDetail from '~/pages/Profile/PersonalDetail';
import Preference from '~/pages/Profile/Preference';
import Security from '~/pages/Profile/Security';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import SignUpOwner from '~/pages/SignUpOwner';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.detail, component: Detail },
    { path: config.routes.signup, component: SignUp },
    { path: config.routes.signin, component: SignIn },
    { path: config.routes.forgot_password, component: ForgotPassword },
    { path: config.routes.signup_owner, component: SignUpOwner },
    // profile page
    { path: config.routes.profile, component: Profile },
    { path: config.routes.email_nofication, component: EmailNofication },
    { path: config.routes.payment_detail, component: PaymentDetail },
    { path: config.routes.personal_detail, component: PersonalDetail },
    { path: config.routes.preference, component: Preference },
    { path: config.routes.security, component: Security },
    { path: config.routes.history_booking, component: HistoryBooking },

];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
