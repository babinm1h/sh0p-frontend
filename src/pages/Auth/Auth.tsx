import React from 'react';
import { useLocation } from 'react-router';
import LoginForm from '../../components/AuthForms/LoginForm';
import RegistrForm from '../../components/AuthForms/RegistrForm';
import { AllRoutes } from '../../routes';
import "./Auth.scss"

const Auth = () => {
    const location = useLocation()

    const isLogin = location.pathname === AllRoutes.LOGIN


    return (
        <div className="auth">
            <div className="auth__block">
                <h1 className="auth__title">{isLogin ? "Вход в аккаунт" : "Регистрация"}</h1>
                {isLogin ? <LoginForm /> : <RegistrForm />}
            </div>
        </div>
    );
};

export default Auth;