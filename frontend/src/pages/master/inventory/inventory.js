import React from "react";
import { MdInventory } from "react-icons/md";
import MasterNavbar from "../component/navbar";
import InventoryData from "./components/inventoryData";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./inventory.css"
import { useEffect,useState,useLayoutEffect  } from "react";
import { connect, useDispatch } from 'react-redux'
import {getInventory} from "../../../redux/slices/inventorySlices";

function Inventory(props) {
  const dispatch = new useDispatch()
  const [inventoryData, setInventoryData] = useState(
  
)
// useEffect(() => {
//   const fetchData = async () => {
//     dispatch(getInventory())
//   }
//   fetchData()   
//   // setRowData(props.inventory)
// }, []);  


var target = props.target;

  return (
    <div>
      <div>
        <MasterNavbar target={props.target} />
      </div>
      <div className="container row  mt-2">
        <div className="col-10">
          <Form
            className="d-flex"
            onSubmit={(e) => {
              console.log("hi");
              e.preventDefault();
            }}
          >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Search</Button>
          </Form>
        </div>
        <div className="col-2 align-right">
        <Button variant="success"  href="/master/inventory/create">Add</Button>

        </div>
        <div className="mt-3">
          <InventoryData data={inventoryData}/>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  inventory: state.inventory
})
export default connect(mapStateToProps, null)(Inventory)