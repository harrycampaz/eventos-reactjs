import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {

    state = {
        name: '',
        category: ''
    }
    render() {
        return (
           <form>
               <fieldset className="uk-fieldset uk-margin">
                   <legend className="uk-legend uk-text-center">

                       Busca evento por nombre o categoria

                   </legend>
               </fieldset>
           </form>
        );
    }
}

Search.propTypes = {

};

export default Search;