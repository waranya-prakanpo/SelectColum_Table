// src/components/AutomaticTable.js

import React from 'react';
import './AutomaticTable.css'; // Import CSS file for table styling

const AutomaticTable = ({ data, selectedColumns }) => {
    if (data.length === 0) {
        return <div > No data available < /div>;
    }

    const keys = Object.keys(data[0]);

    return ( <
        div className = "table-container" >
        <
        h2 > Automatic Table < /h2> <
        table className = "custom-table" >
        <
        thead >
        <
        tr > {
            keys.map((key, index) => (
                selectedColumns[key] && < th key = { index } > { key } < /th>
            ))
        } <
        /tr> < /
        thead > <
        tbody > {
            data.map((item, index) => ( <
                tr key = { index } > {
                    keys.map((key, index) => (
                        selectedColumns[key] && < td key = { index } > { item[key] } < /td>
                    ))
                } <
                /tr>
            ))
        } <
        /tbody> < /
        table > <
        /div>
    );
}

export default AutomaticTable;