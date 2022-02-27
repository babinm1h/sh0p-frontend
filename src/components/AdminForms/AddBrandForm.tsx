import { useFormik } from 'formik';
import React from 'react';
import FormControl from '../UI/FormControl/FormControl';
import * as Yup from "yup"
import { useDispatch } from 'react-redux';
import { createBrand } from '../../store/actions/shop';

const AddBrandForm = () => {
    const dispatch = useDispatch()


    const formik = useFormik({
        initialValues: {
            name: ""
        },

        onSubmit: (values, { resetForm, setSubmitting }) => {
            setSubmitting(true)
            dispatch(createBrand(values.name))
            resetForm()
            setSubmitting(false)
        },

        validationSchema: Yup.object().shape({
            name: Yup.string().required('Обязательное поле').min(1, "Не менее 1 символа").max(30, "Не более 30 символов")
        })
    })


    return (
        <div className="admin__create__block">
            <h1 className="admin__title">Добавление бренда</h1>
            <form action="" className="admin__form" onSubmit={formik.handleSubmit}>
                <div className="admin__form__control">
                    <FormControl htmlFor="name" label="Бренд товара" onChange={formik.handleChange}
                        placeholder='Введите бренд...' type="text" value={formik.values.name}
                        error={!!formik.errors.name} />
                </div>

                <button className="btn" type="submit"
                    disabled={!!formik.errors.name || formik.values.name.length === 0 || formik.isSubmitting}>
                    Добавить бренд
                </button>
            </form>
        </div>
    );
};

export default AddBrandForm;