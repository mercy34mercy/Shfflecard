import React from 'react';
import './Start.css'

type props = {
    people: number,
    handlegroupchangeup: any,
    handlegroupchangedown: any,
    
}

export const Start = (props:props) => {


    return (
        <div className='start'>
            <div>
                グループ数を選択
            </div>
            <div>
                <p>{ props.people }</p>
            </div>
            <div className="groupbutton">
                <button onClick={props.handlegroupchangeup}>+</button>
                <button onClick={props.handlegroupchangedown}>-</button>
            </div>
        </div>
    )
} 