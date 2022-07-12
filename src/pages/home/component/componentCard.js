import React from 'react';
import '../../../public/css/home.css';
import { FaBeer } from 'react-icons/fa';
import { MdInventory } from "react-icons/md";
import { Link } from 'react-router-dom';

function ComponentCard(props){
    const style = { color: "black", fontSize: "5em", backgroundColor: "grey", padding: "1rem",borderRadius: "1rem",}
    var caption = props.caption
    return(
        <Link to={'/'+props.linkto}>
<div class="iconAlign grid-item" onClick={() => console.log("clicked")}>
                <div>
                {props.icon}    
                </div> 
                <div>
                {caption}
                </div> 
            </div>
        </Link>
        
    )
}
export default ComponentCard;