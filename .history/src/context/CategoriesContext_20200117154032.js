import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GLOBAL from '../config/constants'
import axios from 'axios';

//Context
const  CategoriesContext = React.createContext();
export const CategoriesConsumer = CategoriesContext.Consumer;
class CategoriesContext extends Component {

    token = GLOBAL.apiKey;

    state = {

    }
    componentDidMount(){
        this.getCategories();
    }

    getCategories = async () => {

        let url = `https://www.eventbriteapi.com/v3/categories/?token${this.token}&locale=es_ES`;


        let categories= await axios.get(url);

        console.log(categories);
        

    }
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