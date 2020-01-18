import React from 'react';
import { EventConsumer } from '../../context/EventContext';
import Evento from './Evento';


const ListEvents = () => {
    return (
        <div className="uk-child-width-1-3@m" uk-grid="true">

            <h1>Resultado</h1>

            <EventConsumer>
               
                
                {(value)=> {
                   return  value.events.map(even => {
                        console.log(even);

                        <p>p</p>

                    });
                   
                }}
            </EventConsumer>
            
        </div>
    );
};

export default ListEvents;