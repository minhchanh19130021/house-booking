import config from '~/config';
import Contact from '~/pages/Contact';
import Detail from '~/pages/Detail';
import ForgotPassword from '~/pages/ForgotPassword';
import Home from '~/pages/Home';
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
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
