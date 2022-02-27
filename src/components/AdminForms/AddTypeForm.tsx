import { useFormik } from 'formik';
import React from 'react';
import FormControl from '../UI/FormControl/FormControl';
import * as Yup from "yup"

const AddTypeForm = () => {

    const formik = useFormik({
        initialValues: {
            name: ""
        },

        onSubmit: (values, { resetForm, setSubmitting }) => {

        },

        validationSchema: Yup.object().shape({
            name: Yup.string().required('Обязательное поле').min(1, "Не менее 1 символа").max(30, "Не более 30 символов")
        })
    })


    return (
        <div className="admin__create__block">
            <h1 className="admin__title">Добавление типа</h1>
            <form action="" className="admin__form" onSubmit={formik.handleSubmit}>
                <div className="admin__form__control">
                    <FormControl htmlFor="name" label="Тип товара" onChange={formik.handleChange}
                        placeholder='Введите тип...' type="text" value={formik.values.name}
                        error={!!formik.errors.name} />
                </div>

                <button className="btn" type="submit"
                    disabled={!!formik.errors.name || formik.values.name.length === 0}>
                    Добавить тип
                </button>
            </form>
        </div>
    );
};

export default AddTypeForm;