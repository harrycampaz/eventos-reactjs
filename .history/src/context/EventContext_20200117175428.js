import React, { Component } from 'react';
import {GLOBAL} from '../config/constants'
import axios from 'axios';
const EventContext =  React.createContext()
export const EventConsumer = EventContext.Consumer;

class EventProvider extends Component {
    state ={
        eventos:[]
    };
    token = GLOBAL.apiKey;
    order = 'date';

    getEvents = async (search) => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;


        const data =  await axios.get(url);
        let eventos = data.data.categories

        this.setState({
            eventos
        })
       
       
    
    }
    render() {
        return (
            <EventContext.Provider
            value ={{
                eventos: this.state.eventos,
                getEvents: this.getEvents
            }}>
                {this.props.children}
            </EventContext.Provider>
        );
    }
}

export default EventProvider;