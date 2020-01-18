import React, { Fragment } from 'react';
import Header from './components/ui/Header';
import CategoriesProvider from './context/CategoriesContext'


function App() {
  return (
    <CategoriesProvider>
      <Header/>
    </FCategoriesProviderragment>
  );
}

export default App;
