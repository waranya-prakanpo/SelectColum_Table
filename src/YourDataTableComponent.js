import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const YourDataTableComponent = ({ data }) => {
    return ( <
        div className = "datatable-demo" >
        <
        DataTable value = { data } >
        <
        Column field = "field1"
        header = "Column 1" / >
        <
        Column field = "field2"
        header = "Column 2" / >
        <
        Column field = "field3"
        header = "Column 3" / > { /* Add more columns as needed */ } <
        /DataTable> <
        /div>
    );
}

export default YourDataTableComponent;