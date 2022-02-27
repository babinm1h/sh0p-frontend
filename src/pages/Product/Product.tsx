import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { API_URL } from '../../API/instance';
import Loader from '../../components/Loader/Loader';
import { useAppSelector } from '../../hooks/redux';
import { fetchProductPage } from '../../store/actions/productPage';
import s from "./Product.module.scss"

const Product = () => {
    const dispatch = useDispatch()
    const { product, isLoading } = useAppSelector(state => state.productPage)
    const { id } = useParams()

    React.useEffect(() => {
        if (id) dispatch(fetchProductPage(id))
    }, [])

    if (isLoading) {
        return <div className="loader"><Loader /></div>
    }

    return (
        <>
            <h1 className={s.title}>{product?.name}</h1>

            <div className={s.content}>
                <div className={s.product}>
                    <img src={API_URL + product?.img} alt="img" className={s.productImg} />

                    <div className={s.buy}>
                        <div className={s.price}>{product?.price} ₽</div>
                        <button className={s.btn + " btn"}>Купить</button>
                    </div>
                </div>

                {product?.info.length ? <div className={s.characts}>
                    <h2 className={s.charactsTitle}>Характеристики:</h2>
                    <ul className={s.charactsList}>
                        {product?.info.map(i => <li className={s.charactsItem} key={i.title}>
                            <div className={s.charactsName}>{i.title}</div>
                            <div className={s.charactsDescr}>{i.description}</div>
                        </li>)}
                    </ul>
                </div> : null}


            </div>
        </>
    );
};

export default Product;