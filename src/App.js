// src/App.js

import React, { useState, useEffect } from 'react';
import './AutomaticTable.css';
import AutomaticTable from './AutomaticTable';
import ColumnDropdown from './ColumnDropdown';
import data from './data.json'; // Import JSON file

function App() {
    const [jsonData, setJsonData] = useState([]);
    const [selectedColumns, setSelectedColumns] = useState([]);

    useEffect(() => {
        // Set state with data from JSON file
        setJsonData(data);
    }, []);

    const columns = Object.keys(jsonData[0] || {});

    const handleColumnToggle = (selectedColumns) => {
        setSelectedColumns(selectedColumns);
    };

    return ( <
        div className = "App" >
        <
        ColumnDropdown columns = { columns }
        onToggle = { handleColumnToggle }
        /> <
        AutomaticTable data = { jsonData }
        selectedColumns = { selectedColumns }
        /> < /
        div >
    );
}

export default App;