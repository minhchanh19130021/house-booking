import config from '~/config';
import Contact from '~/pages/Contact';
import Home from '~/pages/Home';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.contact, component: Contact },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
