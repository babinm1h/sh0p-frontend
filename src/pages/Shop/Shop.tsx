import React from 'react';
import { useDispatch } from 'react-redux';
import Brandsbar from '../../components/Shop/Brandsbar/Brandsbar';
import ProductsList from '../../components/Shop/ProductsList/ProductsList';
import Search from '../../components/Shop/Search/Search';
import Typesbar from '../../components/Shop/Typesbar/Typesbar';
import { fetchBrands, fetchProducts, fetchTypes } from '../../store/actions/shop';
import "./Shop.scss"

const Shop = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchBrands())
        dispatch(fetchTypes())
    }, [])

    return (
        <>
            <div className="shop">
                <div className="shop__column1">
                    <Typesbar />
                </div>

                <div className="shop__column2">
                    <Brandsbar />
                    <Search />
                    <ProductsList />
                </div>
            </div>
        </>
    );
};

export default Shop;