import { React, useState,useRef,useCallback, useEffect,componentDidUpdate } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from "axios";
import { getInventory } from "../../../../redux/slices/inventorySlices";
import { connect, useDispatch } from 'react-redux'

function InventoryData(props){
    const dispatch = new useDispatch()
    const gridRef = useRef();
    const [rowData,setRowData] = useState(props.inventory.inventory);

    useEffect(() => {
        const fetchData = async () => {
         
        }
        dispatch(getInventory())     
        setRowData(props.inventory.inventory)
        // setRowData(props.inventory)
    }, [props.inventory.inventory]);  
    

    
    const [columnDefs] = useState([
        { field: 'id', width: 100},
        { field: 'product_name', headerName: 'Namw' },
        { field: 'product_category', headerName: 'Category' },
        { field: 'product_price', headerName: 'Price' },

        { field: 'product_cost' ,headerName: 'Cost' },
        { field: 'product_desc',headerName: 'Desc' },

    ])
    const onFirstDataRendered = useCallback((params) => {
        gridRef.current.api.sizeColumnsToFit();
      }, []);
      return(
            <div>
        <div className="ag-theme-alpine" style={{height: 650, width: '100%', marginBottom:"3rem"}}>
        <AgGridReact
        ref={gridRef}
            // onFirstDataRendered={onFirstDataRendered}
            rowData={rowData}
            columnDefs={columnDefs}
            pagination={true}

            >
        </AgGridReact>
            </div>
        {/* <button onClick={(e)=>{console.log(props.data)}}>asf</button> */}
    </div>
      )
}

const mapStateToProps = (state) => ({
    inventory: state.inventory
  })
export default connect(mapStateToProps, null)(InventoryData)
// export default InventoryData;