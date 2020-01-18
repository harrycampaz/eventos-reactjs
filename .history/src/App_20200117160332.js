import React, { Fragment } from 'react';
import Header from './components/ui/Header';
import CategoriesProvider from './context/CategoriesContext'
import Search from './components/Search';


function App() {
  return (
    <CategoriesProvider>
      <Header/>
      <div className = "uk-container">
      <Search/>
      </div>
      
    </CategoriesProvider>
  );
}

export default App;