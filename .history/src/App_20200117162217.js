import React from 'react';
import Header from './components/ui/Header';
import CategoriesProvider from './context/CategoriesContext'
import Search from './components/Search';
import ListaEventos from './components/ListaEventos';


function App() {
  return (
    <CategoriesProvider>
      <Header/>
      <div className = "uk-container">
      <Search/>

      <ListaEventos/>
      </div>
      
    </CategoriesProvider>
  );
}

export default App;