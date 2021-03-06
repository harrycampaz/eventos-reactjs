import React, { Component } from "react";
import PropTypes from "prop-types";

import { CategoriesConsumer } from "../context/CategoriesContext";

import { EventConsumer } from "../context/EventContext";

class Search extends Component {
  state = {
    name: "",
    category: ""
  };

  //Si el User add a new event

  getEvento = e => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  render() {
    return (
        <EventConsumer>
      <form>
        <fieldset className="uk-fieldset uk-margin">
          <legend className="uk-legend uk-text-center">
            Busca evento por nombre o categoria
          </legend>
        </fieldset>

        <div className="uk-column-1-3@m uk-margin">
          <div className="uk-margin" uk-margin="true">
            <input
              name="name"
              className="uk-input"
              type="text"
              placeholder="Nombre de evento"
              onChange = {this.getEvento}
            />
          </div>
          <div className="uk-margin" uk-margin="true">
            <select className="uk-select" name="category"
            onChange = {this.getEvento}>
                <option value="">Seleccione Categoria</option>
              <CategoriesConsumer>
                {value => {
                  return value.categories.map(category => (
                    <option
                      key={category.id}
                      value={category.id}
                      data-uk-form-select
                    >
                      {category.name_localized}
                    </option>
                  ));
                }}
              </CategoriesConsumer>
            </select>
          </div>

          <div>
            <input
              type="submit"
              className="uk-button uk-button-danger"
              value="Buscar"
            />
          </div>
        </div>
      </form>
      </EventConsumer>
    );
  }
}

Search.propTypes = {};

export default Search;
