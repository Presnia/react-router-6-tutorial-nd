import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import {
    Home,
    About,
    Products,
    Error,
    SingleProduct,
    Login,
    Dashboard,
    SharedLayout,
    SharedProductsLayout,
    ProtectedRoute,
} from './pages/';
import StyledNavbar from './components/StyledNavbar';

const App = () => {
    const [user, setUser] = useState(null);
    return (
        <BrowserRouter>
            <StyledNavbar />
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />

                    <Route path="products" element={<SharedProductsLayout />}>
                        <Route index element={<Products />} />
                        <Route path=":productId" element={<SingleProduct />} />
                    </Route>

                    <Route path="login" element={<Login setUser={setUser} />} />
                    <Route
                        path="dashboard"
                        element={
                            <ProtectedRoute user={user}>
                                <Dashboard user={user} />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
            <footer>our footer</footer>
        </BrowserRouter>
    );
};

export default App;
