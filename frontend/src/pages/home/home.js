import React from 'react';
import ComponentCard from './component/componentCard';
import { MdInventory } from "react-icons/md";
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { checkToken } from '../../redux/slices/authSlices';
import { useNavigate } from 'react-router-dom';
import {getInventory} from "../../redux/slices/inventorySlices";

function Home(props){
    const dispatch = new useDispatch();
    useEffect(() => {
    //   console.log(props)
    //   dispatch(getInventory())
  }, []);  
    let navigate = new useNavigate();
    const style = { color: "black", fontSize: "5em", backgroundColor: "grey", padding: "1rem",borderRadius: "1rem",}
    useEffect(() => {
        // verifyToken();
    }, []);
 
    const verifyToken = async()=>{
        const res = await dispatch(checkToken())
        console.log(res + " sdf")
        if(res === 401){
            navigate("/")
        }
    }
    
    return(
        <div className='container mt-5'>
<div class="grid-container">
<ComponentCard caption="Master" icon={<MdInventory  style={style}/>} linkto="master/inventory"/>
<ComponentCard caption="Offering" icon={<MdInventory  style={style}/>} linkto="offering"/>


</div>

        </div>
        
        // <div class="containerz mt-5">
        //     <ComponentCard caption="hello" onClick={() => console.log("clicked")}/>
        //     <ComponentCard caption="this"/>
        //     <ComponentCard caption="is"/>
        //     <ComponentCard caption="an"/>
        //     <ComponentCard caption="attempt"/>
        //     <ComponentCard caption="success"/>
        //     <ComponentCard caption="hello"/>
        //     <ComponentCard caption="this"/>
        //     <ComponentCard caption="is"/>
        //     <ComponentCard caption="an"/>
        //     <ComponentCard caption="attempt"/>
        //     <ComponentCard caption="success"/>
        //     <ComponentCard caption="hello"/>
        //     <ComponentCard caption="this"/>
        //     <ComponentCard caption="is"/>
        //     <ComponentCard caption="an"/>
           
        // </div>
    )
}
const mapStateToProps = (state) => ({
    inventory: state.inventory
  })
  export default connect(mapStateToProps, null)(Home)