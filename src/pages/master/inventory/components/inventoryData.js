import { React, useState,useRef,useCallback } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
function InventoryData(){
    const gridRef = useRef();

    const [rowData] = useState([
        {make: "Toyotaaaaaaaaaaaaaaaaaaaaa", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxster", price: 72000},
        {make: "Toyotaaaaaaaaaaaaaaaaaaaaa", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxster", price: 72000},
        {make: "Toyotaaaaaaaaaaaaaaaaaaaaa", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxster", price: 72000},
        {make: "Toyotaaaaaaaaaaaaaaaaaaaaa", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxster", price: 72000},
        {make: "Toyotaaaaaaaaaaaaaaaaaaaaa", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxster", price: 72000},
        {make: "Toyotaaaaaaaaaaaaaaaaaaaaa", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxster", price: 72000}
    ]);
    
    const [columnDefs] = useState([
        { field: 'make', width: 50},
        { field: 'model' },
        { field: 'price'}
    ])
    const onFirstDataRendered = useCallback((params) => {
        gridRef.current.api.sizeColumnsToFit();
      }, []);
      return(
            <div className="container">
        <div className="ag-theme-alpine" style={{height: 650, width: '100%'}}>
        <AgGridReact
        ref={gridRef}
            onFirstDataRendered={onFirstDataRendered}
            rowData={rowData}
            columnDefs={columnDefs}
            pagination={true}

            >
        </AgGridReact>
            </div>
       
    </div>
      )
}

export default InventoryData;