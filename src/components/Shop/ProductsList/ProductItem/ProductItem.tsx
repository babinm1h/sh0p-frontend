import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../../../API/instance';
import { useAppSelector } from '../../../../hooks/redux';
import { AllRoutes } from '../../../../routes';
import { addToCart } from '../../../../store/actions/cart';
import { IProduct } from '../../../../types/DBmodels';
import "../ProductsList.scss"


interface IProductItemProps {
    product: IProduct
}

const ProductItem: React.FC<IProductItemProps> = ({ product }) => {
    const dispatch = useDispatch()
    const { isAdding, products } = useAppSelector(state => state.cart)
    const { isAuth } = useAppSelector(state => state.user)

    const handleAddToCart = () => {
        dispatch(addToCart(product.id))
    }

    return (
        <li className="products__list__item product">
            <NavLink to={AllRoutes.PRODUCT + `/${product.id}`}>
                <img src={API_URL + product.img} alt="prod" className="product__img" />
            </NavLink>

            <div className="product__data">
                <NavLink to={AllRoutes.PRODUCT + `/${product.id}`}>
                    <h1 className="product__name">{product.name}</h1>
                </NavLink>
            </div>
            <div className="product__price-block">
                <div className="product__price">{product.price} ₽</div>
                {isAuth
                    ? products.map(p => p.productId).includes(product.id)
                        ? <button className="btn" disabled>
                            В корзине
                        </button>
                        : <button className="btn" onClick={handleAddToCart} disabled={isAdding}>
                            В корзину
                        </button>
                    : <button className="btn" disabled>Зарегестрируйтесь</button>}
            </div>
        </li>
    );
};

export default ProductItem;