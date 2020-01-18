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

<div className="uk-column-1-3@m uk-margin" >
    <div className="uk-margin" uk-margin="true">

<input
name ="name"
className = "uk-input"
type ="text"
placeholder="Nombre de evento"
/>
    </div>

</div>

           </form>
        );
    }
}

Search.propTypes = {

};

export default Search;