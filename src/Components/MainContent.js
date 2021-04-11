import React from 'react';
import TodoItem from './TodoItem';
import './../Bootstrap/css/bootstrap.css'
import './../../src/styles.css'

function MainContent(){
    return(
        <div>
            <body className='todo-list'>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </body>
        </div>
    )
}

export default MainContent;