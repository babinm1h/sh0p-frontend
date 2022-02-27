import React from 'react';
import { Route, Routes } from 'react-router';
import Shop from '../../pages/Shop/Shop';
import { authRoutes, publicRoutes } from '../../routes';

const AppRouter = () => {

    const isAuth = true

    return (
        <>
            <Routes>
                <Route path="/*" element={<Shop />} />
                {publicRoutes.map(r => <Route path={r.path} element={r.elem} key={r.path} />)}

                {isAuth && authRoutes.map(r => <Route path={r.path} element={r.elem} key={r.path} />)}
            </Routes>
        </>
    );
};

export default AppRouter;