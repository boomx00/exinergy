import Modal from 'react-bootstrap/Modal';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { React, useState,useRef,useCallback, useEffect,componentDidUpdate } from "react";
import { getInventory } from '../../../redux/slices/inventorySlices';
import Button from 'react-bootstrap/Button';
import { connect, useDispatch } from 'react-redux'

function InventoryModal (props){
    const dispatch = new useDispatch()


    const [show, setShow] = useState(props.modalShow);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [productArray, setProductArray] = useState([])

    const handleClose = () => props.modalSetShow(false);
    useEffect(() => {
        dispatch(getInventory())     
        setRowData(props.inventory.inventory)
    }, [props.inventory.inventory]); 
    useEffect(() => {
    }, [selectedProducts]); 
    const onFirstDataRendered = useCallback((params) => {
        gridRef.current.api.sizeColumnsToFit();
      }, []);
    const gridRef = useRef();
    const [rowData,setRowData] = useState([]);
    const [columnDefs] = useState([
      { field: 'id', width: 100, headerName:"ID"},
      { field: 'product_name', headerName: 'Name' },
      { field: 'product_category', headerName: 'Category' },
      { field: 'product_price', headerName: 'Price' },

      { field: 'action',
      cellRenderer: (params) => (
          <strong>
            <Button
              variant="success"
              size="small"
              onClick={()=>onSelectProduct(params)}
            >
              Open
            </Button>
          </strong>
        ),
      cellRendererParams: {
        clicked: function(field) {
          alert(`${field} was clicked`);
        },
      }, },

  ])

  const onSelectProduct = (params)=>{
    const data = {
        id: params.data.id,
        name:params.data.product_name,
        price: params.data.product_price,
    }
    const arrayData = [
        params.data.id,
        params.data.product_name,
        params.data.product_price,
    ]
    const copyArray = selectedProducts
    const copyproductArray = productArray

    copyArray.push(data)
    copyproductArray.push(arrayData)
    setSelectedProducts(copyArray)
    setProductArray(copyproductArray)
    props.setProducts(selectedProducts)
    props.setProductsArray(productArray)
    // setSelectedProducts(copyArray)
  }
    return(
        <Modal show={props.modalShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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

        </Modal.Body>
       
      </Modal>
    )
}


const mapStateToProps = (state) => ({
    inventory: state.inventory
  })
export default connect(mapStateToProps, null)(InventoryModal)