import React from 'react';
import ComponentCard from './component/componentCard';
function Home(){

    return(
        <div class="container mt-5 color rm-margin">
            <div class="iconWrapper">
            <ComponentCard caption="hello" onClick={() => console.log("clicked")}/>
            <ComponentCard caption="this"/>
            <ComponentCard caption="is"/>
            <ComponentCard caption="an"/>
            <ComponentCard caption="attempt"/>
            <ComponentCard caption="success"/>
            <ComponentCard caption="hello"/>
            <ComponentCard caption="this"/>
            <ComponentCard caption="is"/>
            <ComponentCard caption="an"/>
            <ComponentCard caption="attempt"/>
            
           
            </div>
        </div>
    )
}
export default Home;