import React from 'react';
import AppRouter from './components/AppRoutes/AppRouter';
import Header from './components/Header/Header';

const App = () => {
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