import React, { Component } from 'react';
import {GLOBAL} from '../config/constants'
import axios from 'axios';

//Context
const  CategoriesContext = React.createContext();
export const CategoriesConsumer = CategoriesContext.Consumer;
class CategoriesProviders extends Component {

    token = GLOBAL.apiKey;

    state = {

    }
    componentDidMount(){
        this.getCategories();
    }

    getCategories = async () => {

        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;


        let categories= await axios.get(url);

        console.log(categories);
        

    }
    render() {
        return (
          <CategoriesContext.Provider 
          value = {{
             categories: this.state.categories
          }}
          >

              {this.props.children}

          </CategoriesContext.Provider>
        );
    }
}


export default CategoriesProviders;