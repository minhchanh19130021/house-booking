import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import { Fragment } from 'react';
import ForgotPassword from './pages/ForgotPassword';
import PageNotFound from '~/pages/PageNotFound';
import Review from '~/pages/Review';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="forgot-password/:id/:token" element={<ForgotPassword />} />
                    <Route path="*" element={<PageNotFound />} />;
                    <Route path="/review" element={<Review />} />;
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
