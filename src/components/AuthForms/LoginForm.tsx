import { useFormik } from 'formik';
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Yup from "yup"
import "../../pages/Auth/Auth.scss"
import { AllRoutes } from '../../routes';
import FormControl from '../UI/FormControl/FormControl';


const LoginForm = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },

        onSubmit: (values, { resetForm, setSubmitting }) => {

        },

        validationSchema: Yup.object().shape({
            email: Yup.string().required("Обязательное поле").email("Некорректный email")
                .min(5, "Длина email от 5 до 35 символов").max(35, "Длина email от 5 до 35 символов"),
            password: Yup.string().required("Обязательное поле")
                .min(5, "Длина пароля от 5 до 35 символов").max(35, "Длина пароля от 5 до 35 символов")
        })
    })

    return (
        <form action="" className="auth__form" onSubmit={formik.handleSubmit}>
            <div className="auth__form__control">
                <FormControl htmlFor="email" label="Ваш email" onChange={formik.handleChange}
                    placeholder="Email..." type="email" value={formik.values.email}
                    error={!!formik.errors.email} />
                {formik.errors.email && <div className="auth__form__error">{formik.errors.email}</div>}
            </div>


            <div className="auth__form__control">
                <FormControl htmlFor="password" label="Ваш password" onChange={formik.handleChange}
                    placeholder="Пароль..." type="password" value={formik.values.password}
                    error={!!formik.errors.password} />
                {formik.errors.password && <div className="auth__form__error">{formik.errors.password}</div>}
            </div>

            <div className="auth__actions">
                <button className="btn" type="submit" disabled={!!formik.errors.email || !formik.errors.password || formik.isSubmitting}>
                    Войти
                </button>

                <div>
                    Нет аккаунта? <NavLink to={AllRoutes.REGISTR}>Регистрация</NavLink>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;