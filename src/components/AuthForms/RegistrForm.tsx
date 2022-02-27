import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from "yup"
import { useAppSelector } from '../../hooks/redux';
import "../../pages/Auth/Auth.scss"
import { AllRoutes } from '../../routes';
import { registration } from '../../store/actions/user';
import FormControl from '../UI/FormControl/FormControl';


const RegistrForm = () => {
    const dispatch = useDispatch()
    const { isAuth, error } = useAppSelector(state => state.user)
    const navigate = useNavigate()

    React.useEffect(() => {
        if (isAuth) navigate(AllRoutes.SHOP)
    }, [isAuth])


    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },

        onSubmit: (values, { resetForm, setSubmitting }) => {
            setSubmitting(true)
            dispatch(registration({ email: values.email, password: values.password }))
            setSubmitting(false)
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

            {error && <div className="auth__server__error">{error}</div>}

            <div className="auth__actions">
                <button className="btn" type="submit" disabled={!!formik.errors.email || !!formik.errors.password || formik.isSubmitting}>
                    Зарегестрироваться
                </button>

                <div>Есть аккаунт? <NavLink to={AllRoutes.LOGIN}>Войти</NavLink></div>
            </div>
        </form>
    );
};

export default RegistrForm;