import { useFormik } from 'formik';
import React from 'react';
import FormControl from '../UI/FormControl/FormControl';
import * as Yup from "yup"
import { useAppSelector } from '../../hooks/redux';
import ImgUpload from '../ImgUpload/ImgUpload';
import AddInfoForm from './AddInfoForm';
import { AiFillCloseCircle } from "react-icons/ai"
import { IProductInfo } from '../../types/DBmodels';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../store/actions/shop';

const AddProductForm = () => {
    const [img, setImg] = React.useState<null | File>(null)
    const [info, setInfo] = React.useState<IProductInfo[]>([])
    const { brands, types } = useAppSelector(state => state.shop)
    const dispatch = useDispatch()



    const formik = useFormik({
        initialValues: {
            name: "",
            price: "",
            type: 1,
            brand: 1,
        },

        onSubmit: async (values, { resetForm, setSubmitting }) => {
            setSubmitting(true)

            const fd = new FormData()
            fd.append("name", values.name)
            fd.append("price", values.price)
            fd.append("img", img!)
            fd.append("brandId", `${values.brand}`)
            fd.append("typeId", `${values.type}`)
            fd.append("info", JSON.stringify(info))

            dispatch(createProduct(fd))
            setSubmitting(false)
            setInfo([])
            setImg(null)
            resetForm()
        },

        validationSchema: Yup.object().shape({
            name: Yup.string().required('Обязательное поле').min(1, "Не менее 1 символа").max(30, "Не более 30 символов"),
            price: Yup.string().required('Обязательное поле').min(1, "Не менее 1 символа").max(30, "Не более 30 символов"),
            type: Yup.string().required('Обязательное поле'),
            brand: Yup.string().required('Обязательное поле')
        })
    })

    const handleRemoveInfo = (title: string) => {
        setInfo(info.filter(i => i.title !== title))
    }

    return (
        <div className="admin__create__block">
            <h1 className="admin__title">Добавление товара</h1>
            <form action="" className="admin__form" onSubmit={formik.handleSubmit}>
                <div className="admin__form__control">
                    <FormControl htmlFor="name" label="Название товара" onChange={formik.handleChange}
                        placeholder='Название...' type="text" value={formik.values.name}
                        error={!!formik.errors.name} />
                </div>

                <div className="admin__form__control">
                    <FormControl htmlFor="price" label="Цена товара" onChange={formik.handleChange}
                        placeholder='Цена...' type="number" value={formik.values.price}
                        error={!!formik.errors.price} />
                </div>

                <AddInfoForm setInfo={setInfo} info={info} />

                <ul className="admin__form__characts">
                    {info.length > 0 && info.map(i => <li key={i.title}
                        className="admin__form__charact admin__charact">
                        <div className="admin__charact__title">{i.title}</div>
                        <div className="admin__charact__desc">{i.description}</div>
                        <AiFillCloseCircle size={18} color="red" className="admin__charact__remove"
                            onClick={() => handleRemoveInfo(i.title)} />
                    </li>)}
                </ul>

                <select className="admin__form__select" value={formik.values.brand}
                    onChange={formik.handleChange} name="brand">
                    <option disabled>Выбор бренда</option>
                    {brands.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                </select>

                <select className="admin__form__select" value={formik.values.type}
                    onChange={formik.handleChange} name="type">
                    <option disabled>Выбор типа</option>
                    {types.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                </select>

                <ImgUpload img={img} setImg={setImg} />

                <button className="btn" type="submit"
                    disabled={!!formik.errors.name || !!formik.errors.brand || !!formik.errors.type || !!formik.errors.price}>
                    Добавить товар
                </button>
            </form>
        </div>
    );
};

export default AddProductForm;