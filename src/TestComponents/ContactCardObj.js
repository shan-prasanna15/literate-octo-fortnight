import React from 'react';
import './../App.css'

function ContactCardObj(props){
    console.log(props)
    return (
        <div className = 'App'>
            <img className='App-img' src={props.imgUrl}/>
            <h3>{props.name}</h3>
            <p>{props.name}</p>
            <p>{props.email}</p>
        </div>
    )
}

export default ContactCardObj;