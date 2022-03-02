import React from 'react';
import { useDispatch } from 'react-redux';
import AppRouter from './components/AppRoutes/AppRouter';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import { useAppSelector } from './hooks/redux';
import { fetchCartProducts } from './store/actions/cart';
import { checkAuth } from './store/actions/user';

const App = () => {
  const dispatch = useDispatch()
  const { isLoading, } = useAppSelector(state => state.user)

  React.useEffect(() => {
    dispatch(checkAuth())
    dispatch(fetchCartProducts())
  }, [])


  if (isLoading) {
    return <div className="loader"><Loader /></div>
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="content">
          <AppRouter />
        </div>
      </div>
    </>
  );
};

export default App;