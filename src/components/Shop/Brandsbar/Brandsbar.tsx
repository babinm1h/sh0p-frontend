import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../hooks/redux';
import { setActiveBrand } from '../../../store/reducers/shopSlice';
import { IBrand } from '../../../types/DBmodels';
import "./Brandsbar.scss"

const Brandsbar = () => {
    const dispatch = useDispatch()
    const { brands, activeBrand } = useAppSelector(state => state.shop)

    const handleSetActive = (brand: IBrand) => {
        dispatch(setActiveBrand(brand))
    }

    return (
        <div className="brands">
            <ul className="brands__list">
                {brands.map(b => <li key={b.id} onClick={() => handleSetActive(b)}
                    className={activeBrand.id === b.id ? "brands__list__item brands__list__item_active"
                        : "brands__list__item"}>
                    {b.name}
                </li>)}
            </ul>
        </div>
    );
};

export default Brandsbar;