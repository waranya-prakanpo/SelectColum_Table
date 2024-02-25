// src/components/ColumnDropdown.js

import React, { useState } from 'react';
import './ColumnDropdown.css';

const ColumnDropdown = ({ columns, onToggle }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedColumns, setSelectedColumns] = useState(columns.reduce((obj, column) => ({...obj, [column]: true }), {}));

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;
        setSelectedColumns({...selectedColumns, [id]: checked });
    };

    const handleApply = () => {
        onToggle(selectedColumns);
        toggleDropdown();
    };

    const handleCancel = () => {
        setSelectedColumns(columns.reduce((obj, column) => ({...obj, [column]: true }), {}));
        toggleDropdown();
    };

    return ( <
            div className = "custom-dropdown" >
            <
            button onClick = { toggleDropdown }
            className = "dropbtn" > Column Toggle < /button> {
            showDropdown && ( <
                div className = "dropdown-content dropdown-content-checkbox" > {
                    columns.map((column, index) => ( <
                        label key = { index } >
                        <
                        input type = "checkbox"
                        id = { column }
                        checked = { selectedColumns[column] }
                        onChange = { handleCheckboxChange }
                        /> { column } < /
                        label >
                    ))
                } <
                button onClick = { handleApply } > Apply < /button> <
                button onClick = { handleCancel } > Cancel < /button> < /
                div >
            )
        } <
        /div>
);
}

export default ColumnDropdown;