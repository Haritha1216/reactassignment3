import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table';
import faker from 'faker';

const App =()=>{
    return(
        <Table/>
    )
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)