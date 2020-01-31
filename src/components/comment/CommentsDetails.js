import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

function CommentsDetails(props) {
    if (!props.isLoaded) {
        return <div>Loaded .....</div>;
    }

    return (
        <div>
            <div className="ag-theme-balham"
                style={{
                    height: '300px',
                    width: '600px'
                }}>
                <AgGridReact
                    columnDefs={props.columnDefs}
                    rowData={props.rowData} >
                </AgGridReact>
            </div>
        </div>);
}

export default CommentsDetails;