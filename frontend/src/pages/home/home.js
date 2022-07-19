import React from 'react';
import ComponentCard from './component/componentCard';
import { MdInventory } from "react-icons/md";

function Home(){
    const style = { color: "black", fontSize: "5em", backgroundColor: "grey", padding: "1rem",borderRadius: "1rem",}

    return(
        <div className='container mt-5'>
<div class="grid-container">
<ComponentCard caption="Master" icon={<MdInventory  style={style}/>} linkto="master/inventory"/>
<ComponentCard caption="this" icon={<MdInventory  style={style}/>} />
<ComponentCard caption="this" icon={<MdInventory  style={style}/>} />
<ComponentCard caption="this" icon={<MdInventory  style={style}/>} />

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
export default Home;