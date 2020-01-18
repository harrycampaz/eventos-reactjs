import React from "react";
import Header from "./components/ui/Header";
import CategoriesProvider from "./context/CategoriesContext";

import Search from "./components/Search";
import EventProvider from "./context/EventContext";
import ListEvents from "./components/event/ListEvents";

function App() {
  return (
    <EventProvider>
      <CategoriesProvider>
        <Header />
        <div className="uk-container">
          <Search />

          <ListEvents />
        </div>
      </CategoriesProvider>
    </EventProvider>
  );
}

export default App;
