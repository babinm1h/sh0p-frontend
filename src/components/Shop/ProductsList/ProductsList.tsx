import React from 'react';
import { useAppSelector } from '../../../hooks/redux';
import Loader from '../../Loader/Loader';
import ProductItem from './ProductItem/ProductItem';
import "./ProductsList.scss"

const ProductsList = () => {
    const { products, productsLoading } = useAppSelector(state => state.shop)

    if (productsLoading) {
        return <Loader />
    }

    if (products.length === 0) {
        return <div className="empty__title">Товары не найдены</div>
    }

    return (
        <div className="products">
            <ul className="products__list">
                {products.map(p => <ProductItem product={p} key={p.id} />)}
            </ul>
        </div>
    );
};

export default ProductsList;