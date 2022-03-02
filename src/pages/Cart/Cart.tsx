import React from 'react';
import { useDispatch } from 'react-redux';
import CartItem from '../../components/Cart/CartItem/CartItem';
import Loader from '../../components/Loader/Loader';
import { useAppSelector } from '../../hooks/redux';
import { fetchCartProducts } from '../../store/actions/cart';
import "./Cart.scss"


const Cart = () => {
  const dispatch = useDispatch()
  const { products, isLoading, totalCount, totalPrice } = useAppSelector(state => state.cart)

  React.useEffect(() => {
    dispatch(fetchCartProducts())
  }, [dispatch])


  if (isLoading) {
    return <div className="loader"><Loader /></div>
  }

  if (products.length === 0) {
    return <div className="empty__title">Корзина пуста</div>
  }


  return (
    <div className="cart">
      <h1 className="cart__title">Корзина</h1>

      <ul className="cart__items">
        {products.map(p => <CartItem product={p} key={p.id} />)}
      </ul>

      <div className="cart__total">
        <div className="cart__total__price">Цена: <span>{totalPrice} ₽</span></div>
        <div className="cart__total__count">Количество: <span>{totalCount} шт.</span></div>
        <button className="btn">Купить</button>
      </div>
    </div>
  );
};

export default Cart;