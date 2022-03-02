import React from 'react';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { API_URL } from '../../../API/instance';
import { useAppSelector } from '../../../hooks/redux';
import { decrProduct, incrProduct, removeCartProduct } from '../../../store/actions/cart';
import { ICartProduct } from '../../../types/DBmodels';

interface ICartItemProps {
    product: ICartProduct
}

const CartItem: React.FC<ICartItemProps> = ({ product }) => {
    const dispatch = useDispatch()
    const { isRemoving } = useAppSelector(state => state.cart)

    const handleRemoveProduct = () => {
        if (window.confirm("Удалить товар из корзины")) {
            dispatch(removeCartProduct(product.productId))
        }
    }

    const handleIncrProduct = () => {
        dispatch(incrProduct(product.id))
    }

    const handleDecrProduct = () => {
        dispatch(decrProduct(product.id))
    }

    return (
        <li className="cart__item">
            <img src={API_URL + product.product.img} alt="product" className="cart__item__img" />
            <div className="cart__item__data">
                <h1 className="cart__item__name">{product.product.name}</h1>
                <div className="cart__item__price">{product.product.price} ₽</div>
            </div>
            <div className="cart__item__quantity">
                <button onClick={handleIncrProduct}>
                    <AiFillPlusCircle size={20} color="lime" className="cart__item__icon" />
                </button>
                <div className="cart__item__count">{product.quan}</div>
                <button onClick={handleDecrProduct} disabled={product.quan === 1}>
                    <AiFillMinusCircle size={20} color="red" className="cart__item__icon" />
                </button>
            </div>
            <button className="cart__item__remove" onClick={handleRemoveProduct}
                disabled={isRemoving}>
                Удалить
            </button>
        </li>
    );
};

export default CartItem;