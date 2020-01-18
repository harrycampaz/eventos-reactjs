import React from 'react';
import { EventConsumer } from '../../context/EventContext';


const ListEvents = () => {
    return (
        <div className="uk-child-width-1-3@m" uk-grid="true">

            <h1>Resultado</h1>

            <EventConsumer>
                {(value)=> {
                    return value.map(evento => {
                        <Event/>
                    })
                }}
            </EventConsumer>
            
        </div>
    );
};

export default ListEvents;