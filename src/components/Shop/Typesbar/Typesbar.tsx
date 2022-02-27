import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../hooks/redux';
import { setActiveType } from '../../../store/reducers/shopSlice';
import { IType } from '../../../types/DBmodels';
import "./Typesbar.scss"

const Typesbar = () => {
    const dispatch = useDispatch()
    const { types, activeType } = useAppSelector(state => state.shop)

    const handleSetActive = (type: IType) => {
        dispatch(setActiveType(type))
    }

    const onSetAllTypes = () => {
        dispatch(setActiveType({} as IType))
    }

    return (
        <div className="types">
            <ul className="types__list">
                <h2 className="types__list__title">Тип товара</h2>

                <li onClick={onSetAllTypes} className={!activeType.id
                    ? "types__list__item types__list__item_active" : "types__list__item"}>
                    Все типы
                </li>
                {types.map(t => <li key={t.id} onClick={() => handleSetActive(t)} className={activeType.id === t.id ? "types__list__item types__list__item_active" : "types__list__item"}>
                    {t.name}
                </li>)}
            </ul>
        </div>
    );
};

export default Typesbar;