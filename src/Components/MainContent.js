import React from 'react';
import TodoItem from './TodoItem';
import './../Bootstrap/css/bootstrap.css'

function MainContent(){
    return(
        <div>
            <body className='card-body'>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </body>
        </div>
    )
}

export default MainContent;