import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { React, useState, useRef } from "react";
import { connect, useDispatch } from 'react-redux'
import Table from 'react-bootstrap/Table';
import InventoryModal from './components/inventoryModal';
import Document from './document';
function Offering  (props)  {
    const childComp = useRef()
    const dispatch = new useDispatch()
    const [show, setShow] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState([])
    const [productArray, setProductArray] = useState([])
    const [preview, setPreview] = useState(false)
    const [receiver, setReceiver] = useState("")
    const updateProducts = (data)=>{
        setSelectedProducts(data)
    }
    const updateProductsArray=(data)=>{
        setProductArray(data)
    }

    const changePrice=(id,price)=>{
        let copyArray = selectedProducts
        let copyProductArray = productArray
        const arrayIndex = copyProductArray.findIndex(product=> product[0] == id)
        copyProductArray[arrayIndex][2] = price
        const index = copyArray.findIndex(product => product.id == id)
        copyArray[index].price = price
        setSelectedProducts(copyArray)
        setProductArray(copyProductArray)
    }
    const handleOnClick = () => {
        if (childComp.current) {
            childComp.current.foo(productArray)
        }
   
        // console.log(productArray)
      }
  return(
<div className='container'>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>To: </Form.Label>
        <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>setReceiver(e.target.value)} />
      </Form.Group>
      <Form.Label>Product list: </Form.Label>
      <br></br>

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th> Price</th>
          <th> Action</th>

        </tr>
      </thead>
      <tbody>
      {selectedProducts.map(function(item, i){
  return <tr>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>
        <input type="text" 
        value={item.price}
        onChange={(e)=>changePrice(item.id, e.target.value)}
        ></input>
       </td>
    <td><Button
                variant="success"
                size="small"
              >
                Remove
              </Button></td>

  </tr>
})}
        
      </tbody>
    </Table>

    <InventoryModal modalShow={show} modalSetShow={setShow} setProducts={updateProducts} setProductsArray={updateProductsArray}></InventoryModal>
    <Document ref={childComp} receiver={receiver}></Document>

           
      <Button variant="primary" size="lg" onClick={()=>setShow(true)} style={{width: "100%"}}>
        Add Products
      </Button>
      <Button variant="primary" size="lg" style={{width: "100%"}} onClick={handleOnClick}>
        Generate PDF
      </Button>
    {/* <button type='button' onClick={savePDF}/> */}
    
    </div>
  )
};

const mapStateToProps = (state) => ({
    inventory: state.inventory
  })
export default connect(mapStateToProps, null)(Offering)