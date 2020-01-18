import React, { Component } from 'react';
import {GLOBAL} from '../config/constants'
import axios from 'axios';
const EventContext =  React.createContext()
export const EventConsumer = EventContext.Consumer;

class EventProvider extends Component {
    state ={
        events:[]
    };
    token = GLOBAL.apiKey;
    order = 'date';

    getEvents = async (search) => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;


        let events= await axios.get(url);

        console.log(events.data.categories);
       

        console.log(events);
    
    }
    render() {
        return (
            <EventContext.Provider
            value ={{
                events: this.state.events,
                getEvents: this.getEvents
            }}>
                {this.props.children}
            </EventContext.Provider>
        );
    }
}

export default EventProvider;