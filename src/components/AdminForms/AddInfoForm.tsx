import { useFormik } from 'formik';
import React, { Dispatch, SetStateAction } from 'react';
import FormControl from '../UI/FormControl/FormControl';
import * as Yup from "yup"
import { IProductInfo } from '../../types/DBmodels';

interface IAddInfoFormProps {
    setInfo: Dispatch<SetStateAction<IProductInfo[]>>
    info: IProductInfo[]
}

const AddInfoForm: React.FC<IAddInfoFormProps> = ({ setInfo, info }) => {

    const formik = useFormik({
        initialValues: {
            title: "",
            description: ""
        },

        onSubmit: async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            setInfo([...info, { description: values.description, title: values.title }])
            resetForm()
        },

        validationSchema: Yup.object().shape({
            title: Yup.string().required()
                .min(2, "Длина от 2 до 20 сивмолов").max(35, "Длина от 2 до 35 сивмолов"),
            description: Yup.string().required()
                .min(1, "Длина от 1 до 20 сивмолов").max(35, "Длина от 2 до 25 сивмолов"),
        })
    })
    


    return (
        <>
            <div className="admin__info-form">
                <div className="admin__form__charact">
                    <FormControl htmlFor="title" label="Характеристика" onChange={formik.handleChange}
                        placeholder='Название...' type="text" value={formik.values.title}
                        error={!!formik.errors.title} />
                </div>

                <div className="admin__form__charact">
                    <FormControl htmlFor="description" label="Значение" onChange={formik.handleChange}
                        placeholder='Значение...' type="text" value={formik.values.description}
                        error={!!formik.errors.description} />
                </div>

                <button className="btn" type="button" onClick={formik.submitForm}>Добавить</button>
            </div>
        </>
    );
};

export default AddInfoForm;