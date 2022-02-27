import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { AllRoutes } from '../../routes';
import "./Header.scss"

const Header = () => {
    const { isAuth, user } = useAppSelector(state => state.user)

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__row">
                        <NavLink to={AllRoutes.SHOP}>
                            <div className="header__logo">SomeShop</div>
                        </NavLink>

                        <ul className="header__actions">
                            {isAuth
                                ? <>
                                    <li className="header__actions__item">
                                        <NavLink to={AllRoutes.CART}>Корзина</NavLink>
                                    </li>
                                    <li className="header__actions__item">
                                        <NavLink to={AllRoutes.ADMIN}>Админ панель</NavLink>
                                    </li>
                                    <li className="header__actions__item">
                                        <button className="btn_outlined">Выйти</button>
                                    </li>
                                </>
                                : <li className="header__actions__item">
                                    <NavLink to={AllRoutes.REGISTR}>
                                        <button className="btn_outlined">Авторизация</button>
                                    </NavLink>
                                </li>}
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;