import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GLOBAL from '../config/constants'

//Context
const  CategoriesContext = React.createContext();
export const CategoriesConsumer = CategoriesContext.Consumer;
class CategoriesContext extends Component {

    token = GLOBAL.apiKey;

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

CategoriesContext.propTypes = {

};

export default CategoriesContext;