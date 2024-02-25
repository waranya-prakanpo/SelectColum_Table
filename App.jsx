import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from './service/NodeService';

export default function BasicDemo() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeNodes().then((datacolum) => setNodes(datacolum));
    }, []);

    return ( <
        div className = "card flex justify-content" >
        <
        Tree value = { nodes }
        className = "w-full md:w-25rem" / >

        <
        /div>
    )
}