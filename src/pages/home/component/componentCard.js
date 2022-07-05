import React from 'react';
import '../../../public/css/home.css';
import { FaBeer } from 'react-icons/fa';

function ComponentCard(props){
    const style = { color: "black", fontSize: "5em", backgroundColor: "grey", padding: "1rem",borderRadius: "1rem",}
    var caption = props.caption
    return(
        <div class="iconAlign" onClick={() => console.log("clicked")}>
                <div>
                <FaBeer  style={style}/>       
                </div> 
                <div>
                {caption}
                </div> 
            </div>
    )
}
export default ComponentCard;