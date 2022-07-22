import { useState } from "react";
import MasterNavbar from "../../component/navbar";
import Form from "react-bootstrap/Form";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { createInventory } from "../../../../redux/slices/inventorySlices";
import { useNavigate } from "react-router-dom";
const InventoryCreate = ()=>{
  const dispatch = new useDispatch();
  const navigate = new useNavigate();
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [cost, setCost] = useState("")

  const create=async (event)=>{
    event.preventDefault()
    const data = {
      id: id,
      name:name,
      category: category,
      description: description,
      price: price,
      cost: cost
    }
    const res = await dispatch(createInventory(data))

    if(res == "INVENTORY_ADDED"){
      navigate("/master/inventory")
    }
  }
  return (
    <div>
      <MasterNavbar></MasterNavbar>
      <div className="container mt-5">
        <Form onSubmit={create}>
          <div className="row">
            <div className="col-5">
              <Form.Label>
                <strong>Product ID</strong>
              </Form.Label>
              <Form.Control type="text" placeholder="Product ID" value={id} onChange={(e)=>{setId(e.target.value)}}/>
            </div>
            <div className="col-1"></div>
            <div className="col-5">
              <Form.Label>
                <strong>Product Name</strong>
              </Form.Label>
              <Form.Control type="text" placeholder="Product Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>
          </div>
            <br></br>
          <div className="row">
          <Tabs
      defaultActiveKey="GI"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="GI" title="General Information">
        <div className="row">   
            <div className="col-5">
            <Form.Label>
                Product Category
              </Form.Label>
              <Form.Control type="text" placeholder="Product Category"  value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
                <br></br>
              <Form.Label>
                Product Description
              </Form.Label>
              <Form.Control as="textarea" rows={3}  value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            </div>
            <div className="col-1">

            </div>
            <div className="col-5">
            <Form.Label>
                Product Price
              </Form.Label>
              <Form.Control type="text" placeholder="Product Price"  value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
              <br></br>
              <Form.Label>
                Product Cost
              </Form.Label>
              <Form.Control type="text" placeholder="Product Cost"  value={cost} onChange={(e)=>{setCost(e.target.value)}}/>
            </div>
        </div>
      </Tab>
  
    </Tabs>
          </div>
          <br></br>
          <div className="row ml-1 mr-1">
          <Button variant="primary" type="submit">
        Submit
      </Button>

          </div>

        </Form>
      </div>
    </div>
  );
}

export default InventoryCreate;
