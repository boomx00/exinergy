import React from 'react';
import { MdInventory } from "react-icons/md";
import DashboardLayout from '../../component/layout';
import Layout from '../../component/layout';
import MasterNavbar from './component/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Inventory(props){
    var target = props.target
    return(
        <MasterNavbar target={props.target}/>
        
    )
}
export default Inventory;