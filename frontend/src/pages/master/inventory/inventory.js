import React from 'react';
import { MdInventory } from "react-icons/md";
import MasterNavbar from '../component/navbar';
import InventoryData from './components/inventoryData';
import 'bootstrap/dist/css/bootstrap.min.css';

function Inventory(props){
    var target = props.target
    return(
        <div>
            <div>
            <MasterNavbar target={props.target}/>

            </div>
            <div>
                
            <InventoryData/>
            </div>
        </div>
    )
}
export default Inventory;