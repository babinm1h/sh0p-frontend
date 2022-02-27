import React from 'react';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../../../API/instance';
import { AllRoutes } from '../../../../routes';
import { IProduct } from '../../../../types/DBmodels';
import "../ProductsList.scss"


interface IProductItemProps {
    product: IProduct
}

const ProductItem: React.FC<IProductItemProps> = ({ product }) => {
    return (
        <li className="products__list__item product">
            <NavLink to={AllRoutes.PRODUCT + `/${product.id}`}>
                <img src={API_URL + product.img} alt="prod" className="product__img" />
            </NavLink>

            <div className="product__data">
                <NavLink to={AllRoutes.PRODUCT + `/1`}>
                    <h1 className="product__name">{product.name}</h1>
                </NavLink>
            </div>
            <div className="product__price-block">
                <div className="product__price">{product.price} ₽</div>
                <button className="btn">В корзину</button>
            </div>

        </li>
    );
};

export default ProductItem;