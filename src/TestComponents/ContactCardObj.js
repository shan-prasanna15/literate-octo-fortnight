import React from 'react';
import './../App.css'

function ContactCardObj(props){
    console.log(props)
    return (
        <div className = 'App'>
            <img className='App-img' src={props.contact.imgUrl}/>
            <h3>{props.contact.name}</h3>
            <p>{props.contact.name}</p>
            <p>{props.contact.email}</p>
        </div>
    )
}

export default ContactCardObj;