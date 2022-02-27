import React from 'react';
import { useDispatch } from 'react-redux';
import Pagintation from '../../components/Pagination/Pagintation';
import Brandsbar from '../../components/Shop/Brandsbar/Brandsbar';
import ProductsList from '../../components/Shop/ProductsList/ProductsList';
import Search from '../../components/Shop/Search/Search';
import Typesbar from '../../components/Shop/Typesbar/Typesbar';
import { useAppSelector } from '../../hooks/redux';
import { fetchBrands, fetchProducts, fetchTypes } from '../../store/actions/shop';
import "./Shop.scss"

const Shop = () => {
    const dispatch = useDispatch()
    const { activeBrand, activeType, page, } = useAppSelector(state => state.shop)

    React.useEffect(() => {
        dispatch(fetchProducts({}))
        dispatch(fetchBrands())
        dispatch(fetchTypes())
    }, [dispatch])


    React.useEffect(() => {
        dispatch(fetchProducts({ brandId: activeBrand.id, typeId: activeType.id, page }))
    }, [page, activeBrand, activeType, dispatch])

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
                    <Pagintation />
                </div>
            </div>
        </>
    );
};

export default Shop;