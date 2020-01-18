import React from "react";
import Header from "./components/ui/Header";
import CategoriesProvider from "./context/CategoriesContext";

import Search from "./components/Search";
import EventProvider from "./context/EventContext";

function App() {
  return (
    <EventProvider>
      <CategoriesProvider>
        <Header />
        <div className="uk-container">
          <Search />
        </div>
      </CategoriesProvider>
    </EventProvider>
  );
}

export default App;
